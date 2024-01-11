import React from "react";

/*const Button = (props) => { 
    return (
        <div className="button">
            <button>{props.name}</button>
            <p>It is {props.color} in color</p>
        </div>
    )
}*/

//with destructuring it can b written as follows
const Button = ({name, color, taste}) => { 
    return (
        <div className="button">
            <button>{name}</button>
            <p>It is {color} in color and it is {taste} to taste.</p>
        </div>
    )
}
export default Button;