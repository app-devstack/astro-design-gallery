# Astro Design Gallery - ダークモード実装指示書(2026-01-05)

## 概要

Astro公式チュートリアルに準拠したダークモード機能を実装してください。
このプロジェクトでは Tailwind CSS v4 を使用しており、既にダークモード用のCSS変数が定義されています。

## プロジェクト環境

- **フレームワーク:** Astro
- **スタイリング:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **既存のレイアウト:** `src/layouts/Layout.astro`
- **グローバルCSS:** `src/styles/global.css`
- **CSS変数:** すでに`:root`と`.dark`で定義済み

## 実装要件

### 1. テーマ初期化スクリプト（必須）

**目的:** ページ読み込み時のチラツキ(FOUC)防止

**ファイル:** `src/layouts/Layout.astro`

**実装内容:**

- `<head>`タグ内、できるだけ早い段階に`<script is:inline>`を配置
- テーマ取得優先順位:
  1. `localStorage.getItem('theme')`
  2. `window.matchMedia('(prefers-color-scheme: dark)').matches`
  3. デフォルトは`'light'`
- `<html>`要素に`.dark`クラスを付与/削除

**コード例:**

```html
<script is:inline>
  const theme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
</script>
```

**配置位置:**

- `<head>`タグ内、`<meta charset="UTF-8" />`の直後
- その他のスタイルやスクリプトが読み込まれる前

---

### 2. トグルボタンコンポーネント

**ファイル:** `src/components/ThemeToggle.astro` (新規作成)

**実装内容:**

- ボタンクリックで`.dark`クラスをトグル
- `localStorage`に設定を保存
- アイコンは太陽/月マーク（絵文字またはSVG）
- アクセシビリティ対応（`aria-label`など）

**要件:**

- `document.documentElement.classList.toggle('dark')`を使用
- `localStorage.setItem('theme', isDark ? 'dark' : 'light')`で保存
- ボタンの状態を視覚的に表示（現在のテーマを示す）

**コード例:**

```astro
---
// src/components/ThemeToggle.astro
---

<button
  id="theme-toggle"
  type="button"
  aria-label="テーマ切り替え"
  class="rounded-lg p-2 hover:bg-muted transition-colors"
>
  <span id="theme-toggle-light-icon" class="hidden">🌙</span>
  <span id="theme-toggle-dark-icon" class="hidden">☀️</span>
</button>

<script>
  const themeToggleBtn = document.getElementById('theme-toggle');
  const lightIcon = document.getElementById('theme-toggle-light-icon');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');

  function updateIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    lightIcon?.classList.toggle('hidden', isDark);
    darkIcon?.classList.toggle('hidden', !isDark);
  }

  updateIcon();

  themeToggleBtn?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateIcon();
  });
</script>
```

---

### 3. CSS設定（既存）

**ファイル:** `src/styles/global.css`

**現状:**

- ✅ すでに`:root`でライトテーマのCSS変数が定義済み
- ✅ すでに`.dark`でダークテーマのCSS変数が定義済み
- ✅ Tailwind CSS v4の`@custom-variant dark (&:is(.dark *))`設定済み
- ✅ 背景色とテキスト色は`@apply bg-background text-foreground`で適用済み

**追加作業:**

- 必要に応じてトランジション効果を追加:

```css
@layer base {
  body {
    @apply bg-background text-foreground antialiased transition-colors duration-300;
  }
}
```

---

### 4. Tailwind CSS v4 対応

**ファイル:** `src/styles/global.css`

**設定済み:**

```css
@custom-variant dark (&:is(.dark *));
```

この設定により、`dark:`プレフィックスが使用可能になります。

**使用例:**

```html
<div class="bg-white dark:bg-card text-black dark:text-foreground">
  <!-- コンテンツ -->
</div>
```

**既存のカラートークン:**

- `bg-background` / `text-foreground`: 背景と前景色
- `bg-card` / `text-card-foreground`: カード背景
- `bg-primary` / `text-primary-foreground`: プライマリカラー
- `bg-secondary` / `text-secondary-foreground`: セカンダリカラー
- `bg-muted` / `text-muted-foreground`: ミュートカラー
- `bg-accent` / `text-accent-foreground`: アクセントカラー

---

## ファイル構成

