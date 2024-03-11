 
 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 import axios from "axios";



export const checkEmailExistence = createAsyncThunk(
    'users/checkEmailExistence',
    async (email, thunkApi) => {
      try {
        const response = await axios.post('https://api.leadbud.io/checkEmail', {
          email: email,
        });
        return response.data.exists; 
      } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
      }
    }
  );



 export const signupUser = createAsyncThunk(
    'users/signup',


    async({ name, email, phoneNumber, password, confirm_password, agreement}, thunkApi) =>{
        try{

            const userTimeZone  = Intl.DateTimeFormat().resolvedOptions().timeZone;

            let URL = "https://api.leadbud.io/register";
            const params = {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                password_confirmation:confirm_password,
                agreement:agreement,
                userTimezoneOffset:userTimeZone,
            };

            const response = await axios.post(URL, params, {
                headers: { "Content-Type": "application/json"}
            });
            let data = await response.data;

            if( response.status === 200){
                localStorage.setItem("token", data.token);
                console.log('token', data.token)
                console.log('register data', data)
                return data 
            }
            else{
                return thunkApi.rejectWithValue(data)
            }
        }
        catch(e){
            console.log('Error', e.response.data)
            return thunkApi.rejectWithValue(e.response.data)
        }
    });


    export const SignupSlice = createSlice({
            name: 'signup',
            initialState: {
                token: "",
                isFetching: false,
                isSuccess: false,
                isError: false,
                errorMessage: ''

            },

            reducers: {
                clearState: (state) => {
                    state.isError = false;
                    state.isSuccess= false;
                    state.isFetching= false;


                    return state;
                }
            },

            extraReducers: (builder) => {
                builder
                .addCase(signupUser.fulfilled, (state, { payload}) => {

                    state.token = payload.token;
                    state.isFetching = false;
                    state.isSuccess = true;
                    state.isError = false;
                    return state;


                })
                .addCase(signupUser.rejected, (state, { payload }) => {
                    state.isFetching = false;
                    state.isSuccess = false;
                    state.isError = true;
                    state.errorMessage = payload.message;
                })
                .addCase(signupUser.pending, (state) => {
                    state.isFetching= true;
                })
            }

    });



    export const { clearState } = SignupSlice.actions;
    export const signupSelector = (state) => state.signup;
