import { createStore, applyMiddleware, compose } from "redux";
import HomeReducers from "./reducer";
//import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

const enhancer = compose(applyMiddleware(thunk));
const store = createStore(HomeReducers, enhancer);

export { store };
