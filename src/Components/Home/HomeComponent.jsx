import React from 'react'
import HeroSectioon from './HeroSection'
import WhatWeDo from './WhatWeDo'
import Footer from '../Footer/Footer'
import StatsSection from './CountAnimation'
import WorkWith from './WorkWith'

const HomeComponent = () => {
    return (
        <>
            <HeroSectioon />
            <StatsSection />
            <WhatWeDo />
            <WorkWith />
            <Footer />
        </>
    )
}

export default HomeComponent