import { combineReducers } from "redux";
import { filterReduce } from "./filterReducer";
import { todosReducer } from "./todosReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers(
    {
        todosState: todosReducer,
        filerState: filterReduce,
        //ASYNC EXAMPLE (LOGIN UERS)
        userState: userReducer,
    }
)
