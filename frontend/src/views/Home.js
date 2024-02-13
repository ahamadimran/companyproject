import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Companies from '../components/Companies'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>

            <Navigation />
            <Hero />

            <Link to="/details">

                <button class="button">Button</button>

            </Link>

            <Companies />

        </div>
    )
}
