import React from "react";


const Description = (props) => {



    return(

        <>
            <div style={{width:"700px", height:"280px",
                marginLeft: "35px",
                marginBottom:"75px",
                position: "relative",
                top: "-1090px",
                right: "25%",
                left: "25%",
                transform: "translate("-25%","-25%")",
                borderBottom:"wheat solid 3px"}}>

                <h3 style={{fontSize:"32px", fontWeight:"900", display:"inline-block", textAlign:"left", fontFamily:"sans-serif"}}>{props.header}</h3>
                <p  style={{fontSize:"15px", fontFamily:"initial"}}>{props.text}</p>
                
            </div>
        
        
        </>
    )
}


export default Description;

