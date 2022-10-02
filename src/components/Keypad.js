// Code Keypad Component Here
import React from "react";

function Keypad (){

    function enterPass() {
        console.log('Entering password...')
    }

    return (
        <input type="password" onChange={enterPass} placeholder="Enter Password..."></input>
    )
}

export default Keypad;