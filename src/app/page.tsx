'use client';

import { useRouter } from 'next/navigation';
import { generateRandomId } from '@/logic/generateId';

export default function Home() {
  const router = useRouter();

  const createNewTheme = () => {
    const id = generateRandomId();
    router.push(`/edit/${id}`);
  };

  return (
    <section>
      <h1 className='text-4xl font-semibold'>Main Page</h1>
      <div className='flex justify-center'>
        <button
          onClick={createNewTheme}
          className='px-4 py-2 bg-indigo-700 text-slate-200 rounded-lg hover:scale-110 trnasition duration-200'
        >
          Create new theme
        </button>
      </div>
    </section>
  );
}
