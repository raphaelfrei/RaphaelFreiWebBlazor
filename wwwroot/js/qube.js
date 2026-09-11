(function () {
    let currentMode = '3x3';
    const solvedColors = {
        top: '#F5CB5C',    // Yellow
        left: '#7BDFF2',   // Cyan
        right: '#EF476F'   // Pink
    };
    const palette = ['#F5CB5C', '#7BDFF2', '#EF476F', '#FFFFFF', '#FF8C42', '#2B9348'];

    function buildFace(faceId, size, color) {
        const el = document.getElementById(faceId);
        if (!el) return;
        const targetCount = size * size;
        
        // If the element already has the right number of stickers, just update colors
        if (el.children.length === targetCount) {
            Array.from(el.children).forEach(s => s.style.backgroundColor = color);
            return;
        }

        el.innerHTML = '';
        el.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        el.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        
        for (let i = 0; i < targetCount; i++) {
            const sticker = document.createElement('div');
            sticker.className = 'sticker';
            sticker.style.backgroundColor = color;
            el.appendChild(sticker);
        }
    }

    window.renderCube = function () {
        const size = currentMode === '3x3' ? 3 : 2;
        buildFace('face-top', size, solvedColors.top);
        buildFace('face-left', size, solvedColors.left);
        buildFace('face-right', size, solvedColors.right);
    };

    window.setCubeMode = function (mode) {
        currentMode = mode;
        const btn3 = document.getElementById('btn-mode-3x3');
        const btn2 = document.getElementById('btn-mode-2x2');
        if (btn3 && btn2) {
            btn3.classList.toggle('active', mode === '3x3');
            btn2.classList.toggle('active', mode === '2x2');
        }
        const size = mode === '3x3' ? 3 : 2;
        // Rebuild faces for the new grid size
        ['face-top', 'face-left', 'face-right'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = '';
        });
        window.renderCube();
    };

    window.scrambleCube = function () {
        const stickers = document.querySelectorAll('.cube-face .sticker');
        stickers.forEach((s, idx) => {
            setTimeout(() => {
                const rnd = palette[Math.floor(Math.random() * palette.length)];
                s.style.backgroundColor = rnd;
            }, idx * 18);
        });
        const cube = document.getElementById('rubik-cube');
        if (cube) {
            cube.classList.add('shaking');
            setTimeout(() => cube.classList.remove('shaking'), 600);
        }
    };

    window.solveCube = function () {
        const cube = document.getElementById('rubik-cube');
        if (!cube) return;

        // Start 3D spin
        cube.classList.add('solving-spin');

        // Smoothly morph colors while the cube is spinning at peak speed
        setTimeout(() => {
            const applyColors = (faceId, color) => {
                const face = document.getElementById(faceId);
                if (!face) return;
                Array.from(face.children).forEach((s, idx) => {
                    setTimeout(() => {
                        s.style.backgroundColor = color;
                    }, idx * 25);
                });
            };
            applyColors('face-top', solvedColors.top);
            applyColors('face-left', solvedColors.left);
            applyColors('face-right', solvedColors.right);
        }, 200);

        setTimeout(() => {
            cube.classList.remove('solving-spin');
        }, 850);
    };

    window.resetCube = function () {
        const applyColors = (faceId, color) => {
            const face = document.getElementById(faceId);
            if (!face) return;
            Array.from(face.children).forEach(s => s.style.backgroundColor = color);
        };
        applyColors('face-top', solvedColors.top);
        applyColors('face-left', solvedColors.left);
        applyColors('face-right', solvedColors.right);
    };

    function initCubeIfNeeded() {
        const top = document.getElementById('face-top');
        if (top && top.children.length === 0) {
            window.renderCube();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCubeIfNeeded);
    } else {
        initCubeIfNeeded();
    }
    document.addEventListener('blazor:enhancedload', initCubeIfNeeded);
})();
