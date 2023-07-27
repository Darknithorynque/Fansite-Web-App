import React, { useState } from "react";
import Navbar from "../navbar";
import Footer2 from "./footer2";
import Card2 from "./card2";
import App4 from "../app";
import axios from "axios";
import "./more.css";



const More = (props) => {


    const [entry, setEntry] = useState("");
    const [bookData, setData] = useState([]);


    const whenSubmit = (e) => {

        e.preventDefault();
        console.log(entry)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${entry}&key=AIzaSyAIlZCO3yfrQgG8c_BUD_xACTNEP56FDMk`)
            .then(res => { setData(res.data.items); })
            .catch(err => { alert(err.message) })

    }

    //AIzaSyCl0S8zr5oh3_4AP7E1H6_X-Of2rb4_9Rg

    return (

        <div>
            <Navbar />

            <div className="ui segment searchbar" style={{ width: "400px" }}>
                <form className="ui form" onSubmit={whenSubmit}>
                    <div className="field">
                        <div className="ui massive icon input">
                            <input id="ourInput" type="text"
                                placeholder="Search Something"
                                onChange={(e) => setEntry(e.target.value)}
                                value={entry}
                            />
                            <button className="button"><i className="search icon"></i></button>
                        </div>
                    </div>
                </form>
            </div>

            <div id="card2">

                <Card2 book={bookData} />

            </div>

            <Footer2 />

        </div>

    )

}


export default More;