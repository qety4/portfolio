import React from 'react'
import './techName.styles.scss'
import { motion } from 'framer-motion'


function TechName({ name }: { name: string }) {


    return (
        <motion.div className='tech-name'
            variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
            }}
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.9, delay: 0.5 }}
        >
            <p>{name}</p>
        </motion.div>
    )
}

export default TechName