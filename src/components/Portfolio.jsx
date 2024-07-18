import REACT from "react";
import trip from  "/assets/images/TailorMyTrip1.png"
import flight from "/assets/images/FlightQuest.png"
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className="container">
                
                <div className="card">
                    <h3 className="myWork">TailorMyTrip</h3>
                <a href="https://stgowf.github.io/TailorMyTrip/index.html" target="_blank"><img src={trip}/></a>
            </div>
                <div className="card">
                    <h3 className="myWork">FlightQuest</h3>
                <a href="https://flightquest-e755c2dda8ba.herokuapp.com/" target="_blank"><img src={flight}/></a>
                    </div>
        </div>
    )
}

export default Portfolio;