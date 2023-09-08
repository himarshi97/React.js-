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
