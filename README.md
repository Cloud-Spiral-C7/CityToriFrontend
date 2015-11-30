# CityToriFrontend

地名しりとりゲーム「シティとり」のフロントサイドリポジトリです。
このリポジトリには、「シティとり」の動作に必要な静的ファイルとそれらを配信するためのサーバープログラムが含まれます。

## インストール & 起動

以下のコマンドを叩いた後、localhost:3000にアクセスしてゲームをプレイできます。

```
$ npm install
$ node index.js
```

## 開発

### webpack

このプロジェクトではjsファイルの依存関係解決のために [webpack](https://webpack.github.io/) を使っています。
webpack によって、jsファイルの依存解決を行い、最終的にコードを一つのファイル (`public/js/bundle.js`) にまとめることができます。

次のコマンドで、webpack プログラムを実行できます。実行後はファイルに変更があると自動で依存解決を行ってくれます。

```bash
$ npm run webpack  # $ webpack -w のエイリアス
```

### ファイルの命名規則

* 共通
  - ディレクトリ「/」はリポジトリ (https://github.com/Cloud-Spiral-C7/CityToriFrontend) のルートを表す
  - ファイル名は、すべて小文字英数字、単語間はアンダーバー (\_) 区切り
* src/{js}
  - webpack でコードをまとめる前の元のjsファイル
* public/{js,css,img,font}
  - webpack でコードをまとめた後のjsファイルと、各種静的ファイル

## ブランチ運用

* 本番用: master
  - 動作するバージョン
* 開発用共通ブランチ: dev
  - 各自のブランチをマージして、テストするブランチ
* 個人用ブランチ: dev-NAME(-...)
  - 各個人で作るブランチ
  - dev-NAME はプレフィックスとして必須。NAMEは各個人の名前
  - 例: dev-taro, dev-nyamadori-create-title-html
