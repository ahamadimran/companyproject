import React from 'react'
import Navigation from '../atoms/Navigation';
import Footer from '../atoms/Footer';

export default function Layout({ children }) {
    return (
        <div>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
