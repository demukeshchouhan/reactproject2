import * as constant from "./const";
import axios from "axios";

// action creator for dog

export const getAllDogs = () => {
    const request = axios.get("https://reqres.in/api/users");

        return (dispatch => {
            return request.then((response) => (
                dispatch({
                    type : constant.GET_ALL_DOGS,
                    payload : response.data
                })
            ))
        })
};


export const addNewDog = (dog) => ({
    type : constant.ADD_NEW_DOG,
    payload : dog
})



const editDog = () => {
    
}



const filterDogs = () => {
    
}



const deleteDogs = () => {
    
}



const deleteAllDogs = () => {
    
}

