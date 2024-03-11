
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password}, thunkApi) => {
        try{
            const params = {
                email: email,
                password: password
            };
            let URL = "https://api.leadbud.io/login";
            const response = await axios.post(URL, params, {
                headers: { "Content-Type": "application/json"}
            });

            let data = await response.data.data;
            let user = response.data.data.user;
            console.log('user', user)
            if(response.status === 200) {
                localStorage.setItem("token", data.token);
                console.log(data.token)
                console.log(data)
                thunkApi.dispatch(loginSlice.actions.setUser(user));
                return data;
            }
            else{
                return thunkApi.rejectWithValue(data);
            }
        }
        catch(error){
            console.log("Error", error.response.data.errors);
            thunkApi.rejectWithValue(error.response.data.errors);
             throw error.response.data.errors; 
        }
    });


 export  const loginSlice = createSlice({
        name: "login",
        initialState: {
            token: "",
            isFetching: false,
            isSuccess: false,
            isError: false,
            errorMessage: "",
            user: {},
        },
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload;
              },
            clearState: (state) => {
                state.isError= false;
                state.isSuccess= false;
                state.isFetching= false;
                return state;
            },
            logoutUser: (state) => {
                state.token = "";
                state.user = {};
                state.isError = false;
                state.isSuccess = false;
                state.isFetching = false;
                state.errorMessage = "";
                localStorage.removeItem("token"); 
              }
        },
        extraReducers: (builder) => {
            builder
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                 state.token = payload.token;
                state.isFetching = false;
                state.isSuccess = true;
                state.isError = false;
                localStorage.setItem('token', payload.token);
            
                console.log('token', payload.token)
                return state;
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.token = "";
                state.isFetching = false;
                state.isError = true;
                state.errorMessage = payload && payload.errors ? payload.errors : "Invalid Email or Password"; 


            }) 
            .addCase(loginUser.pending, (state, { payload }) => {
                state.isFetching = true;
            })
        }
    });


    export const { setUser } = loginSlice.actions;

    export const { clearState, logoutUser  } = loginSlice.actions;

    export const loginSelector = (state) => state.login;