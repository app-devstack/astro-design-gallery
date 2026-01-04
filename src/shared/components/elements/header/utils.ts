import { gsap } from 'gsap';

/**
 * スクロール時のヘッダースタイル
 */
export const HEADER_SCROLLED_STYLE = {
  header: {
    boxShadow: 'none',
  },
  content: {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
  },
} satisfies Record<string, gsap.TweenVars>;

/**
 * トップ時のヘッダースタイル
 */
export const HEADER_TOP_STYLE = {
  header: {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  content: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  title: {
    fontSize: '1.875rem',
  },
} satisfies Record<string, gsap.TweenVars>;

type AnimationConfig = {
  element: HTMLElement | null;
  styles: gsap.TweenVars;
};

/**
 * アニメーション実行
 * @param animations アニメーション設定の配列
 */
export function animateElements(animations: AnimationConfig[]) {
  const ANIMATION_CONFIG = {
    duration: 0.3,
    ease: 'power2.out',
  };

  animations.forEach(({ element, styles }) => {
    if (!element) return;

    gsap.to(element, {
      ...styles,
      ...ANIMATION_CONFIG,
    });
  });
}
