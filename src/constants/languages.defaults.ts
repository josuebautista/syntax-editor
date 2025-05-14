import { Languages } from '@/constants/languages.enum';

export const defaultValues: Record<Languages, string> = {
  [Languages.javascript]: `console.log("Hello, JavaScript!");`,
  [Languages.typescript]: `const message: string = "Hello, TypeScript!";\nconsole.log(message);`,
  [Languages.html]: `<h1>Hello, HTML!</h1>`,
  [Languages.css]: `body {\n  background-color: #f0f0f0;\n}`, 
  [Languages.python]: `print("Hello, Python!")`,
};
