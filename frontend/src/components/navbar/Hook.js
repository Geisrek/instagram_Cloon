import {useNavigate}  from "react-router-dom";
import { useState } from "react";
const useNav=()=>{
const navigate=useNavigate()
return({
    navigate:navigate
})
}
export default useNav