import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import React, { useEffect, useState } from "react";
import DiaryToolbarPlugin from "./DiaryToolbarPlugin";
import TextToNodePlugin from "@/lib/plugins/TextToNodePlugin";

interface DiaryTextEditorProps {
  value: string;
  onChange: (diaryEntry: string) => void;
  placeholder?: string;
  name: string;
}

const theme = {
  text: {
    bold: "font-semibold",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
    italic: "italic",
    code: "font-mono",
  },
};

console.log({ })

export const DiaryTextEditorMemo: React.FC<DiaryTextEditorProps> = React.memo(
function DiaryTextEditor({
  value,
  onChange,
  placeholder,
  name,
}) {
  // fixes hydration warning for Lexical placeholder
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const initialConfig: InitialConfigType = {
    namespace: name,
    theme,
    onError: () => {},
    nodes: [CodeNode, CodeHighlightNode, HeadingNode],
  };

  return (
    <div className="w-full">
      <LexicalComposer initialConfig={initialConfig}>
        <div>
          <HistoryPlugin />
          <DiaryToolbarPlugin />
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="border-muted-white h-full p-8 outline-none" />
            }
            placeholder={
              isClient ? (
                <p className="relative -top-14 left-8 m-0 h-0 text-gray-400">
                  {placeholder}
                </p>
              ) : (
                <></>
              )
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <AutoFocusPlugin />
        <TextToNodePlugin value={value} onChange={onChange}/>
      </LexicalComposer>
    </div>
  );
}

)

