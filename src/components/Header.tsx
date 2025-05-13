'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { generateRandomId } from '@/logic/generateId'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Header() {
  const router = useRouter();

  const handleNewTheme = () => {
    const id = generateRandomId();
    router.push(`/edit/${id}`);
  }
  return (
    <header className='w-full py-5'>
      <div className='max-w-7xl mx-auto flex justify-between'>
        <Link href='/' className='text-3xl font-semibold text-slate-300 hover:text-indigo-300 transition duration-200'>
          Syntax Editor
        </Link>
        <nav>
          <ul className='flex gap-4'>
            <li>

            </li>
            <li>
              <button onClick={handleNewTheme} className='text-slate-300 hover:text-indigo-300 transition duration-200'>
                New
              </button>
            </li>
            <li>
              {/* <a href='#' className='text-slate-300 hover:text-indigo-300 transition duration-200'>
                My Themes
              </a> */}
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
