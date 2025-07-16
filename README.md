# Figma Plugin 開発テンプレート（丸いスタンプ例付き）

> **このプロジェクトは、Figmaプラグイン開発のためのテンプレートです。**
> 
> サンプルとして「座標指定で円を作成する」機能を実装していますが、
> ご自身のプラグイン開発の出発点として自由にカスタマイズしてください。

---

## フォルダ構成

```plaintext
./figma
  ├─ manifest.json   # プラグインのマニフェスト
  ├─ code.ts        # TypeScriptソース（編集推奨）
  ├─ code.js        # ビルド後のJavaScript（Figmaで実行）
  └─ ui.html        # プラグインのUI
./tsconfig.json     # TypeScriptビルド設定
./package.json      # 依存・スクリプト
```

## 機能例（サンプル）
- 「スタンプモード開始」ボタンでモードON、座標指定で円（丸い図形）を作成
- 「スタンプモード終了」ボタンでモードOFF
- エラー時は画面上にエラー内容を表示

## 使い方

```sh
npm install
npx tsc
```

1. 上記コマンドで依存をインストール＆ビルド
2. Figmaで「figma」フォルダをプラグインとして読み込む
3. プラグイン実行→UIで座標を指定し「この座標に円を作成」ボタンでスタンプ

## ビルド・開発
- TypeScriptで開発し、`npx tsc` で `code.js` を生成
- 型定義は `@figma/plugin-typings` を利用
- `figma/tsconfig.json` は不要です（ルートのtsconfig.jsonのみでOK）

## 注意点
- Figmaの仕様上、キャンバスクリックで座標取得はできません。UIで座標を指定してください。
- `code.js` を直接編集せず、`code.ts` を編集→ビルドしてください。

## カスタマイズ
- `figma/code.ts` に独自の処理を追加できます
- `figma/ui.html` のUIを自由に編集できます

---

このテンプレートをベースに、さまざまなFigmaプラグイン開発にご活用ください。 