import React, {useState} from 'react'

const Try = () => {
    // var name="zain";
    const [name2,setName]= useState("rauf");
    const [flag,setFlag]=useState(false);
    
    const changeName=()=>{
        console.log("Entered Funcitons");
        if (flag==true){
            setFlag(false);
            setName("zain");
        }
        else{
            setFlag(true);
            setName("sana");
        }
        // if (name2=="rauf"){
        //     setName("usama");
        // }
        // else{
        //     setName("rauf");
        // }
        // setName("usama");
    }
    
    return (
        <>
            <h1 onClick={
                ()=>{setName("zain"); console.log("Habibibi!!");}
                }>{name2}</h1>
        </>
    )
}

export default Try
