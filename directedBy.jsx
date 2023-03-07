import React, { createElement } from "react";
import ReactDOM  from "react-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import Movies from "./movies";
import "./movies.css";
import Cards from "./cards";
import { useNavigate } from "react-router-dom";


//images
import m32 from "../images/m32.jpg"
import m33 from "../images/m33.jpg"
import m34 from "../images/m34.jpg"
import m35 from "../images/m35.jpg"
import m36 from "../images/m36.jpg"
import m37 from "../images/m37.jpg"






const DirectedBy = () =>{

    const router= useNavigate();

    function trying(e){
 
       const getValue= e.target.value;
 
          if(getValue==1){
 
                router("/movies");
          }
 
 
          if(getValue==2){
 
             router("/tvShows");
       }
 
          if(getValue==3){
 
             router("/directedBy");
       }
 
   
 
    }

    return(

        <div id="container">

          <Navbar/>


      <div id="xHeader">
         
         <h5 style={{fontSize:"50px" , letterSpacing:"2px", wordSpacing:"3px"}}>Directed By <br /> Elliot Page</h5>

         <div className="form-floating genres" style={{top:"-50px"}}>
            <select className="form-select-mini genres" id="selection" aria-label="Floating label select example"
                      onChange={e=> trying(e)}

            >
               <option className="xoption" value="1">Movies</option>
               <option className="xoption" value="2">TVShows</option>
               <option className="xoption" value="3" selected>Directed by Elliot Page</option>
            </select>
         </div>
    
      </div>
               

                <Cards
            title1="Umbrella 2021"
            title2="X"
            title3="arda"
            picture1={m32}
            picture2={m33}
            picture3={m34}

            />
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m35}
            picture2={m36}
            picture3={m37}

            />

            <div id="spacer"></div>


                <Footer/>

        </div>

    )
}

export default DirectedBy;
