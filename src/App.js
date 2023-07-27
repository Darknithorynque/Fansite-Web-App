import React from 'react';
import  ReactDOM  from 'react-dom';
import Navbar from './navbar';
import GetTouch from './getTouch';
import ContextElliot from './contextElliot';
import Footer from './footer';
import Home from './home';
import { Link, Route, Routes } from 'react-router-dom';
import  About  from './more/about';
import Movies from './more/movies';
import Series from './more/tvShows';
import DirectedBy from './more/directedBy';
import More from './more/more';


const App4 = (props) =>{


    const whenSubmit = (entry) => {

        console.log(entry)

    }

    return(
     
                <Routes>

                    <Route exac path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/movies' element={<Movies />} />
                    <Route path='/tvShows' element={<Series />} />
                    <Route path='/directedBy' element={<DirectedBy />} />
                    <Route path='/more' element={<More  />}></Route>




                </Routes>

        

    )

}

export default App4;

