// ==========================================
// Animation Timeline Engine
// PPT-based single-page intro animation
// ==========================================

(function() {
    'use strict';

    // --- Easing: ease-out quart (fast start, gentle stop) ---
    function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
    }
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // --- DOM refs ---
    const scene = document.getElementById('scene');
    const sweepLine = document.getElementById('sweepLine');
    const portrait = document.querySelector('.portrait');
    const heroBanner = document.querySelector('.hero-banner');
    const nameBg = document.querySelector('.name-bg');
    const nameBlock = document.querySelector('.name-block');
    const education = document.querySelector('.education');
    const contactBar = document.querySelector('.contact-bar');
    const overlayNl = document.querySelector('.overlay-nl');
    const labelChips = document.querySelectorAll('.label-chip');
    const skillTags = document.querySelectorAll('.skill-tag');

    // --- Sweep line geometry (parallelogram right-edge angle) ---
    // Parallelogram right edge: top x=94.6%, bottom x=91.8%
    // The sweep line follows this angle
    const sweepX1 = 94.6;  // top point x (%)
    const sweepX2 = 91.8;  // bottom point x (%)
    const sweepLen = 25;   // line length as % of scene height

    // --- Skill tag Y positions (for sweep detection) ---
    // Skill sidebar spans top 34.7% to 99.7% (34.7+65)
    // Tags are evenly spaced within
    const skillSidebarTop = 34.7;
    const skillSidebarH = 65;
    const tagCount = skillTags.length;
    const tagPositions = Array.from(skillTags).map((_, i) => {
        return skillSidebarTop + (skillSidebarH / (tagCount + 1)) * (i + 1);
    });

    // --- Animation timing (milliseconds) ---
    const TIMING = {
        sweepStart:    0,
        sweepEnd:      700,
        portraitStart: 0,
        portraitEnd:   700,
        heroStart:     0,
        heroEnd:       600,
        labelStart:    80,
        labelEnd:      650,
        nameStart:     80,
        nameEnd:       650,
        contactStart:  80,
        contactEnd:    650,
        eduStart:      750,
        eduEnd:        950,
        nlStart:       900,
        nlEnd:         1500,
    };

    // --- State ---
    let animFrameId = null;
    let startTime = null;
    let sweepTriggered = new Array(tagCount).fill(false);

    // --- Main animation loop ---
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        // === Phase 1: Sweep + all elements enter ===
        updateSweep(elapsed);
        updatePortrait(elapsed);
        updateHero(elapsed);
        updateLabels(elapsed);
        updateName(elapsed);
        updateContact(elapsed);

        // === Phase 2: Education fade in ===
        updateEducation(elapsed);

        // === Phase 3: nl.png fade in ===
        updateNl(elapsed);

        // Continue until all phases complete
        if (elapsed < TIMING.nlEnd + 200) {
            animFrameId = requestAnimationFrame(animate);
        } else {
            // Final cleanup: ensure everything is visible
            ensureAllVisible();
        }
    }

    // --- Phase 1a: Diagonal sweep line ---
    function updateSweep(elapsed) {
        if (elapsed < TIMING.sweepStart || elapsed > TIMING.sweepEnd + 100) {
            if (elapsed > TIMING.sweepEnd) sweepLine.setAttribute('opacity', '0');
            return;
        }

        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.sweepStart) / (TIMING.sweepEnd - TIMING.sweepStart)));
        const progress = easeOutQuart(raw);

        // Update line position
        const yStart = -5 + progress * 110;  // above screen to below
        sweepLine.setAttribute('x1', sweepX1);
        sweepLine.setAttribute('y1', yStart);
        sweepLine.setAttribute('x2', sweepX2);
        sweepLine.setAttribute('y2', yStart + sweepLen);
        sweepLine.setAttribute('opacity', '1');

        // Detect which skill tags the line has passed
        const sweepCenter = yStart + sweepLen / 2;
        for (let i = 0; i < tagCount; i++) {
            if (!sweepTriggered[i] && sweepCenter >= tagPositions[i]) {
                sweepTriggered[i] = true;
                skillTags[i].classList.add('revealed');
            }
        }
    }

    // --- Phase 1b: Portrait slides in from left ---
    function updatePortrait(elapsed) {
        if (elapsed < TIMING.portraitStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.portraitStart) / (TIMING.portraitEnd - TIMING.portraitStart)));
        const progress = easeOutQuart(raw);

        if (progress > 0 && !portrait.classList.contains('visible')) {
            portrait.classList.add('visible');
        }
    }

    // --- Phase 1c: Hero banner (arrow + text) leads ---
    function updateHero(elapsed) {
        if (elapsed < TIMING.heroStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.heroStart) / (TIMING.heroEnd - TIMING.heroStart)));
        const progress = easeOutQuart(raw);

        if (progress > 0 && !heroBanner.classList.contains('visible')) {
            heroBanner.classList.add('visible');
        }
    }

    // --- Phase 1d: All label chips enter together ---
    function updateLabels(elapsed) {
        if (elapsed < TIMING.labelStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.labelStart) / (TIMING.labelEnd - TIMING.labelStart)));
        const progress = easeOutQuart(raw);

        if (progress > 0.05) {
            labelChips.forEach(function(chip) {
                if (!chip.classList.contains('visible')) {
                    chip.classList.add('visible');
                }
            });
        }
    }

    // --- Phase 1e: Name block + bg enter ---
    function updateName(elapsed) {
        if (elapsed < TIMING.nameStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.nameStart) / (TIMING.nameEnd - TIMING.nameStart)));
        const progress = easeOutQuart(raw);

        if (progress > 0.08) {
            if (!nameBg.classList.contains('visible')) nameBg.classList.add('visible');
            if (!nameBlock.classList.contains('visible')) nameBlock.classList.add('visible');
        }
    }

    // --- Phase 1f: Contact bar ---
    function updateContact(elapsed) {
        if (elapsed < TIMING.contactStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.contactStart) / (TIMING.contactEnd - TIMING.contactStart)));
        const progress = easeOutQuart(raw);

        if (progress > 0.1 && !contactBar.classList.contains('visible')) {
            contactBar.classList.add('visible');
        }
    }

    // --- Phase 2: Education fades in (after name settles) ---
    function updateEducation(elapsed) {
        if (elapsed < TIMING.eduStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.eduStart) / (TIMING.eduEnd - TIMING.eduStart)));
        const progress = easeOutCubic(raw);

        if (progress > 0 && !education.classList.contains('visible')) {
            education.classList.add('visible');
        }
    }

    // --- Phase 3: nl.png gradually appears ---
    function updateNl(elapsed) {
        if (elapsed < TIMING.nlStart) return;
        const raw = Math.max(0, Math.min(1, (elapsed - TIMING.nlStart) / (TIMING.nlEnd - TIMING.nlStart)));
        const progress = easeOutCubic(raw);

        if (progress > 0 && !overlayNl.classList.contains('visible')) {
            overlayNl.classList.add('visible');
        }
    }

    // --- Ensure all elements visible at end ---
    function ensureAllVisible() {
        var allAnimated = document.querySelectorAll('[data-anim], .skill-tag');
        allAnimated.forEach(function(el) {
            if (el.classList.contains('skill-tag')) {
                el.classList.add('revealed');
            } else {
                el.classList.add('visible');
            }
        });
        portrait.classList.add('visible');
        heroBanner.classList.add('visible');
        nameBg.classList.add('visible');
        nameBlock.classList.add('visible');
        education.classList.add('visible');
        contactBar.classList.add('visible');
        overlayNl.classList.add('visible');
        sweepLine.setAttribute('opacity', '0');
    }

    // --- Start animation on load ---
    function startAnimation() {
        // Small delay so the browser has rendered the initial layout
        setTimeout(function() {
            startTime = null;
            sweepTriggered = new Array(tagCount).fill(false);
            animFrameId = requestAnimationFrame(animate);
        }, 200);
    }

    // --- Initialize ---
    function init() {
        // Ensure all elements start hidden
        // CSS handles initial state, but double-check
        portrait.classList.remove('visible');
        heroBanner.classList.remove('visible');
        nameBg.classList.remove('visible');
        nameBlock.classList.remove('visible');
        education.classList.remove('visible');
        contactBar.classList.remove('visible');
        overlayNl.classList.remove('visible');

        labelChips.forEach(function(el) { el.classList.remove('visible'); });
        skillTags.forEach(function(el) { el.classList.remove('revealed'); });

        sweepLine.setAttribute('opacity', '0');
        sweepTriggered = new Array(tagCount).fill(false);

        startAnimation();
    }

    // --- Run on DOM ready ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
