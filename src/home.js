import React from 'react';
import  ReactDOM  from 'react-dom';
import Navbar from './navbar';
import GetTouch from './getTouch';
import ContextElliot from './contextElliot';
import Footer from './footer';
import { Link, Route, Routes } from 'react-router-dom';


const Home = (props) =>{

    return(

        <div>
           
                <Navbar 
                name="Marko"
                
                />

                <ContextElliot />

                <GetTouch  />
                
                <Footer />
                

        </div>

    )

}

export default Home;