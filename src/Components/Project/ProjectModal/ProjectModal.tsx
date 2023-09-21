import { AnimatePresence, motion } from "framer-motion"

import { ModalProps } from '../../../types/types'
import './ProjectModal.styles.scss'



function ProjectModal({ modalProps }: { modalProps: ModalProps }) {

    const { isOpen, setOpen, projectInfo } = modalProps

    const { about, stack } = projectInfo

    return (
        <AnimatePresence>
            {isOpen &&
                <>
                    <motion.div
                        className='desc-modal'
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 },
                            exit: { opacity: 0 }
                        }}
                        transition={{ duration: 0.5, delay: 0 }}
                        initial='hidden'
                        animate='visible'
                        exit='exit'

                    >
                        <div className='modal__desc'
                            onClick={() => setOpen((prev) => !prev)}
                        >
                            <p className='modal__desc__about'>
                                {about}
                            </p>

                            <ul className='modal__desc__stack'>
                                {
                                    stack.map((item) =>
                                        <li key={item}>{item}</li>
                                    )
                                }
                            </ul>

                        </div>
                        <div className='close-btn-container'>
                            <button onClick={() => setOpen(false)} className='close-btn'>
                                &#10005;
                            </button>
                        </div>


                    </motion.div>
                </>
            }
        </AnimatePresence>
    )
}

export default ProjectModal