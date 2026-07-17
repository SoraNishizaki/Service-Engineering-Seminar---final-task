# サービス工学特論 Final Task

Bootstrap 5 と Leaflet を使用した Web サイト（GitHub Pages で公開予定）。
現在は基盤のみで、サイトの内容は検討中。

## 構成

```
.
├── index.html      # メインページ（Bootstrap + Leaflet の読み込みと動作確認）
├── css/
│   └── style.css   # 自作 CSS
├── js/
│   └── main.js     # Leaflet マップの初期化
└── README.md
```

## 使用技術

| 項目 | 内容 |
| --- | --- |
| CSS フレームワーク | Bootstrap 5.3（CDN） |
| アイコン | Bootstrap Icons |
| 地図ライブラリ | Leaflet 1.9（CDN） |
| 地図タイル | OpenStreetMap |
| ホスティング | GitHub Pages |

## GitHub Pages での公開手順

1. リポジトリの **Settings → Pages** を開く
2. **Source: Deploy from a branch / Branch: main / (root)** を選択して Save
3. 数分後に `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開される

## ローカルでの確認

```sh
python3 -m http.server 8765
# http://localhost:8765 をブラウザで開く
```
