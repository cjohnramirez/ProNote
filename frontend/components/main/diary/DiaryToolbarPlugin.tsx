import { RichTextAction, toolbarIndex } from "@/lib/constants/toolbarIndex";
import React, { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
} from "lexical";

function DiaryToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [disableMap, setDisableMap] = useState<{[id: string]: boolean}>({
    [RichTextAction.Undo]: true,
    [RichTextAction.Redo]: true,
  })

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand(
        CAN_UNDO_COMMAND,
        (payload) => {
          setDisableMap((prevDisableMap) => ({
            ...prevDisableMap,
            undo: !payload
          }))
          return false;
        },
        1
      ), editor.registerCommand(
        CAN_REDO_COMMAND,
        (payload) => {
          setDisableMap((prevDisableMap) => ({
            ...prevDisableMap,
            redo: !payload
          }))
          return false;
        },
        1
      ),
    );
  }, [editor]);

  const onAction = (id: RichTextAction) => {
    switch (id) {
      case RichTextAction.Bold: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        break;
      }
      case RichTextAction.Italics: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        break;
      }
      case RichTextAction.Underline: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        break;
      }
      case RichTextAction.Strikethrough: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
        break;
      }
      case RichTextAction.Superscript: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript");
        break;
      }
      case RichTextAction.Subscript: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript");
        break;
      }
      case RichTextAction.Highlight: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "highlight");
        break;
      }
      case RichTextAction.Code: {
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
        break;
      }
      case RichTextAction.LeftAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        break;
      }
      case RichTextAction.CenterAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        break;
      }
      case RichTextAction.RightAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        break;
      }
      case RichTextAction.JustifyAlign: {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
        break;
      }
      case RichTextAction.Undo: {
        // Handle undo action
        break;
      }
      case RichTextAction.Redo: {
        // Handle redo action
        break;
      }
      case RichTextAction.Divider: {
        // Divider is not an actionable item
        break;
      }
      default: {
        // Unknown action
        break;
      }
    }
  };

  return (
    <section className="grid w-full grid-cols-17 place-items-center justify-start border-t-1 border-b-1 p-7">
      {toolbarIndex.map((tool, index) =>
        tool.id === RichTextAction.Divider ? (
          <div
            className="bg-muted-white m-auto h-full w-[1px]"
            key={tool.id + index}
          ></div>
        ) : (
          <button
            key={tool.id + index}
            aria-label={tool.label}
            onClick={() => onAction(tool.id)}
            disabled={disableMap[tool.id]}
          >
            {tool.icon}
          </button>
        ),
      )}
    </section>
  );
}

export default DiaryToolbarPlugin;
