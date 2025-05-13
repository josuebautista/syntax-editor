// 'use client';

// import React, { useState } from 'react';
// import { Editor as MonacoEditor} from '@monaco-editor/react';


// export default function Editor() {
//   const [value, setValue] = useState<string>('console.log(\'Hello world!\')');
//   const handleOnChange = (newValue: string | undefined) => {
//     if (!newValue) return;
//     console.log('newValue', newValue);
//     setValue(newValue)
//   };

//   return (
//     <MonacoEditor
//       height="500px"
//       defaultLanguage="javascript"
//       theme="vs-dark"
//       value={value}
//       onChange={(e) => handleOnChange(e)}
//     />
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import Editor, { Monaco } from '@monaco-editor/react';
import { editor } from 'monaco-editor';

interface MonacoEditorProps {
  defaultValue?: string;
  language?: string;
  theme?: string;
  height?: string;
  width?: string;
  onChange?: (value: string | undefined) => void;
  options?: editor.IStandaloneEditorConstructionOptions;
}

export default function MonacoEditor({
  defaultValue = '// Escribe tu código TSX aquí',
  language = 'typescript',
  theme = 'vs-dark',
  height = '500px',
  width = '100%',
  onChange,
  options = {
  },
}: MonacoEditorProps) {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);

  // Configurar Monaco cuando el editor esté listo
  const handleEditorDidMount = (editor: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editor;
    setIsEditorReady(true);

    // Configurar TypeScript/TSX
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      jsx: monaco.languages.typescript.JsxEmit.React,
      jsxFactory: 'React.createElement',
      reactNamespace: 'React',
      allowNonTsExtensions: true,
      allowJs: true,
      target: monaco.languages.typescript.ScriptTarget.Latest,
    });

    // Cargar tipos de React/JSX
    const reactTypes = `
      declare namespace React {
        function createElement(type: any, props?: any, ...children: any[]): any;
      }
    `;

    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      reactTypes,
      'react.d.ts'
    );
  };

  // Manejar cambios en el contenido del editor
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
};
