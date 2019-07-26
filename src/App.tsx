import { Provider } from "mobx-react";
import React from "react";
import Router from "./routes/routes";
import RootStore from "./store/RootStore";
import { GlobalStyle } from "./styled/global";
import { ToastContainer } from "react-toastify";

const store = new RootStore();

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router />
      </Provider>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
