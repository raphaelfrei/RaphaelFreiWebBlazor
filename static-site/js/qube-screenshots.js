(function () {
    const devices = {
        iphone: {
            name: "iPhone 6.5\"",
            width: 1284,
            height: 2778,
            resLabel: "1284 × 2778 px",
            btnLabel: "1284×2778"
        },
        iphone67: {
            name: "iPhone 6.7\"",
            width: 1290,
            height: 2796,
            resLabel: "1290 × 2796 px",
            btnLabel: "1290×2796"
        },
        ipad: {
            name: "iPad Pro 13\"",
            width: 2048,
            height: 2732,
            resLabel: "2048 × 2732 px",
            btnLabel: "2048×2732"
        },
        mac: {
            name: "macOS 16:10",
            width: 2880,
            height: 1800,
            resLabel: "2880 × 1800 px",
            btnLabel: "2880×1800"
        }
    };

    const presets = {
        1: {
            theme: "cyan",
            bgColor: "#7BDFF2",
            badge: "3D SIMULATOR",
            title: "Twist & Solve in 3D",
            sub: "Smooth gesture controls & realistic cube physics"
        },
        2: {
            theme: "pink",
            bgColor: "#EF476F",
            badge: "SMART SOLVER",
            title: "Step-by-Step Solver",
            sub: "Input your real cube colors and get instant algorithms"
        },
        3: {
            theme: "yellow",
            bgColor: "#F5CB5C",
            badge: "MULTIPLE MODES",
            title: "2x2 Pocket & 3x3 Classic",
            sub: "Master both cubes anytime, anywhere"
        }
    };

    let currentDevice = 'iphone';
    let currentSlide = 1;
    let currentFitMode = 'cover'; // 'cover' or 'contain'
    let drawDynamicIsland = false; // default false: user screenshots already have the real island
    
    // Store loaded Image objects: key = `${device}_${slide}_${slot}`
    const imageStore = {};

    window.setDevice = function (deviceKey) {
        currentDevice = deviceKey;

        // Update pills
        document.querySelectorAll('.pill-group .pill-btn').forEach(btn => {
            if (btn.id.startsWith('btn-dev-')) {
                btn.classList.toggle('active', btn.id === `btn-dev-${deviceKey}`);
            }
        });

        // Toggle Dynamic Island control group visibility
        const ctrlIsland = document.getElementById('ctrl-group-island');
        if (ctrlIsland) {
            ctrlIsland.style.display = deviceKey.startsWith('iphone') ? 'flex' : 'none';
        }

        // Update labels
        const dev = devices[deviceKey];
        const resBadge = document.getElementById('preview-res-badge');
        const txtRes = document.getElementById('txt-res-label');
        if (resBadge) resBadge.innerText = `${dev.name} — ${dev.resLabel}`;
        if (txtRes) txtRes.innerText = dev.btnLabel;

        window.renderLiveCanvas();
    };

    window.setIslandMode = function (enable) {
        drawDynamicIsland = enable;
        const btnOff = document.getElementById('btn-island-off');
        const btnOn = document.getElementById('btn-island-on');
        if (btnOff) btnOff.classList.toggle('active', !enable);
        if (btnOn) btnOn.classList.toggle('active', enable);
        window.renderLiveCanvas();
    };

    window.setSlide = function (slideNum) {
        currentSlide = slideNum;

        // Update slide pills
        [1, 2, 3].forEach(n => {
            const btn = document.getElementById(`btn-slide-${n}`);
            if (btn) btn.classList.toggle('active', n === slideNum);
        });

        const preset = presets[slideNum];

        // Update input fields
        const inBadge = document.getElementById('input-badge');
        const inTitle = document.getElementById('input-title');
        const inSub = document.getElementById('input-sub');
        if (inBadge) inBadge.value = preset.badge;
        if (inTitle) inTitle.value = preset.title;
        if (inSub) inSub.value = preset.sub;

        // Toggle Secondary upload for Slide 3
        const secBox = document.getElementById('upload-secondary-box');
        const lblPrimary = document.getElementById('txt-upload-primary');
        if (secBox) {
            secBox.style.display = slideNum === 3 ? 'block' : 'none';
        }
        if (lblPrimary) {
            lblPrimary.innerText = slideNum === 3 ? "1. Upload 2x2 Screenshot" : "Upload Screenshot";
        }

        window.renderLiveCanvas();
    };

    window.setFitMode = function (fitMode) {
        currentFitMode = fitMode;
        const btnCover = document.getElementById('btn-fit-cover');
        const btnContain = document.getElementById('btn-fit-contain');
        if (btnCover) btnCover.classList.toggle('active', fitMode === 'cover');
        if (btnContain) btnContain.classList.toggle('active', fitMode === 'contain');

        window.renderLiveCanvas();
    };

    window.onTextInputChange = function () {
        window.renderLiveCanvas();
    };

    window.handleImageUpload = function (event, slot) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                const key = `${currentDevice}_${currentSlide}_${slot}`;
                imageStore[key] = img;
                window.renderLiveCanvas();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    // Drag & Drop
    window.addEventListener('dragover', function (e) {
        e.preventDefault();
    }, false);

    window.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                    const img = new Image();
                    img.onload = function () {
                        const slot = currentSlide === 3 && imageStore[`${currentDevice}_${currentSlide}_primary`] ? 'secondary' : 'primary';
                        imageStore[`${currentDevice}_${currentSlide}_${slot}`] = img;
                        window.renderLiveCanvas();
                    };
                    img.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }, false);

    // ==========================================
    // UNIFIED WYSIWYG CANVAS RENDERING ENGINE
    // ==========================================
    window.renderLiveCanvas = function () {
        const canvas = document.getElementById('main-preview-canvas');
        if (!canvas) return;

        const dev = devices[currentDevice];
        const preset = presets[currentSlide];

        // Ensure canvas native dimensions match Apple specifications
        if (canvas.width !== dev.width || canvas.height !== dev.height) {
            canvas.width = dev.width;
            canvas.height = dev.height;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = dev.width;
        const H = dev.height;

        // 1. Background
        ctx.fillStyle = preset.bgColor;
        ctx.fillRect(0, 0, W, H);

        // 2. Dot Grid Pattern
        drawDotGrid(ctx, W, H);

        // 3. Header Texts
        const badgeText = (document.getElementById('input-badge') || {}).value || preset.badge;
        const titleText = (document.getElementById('input-title') || {}).value || preset.title;
        const subText = (document.getElementById('input-sub') || {}).value || preset.sub;

        drawHeader(ctx, dev, badgeText, titleText, subText);

        // 4. Device Mockup & Screenshots
        drawDevice(ctx, dev);
    };

    function drawDotGrid(ctx, w, h) {
        ctx.fillStyle = "rgba(22, 26, 29, 0.1)";
        const step = Math.round(w / 38);
        const radius = Math.max(3, Math.round(w / 550));
        for (let x = step / 2; x < w; x += step) {
            for (let y = step / 2; y < h; y += step) {
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function drawHeader(ctx, dev, badge, title, sub) {
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const isLandscape = dev.width > dev.height;
        const centerY = isLandscape ? dev.height * 0.15 : dev.height * 0.115;

        // Badge
        const badgeFontSize = isLandscape ? Math.round(dev.width * 0.016) : Math.round(dev.width * 0.026);
        ctx.font = `900 ${badgeFontSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        const badgeMetrics = ctx.measureText(badge);
        const badgePadX = dev.width * 0.025;
        const badgeW = badgeMetrics.width + (badgePadX * 2);
        const badgeH = badgeFontSize * 2.1;
        const badgeX = (dev.width - badgeW) / 2;
        const badgeY = centerY - (badgeH * 1.6);

        // Badge Shadow
        ctx.fillStyle = "#161A1D";
        ctx.beginPath();
        ctx.roundRect(badgeX + 6, badgeY + 6, badgeW, badgeH, badgeH / 2);
        ctx.fill();

        // Badge Body
        ctx.fillStyle = "#161A1D";
        ctx.beginPath();
        ctx.roundRect(badgeX, badgeY, badgeW, badgeH, badgeH / 2);
        ctx.fill();

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = Math.round(dev.width * 0.003);
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(badge, dev.width / 2, badgeY + (badgeH / 2));

        // Headline
        const titleSize = isLandscape ? Math.round(dev.width * 0.04) : Math.round(dev.width * 0.076);
        ctx.font = `900 ${titleSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        ctx.fillStyle = "#161A1D";
        ctx.fillText(title, dev.width / 2, centerY + (titleSize * 0.15));

        // Subtitle
        const subSize = isLandscape ? Math.round(dev.width * 0.019) : Math.round(dev.width * 0.033);
        ctx.font = `700 ${subSize}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        ctx.fillStyle = "rgba(22, 26, 29, 0.85)";
        ctx.fillText(sub, dev.width / 2, centerY + (titleSize * 1.05));

        ctx.restore();
    }

    function drawDevice(ctx, dev) {
        ctx.save();
        const W = dev.width;
        const H = dev.height;

        // Get images for current device & slide
        const img1 = imageStore[`${currentDevice}_${currentSlide}_primary`] ||
                     (currentSlide !== 3 ? imageStore[`${currentDevice}_1_primary`] : null);
        const img2 = imageStore[`${currentDevice}_${currentSlide}_secondary`];

        if (currentDevice === 'mac') {
            // macOS Window
            const frameW = W * 0.86;
            const frameH = H * 0.72;
            const frameX = (W - frameW) / 2;
            const frameY = H - (frameH * 0.96);
            const cornerRadius = frameW * 0.02;
            const titleBarH = frameH * 0.065;

            // Hard Shadow
            ctx.fillStyle = "rgba(22, 26, 29, 0.4)";
            ctx.beginPath();
            ctx.roundRect(frameX + 32, frameY + 32, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Window Header
            ctx.fillStyle = "#26292E";
            ctx.beginPath();
            ctx.roundRect(frameX, frameY, frameW, titleBarH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Traffic Lights
            const lightY = frameY + (titleBarH / 2);
            const lightR = titleBarH * 0.22;
            const lightGap = lightR * 2.6;
            const startX = frameX + (titleBarH * 0.6);

            drawCircle(ctx, startX, lightY, lightR, "#FF5F56");
            drawCircle(ctx, startX + lightGap, lightY, lightR, "#FFBD2E");
            drawCircle(ctx, startX + (lightGap * 2), lightY, lightR, "#27C93F");

            // Title
            ctx.fillStyle = "#ADB5BD";
            ctx.font = `700 ${titleBarH * 0.42}px -apple-system, sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("Qube — 3D Studio", frameX + (frameW / 2), lightY);

            // Screen Area
            const screenX = frameX;
            const screenY = frameY + titleBarH;
            const screenW = frameW;
            const screenH = frameH - titleBarH;

            // Draw screen contents (single image or split view for Slide 3)
            drawScreenArea(ctx, screenX, screenY, screenW, screenH, img1, img2, "Drop macOS Screenshot Here");

            // Window Border
            ctx.strokeStyle = "#161A1D";
            ctx.lineWidth = Math.round(W * 0.0035);
            ctx.beginPath();
            ctx.roundRect(frameX, frameY, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.stroke();

        } else if (currentDevice.startsWith('iphone')) {
            // iPhone Frame
            const frameW = W * 0.85;
            const frameH = H * 0.77;
            const frameX = (W - frameW) / 2;
            const frameY = H - (frameH * 0.95);
            const cornerRadius = frameW * 0.16;
            const borderW = frameW * 0.035;

            // Shadow
            ctx.fillStyle = "rgba(22, 26, 29, 0.4)";
            ctx.beginPath();
            ctx.roundRect(frameX + 30, frameY + 30, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Bezel
            ctx.fillStyle = "#161A1D";
            ctx.beginPath();
            ctx.roundRect(frameX, frameY, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Screen
            const screenX = frameX + borderW;
            const screenY = frameY + borderW;
            const screenW = frameW - (borderW * 2);
            const screenH = frameH - borderW;
            const screenRadius = cornerRadius - borderW;

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(screenX, screenY, screenW, screenH, [screenRadius, screenRadius, 0, 0]);
            ctx.clip();

            drawScreenArea(ctx, screenX, screenY, screenW, screenH, img1, img2, "Drop iPhone Screenshot Here");
            ctx.restore();

            // Dynamic Island (only if enabled, otherwise native print island shows naturally)
            if (drawDynamicIsland) {
                const islandW = screenW * 0.33;
                const islandH = islandW * 0.28;
                const islandX = screenX + (screenW - islandW) / 2;
                const islandY = screenY + (screenW * 0.035);
                ctx.fillStyle = "#000000";
                ctx.beginPath();
                ctx.roundRect(islandX, islandY, islandW, islandH, islandH / 2);
                ctx.fill();
            }

        } else if (currentDevice === 'ipad') {
            // iPad Frame
            const frameW = W * 0.88;
            const frameH = H * 0.77;
            const frameX = (W - frameW) / 2;
            const frameY = H - (frameH * 0.95);
            const cornerRadius = frameW * 0.08;
            const borderW = frameW * 0.03;

            // Shadow
            ctx.fillStyle = "rgba(22, 26, 29, 0.4)";
            ctx.beginPath();
            ctx.roundRect(frameX + 32, frameY + 32, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Bezel
            ctx.fillStyle = "#161A1D";
            ctx.beginPath();
            ctx.roundRect(frameX, frameY, frameW, frameH, [cornerRadius, cornerRadius, 0, 0]);
            ctx.fill();

            // Camera Dot
            ctx.fillStyle = "#2B3347";
            ctx.beginPath();
            ctx.arc(frameX + (frameW / 2), frameY + (borderW / 2), borderW * 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Screen
            const screenX = frameX + borderW;
            const screenY = frameY + borderW;
            const screenW = frameW - (borderW * 2);
            const screenH = frameH - borderW;
            const screenRadius = cornerRadius - borderW;

            ctx.save();
            ctx.beginPath();
            ctx.roundRect(screenX, screenY, screenW, screenH, [screenRadius, screenRadius, 0, 0]);
            ctx.clip();

            drawScreenArea(ctx, screenX, screenY, screenW, screenH, img1, img2, "Drop iPad Screenshot Here");
            ctx.restore();
        }

        ctx.restore();
    }

    // DRAW SCREEN (Single full image OR Split View for Slide 3)
    function drawScreenArea(ctx, x, y, w, h, img1, img2, placeholderLabel) {
        if (currentSlide === 3) {
            // SLIDE 3: DUAL MODEL SPLIT VIEW (2x2 & 3x3)
            const halfW = (w - 4) / 2;
            const leftX = x;
            const rightX = x + halfW + 4;

            // Background
            ctx.fillStyle = "#0D1117";
            ctx.fillRect(x, y, w, h);

            const badgeFontH = Math.max(22, Math.round(halfW * 0.036));
            const badgeMargin = Math.round(halfW * 0.035);

            // Left Pane (2x2)
            if (img1) {
                drawImageWithFit(ctx, img1, leftX, y, halfW, h, currentFitMode);
            } else {
                drawPanePlaceholder(ctx, leftX, y, halfW, h, "Upload 2x2 Screenshot");
            }
            drawPaneBadge(ctx, leftX + badgeMargin, y + badgeMargin, "2x2 POCKET", badgeFontH);

            // Right Pane (3x3)
            if (img2) {
                drawImageWithFit(ctx, img2, rightX, y, halfW, h, currentFitMode);
            } else {
                drawPanePlaceholder(ctx, rightX, y, halfW, h, "Upload 3x3 Screenshot");
            }
            drawPaneBadge(ctx, rightX + badgeMargin, y + badgeMargin, "3x3 CLASSIC", badgeFontH);

            // Divider Line
            ctx.fillStyle = "#161A1D";
            ctx.fillRect(x + halfW, y, 4, h);

        } else {
            // SLIDE 1 & 2: SINGLE SCREENSHOT
            if (img1) {
                drawImageWithFit(ctx, img1, x, y, w, h, currentFitMode);
            } else {
                ctx.fillStyle = "#0D1117";
                ctx.fillRect(x, y, w, h);
                drawPlaceholderText(ctx, x + (w / 2), y + (h / 2), placeholderLabel);
            }
        }
    }

    function drawImageWithFit(ctx, img, x, y, w, h, fitMode) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.clip();

        const imgRatio = img.width / img.height;
        const targetRatio = w / h;
        let renderW, renderH, offsetX, offsetY;

        if (fitMode === 'contain') {
            // Contain: fits entire image without cropping, centers with dark letterbox
            ctx.fillStyle = "#0A0C0E";
            ctx.fillRect(x, y, w, h);

            if (imgRatio > targetRatio) {
                renderW = w;
                renderH = w / imgRatio;
                offsetX = x;
                offsetY = y + (h - renderH) / 2;
            } else {
                renderH = h;
                renderW = h * imgRatio;
                offsetX = x + (w - renderW) / 2;
                offsetY = y;
            }
        } else {
            // Cover: fills entire area, centers and crops excess
            if (imgRatio > targetRatio) {
                renderH = h;
                renderW = h * imgRatio;
                offsetX = x + (w - renderW) / 2;
                offsetY = y;
            } else {
                renderW = w;
                renderH = w / imgRatio;
                offsetX = x;
                offsetY = y + (h - renderH) / 2;
            }
        }

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
        ctx.restore();
    }

    function drawPaneBadge(ctx, x, y, text, fontH) {
        ctx.save();
        ctx.font = `900 ${fontH}px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
        const textMetrics = ctx.measureText(text);
        const padX = fontH * 0.85;
        const padY = fontH * 0.5;
        const badgeW = textMetrics.width + (padX * 2);
        const badgeH = fontH + (padY * 2);

        // Badge Background
        ctx.fillStyle = "rgba(22, 26, 29, 0.92)";
        ctx.beginPath();
        ctx.roundRect(x, y, badgeW, badgeH, 8);
        ctx.fill();

        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = Math.max(1.5, Math.round(fontH * 0.08));
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, x + (badgeW / 2), y + (badgeH / 2));
        ctx.restore();
    }

    function drawPanePlaceholder(ctx, x, y, w, h, text) {
        ctx.save();
        ctx.fillStyle = "#12171E";
        ctx.fillRect(x, y, w, h);

        ctx.strokeStyle = "#2D3748";
        ctx.lineWidth = 3;
        ctx.setLineDash([12, 10]);
        ctx.strokeRect(x + 20, y + 20, w - 40, h - 40);

        ctx.fillStyle = "#718096";
        ctx.font = `800 ${Math.round(w * 0.045)}px -apple-system, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, x + (w / 2), y + (h / 2));
        ctx.restore();
    }

    function drawCircle(ctx, x, y, r, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawPlaceholderText(ctx, x, y, label) {
        ctx.fillStyle = "#4A5568";
        ctx.font = `800 42px -apple-system, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(label, x, y);
    }

    // EXPORT PNG: Exactly downloads the current preview canvas!
    window.exportCurrentScreenshot = function () {
        const canvas = document.getElementById('main-preview-canvas');
        if (!canvas) return;

        canvas.toBlob(function (blob) {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `Qube_AppStore_${currentDevice}_slide${currentSlide}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 'image/png');
    };

    // Initialize
    function initStudio() {
        if (!document.getElementById('main-preview-canvas')) return;
        window.setDevice('mac');
        window.setSlide(1);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initStudio);
    } else {
        initStudio();
    }
     
})();
