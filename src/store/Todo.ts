import Store from './'

export const initialState = []

export const useTodo = () => {
  const [{ todo }] = Store.useStore()
  return todo
}

export const useAddTodo = () => {
  const [_, setState] = Store.useStore()
  return (todo: string) => {
    return setState((draft: any) => {
      draft.todo.push(todo)
    })
  }
}
