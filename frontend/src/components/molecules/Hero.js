import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../atoms/Search'

export default function Hero() {
    return (
        <div>

            <section class="hero is-medium has-background-primary-light">
                <div class="hero-body has-text-centered">
                    <p class="title">
                        Company Listing
                    </p>
                    <p class="subtitle">
                        A List of Companies Curated By YourCompany Club.
                    </p>

                    <Search/>
                    
                    <Link to="/form">
                    <button class="button is-large is-primary mt-6" >
                        <span class="icon is-medium">
                            <i class="fa fa-building"></i>
                        </span>
                        <span>List Your Company</span>
                    </button>

                    </Link>
                </div>
            </section>
        </div>
    )
}
