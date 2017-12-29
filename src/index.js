import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from "./components";
import store from "./store";

// import { getAllDogs } from "./actions/DogActions";

store.subscribe(() => {
  console.log("store", store.getState());
});

// store.dispatch(getAllDogs());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
);





