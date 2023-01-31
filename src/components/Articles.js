import React from "react"
import location from "../../public/images/location.png"


export default function Articles(props){
    return(
        <>
            <article className="article">
                <img className="image" src={props.imageUrl} alt="Mount Fuji"/>
                <div className="articleSection">
                    <img className="locationIcon" src={location}/>
                    <span className="country">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank"><span className="locationMaps">View on Google Maps</span></a>
                    <h2 className="titleArticle">{props.title}</h2>
                    <p className="date">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.description}</p>
                </div>    
            </article>
            <div className="line">
                <div className="border-line"></div>
            </div>
        </>
    )
}