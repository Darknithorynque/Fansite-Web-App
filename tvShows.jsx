import React from "react";
import { ReactDOM } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Movies from "./movies";
import "./movies.css";
import DirectedBy from "./directedBy";
import Cards from "./cards";
import { useNavigate } from "react-router-dom";

//Images
import m1 from "../images/m1.jpg"; //Pit Pony, 2
import m2 from "../images/m2.jpg"; //Kent Masalları  2
import m3 from "../images/m3.jpg"; //To Rome With Love: Extras,2
import m4 from "../images/m4.jpg"; //Ghost Castle 2
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg"; //Gaycation , 2
import m7 from "../images/m7.jpg";//Going for Broke 1
import m8 from "../images/m8.jpg";
import m9 from "../images/m9.jpg"; //The Cured 1
import m10 from "../images/m10.webp"; //Trailer Park Boys ,2 
import m11 from "../images/m11.jpg";
import m12 from "../images/m12.jpeg";
import m13 from "../images/m13.jpg"; //Vanising Bees 3
import m14 from "../images/m14.webp";
import m15 from "../images/m15.jpg";
import m16 from "../images/m16.jpeg";
import m17 from "../images/m17.jpg";
import m18 from "../images/m18.webp";
import m19 from "../images/m19.jpg";
import m20 from "../images/m20.jpeg";
import m21 from "../images/m21.jpg";
import m23 from "../images/m23.jpg";
import m24 from "../images/m24.jpg";
import m25 from "../images/m25.jpg";
import m26 from "../images/m26.jpg";
import m27 from "../images/m27.jpg";
import m28 from "../images/m28.jpg";
import m29 from "../images/m29.jpg";
import m30 from "../images/m30.jpg"; //Ark: The Animated Series
import m31 from "../images/m31.jpg";
import m32 from "../images/m32.jpg";
import m33 from "../images/m33.jpg";
import m34 from "../images/m34.jpg";
import m35 from "../images/m35.jpg";
import m36 from "../images/m36.jpg";
import m37 from "../images/m37.jpg";
import m38 from "../images/m38.webp";
import m39 from "../images/m39.jpeg";
import m40 from "../images/m40.jpeg";
import m41 from "../images/m41.jpeg";
import m42 from "../images/m42.jpg";
import m43 from "../images/m43.jpg";
import m44 from "../images/m44.jpg";
import m45 from "../images/m45.jpg";



const Series = (props) =>{



   const navigate= useNavigate();

   function trying(e){

      const getValue= e.target.value;

         if(getValue==1){

               navigate("/movies");
         }

         if(getValue==2){

            navigate("/tvShows");
      }

      if(getValue==3){

         navigate("/directedBy");
   }

   }


    return(

 <div id="container">

        <Navbar/>


    <div id="xHeader">
       
       <h5>TVShows</h5>

       <div className="form-floating genres">
          <select className="form-select-mini genres" id="selection" aria-label="Floating label select example"
          onChange={e=>trying(e)}
          >
             <option className="xoption" value="1">Movies</option>
             <option className="xoption" value="2" selected>TVShows</option>
             <option className="xoption" value="3">Directed by Elliot Page</option>
          </select>
       </div>
  
    </div>


     <Cards
     title1="Juno"
     title2="X"
     title3="arda"
     picture1={m1}
     picture2={m2}
     picture3={m3}

     />
     
    <Cards
       title1="Juno"
       title2="X"
       title3="arda"
       picture1={m4}
       picture2={m41}
       picture3={m6}

       />

    <Cards
          title1="Juno"
          title2="X"
          title3="arda"
          picture1={m7}
          picture2={m8}
          picture3={m9}

          />

     <Cards
          title1="Juno"
          title2="X"
          title3="arda"
          picture1={m10}
          picture2={m11}
          picture3={m12}

          />

        <Cards
          title1="Juno"
          title2="X"
          title3="arda"
          picture1={m13}
          picture2={m14}
          picture3={m15}

          />



        <div id="div_top_hypers">  
  
          <div className="items" id="item3">
                <div className="card xcard">
                <img src={props.picture3} className="card-img-top ximg"/>
                <div className="card-body xcardBody">
                    <h5 className="card-title xcardHeader">{props.title3}</h5>
                </div>
                </div>
    
            </div>
       
        </div>   

               
         <div id="spacer"></div>
 

       <Footer/>          

</div> )
     

    
}

export default Series;