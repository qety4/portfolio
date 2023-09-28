import React from 'react'
import './closeBtn.styles.scss'
import close from '../../assets/svg/close.svg'

function CloseBtn({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <div className='close-btn-container' onClick={()=>setOpen(false)}>
            <button className='close-btn'>
                <img src={close} className='close-svg' />
            </button>
        </div>
    )
}

export default CloseBtn