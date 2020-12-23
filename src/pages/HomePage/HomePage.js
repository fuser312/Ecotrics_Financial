import React from 'react'
import { InfoSection } from '../../components'
import Pricing from '../../components/Pricing/Pricing'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
        </>
    )
}

export default HomePage
