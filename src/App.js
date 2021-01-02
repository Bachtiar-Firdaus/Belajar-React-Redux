import React from "react";
import { Provider } from "react-redux";

import ControlledForm from "./ControlledForm";
import store from "./app/store";
// import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <Provider store={store}>
        <ControlledForm />
      </Provider>
    </div>
  );
}

export default App;
