import React from "react";
import "./App.css";
import { Provider } from "react-redux";
//import Repository from "./components/repository.js";
import Readdata from "./components/readdata.js";
import { store } from "./store.js";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <Provider store={store}>
            <div className="main">
                <Readdata />
            </div>
        </Provider>
    );
}

export default App;
//------------------pastecreate-------------
import React from "react";
import "./App.css";
import AppRouter from "./components/Router.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store/Store.js";

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <AppRouter />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Provider>
  );
}

export default App;
