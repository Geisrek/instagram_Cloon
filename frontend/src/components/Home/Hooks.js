import { useState } from "react";
const useHome=()=>{
    const [more,setMore]=useState("less")
    
    
    return ({
        more:more,       
        setMore:setMore,
        
    })
}
export default useHome;