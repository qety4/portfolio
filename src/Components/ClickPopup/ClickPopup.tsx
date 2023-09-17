
import { motion } from 'framer-motion'
import './clickPopup.styles.scss'
import ArrLeft from '../../assets/svg/arrow-left.svg'

function ClickPopup() {


    return (
        <motion.div className='click-dialog'
            variants={{
                hidden: { opacity: 0, y: 3 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
        >
            <p>
                click !
                <br />
                <img src={ArrLeft} alt="" />
            </p>
        </motion.div>
    )
}

export default ClickPopup