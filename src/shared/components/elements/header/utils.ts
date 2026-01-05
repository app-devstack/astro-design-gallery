import { gsap } from 'gsap';

const SHOW_ANIMATION_CONFIG = {
  duration: 0.6,
  ease: 'power2.out',
};

const HIDE_ANIMATION_CONFIG = {
  duration: 0.1,
  ease: 'power2.in',
};

/**
 * スクロールヘッダーを表示（上からふわっとスライドイン）
 */
export function showScrollHeader(scrollHeader: HTMLElement) {
  gsap.to(scrollHeader, {
    opacity: 1,
    y: 0,
    pointerEvents: 'auto',
    ...SHOW_ANIMATION_CONFIG,
  });
}

/**
 * スクロールヘッダーを非表示（上へ素早くフェードアウト）
 */
export function hideScrollHeader(scrollHeader: HTMLElement) {
  gsap.to(scrollHeader, {
    opacity: 0,
    y: -50,
    pointerEvents: 'none',
    ...HIDE_ANIMATION_CONFIG,
  });
}
