import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../atoms/Search/Search'
import initialDetails from '../../data/initialDetails';

export default function Hero() {
    return (
        <div>

            <section className="hero is-medium has-background-primary-light">
                <div className="hero-body has-text-centered">
                    <p className="title">
                        Company Listing
                    </p>
                    <p className="subtitle">
                        A List of Companies Curated By YourCompany Club.
                    </p>

                    <Search details={initialDetails}/>

                    
                    <Link to="/form">
                    <button className="button is-large is-primary mt-6" >
                        <span className="icon is-medium">
                            <i className="fa fa-building"></i>
                        </span>
                        <span>List Your Company</span>
                    </button>

                    </Link>
                </div>
            </section>
        </div>
    )
}
