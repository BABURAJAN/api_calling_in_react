import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import math from "./app/reducers/mathReducer";
import user from "./app/reducers/userReducer";

export default  createStore(
    combineReducers({
        math,
         user
        }),
     {}, 
     applyMiddleware(logger)
    );
