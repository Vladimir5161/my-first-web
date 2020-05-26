import { stopSubmit, reset } from "redux-form";
import { authAPI } from "../app/api/api";
import { ErrorMessage, Warning } from "./DataReducer";
const initialState = {
    isAuth: false,
    keyAuth: null,
    isCreated: false,
    inputField: "loginInput",
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ONPASSCHECKSUCCESS":
            return {
                ...state,
                isAuth: (state.isAuth = true),
                keyAuth: (state.keyAuth = action.KeyAuth),
                inputField: (state.inputField = "loginInputSuccess"),
            };
        case "LOGOUT":
            return {
                ...state,
                isAuth: (state.isAuth = false),
                keyAuth: (state.keyAuth = null),
                inputField: (state.inputField = "loginInput"),
            };
        case "CREATED":
            return {
                ...state,
                isCreated: true,
                inputField: (state.inputField = "loginInputSuccess"),
            };
        case "CREATEDDEFAULT":
            return {
                ...state,
                isCreated: false,
                inputField: (state.inputField = "loginInput"),
            };
        default:
            return state;
    }
};

export const Created = () => ({ type: "CREATED" });
export const CreatedOnDefault = () => ({ type: "CREATEDDEFAULT" });
export const onPassCheckSuccess = (KeyAuth) => ({
    type: "ONPASSCHECKSUCCESS",
    KeyAuth,
});
export const LoginOut = () => ({ type: "LOGOUT" });

export const Auth = () => async (dispatch, getState) => {
    let responce = await authAPI.isLogged();
    if (responce !== null || undefined) {
        let KeyAuth = Object.keys(responce);
        if (Object.values(responce)[0] === true) {
            dispatch(onPassCheckSuccess(KeyAuth[0]));
        } else {
            dispatch(LoginOut());
        }
    } else {
        dispatch(LoginOut());
    }
};

export const LogOut = (keyFirebase) => async (dispatch) => {
    await authAPI.logOut(keyFirebase);
    await dispatch(LoginOut());
};

export const onPassCheckClick = (addLogin, addPassword) => async (dispatch) => {
    let responce = await authAPI.getAccounts();
    let accounts = Object.values(responce);
    if (accounts.some((el) => el.login === addLogin)) {
        let account = accounts.filter((el) => el.login === addLogin);
        if (account.some((el) => el.password === addPassword)) {
            let auth = true;
            await authAPI.loginIn(auth);
            await dispatch(Auth());
            dispatch(reset("inputPassword"));
            dispatch(reset("addContent"));
        } else {
            dispatch(ErrorMessage("wrong Login or Password"));
        }
    } else {
        dispatch(ErrorMessage("wrong Login or Password"));
    }
};

export const CreateAccount = (addLogin, addPassword) => async (dispatch) => {
    let responce = await authAPI.getAccounts();
    let user = {
        login: addLogin,
        password: addPassword,
    };
    if (responce === null) {
        authAPI.createAccount(user);
        dispatch(reset("create account"));
    } else if (Object.values(responce).length >= 5) {
        dispatch(Warning("max count of users has been reached"));
        dispatch(reset("create account"));
    } else {
        let accounts = Object.values(responce);

        try {
            if (
                accounts.some((el) => el.login !== addLogin) ||
                accounts.length === 0
            ) {
                authAPI.createAccount(user);
                dispatch(reset("create account"));
                dispatch(Created());
            } else {
                dispatch(reset("create account"));
                dispatch(
                    stopSubmit("create account", {
                        _error: "this login was already taken",
                    })
                );
            }
        } catch {
            dispatch(
                stopSubmit("create account", { _error: "something went wrong" })
            );
        }
    }
};
export default AuthReducer;
