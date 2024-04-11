import { useState } from "react";
const useHome=()=>{
    const [more,setMore]=useState("less")
    const [toggle,setToggle]=useState("hide")
    
    return ({
        more:more,       
        setMore:setMore,
        toggle:toggle,
        setToggle:setToggle
    })
}
export default useHome;