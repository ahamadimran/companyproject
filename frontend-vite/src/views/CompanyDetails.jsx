import axios from "axios";
import React, { useEffect, useState } from "react";

export default function CompanyDetails(props) {

    const [company, setCompany] = useState([]);

    useEffect(() => {
        axios.get("/cropin.json").then((res) => {
            setCompany(res.data);
        });
    }, []);
    return (
        <div>
            {
                company && (
                    <div class="container is-widescreen ">
                        <div class="notification has-background-success-light mt-6">
                            <div class="box">
                                <article class="media ">
                                    <div class="media-left">
                                        <figure class="image is-96x96 ">
                                            <img src={company.logo} alt="Logo" />
                                        </figure>
                                    </div>

                                    <div class="media-content">
                                        <div class="content">
                                            <h4><a href=''>{company.name}</a></h4>
                                            <p>
                                                {company.description}

                                                {
                                                    company.services.map((service)=>(
                                                        service
                                                    ))
                                                }
                                            </p>
                                        </div>

                                        <div class="columns is-gapless">
                                            <div class="column">
                                                <span class="icon is-small">
                                                    <i class="fa fa-tag" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                            <div class="column">
                                                <span class="icon is-small">
                                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                </span>
                                                {company.location}
                                            </div>

                                        </div>
                                    </div>
                                </article>
                                <hr />

                                {/* {company.sections.map((sect, id) => (

                            <div class="section">
                                <div class="title" align="left">sect</div>
                                <p></p>
                                <hr />
                            </div>

                        ))} */}



                                <div class="section">
                                    <div class="title" align="left">Revenue Stream</div>
                                    <div class="columns" align="left">
                                        <div class="columns">
                                            <div class="column">
                                                <button class="button is-primary is-outlined is-rounded">Advertising</button>
                                            </div>
                                            <div class="column">
                                                <button class="button is-primary is-outlined is-rounded">Advertising</button>
                                            </div>
                                            <div class="column">
                                                <button class="button is-primary is-outlined is-rounded">Advertising</button>
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
