'use client';

import { useEffect, useRef, useState } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { Languages } from '@/constants/languages.enum';

//import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';

interface MonacoEditorProps {
  defaultValue?: string;
  language?: Languages;
  theme?: string;
  height?: string;
  width?: string;
  onChange?: (value: string | undefined) => void;
  options?: editor.IStandaloneEditorConstructionOptions;
}

export default function MonacoEditor({
  defaultValue = '',
  language = Languages.typescript,
  theme = 'vs-dark',
  height = '500px',
  width = '100%',
  onChange,
  options = {},
}: MonacoEditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  const handleEditorDidMount = (editorInstance: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editorInstance;
    setIsEditorReady(true);

    if (language === 'typescript' || language === 'javascript') {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.React,
        jsxFactory: 'React.createElement',
        reactNamespace: 'React',
        allowNonTsExtensions: true,
        allowJs: true,
        target: monaco.languages.typescript.ScriptTarget.Latest,
      });

      // Cargar tipos mínimos de React si es TS o JS
      const reactTypes = `
        declare namespace React {
          function createElement(type: any, props?: any, ...children: any[]): any;
        }
      `;
      monaco.languages.typescript.typescriptDefaults.addExtraLib(reactTypes, 'react.d.ts');
    }

    // Configuración específica por lenguaje si se desea (extensible)
    if (language === 'python') {
      // En un futuro puedes integrar Pyright o WebAssembly para Python
      console.log('Python ready, add support via WebAssembly or external service.');
    }
  };

  const handleEditorChange = (value: string | undefined) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Editor
      height={height}
      width={width}
      language={language}
      defaultValue={defaultValue}
      theme={theme}
      onMount={handleEditorDidMount}
      onChange={handleEditorChange}
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        wordWrap: 'on',
        automaticLayout: true,
        tabSize: 2,
        ...options,
      }}
    />
  );
}
