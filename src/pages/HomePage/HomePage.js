import React from 'react'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'
import {homeObjOne, homeObjTwo} from './Data'

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Pricing/>
        </>
    )
}

export default HomePage
