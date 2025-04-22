import React from 'react'
import { useStore } from '../store/CreatZustand'

export default function SignUp() {
  const setLogin = useStore(state => state.setLogin)
  setLogin(true)
  return (
    <div>SignUp</div>
  )
}
