import React from "react";
import { ReactDOM } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./movies.css";
import Movies from "./movies";
import CardPic1 from '../images/rainbow.jpg';


const Cards = (props) => {



    return(

    <div id="div_top_hypers">  

            <div className="items">
                <div className="card xcard">
                <img src={props.picture1} className="card-img-top ximg"/>
                <div className="card-body xcardBody">
                    <h5 className="card-title xcardHeader">{props.title1}</h5>
                </div>
                </div>
    
            </div>
            <div className="items" id="item2">
                <div className="card xcard">
                <img src={props.picture2} className="card-img-top ximg"/>
                <div className="card-body xcardBody">
                    <h5 className="card-title xcardHeader">{props.title2}</h5>
                </div>
                </div>
    
            </div>
            <div className="items" id="item3">
                <div className="card xcard">
                <img src={props.picture3} className="card-img-top ximg"/>
                <div className="card-body xcardBody">
                    <h5 className="card-title xcardHeader">{props.title3}</h5>
                </div>
                </div>
    
            </div>

    </div>   
    )


    
}

export default Cards;