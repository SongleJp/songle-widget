# Songle Sync API

Songle Syncは音楽に合わせて沢山のスマートフォン・パソコン・IoTデバイスを制御できる大規模音楽連動制御プラットフォームです。Songle Sync APIを使うと、JavaScriptで音楽に連動したイベント駆動のプログラムを容易に記述できます。

サンプルプログラムは以下のページに掲載されています。

- [ブラウザ向けmaster/slaveプロジェクト](https://github.com/SongleJp/songle-sync-app-browser)
- [Raspberry Pi向けslaveプロジェクト](https://github.com/SongleJp/songle-sync-app-pi)
- [Node.js向けslaveプロジェクト](https://github.com/SongleJp/songle-sync-app-nodejs)
- [Intel Edison向けslaveプロジェクト](https://github.com/SongleJp/songle-sync-app-edison)
- [Rapiro向けslaveプロジェクト](https://github.com/SongleJp/songle-sync-app-rapiro)
- [Webmo向けslaveプロジェクト](https://github.com/SongleJp/songle-sync-app-webmo)

APIを使うためにはSongle SyncのWebサイトでユーザ登録を行い、トークンを取得する必要があります。詳細は[チュートリアル Step.3](http://tutorial.songle.jp/sync/step3)を参照してください。

## Webプログラミング

Webブラウザ向けには [http://api.songle.jp/v2/api.js](http://api.songle.jp/v2/api.js) を `script` タグで埋め込むのが一番簡単です。

```javascript
onSongleWidgetAPIReady(SW) {
  var p = new SW.Player({
    accessToken: 'your access token here'
  , secretToken: 'your secret token here'
  , mediaElement: 'div.widget'
  });
  p.addPlugin(new SW.Plugin.SongleSync());
  p.useMedia('http://youtube.com/watch?v=xOKplMgHxxA');
  // 以降、この動画と連動する演出のプログラム
}
```

## npm install

Songle Sync APIのライブラリは `npm` コマンドを使ってインストールすることもできます。とくに、Node.jsを実行できるIoTデバイスなどではこちらの方法が必須となります。

```sh
npm install songle-widget --save
```

プログラムは以下のようになります。

```javascript
  var SW = require('songle-widget');
  var p = new SW.Player({
    accessToken: 'your access token here'
  , secretToken: 'your secret token here'
  , mediaElement: 'div.widget'
  });
  p.addPlugin(new SW.Plugin.SongleSync());
  p.useMedia('http://youtube.com/watch?v=xOKplMgHxxA');
  // 以降、この動画と連動する演出のプログラム
```

## Songle Sync APIの詳しい使い方

より詳しい使い方や、簡単にSongle Syncを体験できるアプリ例は[チュートリアル](http://tutorial.songle.jp/sync)を参照してください。

その他、以下のページに関連する情報が掲載されています。

- Songle Widget サンプルプログラム

   - [https://github.com/SongleJp/songle-widget](https://github.com/SongleJp/songle-widget)
   - Songle Sync APIを使って書かれたプログラムのソースコードを閲覧したり、それをもとに新しいプログラムを作ったりできます。

- Songle Sync APIドキュメント

   - [http://api.songle.jp/sync/v1](http://api.songle.jp/sync/v1)
   - Songle Syncで使える関数の一覧と簡単な説明が読めます。

---
Copyright (c) 2017 AIST Songle Project