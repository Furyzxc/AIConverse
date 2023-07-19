import {combineReducers} from "@reduxjs/toolkit";
import {api} from "../shared/api/api.ts";
import { dialogSlice } from "@entities/messages/model/slice.ts";

export const rootReducer = combineReducers({
    [dialogSlice.name]: dialogSlice.reducer,
    [api.reducerPath]: api.reducer
})