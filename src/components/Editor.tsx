'use client';

import React, { useState } from 'react';
import { Editor as MonacoEditor} from '@monaco-editor/react';


export default function Editor() {
  const [value, setValue] = useState<string>('console.log(\'Hello world!\')');
  const handleOnChange = (newValue: string | undefined) => {
    if (!newValue) return;
    console.log('newValue', newValue);
    setValue(newValue)
  };
  
  return (
    <MonacoEditor
      height="500px"
      defaultLanguage="javascript"
      theme="vs-dark"
      value={value}
      onChange={(e) => handleOnChange(e)}
    />
  );
}
