import axios from 'axios';

export const START_SMURF = "START_SMURF";
export const SUCCESS_SMURF = "SUCCESS_SMURF";
export const FAILURE_SMURF = "FAILURE_SMURF";
export const SMURF_ADD = "SMURF_ADD";
export const SMURF_ERROR = "SMURF_ERROR";

export const fetchSmurfs = () => {
    return (dispatch) =>{
        dispatch({type: START_SMURF})
        
        axios
            .get("http://localhost:3333/smurfs")
            .then((res)=>{
                console.log(res)
                dispatch(({type: SUCCESS_SMURF, payload: res.data}))
            })
            .catch((err)=>{
                console.log(err)
                dispatch({type: FAILURE_SMURF, payload: err})
            })
    }
}

export const addSmurf = (data) =>{
    return ({type: SMURF_ADD, payload: data})
}

export const errorSmurf = (data)=>{
    return ({type: SMURF_ERROR, payload: data})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.