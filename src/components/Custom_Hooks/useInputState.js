import {useState} from "react";

export default (initialVal) => {
    const [value,setValue]=useState(initialVal);
    function handleChange(e){
        console.log("handleChange");
        setValue(e.target.value);
    }
    function reset(){
        setValue('');
    }
    return [value,handleChange,reset];
}

