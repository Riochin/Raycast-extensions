import { List, showToast, Toast } from "@raycast/api";
import { useState } from "react";

export default function CharacterCounter() {
  // テキストの状態を管理するuseStateフック
  const [text, setText] = useState<string>("");
  // 文字数と単語数を計算
  const charCount = text.length;
  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <List
      // 検索バーのプレースホルダーテキスト
      searchBarPlaceholder="ここにテキストを入力してください..."
      // 検索テキストが変更されたときに状態を更新
      onSearchTextChange={async (newText) => {
        setText(newText);
        // 必要に応じてトーストを表示（ここでは非表示）
        // await showToast(Toast.Style.Success, "文字数を更新しました");
      }}
      // 検索バーの入力値と状態を同期
      searchText={text}
    >
      {/* 文字数と単語数を表示するList.Item */}
      {text.trim().length === 0 ? (
        <List.EmptyView title="文字数をカウントするテキストを入力してください" />
      ) : (
        <List.Item
          title={`文字数: ${charCount}`}
          subtitle={`単語数: ${wordCount}`}
          // アイコンはオプション
          icon="text-document.png" // Raycastの組み込みアイコン、またはカスタムアイコン
        />
      )}
      {/* 他のアイテムを追加することも可能 */}
    </List>
  );
}
