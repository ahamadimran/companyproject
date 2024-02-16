import React from 'react'
import logo from '../../assets/logo.png';


const URL = "http://localhost:5000";

// #TODO Company name should be? Capital
export default function CompanyCard(props) {
    return (
        <div className="box has-background-primary-light">
            <article className="media ">
                <div className="media-left">
                    <figure className="image is-96x96">
                        <img src={props.fileName ?  URL + "/logos/"+ props.fileName : logo} alt="Logo" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <h4>{props.name ? props.name : "No Name" }</h4>
                        <p className="description">
                            {props.description ? props.description : "No Description"}
                        </p>
                    </div>
                </div>
                <div className="media-right">{props.type}</div>
            </article>
            <div className="columns is-gapless">
                <div className="column">
                    <span className="icon is-small">
                        <i className="fa fa-tag" aria-hidden="true"></i>
                    </span>
                    {props.services.map((tag, id) => (
                        <span> {tag} </span>
                    ))}
                </div>
                <div className="column" align="right">
                    <span className="icon is-small">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    {props.location ? props.location : "No Location"}
                </div>
            </div>

        </div>
    )
}
