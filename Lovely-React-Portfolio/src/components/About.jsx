import REACT from "react";
import portrait from "/assets/images/portrait.png"
import "./About.css"

const About = () => {
    return (
        <main>
            <div className="imgHolder">
                <img src={portrait} className="centerImg"/>
            </div>
            <h2>About me</h2>
            <p>Hello and welcome to my first website build using REACT! My name is Lovely Tautua'a. I currently work at Stanford Health Care as a Service Desk Technician. One thing to note about me is that I am a HUGE gamer! I've been playing FPS and simulation games since I was 9 years old. I learned the basics of JS and Python when I was 12 through a program called Street Code Academy. Unfortunately I was only in this program for a year, but I joined the UC Berkeley Full Stack Web Dev program in hopes of accomplishing my childhood dream of becoming a game developer/engineer.</p>
        </main>
    )
}

export default About;