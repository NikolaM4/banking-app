'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)

  return (
    <section className="auth-form ">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer items-center gap-1 flex">
          <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1>{user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}</h1>
        </div>
      </header>
    </section>
  )
}

export default AuthForm