import React from "react";

const Card = ( {title,p1,p2,p3,buttonTitle,link} )=>{
    return(
        <div className="card">
            <h1 style={{color:'#520993'}}>{title}</h1>
            <p>{p1} <br /> {p2} <br /> {p3}</p>
            <button className="subscribe">{buttonTitle}</button>
        </div>
    )
}
export default Card;