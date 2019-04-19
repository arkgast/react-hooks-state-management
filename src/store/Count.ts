import Store from './'

export const initialState = 0

export const useCount = () => {
  const [{ count }] = Store.useStore()
  return count
}

// Actions
// The reducers live inside each action becauses we are using immer
export const useIncrement = () => {
  const [_, setState] = Store.useStore()
  return () =>
    setState((draft: any) => {
      draft.count++
    })
}

export const useDecrement = () => {
  const [_, setState] = Store.useStore()
  return () => 
    setState((draft: any) => {
      draft.count--
    })
}
