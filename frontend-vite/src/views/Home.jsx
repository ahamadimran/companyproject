import React from 'react'
import Hero from '../components/molecules/Hero'
import Companies from '../components/Companies'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Hero />
            <Link to="/details"> <button className="button">Button</button></Link>
            <Companies />
        </div>
    )
}
