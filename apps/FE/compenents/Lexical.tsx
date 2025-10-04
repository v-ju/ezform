"use client"; // required in Next.js App Router for browser-only libs

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";

import { $getRoot, $getSelection, EditorState } from "lexical";
import { useCallback } from "react";

// A fallback UI when editor fails
function Placeholder() {
  return <div className="absolute top-2 left-2 text-gray-400 pointer-events-none">Type something...</div>;
}

// Listener for editor state updates
function MyOnChangePlugin({ onChange }: { onChange: (editorState: EditorState) => void }) {
  const [editor] = useLexicalComposerContext();

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          onChange(editorState);
        });
      }}
    />
  );
}

export default function LexicalEditor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: "mb-2", // simple Tailwind styling
    },
    onError: (error: any) => {
      console.error(error);
    },
  };

  const handleChange = useCallback((editorState: EditorState) => {
    // Example: log JSON structure
    const json = editorState.toJSON();
    console.log("Editor state JSON:", json);
  }, []);

  return (
    <div className="relative border rounded p-2 min-h-[120px]">
      <LexicalComposer initialConfig={initialConfig}>
        <RichTextPlugin contentEditable={
            <ContentEditable className="outline-none min-h-[120px] px-1 py-1" />
          }
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}/>
        <HistoryPlugin />
        <MyOnChangePlugin onChange={handleChange} />
      </LexicalComposer>
    </div>
  );
}
