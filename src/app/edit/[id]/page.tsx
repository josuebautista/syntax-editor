'use client'

import React from 'react'
import { useParams } from 'next/navigation'
// import Editor from '@/components/Editor'
import MonacoEditor from '@/components/MonacoEditor'
import GlassContainer from '@/components/GlassContainer'
import { useLanguageStore } from '@/store/languageStore'
import SelectLanguage from '@/components/SelectLanguage'

export default function CurrentTheme() {
  const { id = 'no id' } = useParams()
  const language = useLanguageStore((state) => state.language)

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
      <MonacoEditor
        //language={language}
      />
    </>
  )
}
