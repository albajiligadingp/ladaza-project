import { userConstants, cartConstants } from "./constants";
import axios from "../helpers/axios";

export const getAddress = () => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/user/getaddress`);
            dispatch({ type: userConstants.GET_USER_ADDRESS_REQUEST });
            if (res.status === 200) {
                const {
                    userAddress: { address },
                } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.GET_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};
export const addAddress = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/user/address/create`, { payload });
            dispatch({ type: userConstants.ADD_USER_ADDRESS_REQUEST });
            if (res.status === 201) {
                console.log(res);
                const {
                    address: { address },
                } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                    payload: { address },
                });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ADDRESS_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const addOrder = (payload) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`/addOrder`, payload);
            dispatch({ type: userConstants.ADD_USER_ORDER_REQUEST });
            if (res.status === 201) {
                console.log(res);
                const { order } = res.data;
                dispatch({
                    type: cartConstants.RESET_CART,
                });
                dispatch({
                    type: userConstants.ADD_USER_ORDER_SUCCESS,
                    payload: { order },
                });
                // const {
                //   address: { address },
                // } = res.data;
                // dispatch({
                //   type: userConstants.ADD_USER_ADDRESS_SUCCESS,
                //   payload: { address },
                // });
            } else {
                const { error } = res.data;
                dispatch({
                    type: userConstants.ADD_USER_ORDER_FAILURE,
                    payload: { error },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
};