import React from 'react';
import Smurf from './Smurf';
import {connect, useSelector} from "react-redux"



 const SmurfList = ()=> {

    const state = useSelector(state=>state)
    console.log(state.smurfs)
    const isLoading = state.loading;
    const testSmurf = {
        id:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        name:'Poppa Smurf',
        position:'Village Leader',
        nickname: 'Pops',
        description: 'Papa is the practical village leader and the father figure of 100 or so young Smurfs. He is easily identified by his red Smurf hat, pants, and a shortly-trimmed white beard and moustache.'
    }

   
    
    return(<div className="listContainer">
        {!isLoading ? state.smurfs.map((smurf)=>{
           return <Smurf smurf={smurf}/>
        }) : <h3>Loading...</h3>}
    </div>);
}

const mapStateToProps = (state) =>{
    return {
      smurfs: [...state.smurfs],
      loading: state.loading,
      error: state.error
    }
  }

export default connect(mapStateToProps)(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.