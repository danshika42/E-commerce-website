import {useState} from 'react';

export default (initialVal)=>{
    const [toggle,setToggle]=useState(initialVal);
    function handleToggle(){
        setToggle(!toggle);
    }
    return [toggle,handleToggle];
}