```
src/
├── layouts/
│   └── Layout.astro          # ✏️ テーマ初期化スクリプトを追加
├── components/
│   └── ThemeToggle.astro     # ➕ 新規作成: トグルボタン
└── styles/
    └── global.css            # ✅ ダークモード用CSS変数は設定済み
```

---

## 実装手順

### Step 1: レイアウトに初期化スクリプトを追加

`src/layouts/Layout.astro`の`<head>`タグ内、最上部に初期化スクリプトを追加:

```html
<head>
  <meta charset="UTF-8" />
  <script is:inline>
    const theme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
  </script>
  <!-- 既存のメタタグやリンク -->
</head>
```

### Step 2: トグルボタンコンポーネントの作成

`src/components/ThemeToggle.astro`を新規作成

### Step 3: レイアウトにトグルボタンを配置

`src/layouts/Layout.astro`または適切な場所（ヘッダーなど）に配置:

```astro
---
import ThemeToggle from '@/components/ThemeToggle.astro';
---
<!-- レイアウト内 -->
<ThemeToggle />
```

### Step 4: 動作確認

- [ ] ページ読み込み時にチラツキがないか確認
- [ ] トグルボタンでテーマ切り替えができるか確認
- [ ] ページ遷移後もテーマが維持されるか確認
- [ ] システム設定（OS）のダークモード設定が反映されるか確認

---

## 実装チェックリスト

- [ ] `<script is:inline>`で初期化スクリプトを`<head>`内に実装
- [ ] `ThemeToggle.astro`コンポーネント作成
- [ ] `localStorage`への保存処理実装
- [ ] アイコンの表示切り替え実装
- [ ] レイアウトまたはヘッダーにトグルボタン配置
- [ ] ページ遷移後もテーマが維持されることを確認
- [ ] システム設定（OS）のダークモード対応確認
- [ ] FOUCがないことを確認（ページ読み込み時のチラツキ）
- [ ] アクセシビリティチェック（キーボード操作、`aria-label`など）

---

## 既存の色設定について

このプロジェクトでは、`src/styles/global.css`にて以下のように色が定義されています:

### ライトモード (`:root`)

- 背景色: `--background: oklch(1 0 0)` (白)
- テキスト色: `--foreground: oklch(0.141 0.005 285.823)` (ダークグレー)

### ダークモード (`.dark`)

- 背景色: `--background: oklch(0.141 0.005 285.823)` (ダークグレー)
- テキスト色: `--foreground: oklch(0.985 0 0)` (ホワイト)

これらの変数は`@theme inline`ブロックでTailwindのカラートークンとして使用可能になっています。

---

## 参考

- Astro公式チュートリアル: <https://docs.astro.build/en/tutorial/6-islands/2/>
- Tailwind CSS v4 ダークモード: <https://tailwindcss.com/docs/dark-mode>
- `is:inline`の仕様: バンドル対象外、毎回HTMLに直接出力される

---

## 注意事項

### 必須事項

- `<script is:inline>`は**必ず`<head>`内の最上部**に配置（FOUCチラツキ防止のため）
- `localStorage`のキー名は`'theme'`で統一
- クラス名は`.dark`を使用（既存のCSS設定に準拠）
- フレームワークコンポーネント（React/Vue等）は**使用しない**（純粋なAstroコンポーネントのみ）

### プロジェクト固有の注意点

- Tailwind CSS v4を使用しているため、従来の`darkMode: 'class'`設定は不要
- `@custom-variant dark (&:is(.dark *))`がすでに設定済み
- 既存のカラートークン（`bg-background`、`text-foreground`など）を活用する
- GoogleフォントやGSAPなどの既存のアセットとの互換性を確認

### アクセシビリティ

- トグルボタンには適切な`aria-label`を付与
- キーボード操作で切り替え可能にする
- スクリーンリーダーで現在のテーマ状態が分かるようにする

---

## トラブルシューティング

### チラツキ（FOUC）が発生する場合

- 初期化スクリプトが`<head>`内の十分に早い位置にあるか確認
- `is:inline`ディレクティブが正しく使用されているか確認
- スクリプトがバンドルされていないか確認

### テーマが保存されない場合

- `localStorage`が利用可能な環境か確認（プライベートモードなど）
- イベントリスナーが正しく設定されているか確認
- コンソールでエラーが出ていないか確認

### スタイルが適用されない場合

- `.dark`クラスが`<html>`要素に正しく付与されているか確認
- CSS変数が正しく読み込まれているか確認
- Tailwindのビルドが正しく行われているか確認
