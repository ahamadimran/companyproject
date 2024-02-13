import React from 'react'
import Company from './Company'

export default function Companies() {
    return (
        <div>
            <div class="container is-widescreen ">
                <div class="notification has-background-success-light mt-6">
                    <section class="section">
                        <h1 class="title">Featured</h1>
                        <Company />
                    </section>
                </div>
            </div>

        </div>
    )
}
