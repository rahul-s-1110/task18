import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    songsCategory:{} 
}

export const getSongsCategory = createAsyncThunk('getSongsCategory',async(body) =>{
    return axios.post("base url"+"End url",body,{
        headers:{
            Accept:'application/json',
        },
    })
    .then(res =>{
        return res.data;
    })
    .catch(err =>{
        return err?.response?.data;
    })
})

const userManagementSlice = createSlice({
    name:"userManager",
    initialState,
    reducers:{
        ResetSongsCategory : state =>{
            state.songsCategory = {};
        },
    },
    extraReducers: builder =>{
        builder.addCase(getSongsCategory.pending,state =>{
            // showLoader()
        })
        builder.addCase(getSongsCategory.fulfilled,(state,{payload})=>{
            // hideLoader();
            state.songsCategory = payload;
        }),
        builder.addCase(getSongsCategory.rejected,state =>{
            // hideLoader();
        })
    }
})

export const {
    ResetSongsCategory,
} = userManagementSlice.actions;

export const songsCategory = state => state.userManager.songsCategory;

export default userManagementSlice.reducer;