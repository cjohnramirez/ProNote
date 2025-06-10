import { diaryEntry } from "@/lib/main/diary";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HeadingNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import DiaryToolbarPlugin from "./DiaryToolbarPlugin";

function DiaryTextEditor({ diaryEntry }: { diaryEntry: diaryEntry }) {
  const theme = {
    text: {
      bold: "font-semibold",
      underline: "underline",
      strikethrough: "line-through",
      underlineStrikethrough: "underline line-through",
      italic: "italic",
    }
  }

  const initialConfig = {
    namespace: "DiaryTextEditor",
    theme,
    onError: () => {},
  };

  return (
    <div className="w-full">
      <LexicalComposer initialConfig={initialConfig}>
        <div className="flex flex-col justify-start">
          <DiaryToolbarPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="border-muted-white h-full outline-none p-8" />
            }
            placeholder={
              <div className="relative -top-14 left-8 text-gray-400 m-0 h-0">
                Enter your diary entry...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <AutoFocusPlugin />
      </LexicalComposer>
    </div>
  );
}

export default DiaryTextEditor;
