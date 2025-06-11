import { RichTextAction, toolbarIndex } from "@/lib/constants/toolbarIndex";
import React, { useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import {
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  FORMAT_TEXT_COMMAND,
  REDO_COMMAND,
  UNDO_COMMAND,
} from "lexical";

function DiaryToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [disableMap, setDisableMap] = useState<{ [id: string]: boolean }>({
    [RichTextAction.Undo]: true,
    [RichTextAction.Redo]: true,
  });

  useEffect(() => {
    return mergeRegister(
      editor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (canUndo) => {
          setDisableMap((prev) => ({
            ...prev,
            [RichTextAction.Undo]: !canUndo,
          }));
          return false;
        },
        1,
      ),
      editor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (canRedo) => {
          setDisableMap((prev) => ({
            ...prev,
            [RichTextAction.Redo]: !canRedo,
          }));
          return false;
        },
        1,
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
        editor.dispatchCommand(UNDO_COMMAND, undefined);
        break;
      }
      case RichTextAction.Redo: {
        editor.dispatchCommand(REDO_COMMAND, undefined);
        break;
      }
      default: {
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
            className="disabled:opacity-20"
          >
            {tool.icon}
          </button>
        ),
      )}
    </section>
  );
}

export default DiaryToolbarPlugin;
