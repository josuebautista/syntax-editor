import { editor } from 'monaco-editor';

export const defaultTheme: editor.IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '#7ccf83' },
    { token: 'keyword', foreground: '#569CD6', fontStyle: 'bold' },
    { token: 'string', foreground: '#CE9178' },
    { token: 'number', foreground: '#B5CEA8' },
    { token: 'operator', foreground: '#D4D4D4' },
    { token: 'function', foreground: '#DCDCAA' },
    { token: 'type', foreground: '#4EC9B0' },
    { token: 'interface', foreground: '#4EC9B0' },
    { token: 'class', foreground: '#4EC9B0' },
    { token: 'enum', foreground: '#4EC9B0' },
    { token: 'typeParameter', foreground: '#4EC9B0' },
    { token: 'delimiter', foreground: '#DCDCDC' },
    { token: 'delimiter.bracket', foreground: '#DCDCDC' },
    { token: 'tag', foreground: '#569CD6' },
    { token: 'attribute.name', foreground: '#9CDCFE' },
    { token: 'attribute.value', foreground: '#CE9178' },
    { token: 'identifier.property', foreground: '#9CDCFE' },
    { token: 'variable', foreground: '#9CDCFE' },
    { token: 'variable.predefined', foreground: '#4FC1FF' },
  ],
  encodedTokensColors: [

  ],
  colors: {
    'editor.background': '#00020f',
    'editor.foreground': '#D4D4D4',
    'editorCursor.foreground': '#FFFFFF',
    'editor.lineHighlightBackground': '#2D2D2D',
    'editorLineNumber.foreground': '#858585',
    'editor.selectionBackground': '#264F78',
    'editor.inactiveSelectionBackground': '#3A3D41',
  },
};
