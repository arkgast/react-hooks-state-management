import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store'
import { initialState as count } from './store/Count'
import { initialState as todo } from './store/Todo'
import Counter from './containers/Counter'
import Todo from './containers/Todo'

const initialState = {
  count,
  todo
}

const App = () => {
  return (
    <Store.Provider initialState={initialState}>
      <Counter />
      <Todo />
    </Store.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
