import React, { useMemo, useContext } from 'react'
import { useImmer } from 'use-immer'

interface IProps {
  children: any,
  initialState: any
}

// Create a new store context for this store instance
const context = React.createContext<any | null>(null)

// Make a provider that takes an initial state
const Provider: React.SFC<IProps> = ({ children, initialState = {} })  => {
  // useImmer will do
  const [state, setState] = useImmer(initialState)

  // Memoize the context value so it only updates when the state changes
  const contextValue = useMemo(() => [state, setState], [state])

  // Pass the context down
  return <context.Provider value={contextValue}>{children}</context.Provider>
}

// This is basically a factory for a new store instance
const useStore = () => useContext(context);

export default {
  Provider,
  useStore
}
