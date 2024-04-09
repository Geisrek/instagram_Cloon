import { useState } from "react";
const useProfile=()=>{
    const [more,setMore]=useState("less")
    const [actives,setActives]=useState(["active","",""])
    
    return ({
        more:more,       
        setMore:setMore,
        actives:actives,
        setActives,setActives
    })
}
export default useProfile;