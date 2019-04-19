import React from 'react';
import ReactDOM from 'react-dom';

import Store from './store'
import { initialState as count } from './store/Count'
import Counter from './containers/Counter'

const initialState = {
  count
}

const App = () => (
  <Store.Provider initialState={initialState}>
    <Counter />
  </Store.Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
