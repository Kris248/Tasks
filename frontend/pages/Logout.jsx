import React, { useEffect } from 'react'
import authStore from '../stores/authStore'

const Logout = () => {
    const store = authStore();
    useEffect(()=> {
        store.logout();
    }, [])
  return (
    <h1>You are Logged out.</h1>
  )
}

export default Logout