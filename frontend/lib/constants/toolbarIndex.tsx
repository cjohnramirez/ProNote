import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Highlighter,
  Italic,
  RotateCcw,
  RotateCw,
  Strikethrough,
  Subscript,
  Superscript,
  Underline,
} from "lucide-react";
import { ReactNode } from "react";

interface toolbarIndexInterface {
  id: RichTextAction;
  icon?: ReactNode;
  label?: string;
}

export enum RichTextAction {
  Bold = "bold",
  Italics = "italics",
  Underline = "underline",
  Strikethrough = "strikethrough",
  Superscript = "superscript",
  Subscript = "subscript",
  Highlight = "highlight",
  Code = "code",
  LeftAlign = "leftAlign",
  CenterAlign = "centerAlign",
  RightAlign = "rightAlign",
  JustifyAlign = "justifyAlign",
  Divider = "divider",
  Undo = "undo",
  Redo = "redo",
}

export const toolbarIndex: toolbarIndexInterface[] = [
  { id: RichTextAction.Bold, icon: <Bold />, label: "Bold" },
  { id: RichTextAction.Italics, icon: <Italic />, label: "Italics" },
  { id: RichTextAction.Underline, icon: <Underline />, label: "Underline" },
  { id: RichTextAction.Divider, label: "Divider" },
  {
    id: RichTextAction.Highlight,
    icon: <Highlighter />,
    label: "Highlight",
  },
  {
    id: RichTextAction.Strikethrough,
    icon: <Strikethrough />,
    label: "Strikethrough",
  },
  {
    id: RichTextAction.Superscript,
    icon: <Superscript />,
    label: "Superscript",
  },
  {
    id: RichTextAction.Subscript,
    icon: <Subscript />,
    label: "Subscript",
  },
  {
    id: RichTextAction.Code,
    icon: <Code />,
    label: "Code",
  },
  { id: RichTextAction.Divider },
  {
    id: RichTextAction.LeftAlign,
    icon: <AlignLeft />,
    label: "Align Left",
  },
  {
    id: RichTextAction.CenterAlign,
    icon: <AlignCenter />,
    label: "Align Center",
  },
  {
    id: RichTextAction.RightAlign,
    icon: <AlignRight />,
    label: "Align Right",
  },
  {
    id: RichTextAction.JustifyAlign,
    icon: <AlignJustify />,
    label: "Align Justify",
  },

  { id: RichTextAction.Divider },
  {
    id: RichTextAction.Undo,
    icon: <RotateCcw />,
    label: "Undo",
  },
  {
    id: RichTextAction.Redo,
    icon: <RotateCw />,
    label: "Redo",
  },
];
