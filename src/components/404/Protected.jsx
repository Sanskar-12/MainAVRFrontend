import React from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector";

import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const {user}=useSelector(state=>state.user)
    const id = sessionStorage.userId
    console.log(id);
    if (!id) {
        //console.log("fuck");
        return <Navigate to="/" ></Navigate>;
    }else{
        // console.log("bhakc");
        return children;
    }
    
}

export default Protected
