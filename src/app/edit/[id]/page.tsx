'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Editor from '@/components/Editor'
import GlassContainer from '@/components/GlassContainer'

export default function CurrentTheme() {
  const { id = 'no id' } = useParams()
  return (
    <>
      <GlassContainer>
        <h2 className='text-xl text-cente'>CurrentTheme Page</h2>
        <p className=''>ID: {id}</p>
      </GlassContainer>
      <Editor />
    </>
  )
}
