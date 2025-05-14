'use client';

import { Languages } from '@/constants/languages.enum';
import { useLanguageStore } from '@/store/languageStore';

export default function SelectLanguage() {
  const { language, setlanguage } = useLanguageStore();
  return (
    <div className='flex flex-col gap-2 w-full max-w-sm'>
      <label
        htmlFor='language-select'
        className='text-sm font-medium text-slate-400'
      >
        Selecciona un lenguaje
      </label>
      <select
        id='language-select'
        value={language}
        onChange={(e) => setlanguage(e.target.value as Languages)}
        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 text-sm'
      >
        {Object.values(Languages).map((lang) => (
          <option key={lang} value={Languages[lang]} className='bg-slate-950 text-slate-300'>
            {lang[0].toUpperCase() + lang.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
