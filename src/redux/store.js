import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import createSagaMiddleware from "redux-saga";

// import thunk from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

// middlewares.push(thunk);
middlewares.push(sagaMiddleware);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
