import React, { useState } from 'react'
import { Trial } from './Trial'

export const FormButton = () => {
    const [viewmf, setViewmf] = useState(false);
    return (
        <div>
            <button className="input" onClick={()=>{
                setViewmf(prev =>!prev)

            }}>
                New
            </button>
            {viewmf && <Trial/>}
        </div>
    )
}
