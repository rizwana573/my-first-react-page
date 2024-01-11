import React from "react";
import "./style.css";
import Button from "./Button";

const App= ()=>{
return (
    <div className="app">
    <Button name="Apple" color="red"/>
    <Button name="Banana" color="yellow" taste="sweet"/>
    </div>
)
}

export default App;