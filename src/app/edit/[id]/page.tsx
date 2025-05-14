'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import GlassContainer from '@/components/GlassContainer';
import SelectLanguage from '@/components/SelectLanguage';
import CustomEditor from '@/components/CustomEditor';

export default function CurrentTheme() {
  const { id = 'no id' } = useParams();

  return (
    <>
      <GlassContainer>
        <div className='flex items-center justify-between p-4'>
          <div>
            <h2 className='text-xl text-cente'>CurrentTheme Page</h2>
            <p className=''>ID: {id}</p>
          </div>
          <div>
            <SelectLanguage />
          </div>
        </div>
      </GlassContainer>
      <CustomEditor />
    </>
  );
}
