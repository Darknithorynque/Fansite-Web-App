import React from "react";
import { ReactDOM } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./movies.css";
import Series from "./tvShows";
import DirectedBy from "./directedBy";
import Cards from "./cards";
import { Link, Outlet, BrowserRouter, useNavigate,Route } from 'react-router-dom';


//Images
import m1 from "../images/m1.jpg";
import m2 from "../images/m2.jpg";
import m3 from "../images/m3.jpg";
import m4 from "../images/m4.jpg";
import m5 from "../images/m5.jpg";
import m6 from "../images/m6.jpg";
import m7 from "../images/m7.jpg";
import m8 from "../images/m8.jpg";
import m9 from "../images/m9.jpg";
import m10 from "../images/m10.webp";
import m11 from "../images/m11.jpg";
import m12 from "../images/m12.jpeg";
import m13 from "../images/m13.jpg";
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
import m30 from "../images/m30.jpg";
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






const Movies = (props) => {

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
         
         <h5>Movies</h5>

         <div className="form-floating genres">
            <select className="form-select-mini genres" id="selection" aria-label="Floating label select example"
                      onChange={e=> trying(e)}

            >
               <option className="xoption" value="1">Movies</option>
               <option className="xoption" value="2">TVShows</option>
               <option className="xoption" value="3">Directed by Elliot Page</option>
            </select>
         </div>
    
      </div>


             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m16}
            picture2={m17}
            picture3={m18}

            /> <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m19}
            picture2={m20}
            picture3={m21}

            />
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m23}
            picture2={m24}
            picture3={m25}

            />
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m26}
            picture2={m27}
            picture3={m28}

            />
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m29}
            picture2={m30}
            picture3={m31}

            />
   
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m38}
            picture2={m39}
            picture3={m40}

            />
             <Cards
            title1="Juno"
            title2="X"
            title3="arda"
            picture1={m42}
            picture2={m43}
            picture3={m44}

            />
         
      
            <div id="spacer"></div>

         <Footer/>          

  </div>
       
    )


    
}

export default Movies;