# Vue.js + Laravel5.5 サンプル

## できること
+ ログインユーザーのみAPIが叩ける
+ `vue-router`を利用したレンダリング
+ `axios`を使ってAPIを叩く

## ファイル構成

主に変更したファイルのみ記載してます。

```
resources
  +---app
  |   +---Http
  |   |   +---Controllers
  |   |   |   `---Auth
  |   |   |       `---LoginController.php
  |   |   `---Kernel.php
  |   +---Providers
  |   |   +---AuthServiceProvider.php
  |   `---User.php
  +---config
  |   +---app.php
  |   `---auth.php  
  +---resources
  |   `---assets
  |       `---js
  |           +---components
  |           |   +---Index.vue
  |           |   +---Modal.vue
  |           |   `---Test.vue
  |           +---app.js
  |           +---bootstrap.js
  |           +---myComponents.js
  |           `---routes.js
  `---views
      `---layouts
          `----vue_app.blade.php
```

## 作業
**※ 事前に `Homestead` のインストールを済ませておいてください。**

```bash:console
# プロジェクトのクローン
git clone https://github.com/tosite0345/vue.js-laravel-sample.git

# 以下はvagrant上で行う
vagrant ssh

cd 'project-root'

# composerで依存関係を注入する
composer install

# .env・config等の設定ファイルをキャッシュ化
php artisan config:cache

# このコマンドでサンプルユーザーを作成する
# mail : homestead@sample.com
# pass : secret
php artisan migrate
php artisan db:seed

# passportをインストール
php artisan passport:install
```