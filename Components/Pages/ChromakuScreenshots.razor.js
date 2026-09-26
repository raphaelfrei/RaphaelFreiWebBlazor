(function () {
    const devices = {
        iphone67: {
            name: "iPhone 6.7\"",
            width: 1290,
            height: 2796,
            resLabel: "1290 × 2796 px (App Store 6.7\")",
            btnLabel: "1290×2796"
        },
        iphone: {
            name: "iPhone 6.5\"",
            width: 1284,
            height: 2778,
            resLabel: "1284 × 2778 px (App Store 6.5\")",
            btnLabel: "1284×2778"
        },
        ipad: {
            name: "iPad Pro 13\"",
            width: 2048,
            height: 2732,
            resLabel: "2048 × 2732 px (iPad App Store)",
            btnLabel: "2048×2732"
        },
        android: {
            name: "Android Phone",
            width: 1080,
            height: 2400,
            resLabel: "1080 × 2400 px (Google Play)",
            btnLabel: "1080×2400"
        }
    };

    const slideThemes = {
        1: {
            accent: "#00D2D3",
            glow: ["rgba(0, 210, 211, 0.22)", "rgba(255, 94, 87, 0.12)"],
            defaultImage: "/images/chromaku-screen-home.png"
        },
        2: {
            accent: "#FF5E57",
            glow: ["rgba(255, 94, 87, 0.22)", "rgba(254, 202, 87, 0.12)"],
            defaultImage: "/images/chromaku-screen-game.png"
        },
        3: {
            accent: "#546DE5",
            glow: ["rgba(84, 109, 229, 0.22)", "rgba(0, 210, 211, 0.12)"],
            defaultImage: "/images/chromaku-screen-game.png"
        },
        4: {
            accent: "#9D00FF",
            glow: ["rgba(157, 0, 255, 0.22)", "rgba(255, 0, 127, 0.12)"],
            defaultImage: "/images/chromaku-screen-home.png"
        },
        5: {
            accent: "#FECA57",
            glow: ["rgba(254, 202, 87, 0.22)", "rgba(255, 121, 63, 0.12)"],
            defaultImage: "/images/chromaku-screen-home.png"
        }
    };

    const locales = {
        pt: {
            code: "pt",
            name: "Português",
            flag: "🇧🇷",
            slides: {
                1: {
                    title: "Um novo jeito de pensar",
                    sub: "A lógica clássica do Sudoku reinventada através das cores"
                },
                2: {
                    title: "Regras simples, soluções complexas",
                    sub: "Sem números. Apenas percepção visual, foco e estratégia"
                },
                3: {
                    title: "Do iniciante ao mestre",
                    sub: "Vários níveis de dificuldade e tabuleiros desafiadores"
                },
                4: {
                    title: "Personalize sua experiência",
                    sub: "Desbloqueie mais de 6 paletas visuais exclusivas"
                },
                5: {
                    title: "Supere seus recordes",
                    sub: "Desafio diário exclusivo e estatísticas detalhadas de jogo"
                }
            }
        },
        en: {
            code: "en",
            name: "English",
            flag: "🇬🇧",
            slides: {
                1: {
                    title: "A New Way to Think",
                    sub: "Classic Sudoku logic reinvented through vibrant colors"
                },
                2: {
                    title: "Simple Rules, Complex Solutions",
                    sub: "No numbers. Pure visual perception, focus, and strategy"
                },
                3: {
                    title: "From Beginner to Master",
                    sub: "Multiple difficulty levels and brain-teasing boards"
                },
                4: {
                    title: "Customize Your Experience",
                    sub: "Unlock over 6 exclusive vibrant visual palettes"
                },
                5: {
                    title: "Beat Your High Scores",
                    sub: "Exclusive daily challenges and detailed game statistics"
                }
            }
        },
        es: {
            code: "es",
            name: "Español",
            flag: "🇪🇸",
            slides: {
                1: {
                    title: "Una nueva forma de pensar",
                    sub: "La lógica clásica del Sudoku reinventada con colores"
                },
                2: {
                    title: "Regras simples, soluciones complejas",
                    sub: "Sin números. Pura percepción visual, concentración y estrategia"
                },
                3: {
                    title: "De principiante a maestro",
                    sub: "Múltiples niveles de dificultad y tableros desafiantes"
                },
                4: {
                    title: "Personaliza tu experiencia",
                    sub: "Desbloquea más de 6 paletas visuales exclusivas"
                },
                5: {
                    title: "Supera tus récords",
                    sub: "Desafíos diarios exclusivos y estadísticas detalladas"
                }
            }
        },
        fr: {
            code: "fr",
            name: "Français",
            flag: "🇫🇷",
            slides: {
                1: {
                    title: "Une nouvelle façon de penser",
                    sub: "La logique du Sudoku classique réinventée par les couleurs"
                },
                2: {
                    title: "Règles simples, solutions complexes",
                    sub: "Sans chiffres. Perception visuelle pure, concentration et stratégie"
                },
                3: {
                    title: "Du débutant au maître",
                    sub: "Plusieurs niveaux de difficulté et grilles stimulantes"
                },
                4: {
                    title: "Personnalisez votre expérience",
                    sub: "Débloquez plus de 6 palettes visuelles exclusives"
                },
                5: {
                    title: "Battez vos records",
                    sub: "Défi quotidien exclusif et statistiques complètes"
                }
            }
        },
        de: {
            code: "de",
            name: "Deutsch",
            flag: "🇩🇪",
            slides: {
                1: {
                    title: "Eine neue Art zu denken",
                    sub: "Klassische Sudoku-Logik, neu erfunden durch Farben"
                },
                2: {
                    title: "Einfache Regeln, komplexe Lösungen",
                    sub: "Ohne Zahlen. Reine visuelle Wahrnehmung, Fokus und Strategie"
                },
                3: {
                    title: "Vom Anfänger zum Meister",
                    sub: "Verschiedene Schwierigkeitsgrade und knifflige Rätsel"
                },
                4: {
                    title: "Personalisiere dein Erlebnis",
                    sub: "Schalte über 6 exklusive Farbpaletten frei"
                },
                5: {
                    title: "Brich deine Rekorde",
                    sub: "Jeden Tag ein neues Rätsel und detaillierte Statistiken"
                }
            }
        },
        ja: {
            code: "ja",
            name: "日本語",
            flag: "🇯🇵",
            slides: {
                1: {
                    title: "新しい思考のカタチ",
                    sub: "色で楽しむ、新感覚のクラシック数独"
                },
                2: {
                    title: "シンプルなルール、奥深い解法",
                    sub: "数字は不要。色彩の知覚と集中力、そして戦略"
                },
                3: {
                    title: "初心者から達人まで",
                    sub: "多彩な難易度とやりごたえのあるパズル盤面"
                },
                4: {
                    title: "自分好みにカスタマイズ",
                    sub: "6種類以上の個性豊かなカラーパレットをアンロック"
                },
                5: {
                    title: "自己ベストを更新しよう",
                    sub: "毎日のデイリーパズルと詳細な成績記録"
                }
            }
        },
        "zh-Hant": {
            code: "zh-Hant",
            name: "繁體中文",
            flag: "🇹🇼",
            slides: {
                1: {
                    title: "全新的思考方式",
                    sub: "透過色彩重新詮釋的經典數獨邏輯"
                },
                2: {
                    title: "簡單的規則，深奧的解答",
                    sub: "純粹的色彩感知、專注力與策略"
                },
                3: {
                    title: "從初學者到數獨大師",
                    sub: "多種難度等級與富有挑戰性的棋盤"
                },
                4: {
                    title: "打造專屬個人風格",
                    sub: "解鎖超過 6 種獨家精美主題調色盤"
                },
                5: {
                    title: "突破自我最佳紀錄",
                    sub: "每日專屬謎題與詳盡的統計數據"
                }
            }
        },
        ko: {
            code: "ko",
            name: "한국어",
            flag: "🇰🇷",
            slides: {
                1: {
                    title: "새로운 생각의 방식",
                    sub: "색상으로 새롭게 재해석된 클래식 스도쿠의 논리"
                },
                2: {
                    title: "단순한 규칙, 깊이 있는 해법",
                    sub: "숫자 없이 즐기는 순수한 시각적 몰입과 전략"
                },
                3: {
                    title: "초보자부터 마스터까지",
                    sub: "다양한 난이도와 두뇌를 자극하는 퍼즐 보드"
                },
                4: {
                    title: "나만의 경험을 맞춤 설정하세요",
                    sub: "6가지 이상의 매력적인 독점 컬러 팔레트 잠금 해제"
                },
                5: {
                    title: "자신의 최고 기록을 경신하세요",
                    sub: "매일 새로운 데일리 챌린지와 상세한 게임 통계"
                }
            }
        }
    };

    let currentDevice = 'iphone67';
    let currentLang = 'en';
    let currentSlide = 1;
    let currentFrameStyle = 'full'; // 'full' (all 4 corners, exact margins) or 'bleed' (bottom bleed)
    let drawDynamicIsland = false;

    const userUploadedImages = {};
    const defaultImageCache = {};

    function getPreset() {
        const langObj = locales[currentLang] || locales['en'];
        return langObj.slides[currentSlide] || langObj.slides[1];
    }

    function getTheme() {
        return slideThemes[currentSlide] || slideThemes[1];
    }

    function syncInputs() {
        const p = getPreset();
        const inTitle = document.getElementById('input-title');
        const inSub = document.getElementById('input-sub');
        if (inTitle) inTitle.value = p.title;
        if (inSub) inSub.value = p.sub;
    }

    window.setDevice = function (deviceKey) {
        currentDevice = deviceKey;
        document.querySelectorAll('.pill-btn').forEach(btn => {
            if (btn.id.startsWith('btn-dev-')) {
                btn.classList.toggle('active', btn.id === `btn-dev-${deviceKey}`);
            }
        });

        const dev = devices[deviceKey];
        const resBadge = document.getElementById('preview-res-badge');
        const txtRes = document.getElementById('txt-res-label');
        if (resBadge) resBadge.innerText = `${dev.name} — ${dev.resLabel}`;
        if (txtRes) txtRes.innerText = dev.btnLabel;

        const ctrlIsland = document.getElementById('ctrl-group-island');
        if (ctrlIsland) {
            ctrlIsland.style.display = deviceKey.startsWith('iphone') ? 'flex' : 'none';
        }

        window.renderLiveCanvas();
    };

    window.setLanguage = function (langCode) {
        currentLang = langCode;
        document.querySelectorAll('.pill-btn').forEach(btn => {
            if (btn.id.startsWith('btn-lang-')) {
                btn.classList.toggle('active', btn.id === `btn-lang-${langCode}`);
            }
        });
        syncInputs();
        window.renderLiveCanvas();
    };

    window.setSlide = function (slideNum) {
        currentSlide = slideNum;
        document.querySelectorAll('.pill-btn').forEach(btn => {
            if (btn.id.startsWith('btn-slide-')) {
                btn.classList.toggle('active', btn.id === `btn-slide-${slideNum}`);
            }
        });
        syncInputs();
        window.renderLiveCanvas();
    };

    window.setFrameStyle = function (style) {
        currentFrameStyle = style;
        const btnFull = document.getElementById('btn-frame-full');
        const btnBleed = document.getElementById('btn-frame-bleed');
        if (btnFull) btnFull.classList.toggle('active', style === 'full');
        if (btnBleed) btnBleed.classList.toggle('active', style === 'bleed');
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

    window.onTextInputChange = function () {
        window.renderLiveCanvas();
    };

    window.handleImageUpload = function (event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                userUploadedImages[currentSlide] = img;
                window.renderLiveCanvas();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };

    window.addEventListener('dragover', function (e) { e.preventDefault(); }, false);
    window.addEventListener('drop', function (e) {
        e.preventDefault();
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                    const img = new Image();
                    img.onload = function () {
                        userUploadedImages[currentSlide] = img;
                        window.renderLiveCanvas();
                    };
                    img.src = ev.target.result;
                };
                reader.readAsDataURL(file);
            }
        }
    }, false);

    function loadDefaultImage(url, callback) {
        if (defaultImageCache[url]) {
            callback(defaultImageCache[url]);
            return;
        }
        const img = new Image();
        img.onload = function () {
            defaultImageCache[url] = img;
            callback(img);
        };
        img.onerror = function () {
            callback(null);
        };
        img.src = url;
    }

    // ==========================================
    // CANVAS RENDERING ENGINE (SPACIOUS & APPLE-GRADE)
    // ==========================================
    window.renderLiveCanvas = function () {
        const canvas = document.getElementById('main-preview-canvas');
        if (!canvas) return;

        const dev = devices[currentDevice];
        const theme = getTheme();
        const preset = getPreset();

        if (canvas.width !== dev.width || canvas.height !== dev.height) {
            canvas.width = dev.width;
            canvas.height = dev.height;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const W = dev.width;
        const H = dev.height;

        // 1. Background
        drawBackground(ctx, W, H, theme);

        // 2. Texts & Layout Calculation
        const titleText = (document.getElementById('input-title') || {}).value || preset.title;
        const subText = (document.getElementById('input-sub') || {}).value || preset.sub;

        // 3. Render Header & Device
        const currentImg = userUploadedImages[currentSlide];
        if (currentImg) {
            const layout = calculateLayout(ctx, dev, titleText, subText, currentImg);
            drawHeader(ctx, dev, titleText, subText, layout);
            drawDevice(ctx, dev, currentImg, layout);
        } else {
            const defaultImgUrl = (currentDevice === 'ipad')
                ? "/images/chromaku-screen-ipad.png"
                : theme.defaultImage;

            loadDefaultImage(defaultImgUrl, function (defImg) {
                const layout = calculateLayout(ctx, dev, titleText, subText, defImg);
                drawHeader(ctx, dev, titleText, subText, layout);
                drawDevice(ctx, dev, defImg, layout);
            });
        }
    };

    function drawBackground(ctx, W, H, theme) {
        // Deep obsidian base
        ctx.fillStyle = "#0A0B10";
        ctx.fillRect(0, 0, W, H);

        // Subtle geometric grid
        ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
        ctx.lineWidth = Math.max(1, Math.round(W / 1200));
        const step = Math.round(W / 26);
        ctx.beginPath();
        for (let x = 0; x <= W; x += step) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
        }
        for (let y = 0; y <= H; y += step) {
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
        }
        ctx.stroke();

        // Wide, soft ambient light from the top
        const topGlow = ctx.createRadialGradient(W / 2, H * 0.02, 0, W / 2, H * 0.02, W * 0.9);
        topGlow.addColorStop(0, theme.glow[0]);
        topGlow.addColorStop(0.55, theme.glow[1]);
        topGlow.addColorStop(1, "transparent");
        ctx.fillStyle = topGlow;
        ctx.fillRect(0, 0, W, H);
    }

    function calculateLayout(ctx, dev, title, sub, img) {
        const W = dev.width;
        const H = dev.height;
        const isTablet = dev.width > 1500 || currentDevice === 'ipad';

        // Proportional typography matching Apple App Store standards
        const titleFontSize = isTablet ? Math.round(W * 0.046) : Math.round(W * 0.058);
        const subFontSize = isTablet ? Math.round(W * 0.022) : Math.round(W * 0.027);
        const maxTextWidth = isTablet ? Math.round(W * 0.84) : Math.round(W * 0.88);

        // Title measurement
        ctx.font = `900 ${titleFontSize}px -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "SF Pro Display", "Segoe UI", sans-serif`;
        const titleLines = wrapText(ctx, title, maxTextWidth);
        const titleLineHeight = titleFontSize * 1.18;

        // Subtitle measurement
        ctx.font = `600 ${subFontSize}px -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "SF Pro Text", "Segoe UI", sans-serif`;
        const subLines = sub ? wrapText(ctx, sub, maxTextWidth) : [];
        const subLineHeight = subFontSize * 1.35;

        // Balanced vertical spacing
        const topPadding = isTablet ? Math.round(H * 0.042) : Math.round(H * 0.048);
        const titleToSubGap = subLines.length > 0 ? Math.round(W * 0.018) : 0;
        const headerToDeviceGap = isTablet ? Math.round(W * 0.030) : Math.round(W * 0.038);

        const titleStartY = topPadding + (titleFontSize * 0.9);
        const titleTotalH = (titleLines.length - 1) * titleLineHeight;
        const subStartY = titleStartY + titleTotalH + titleToSubGap + (subFontSize * 0.85);
        const subTotalH = subLines.length > 0 ? (subLines.length - 1) * subLineHeight : 0;

        const textBlockBottom = subLines.length > 0 ? subStartY + subTotalH : titleStartY + titleTotalH;
        const frameY = textBlockBottom + headerToDeviceGap;

        // Determine aspect ratio from actual image or fallback to native device resolution
        const nativeAspect = dev.width / dev.height;
        let imgRatio = (img && img.width && img.height) ? (img.width / img.height) : nativeAspect;

        // If iPad mode, enforce tablet aspect ratio for the frame even if an iPhone print is supplied
        if (isTablet) {
            if (imgRatio < 0.58) {
                imgRatio = nativeAspect; // 2048 / 2732 = 0.75
            }
        }

        // Bezel & curvature matching device type
        // iPad: slim uniform bezel (~37px on 1680px iPad) & smooth gentle corners
        // iPhone: ultra-thin bezel (~15px on 1050px phone) & modern Pro squircle corners
        let baseW = isTablet ? Math.round(W * 0.82) : Math.round(W * 0.82);
        const borderW = isTablet
            ? Math.max(20, Math.round(baseW * 0.022)) // iPad uniform bezel
            : Math.max(12, Math.round(baseW * 0.015)); // iPhone ultra-thin bezel

        const availableH = H - frameY;

        let frameW, frameH, frameX, screenW, screenH, screenX, screenY, cornerRadius, screenRadius;

        if (currentFrameStyle === 'bleed') {
            frameW = baseW;
            frameX = Math.round((W - frameW) / 2);
            screenW = frameW - (borderW * 2);
            screenH = Math.round(screenW / imgRatio);
            frameH = H - frameY;
            screenX = frameX + borderW;
            screenY = frameY + borderW;
            screenRadius = isTablet ? Math.round(screenW * 0.035) : Math.round(screenW * 0.125);
            cornerRadius = screenRadius + borderW;
        } else {
            // FULL DEVICE (Default): Entire device with bottom bezel & all 4 corners visible
            const bottomMargin = Math.round(H * 0.035);
            const maxFrameH = availableH - bottomMargin;

            screenW = baseW - (borderW * 2);
            screenH = Math.round(screenW / imgRatio);
            frameH = screenH + (borderW * 2);

            // If device exceeds maxFrameH, scale down proportionally so the whole device fits
            if (frameH > maxFrameH) {
                const scale = maxFrameH / frameH;
                screenW = Math.round(screenW * scale);
                screenH = Math.round(screenW / imgRatio);
                baseW = screenW + (borderW * 2);
                frameH = screenH + (borderW * 2);
            }

            frameW = baseW;
            frameX = Math.round((W - frameW) / 2);
            screenX = frameX + borderW;
            screenY = frameY + borderW;
            screenRadius = isTablet ? Math.round(screenW * 0.035) : Math.round(screenW * 0.125);
            cornerRadius = screenRadius + borderW;
        }

        return {
            titleLines,
            titleFontSize,
            titleLineHeight,
            titleStartY,
            subLines,
            subFontSize,
            subLineHeight,
            subStartY,
            frameX,
            frameY,
            frameW,
            frameH,
            screenX,
            screenY,
            screenW,
            screenH,
            cornerRadius,
            screenRadius,
            borderW,
            isTablet
        };
    }

    function drawHeader(ctx, dev, title, sub, layout) {
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const W = dev.width;

        // 1. Headline (Crisp white, bold, prominent)
        ctx.font = `900 ${layout.titleFontSize}px -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "SF Pro Display", "Segoe UI", sans-serif`;
        ctx.fillStyle = "#FFFFFF";

        layout.titleLines.forEach((line, index) => {
            ctx.fillText(line, W / 2, layout.titleStartY + (index * layout.titleLineHeight));
        });

        // 2. Subtitle (Generously spaced, readable)
        if (layout.subLines.length > 0) {
            ctx.font = `600 ${layout.subFontSize}px -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", "SF Pro Text", "Segoe UI", sans-serif`;
            ctx.fillStyle = "rgba(243, 244, 246, 0.72)";

            layout.subLines.forEach((line, index) => {
                ctx.fillText(line, W / 2, layout.subStartY + (index * layout.subLineHeight));
            });
        }

        ctx.restore();
    }

    function wrapText(ctx, text, maxWidth) {
        const words = text.split(" ");
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = ctx.measureText(currentLine + " " + word).width;
            if (width < maxWidth) {
                currentLine += " " + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    function drawDevice(ctx, dev, img, layout) {
        ctx.save();
        const W = dev.width;
        const isBleed = (currentFrameStyle === 'bleed');
        const isTablet = layout.isTablet;

        const {
            frameX, frameY, frameW, frameH,
            screenX, screenY, screenW, screenH,
            cornerRadius, screenRadius, borderW
        } = layout;

        const frameCorners = isBleed ? [cornerRadius, cornerRadius, 0, 0] : [cornerRadius, cornerRadius, cornerRadius, cornerRadius];
        const screenCorners = isBleed ? [screenRadius, screenRadius, 0, 0] : [screenRadius, screenRadius, screenRadius, screenRadius];

        // 1. Soft Realistic Drop Shadow
        ctx.save();
        ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
        ctx.shadowBlur = Math.round(W * 0.045);
        ctx.shadowOffsetY = Math.round(W * 0.020);
        ctx.fillStyle = "#1E2230";
        ctx.beginPath();
        ctx.roundRect(frameX, frameY, frameW, frameH, frameCorners);
        ctx.fill();
        ctx.restore();

        // 2. Unibody Frame & Metallic Bevel (iPad Space Black or iPhone Titanium)
        ctx.fillStyle = isTablet ? "#171922" : "#15171F";
        ctx.beginPath();
        ctx.roundRect(frameX, frameY, frameW, frameH, frameCorners);
        ctx.fill();

        // Delicate metallic edge reflection
        ctx.strokeStyle = "rgba(255, 255, 255, 0.16)";
        ctx.lineWidth = Math.max(1, Math.round(W * 0.0016));
        ctx.beginPath();
        ctx.roundRect(frameX, frameY, frameW, frameH, frameCorners);
        ctx.stroke();

        // 3. Inner OLED Black Bezel (Uniform border around screen)
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.roundRect(screenX - 1, screenY - 1, screenW + 2, screenH + 2, screenCorners);
        ctx.fill();

        // 4. Screen Clip Area
        ctx.save();
        ctx.beginPath();
        ctx.roundRect(screenX, screenY, screenW, screenH, screenCorners);
        ctx.clip();

        if (img && img.width > 0) {
            const imgAspect = img.width / img.height;
            if (isTablet && imgAspect < 0.58) {
                // If user uploaded an iPhone screenshot while in iPad mode, center it on the iPad screen
                const drawH = screenH;
                const drawW = drawH * imgAspect;
                const drawX = screenX + (screenW - drawW) / 2;
                ctx.fillStyle = "#000000";
                ctx.fillRect(screenX, screenY, screenW, screenH);
                ctx.drawImage(img, 0, 0, img.width, img.height, drawX, screenY, drawW, drawH);
            } else {
                // iPad print on iPad OR iPhone print on iPhone: 100% exact 1:1 fit with zero cropping!
                ctx.drawImage(img, 0, 0, img.width, img.height, screenX, screenY, screenW, screenH);
            }
        } else {
            ctx.fillStyle = "#141724";
            ctx.fillRect(screenX, screenY, screenW, screenH);
            ctx.fillStyle = "#8E98AB";
            ctx.font = `700 ${Math.round(screenW * 0.045)}px sans-serif`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(isTablet ? "Upload iPad Screenshot" : "Upload Screenshot", screenX + (screenW / 2), screenY + (screenH / 2));
        }

        ctx.restore();

        // 5. iPad Front Camera Dot (Centered in top bezel)
        if (isTablet) {
            const camX = frameX + (frameW / 2);
            const camY = frameY + (borderW / 2);
            const camR = Math.max(3, Math.round(borderW * 0.16));
            ctx.fillStyle = "#1E2230";
            ctx.beginPath();
            ctx.arc(camX, camY, camR, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = "#0A0C14";
            ctx.beginPath();
            ctx.arc(camX, camY, Math.round(camR * 0.6), 0, Math.PI * 2);
            ctx.fill();
        }

        // 6. Optional Dynamic Island overlay (only for iPhone, if enabled by user)
        if (!isTablet && drawDynamicIsland && dev.width < 1500) {
            const islandW = screenW * 0.31;
            const islandH = islandW * 0.28;
            const islandX = screenX + (screenW - islandW) / 2;
            const islandY = screenY + Math.round(screenW * 0.035);
            ctx.fillStyle = "#000000";
            ctx.beginPath();
            ctx.roundRect(islandX, islandY, islandW, islandH, islandH / 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ==========================================
    // EXPORT FUNCTIONS
    // ==========================================
    window.exportCurrentScreenshot = function () {
        const canvas = document.getElementById('main-preview-canvas');
        if (!canvas) return;

        const filename = `chromaku-${currentDevice}-${currentLang}-slide${currentSlide}.png`;
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
    };

    window.exportAllSlides = function () {
        let slideIndex = 1;
        function exportNext() {
            if (slideIndex > 5) {
                window.setSlide(1);
                return;
            }
            window.setSlide(slideIndex);
            setTimeout(function () {
                window.exportCurrentScreenshot();
                slideIndex++;
                setTimeout(exportNext, 350);
            }, 250);
        }
        exportNext();
    };

    function init() {
        syncInputs();
        window.renderLiveCanvas();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
