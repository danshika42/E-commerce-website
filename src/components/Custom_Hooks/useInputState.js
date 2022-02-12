import {useState} from "react";

export default (initialVal) => {
    const [value,setValue]=useState(initialVal);
    function handleChange(e){
        setValue(e.target.value);
    }
    function reset(){
        setValue('');
    }
    return [value,handleChange,reset];
}

