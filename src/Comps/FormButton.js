import React, { useState } from 'react'
import UploadForm from './UploadForm';

export const FormButton = () => {
    const [viewmf, setViewmf] = useState(false);
    return (
        <div>
            <button className="input" onClick={()=>{
                setViewmf(prev =>!prev)

            }}>
                New
            </button>
            {viewmf && <UploadForm setViewmf={setViewmf}/>}
        </div>
    )
}
