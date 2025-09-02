/* global motion */

window.initWave = function() {
    const { animate } = motion;

    const pathEl = document.querySelector('#sinePath');
    const textPaths = document.querySelectorAll('#waveText textPath');

    if (!pathEl || !textPaths.length) return;

    const pathA = 'M0,200 C200,120 400,280 600,200 C800,120 1000,280 1200,200 C1400,120 1600,280 1800,200';
    const pathB = 'M0,210 C200,150 400,260 600,210 C800,150 1000,260 1200,210 C1400,150 1600,260 1800,210';
    const pathC = 'M0,190 C200,100 400,300 600,190 C800,100 1000,300 1200,190 C1400,100 1600,300 1800,190';

    // Animate path morphing
    animate(pathEl,
        { d: [pathA, pathB, pathC, pathA] },
        {
            duration: 4,
            easing: 'ease-in-out',
            direction: 'alternate',
            repeat: Infinity
        }
    );

    // Animate text marquee
    textPaths[1].setAttribute('startOffset', '-50%');
    animate(0, 50, {
        duration: 9,
        repeat: Infinity,
        ease: 'linear',
        onUpdate: v => {
            textPaths[0].setAttribute('startOffset', `${v}%`);
            textPaths[1].setAttribute('startOffset', `${v - 50}%`);
        }
    });
};
