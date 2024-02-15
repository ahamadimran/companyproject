import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from '../assets/logo.png';


const URL = "http://localhost:5000";

export default function CompanyDetails() {

    const [company, setCompany] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(URL + "/api/company/fetch/" + id).then((res) => {
            console.log(res.data);
            setCompany(res.data);
        });
    }, []);



    return (
        <div>
            {
                company && (
                    <div className="container is-widescreen ">
                        <div className="notification has-background-success-light mt-6">
                            <div className="box">
                                <article className="media ">
                                    <div className="media-left">
                                        <figure className="image is-96x96 ">
                                            <img src={company.fileName ? URL + "/logos/" + company.fileName : logo} alt="Logo" />

                                        </figure>
                                    </div>

                                    <div className="media-content">
                                        <div className="content">
                                            <h4><a href={company.website}>{company.name}</a></h4>
                                            <p>
                                                {company.description}
                                            </p>
                                        </div>

                                        <div className="columns is-gapless">
                                            <div className="column">
                                                <span className="icon is-small">
                                                    <i className="fa fa-tag" aria-hidden="true"></i>
                                                </span>

                                                {company.services}

                                                {/* .map((tag, id) => (
                                                    <span key={id}> {tag} </span>
                                                ))} */}


                                            </div>
                                            <div className="column">
                                                <span className="icon is-small">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </span>
                                                {company.location}
                                            </div>

                                        </div>
                                    </div>
                                </article>
                                <hr />
                                <div className="section">
                                    <div className="title" align="left">Revenue Stream</div>
                                    <div className="columns" align="left">
                                        <div className="columns">
                                            <div className="column">
                                                <button className="button is-primary is-outlined is-rounded">Advertising</button>
                                            </div>
                                            <div className="column">
                                                <button className="button is-primary is-outlined is-rounded">Advertising</button>
                                            </div>
                                            <div className="column">
                                                <button className="button is-primary is-outlined is-rounded">Advertising</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}
