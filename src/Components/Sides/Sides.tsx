
import { motion } from 'framer-motion'
import './sides.styles.scss'

function Sides({ hidden }: { hidden: boolean }) {

    return (
        <div className='sides'>
            <motion.div className='sides__email'
                variants={{
                    visible: { scale: 1.1 },
                    hidden: { scale: 0.8 }
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={{ duration: 0.7, ease: 'linear' }}
            >
                <p className='sides__email__text'>
                    yan.dartau.dev@gmail.com
                </p>
            </motion.div>
        </div>
    )
}

export default Sides