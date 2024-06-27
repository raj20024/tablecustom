import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { CiGlass } from "react-icons/ci";

///fetch Product
export const fetchProduct = createAsyncThunk(
    "fetchProduct", async (args, { rejectedWithValue }) => {
        const response = await fetch("https://dummyjson.com/products?limit=40&skip=0");
        try {
            const result = await response.json();
            //console.log(result)
            return result.products;
        } catch (error) {
            return rejectedWithValue(error)
        }
    }

)

//fetch category 

export const fetchCategory = createAsyncThunk(
    "fetchCategory", async (args, { rejectedWithValue }) => {
        const response = await fetch("https://api.escuelajs.co/api/v1/categories?offset=0&limit=10");
        try {
            const result = await response.json();
            //console.log(result)
            return result;
        } catch (error) {
            return rejectedWithValue(error)
        }
    }

)

//fetch category dummyjson

export const fetchCateDummyjson = createAsyncThunk(
    "fetchCateDummyjson", async (args, { rejectedWithValue }) => {
        const response = await fetch("https://dummyjson.com/products/categories");
        try {
            const result = await response.json();
            /// console.log(result)
            return result;
        } catch (error) {
            return rejectedWithValue(error)
        }
    }

)

///fetch New Arrivals
export const fetchArrivals = createAsyncThunk(
    "fetchArrivals", async (args, { rejectedWithValue }) => {
        const response = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10");
        try {
            const result = await response.json();
            //console.log(result)
            return result;
        } catch (error) {
            return rejectedWithValue(error)
        }
    }

)


export const productSlice = createSlice({
    name: "productData",
    initialState: {
        data: [],
        filteredProducts: [],
        filteredProductsMulti: [],
        catgoryData: [],
        catDataDummyjson: [],
        catgoryDataFilter: [],
        newArrivalData: [],
        popupData: [],
        loading: false,
        error: null,
        sortingOption: "",

    },
    reducers: {
        popupData: (state, action) => {
            //console.log(action.payload)
            state.popupData = action.payload;
        },
        searchByName: (state, action) => {
            console.log('type search', action.payload)
            console.log('type serch filter', state.filteredProducts)
            return {
                ...state,
                filteredProducts: [...state.data.filter((item) => {
                    return action.payload === ''
                      ? item
                      : item.title.toLowerCase().includes(action.payload.toLowerCase());
                  })]
            };
            console.log('type serch filter')
            // console.log(action.payload)
            // state.filteredProducts = state.data.filter((item) => {
            //     return action.payload === ""
            //         ? item : item.title.toLowerCase().includes(action.payload.toLowerCase())
            //         ;
            // })
            // console.log('product', state.data);
            // console.log('type search data', state.filteredProducts);
                 

        },
        filterProducts: (state, action) => {
           /// console.log(current(state).filteredProducts)

            //    state.filteredProducts =
            //    action.payload === ""
            //      ? current(state).data
            //      : current(state).data.filter((item) =>  item.title.toLowerCase() === action.payload.toLowerCase());

            state.filteredProducts = state.data.filter((item) => {
                return action.payload.toLowerCase() === ''
                    ? item
                    : item.title.toLowerCase().includes(action.payload.toLowerCase());
            })

            // return {
            //     ...state,
            //     filteredProducts: state.data.filter((item) => {
            //         return action.payload === ''
            //           ? item
            //           : item.title.toLowerCase().includes(action.payload.toLowerCase());
            //       })
            // };

        },
        filterProductsCat: (state, action) => {
            console.log(action.payload);
            console.log('category filter', state.filteredProducts)
            return {
                ...state,
                filteredProducts: [...state.data.filter((item) => {
                    return action.payload.length === 0
                        ? item
                        : action.payload.indexOf(item.category) > -1;
                })]
            };
            
            // state.filteredProducts=state.data.filter((item) => {
            //     return action.payload === ''
            //       ? item
            //       : action.payload.indexOf("beauty") > -1;
            //   })
            
        },
        multiFilter: (state, action) => {
           //console.log(state.filteredProductsMulti)
           // console.log(action.payload.catType, action.payload.typeName)
           console.log('all filter', state.filteredProducts.length)

            if(action.payload.searchTerm){
                return {
                    ...state,
                    filteredProducts: [...state.data.filter((item) => {
                        return action.payload === ''
                          ? item
                          : item.title.toLowerCase().includes(action.payload.searchTerm.toLowerCase());
                      })]
                };
            }

            if(action.payload.filter_cat){
                return {
                    ...state,
                    filteredProducts: [...state.data.filter((item) => {
                        return action.payload.length === 0
                            ? item
                            : action.payload.filter_cat.indexOf(item.category) > -1;
                    })]
                };
            }
           
            // const filtered = {
            //     title: action.payload.typeName,
            //     category: [action.payload.catType]
            // }
            // state.filteredProductsMulti = state.data.filter((item) => {
            //     return action.payload.catType === 0 || action.payload.typeName === ""
            //         ? item : action.payload.catType.indexOf(item.category) > -1 || item.title.toLowerCase().includes(action.payload.typeName.toLowerCase())
            //         ;
            // })
           

        },
        setSortingOption: (state, action) => {
            console.log(state.data)
            state.sortingOption = action.payload;
        },

        sortProducts: (state) => {
            state.filteredProductsMulti =
                state.sortingOption === "Price (Low to High)"
                    ? state.filteredProductsMulti.sort(function (a, b) {
                        return a.price - b.price;
                    })
                    : state.sortingOption === "Price (High to Low)"
                        ? state.filteredProductsMulti.sort(function (a, b) {
                            return b.price - a.price;
                        })
                        : state.filteredProductsMulti.sort(function (a, b) {
                            return b.rating.rate - a.rating.rate;
                        });
        },




    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                // console.log('reducer' + action.payload)
                state.loading = false;
                state.data = (action.payload)
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
            .addCase(fetchCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                // console.log('reducer' + action.payload)
                state.loading = false;
                state.catgoryData = (action.payload)
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
            .addCase(fetchCateDummyjson.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCateDummyjson.fulfilled, (state, action) => {
                // console.log('reducer' + action.payload)
                state.loading = false;
                state.catDataDummyjson = (action.payload)
            })
            .addCase(fetchCateDummyjson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })
            .addCase(fetchArrivals.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchArrivals.fulfilled, (state, action) => {
                // console.log('reducer' + action.payload)
                state.loading = false;
                state.newArrivalData = (action.payload)
            })
            .addCase(fetchArrivals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message
            })


    }
    // extraReducers:{
    //     [fetchProduct.pending]:(state)=>{
    //         state.loading=true;
    //     },
    //     [fetchProduct.fulfilled]:(state,action)=>{
    //         state.loading=false;
    //         state.data.push(action.payload)
    //     },
    //     [fetchProduct.rejected]:(state,action)=>{
    //         state.loading=false;
    //         state.error=action.payload.message
    //     }
    // }

})
export default productSlice.reducer;
export const { popupData, searchByName, filterProducts, filterProductsCat, multiFilter, sortProducts, setSortingOption } = productSlice.actions;