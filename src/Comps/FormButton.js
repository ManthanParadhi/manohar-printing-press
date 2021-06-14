import React, { useState } from 'react'
import UploadForm from './UploadForm';

export const FormButton = () => {
    const [viewmf, setViewmf] = useState(false);
    return (
        <div className="text-center" >
            <button className="input form" onClick={()=>{
                setViewmf(prev =>!prev)

            }}>
                New
            </button>
            {viewmf && <UploadForm setViewmf={setViewmf}/>}
        </div>
    )
}
