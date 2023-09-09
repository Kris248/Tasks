import React, { useEffect } from 'react'
import authStore from '../stores/authStore'

const Logout = () => {
    const store = authStore();
    useEffect(()=> {
        store.logout();
    }, [])
  return (
    <h4>You are Logged out.</h4>
  )
}

export default Logout