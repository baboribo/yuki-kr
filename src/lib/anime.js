// animejs를 사용하는 스크립트입니다.
// 처음 createTimeline과 spring 함수를 animejs에서 가져옵니다.
// aimeItems 함수를 만들고 타임라인 애니메이션을 만듭니다.
// -=1000은 애니메이션이 겹치도록 설정하는 것입니다. 애니메이션 효과는 header, .link-anime-container, footer에 적용됩니다.
// 2026-03-08 오전 3:12에 마지막으로 수정했습니다.

import { createTimeline, spring } from 'animejs';

export function animeItems() {
    const tl = createTimeline();

    tl.add('header', {
        y: [70, 0],
        opacity: [0, 1],
        ease: spring({ bounce: -0.20, duration: 370 }),
    }).add('.link-anime-container', {
        y: [70, 0],
        opacity: [0, 1],
        ease: spring({ bounce: -0.20, duration: 370 }),
    }, '-=1000').add('footer', {
        y: [70, 0],
        opacity: [0, 1],
        ease: spring({ bounce: -0.20, duration: 370 }),
    }, '-=1000');
}