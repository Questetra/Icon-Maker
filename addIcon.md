# アイコンを追加する
## 概要
### 構成

- アイコンフォント：Questetra-Icon-Font-A
    - アイコン部分の描画に使用しているフォント
    - [IcoMoon](https://icomoon.io/) というサービスを使って構成
        - IcoMoon では、1フォント = 1プロジェクト（以下 IcoMoon プロジェクト） で管理する
            - IcoMoon プロジェクトは インポート/エクスポート（バックアップ）が可能、[/src/font/Addon.json](https://github.com/Questetra/Icon-Maker/blob/master/src/font/Addon.json) としてリポジトリに保管している
        - Font Awesome ほか、メジャーブランドなどのアイコンがある程度使える
    - IcoMoon で生成・ダウンロードしたファイルは、そのまま解凍して [src/font/Questetra-Icon-Font-A](https://github.com/Questetra/Icon-Maker/tree/master/src/font/Questetra-Icon-Font-A)として配置
    - フォントの実体は [/src/font/Questetra-Icon-Font-A/fonts/](https://github.com/Questetra/Icon-Maker/tree/master/src/font/Questetra-Icon-Font-A/fonts)
- アイコンをリストしている JSON ファイル
    - 使用するアイコンを登録するファイル
    - [/src/js/icons.js](https://github.com/Questetra/Icon-Maker/blob/master/src/js/icons.js)
- 操作UI
    - HTML
    - [/docs/index.html](https://github.com/Questetra/Icon-Maker/blob/master/docs/index.html)
    - 背景色の選択肢を追加する場合に、OPTION 項目を追加する

## 手順

1. アイコンフォントを編集する
    - IcoMoon にログインする
    - IcoMoon プロジェクト「Addon」が無い場合はインポートする
    - 追加するアイコンを追加する
        - フリーのアイコンで使用したいものがあれば、選択する
        - 独自のアイコンを追加したい場合は SVG ファイルをインポートする
            - Illustrator で アイコンを作成し、SVG形式で保存する
            - /src/font/svg/... にあるファイルを参考にする
    - Genarate Font
        - Preferrences でバージョンを変更する
        - ダウンロードする
        - 解凍したフォルダごと /src/font/Questetra-Icon-Font-A/ に上書きする
    - IcoMoon プロジェクトファイルもダウンロードする
        - /src/font/Addon.json に上書き（バックアップ）
2. [/src/js/icons.js](https://github.com/Questetra/Icon-Maker/blob/master/src/js/icons.js) を編集する
    - キャラクターコードは /src/font/Questetra-Icon-Font-A/demo.html を参照する
    - 背景色は
        - RGB
        - ブランドロゴマークの場合は、ブランドカラー
        - 特に指定しない場合は 空（""）
3. [/docs/index.html](https://github.com/Questetra/Icon-Maker/blob/master/docs/index.html) を編集する
    - 2で背景色をしたいした場合は、背景色のテーマのオプションにも追加する
4. Grunt (タスクランナー) を実行
    - /src にあるファイルのうち、必要なものを /docs に移動する
5. ローカルで動作確認

### 作業内容の動画

[アイコン追加作業](https://questetra.github.io/Icon-Maker/IconMaker.mp4)

[アイコン作成とインポートの動画](https://questetra.github.io/Icon-Maker/SVGIcon.mp4)

### icon.json のサンプル

    {label:[表示ラベル], value:[キャラクターコード], color:[背景色]},
    {label:"Wordpress", value:"&#xe956;", color:"2,140,176"},

### index.html のサンプル

    <option value=[背景色]>[表示ラベル]</option>
    <option value="2,140,176">サービス：Wordpress</option>

### 固定サービスタスクアイコン
Flash版モデラ―から、HTML版に移行するにあたって、同等のアイコンの Base64 をコピペできるようにしたもの。

 - 登録は [/src/js/static-icons.js](https://github.com/Questetra/Icon-Maker/blob/master/src/js/static-icons.js) で行っている

## 環境構築

  1. GitHub から
      - pull origin master (最初)
  2. Node.js, npm, grunt-cli の確認


    node -v
    npm -v
    grunt --version

  3. npm の初期化、パッケージの導入


    npm init  ... (package.json を生成する：そのまま連続リターン)
    npm install
