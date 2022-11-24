import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { Thunk } from 'redux/store';
export interface AuthState {
  accessToken: string | null;
  isLoading: boolean;
}
interface Login {
  email: string;
  password: string;
}
const initialState: AuthState = {
  accessToken: null,
  isLoading: false
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});
export const { setAccessToken, setIsLoading } = authSlice.actions;
export default authSlice.reducer;
export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true));
    try {
      const response = await axios.post('https://reqres.in/api/login', data);

      dispatch(setAccessToken(response.data.token));
      return response;
    } catch (error) {
      return error as AxiosError;
    } finally {
      dispatch(setIsLoading(false));
    }
  };
