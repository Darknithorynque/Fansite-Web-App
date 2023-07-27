import React from "react";
import { ReactDOM } from "react";
import Navbar from "../navbar";
import Footer2 from "./footer2";
import elly3 from "../images/elly3.webp";
import Description from "./description";
import "./about.css";


const About = (props) => {


    return (

        <div style={{height:"2100px"}}>
            <Navbar />
            <div className="container">
                <div className="header">
                    <a href="https://www.biography.com/actors/kristen-stewart"><p>Famous Actor</p></a>
                    <h2 id="h-elliot">Elliot Page</h2>
                    <p id="description1">American actress Kristen Stewart is best known for the role of Bella Swan in the <br /> 'Twilight' film series.</p>
                    <div id="update">UPDATED: JUN 18, 2020</div>
                </div>

                <div className="entireBody">
                    <img id="picElly" src={elly3} alt="Elliot Page" />
                </div>
            </div>

            <Description
             text="Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot of Charlie's Angels. Kristen Jaymes Stewart was born on April 9, 1990, in 
            Los Angeles, California.
            Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot Her father, John — a stage manager, producer and director — and mother, Jules — a 
            scriptwriter — immersed their daughter in the Hollywood scene at an early age. "
            header="Who Is Kristen Stewart?" />

            <Description
             text="Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot of Charlie's Angels. Kristen Jaymes Stewart was born on April 9, 1990, in 
            Los Angeles, California.
            Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot Her father, John — a stage manager, producer and director — and mother, Jules — a 
            scriptwriter — immersed their daughter in the Hollywood scene at an early age. "
            header="Who Is Kristen Stewart?" />    

            <Description
             text="Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot of Charlie's Angels. Kristen Jaymes Stewart was born on April 9, 1990, in 
            Los Angeles, California.
            Kristen Stewart found work as a child actress before co-starring in the well-regarded 
            Panic Room. She became a teen icon with the role of Bella Swan in the Twilight films, her success carrying
            over to features like Snow White and the Huntsman. Stewart went on to star in Still Alice and Café Society,
            before signing up for a reboot Her father, John — a stage manager, producer and director — and mother, Jules — a 
            scriptwriter — immersed their daughter in the Hollywood scene at an early age. "
            header="Who Is Kristen Stewart?" />

            <Footer2 />
        </div>
        
    )
}

export default About;