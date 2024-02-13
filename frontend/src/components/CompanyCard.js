import React from 'react'
import { Link } from 'react-router-dom'


export default function CompanyCard(props) {
    return (
        <div class="box has-background-primary-light">
            <article class="media ">
                <div class="media-left">
                    <figure class="image is-96x96">
                        <img src={props.logo} alt="Logo" />
                    </figure>
                </div>
                <div class="media-content">
                    <div class="content">
                        <h4>{props.name}</h4>
                        <p class="description">
                            {props.description}
                        </p>
                    </div>
                </div>
                <div class="media-right">{props.type}</div>
            </article>
            <div class="columns is-gapless">
                <div class="column">
                    <span class="icon is-small">
                        <i class="fa fa-tag" aria-hidden="true"></i>
                    </span>
                    {props.tags.map((tag, id) => (
                        <span> {tag} </span>
                    ))}
                </div>
                <div class="column" align="right">
                    <span class="icon is-small">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                    </span>
                    {props.location}
                </div>
            </div>

        </div>
    )
}
