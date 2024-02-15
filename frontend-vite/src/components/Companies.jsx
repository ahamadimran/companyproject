import React from 'react'
import Company from './molecules/Company'

export default function Companies() {
    return (
        <div>
            <div className="container is-widescreen ">
                <div className="notification has-background-success-light mt-6">
                    <section className="section">
                        <h1 className="title">Featured</h1>
                        <Company />
                    </section>
                </div>
            </div>

        </div>
    )
}
