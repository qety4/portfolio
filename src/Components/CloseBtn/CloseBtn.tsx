import React from 'react'
import './closeBtn.styles.scss'


function CloseBtn({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

    return (
        <div className='close-btn-container' onClick={()=>setOpen(false)}>
            <button className='close-btn'>
                &#10005;
            </button>
        </div>
    )
}

export default CloseBtn