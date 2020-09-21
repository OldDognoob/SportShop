import React from 'react';
//components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
//redux
import {createStore} from "redux";
import reducer from "../src/Reducer/reducer";
import {Provider} from "react-redux";
//store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);



function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <CartContainer/>
    </Provider>
  );
}

export default App;
