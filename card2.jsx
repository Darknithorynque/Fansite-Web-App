import React from "react";
import More from "./more";
import noPic from "../images/elliot.jpg"



function Card2({book}) {



console.log(book)

    
    return(

        <>
        {
        book.map((item) => {




            let pic = (item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail) ;


            

         

            


            let content = item.volumeInfo.authors&& item.volumeInfo.authors[0];

            return(

             <>
                <div id="div_top_hypers" key={item.accessInfo.id} style={{ marginBottom:"60px", textAlign:"center", justifyContent:"center", display:"flex", position:"relative", 
                 marginLeft:"-290px",
                }}
                >  

                    <div className="items" >
                        <div className="card xcard">
                        <img src={pic} className="card-img-top ximg"/>
                        <div className="card-body xcardBody">
                            <h5 className="card-title xcardHeader">{content}</h5>
                        </div> 
                        </div>

                    </div>
              </div>
            
            </>  )
     
    } 


    )}
    
    </>
)


}

export default Card2;