import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import NavbarHeader from '../NavbarHeader'
import TextHeader from '../TextHeader'

export default function Layout({ children }) {
    return (
        <>
        <NavbarHeader/>
        <Header/>
        
        <div className="container" >
            {children}
        </div>
        <Footer/>
        </>
    )
}
