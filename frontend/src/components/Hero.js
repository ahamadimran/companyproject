import React from 'react'
import { Link } from 'react-router-dom/dist'

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

                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-large" type="text" placeholder="Search Companies" />
                        <span class="icon is-medium is-left">
                            <i class="fa fa-search"></i>
                        </span>
                    </div>

                    <Link></Link>
                    <button class="button is-large is-primary mt-6" >
                        <span class="icon is-medium">
                            <i class="fa fa-building"></i>
                        </span>
                        <span>List Your Company</span>
                    </button>
                </div>
            </section>
        </div>
    )
}
