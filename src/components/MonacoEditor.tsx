'use client';

import React, { useEffect, useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { defaultValues } from '@/constants/languages.defaults';
import { useLanguageStore } from '@/store/languageStore';

export default function MonacoEditor() {
  const language = useLanguageStore((state) => state.language);
  const defaultValue = useLanguageStore((state) => state.defaultValue);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editorInstance: editor.IStandaloneCodeEditor,
    monaco: typeof import('monaco-editor')
  ) => {
    editorRef.current = editorInstance;
  };

  // change default value when language changes
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(defaultValues[language]);
    }
  }, [language]);

  return (
    <>
      <Editor
        height='70vh'
        theme='vs-dark'
        language={language}
        defaultValue={defaultValue}
        onMount={handleEditorDidMount}
      />
    </>
  );
}
