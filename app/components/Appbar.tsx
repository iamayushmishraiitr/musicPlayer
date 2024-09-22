"use client"
import React from 'react'
import { signIn, useSession } from "next-auth/react"
export const Appbar = () => {
    const session = useSession() ;
    
  return (
    <div>
        <h1>MUSIC</h1>
        <button
          onClick={()=>signIn()}
        >
            signIn
            </button>

    </div>
  )
}
