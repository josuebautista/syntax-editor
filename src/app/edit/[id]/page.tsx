'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Editor from '@/components/Editor'

export default function CurrentTheme() {
  const { id = 'no id' } = useParams()
  return (
    <>
      <div className='py-4'>
        <h2 className='text-xl text-cente'>CurrentTheme Page</h2>
        <p className=''>ID: {id}</p>
      </div>
      <Editor />
    </>
  )
}
