
import { useState } from 'react'
import TechStack from '../TechStack/TechStack'
import './webDevContainer.styles.scss'
import { AnimatePresence, motion } from 'framer-motion'
import ClickPopup from '../ClickPopup/ClickPopup'


function WebDevContainer() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>

            <p className='prof'
                onClick={() => setOpen((prev) => !prev)}>
                Web Developer
            </p>
            <ClickPopup />
            <AnimatePresence>
                {isOpen &&
                    <>
                        <div className='webdev-overlay' onClick={() => setOpen((prev) => !prev)} />
                        <motion.div

                            className='techstack-popover'
                            variants={{
                                exit: { opacity: 0 }
                            }}
                            transition={{ duration: 0.8, delay: 0 }}
                            exit='exit'
                        >
                            <TechStack bg={false} />
                            <div className='close-btn-container'>
                                <button onClick={() => setOpen((prev) => !prev)} className='close-btn'>
                                    &#10005;
                                </button>
                            </div>
                        </motion.div>
                    </>
                }
            </AnimatePresence>
        </>
    )
}

export default WebDevContainer