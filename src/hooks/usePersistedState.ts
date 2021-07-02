import { useState, useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      setState(JSON.parse(storageValue))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}
