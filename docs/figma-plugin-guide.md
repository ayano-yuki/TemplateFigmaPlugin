# Figmaプラグイン開発手引き

このドキュメントでは、シンプルなFigmaプラグインの導入・開発・カスタマイズ方法を解説します。

---

## 1. プロジェクトの準備

1. このリポジトリをクローン、またはZIPでダウンロード
2. 必要な依存パッケージをインストール

```sh
npm install
```

---

## 2. ビルド方法

TypeScriptで開発し、`npx tsc` で `figma/code.js` を生成します。

```sh
npx tsc
```

---

## 3. Figmaでプラグインを読み込む

1. Figmaを開き、メニューから「プラグイン」→「開発者」→「ローカルプラグインを実行...」を選択
2. このプロジェクトの `figma` フォルダを選択
3. プラグインを実行し、「円を作成」ボタンを押すと、(0,0)に直径100の円が作成されます

---

## 4. プラグインのカスタマイズ

- `figma/code.ts` を編集して、作成する図形や動作を自由に変更できます
- `figma/ui.html` を編集して、UIをカスタマイズできます
- 編集後は必ず `npx tsc` でビルドしてください

---

## 5. よくある質問

### Q. Figmaで「figma/plugin-typingsが見つからない」と出る
A. プラグインの型定義はFigma環境で自動的に解決されるため、ローカルのエラーは無視してOKです。

### Q. プラグインのUIを日本語以外にしたい
A. `figma/ui.html` のテキストを編集してください。

---

## 6. 参考リンク
- [Figma Plugin公式ドキュメント](https://www.figma.com/plugin-docs/)
- [Figma Plugin APIリファレンス](https://www.figma.com/plugin-docs/api/)

---

このテンプレートを活用して、独自のFigmaプラグイン開発にチャレンジしてください！ 