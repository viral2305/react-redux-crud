import * as types from "./actionType";
import axios from "axios";

import { API } from "../Utills/apiUrl";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const userDeleted = () => ({
    type: types.DELETE_USER,
});

const userAdded = () => ({
    type: types.ADD_USER,
})
const userUpdated = () => ({
    type: types.UPDATE_USER,
})
const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})
const getfulluserData = (user) => ({
  type: types.GET_FULL_USER_DATA,
  payload: user,
})

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${API}/user`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
    return function (dispatch) {
      axios
        .delete(`${API}/user/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userDeleted());
          dispatch(loadUsers());
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  export const addUser = (user) => {
    return function (dispatch) {
      axios
        .post(`${API}/user`,user)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userAdded());
          dispatch(loadUsers());
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  export const updateUser = (user,id) => {
    return function (dispatch) {
      axios
        .put(`${API}/user/${id}`,user)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userUpdated());
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  export const getSingleUser = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getUser(resp.data)); 
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  export const getFullUserData = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getfulluserData(resp.data)); 
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

