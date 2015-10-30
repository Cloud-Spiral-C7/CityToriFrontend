# CityToriFrontend
地名しりとりゲーム「シティとり」のフロントサイドリポジトリ

## ファイルの命名規則

* 共通
  - ディレクトリ「/」はリポジトリ (https://github.com/Cloud-Spiral-C7/CityToriFrontend) のルートを表す
  - ファイル名は、すべて小文字英数字、単語間はアンダーバー (_) 区切り
* JavaScript
  - ディレクトリは、/js
* HTML
  - ディレクトリは、/
* CSS
  - ディレクトリは、/css
* 画像
  - ディレクトリは、/img

## ブランチ運用

* 本番用: master
  - 動作するバージョン
* 開発用共通ブランチ: dev
  - 各自のブランチをマージして、テストするブランチ
* 個人用ブランチ: dev-NAME(-...)
  - 各個人で作るブランチ
  - dev-NAME はプレフィックスとして必須。NAMEは各個人の名前
  - 例: dev-taro, dev-nyamadori-create-title-html
