import { createSlice } from "@reduxjs/toolkit";
import { AuthService } from "../services/AuthService";

const initialState = {
    user: AuthService.getCurrentUser(),
    isAuthenticated: AuthService.isAuthenticated(),
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            AuthService.logout();
            state.user = null;
            state.isAuthenticated = false;
        },
        updateUserPlaylist: (state, action) => {
            if (state.user) {
                state.user.playlist = action.payload;
            }
        },
        updateProfileSuccess: (state, action) => {
            state.user = action.payload;
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateUserPlaylist, updateProfileSuccess } = authSlice.actions;
export default authSlice.reducer;
