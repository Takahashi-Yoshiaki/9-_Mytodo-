# My Todo App

ReactとTypeScriptの学習として作成したToDoアプリです。

ToDoの追加・編集・完了状態の切り替え・削除・絞り込みができます。  
コンポーネントを役割ごとに分割し、Tailwind CSSで画面を整えています。

## 公開URL

https://takahashi-yoshiaki.github.io/9-_Mytodo-/

## できること

- ToDoの追加
- ToDoタイトルの編集
- 完了・未完了の切り替え
- ToDoの削除
- 「全部／未完了／完了」による絞り込み
- 未完了件数の表示
- 空欄や空白だけのToDo登録を防止

## 使用技術

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub Pages
- GitHub Actions

## 起動方法

```bash
# リポジトリをクローン
git clone https://github.com/Takahashi-Yoshiaki/9-_Mytodo-.git
cd 9-_Mytodo-

# 依存パッケージをインストール
npm install

# 開発サーバーを起動
npm run dev
```

起動後、ターミナルに表示されたローカルURLをブラウザで開いてください。

## その他のコマンド

### ESLintによるコード確認

```bash
npm run lint
```

### 公開用ビルド

```bash
npm run build
```

## 構成

```text
src/
├─ components/
│  ├─ TodoForm.tsx
│  ├─ TodoList.tsx
│  └─ TodoItem.tsx
├─ App.tsx
├─ main.tsx
├─ index.css
└─ types.ts
```

### `App.tsx`

ToDo一覧と絞り込み条件のstateを管理します。  
タイトルの追加・タイトルの編集・完了・未着手の切り替え・タイトルの削除の処理を持ち、子コンポーネントへpropsで渡します。

### `TodoForm.tsx`

新しいToDoを入力して追加するフォームです。  
入力中のタイトルをstateで管理します。

### `TodoList.tsx`

ToDoの配列を受け取り、`map()`を使って`TodoItem`を表示します。

### `TodoItem.tsx`

ToDoを1件表示します。  
完了切り替え・タイトル編集・削除の操作を担当します。

### `types.ts`

ToDoデータの型を定義します。

```ts
type Todo = {
  id: string
  title: string
  done: boolean
  createdAt: string
}
```

## データの流れ

```text
App
├─ TodoForm
└─ TodoList
   └─ TodoItem
```

`App`がstateを管理し、propsを通して子コンポーネントへデータと関数を渡しています。

## 今後追加したい機能

- localStorageを使ったブラウザへの保存
- APIとデータベースを使った永続化
- 設計書の作成
- ログイン機能