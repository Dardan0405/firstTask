import React from "react";
import { tedhenat } from "./elemntsList";
import './Perdorimi.css';
const Perdorimi = (props) => {
    return(
        <div className="Perdorimi">
            {tedhenat.map((props)=> { 
                return(
                    <div className="permbajtja">  
                    <div className="icon">{props.icon}</div>
                    <div className="text">
                   <h5>  {props.title}</h5>
                    <p>{props.description}</p>
                    </div>
                    </div>
                )

            

} ) }
        </div>
    )
} 
export default Perdorimi