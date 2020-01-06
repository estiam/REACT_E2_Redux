import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Redux';
import Incrementer from './Components/Incrementer';
import Counter from './Components/Counter';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Incrementer />
          <Counter />
        </div>
      </Provider>
    </div>
  );
}

export default App;
