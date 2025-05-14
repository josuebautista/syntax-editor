'use client';

import React, { useEffect, useRef } from 'react';
import Editor, { OnMount, BeforeMount } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';
import { useLanguageStore } from '@/store/languageStore';
import { useThemeStore } from '@/store/themeStore';

export default function CustomEditor() {
  const language = useLanguageStore((state) => state.language);
  const defaultValue = useLanguageStore((state) => state.defaultValue);
  const tabSize = useLanguageStore((state) => state.tabSize);
  const theme = useThemeStore((state) => state.theme);
  //const [currentTheme, setCurrentTheme] = useState<monaco.editor.IStandaloneThemeData>(theme);

  //const monacoRef = useRef<typeof import('monaco-editor') | null>(null);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  // 👉 Se define UNA vez el tema antes de montar el editor
  const handleEditorWillMount: BeforeMount = (currentMonaco) => {
    currentMonaco.editor.defineTheme('customTheme', theme);
  };

  // 👉 Se guarda la referencia del editor
  const handleEditorDidMount: OnMount = (currentEditor, _) => {
    editorRef.current = currentEditor;
    currentEditor.focus();
  };

  // 👉 Actualiza el contenido cuando cambia el lenguaje
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.setValue(defaultValue);
    }
  }, [language]);
  
  // 👉 Actualiza el tema cuando cambia un color 
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.updateOptions({
        theme: 'customTheme'
      })
    }
  }, [theme]);

  return (
    <Editor
      height='70vh'
      language={language}
      defaultValue={defaultValue}
      theme='customTheme'
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        tabSize, 
        formatOnType: true,
        formatOnPaste: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: 'on',
        wordWrap: 'on',
        folding: true,
        scrollBeyondLastLine: false,
      }}
    />
  );
}
