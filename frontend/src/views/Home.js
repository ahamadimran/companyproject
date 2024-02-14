import React from 'react'
import Navigation from '../components/atoms/Navigation'
import Hero from '../components/molecules/Hero'
import Companies from '../components/Companies'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Hero />
            <Link to="/details"> <button class="button">Button</button></Link>
            <Companies />
        </div>
    )
}
