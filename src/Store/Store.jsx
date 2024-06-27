import {configureStore} from "@reduxjs/toolkit";
import ProdcutSlice from "./ProdcutSlice";
export const store= configureStore({
    reducer:{
        product:ProdcutSlice,
    }
})
