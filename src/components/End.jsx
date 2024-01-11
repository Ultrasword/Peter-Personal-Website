import {useState, useEffect, React} from 'react'

import {motion} from 'framer-motion'
import {styles} from '../styles'
import {BlocksCanvas} from './canvas'

import {EndsCanvas} from './canvas'

const End = () => {
    return (
        <section>
            {/* <BlocksCanvas/> */}
            <EndsCanvas></EndsCanvas>
        </section>
    )
}


export default End;