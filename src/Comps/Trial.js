import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export const Trial = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [price, setPrice] = useState("");
    const types = ['image/jpeg','image/png'];
    const changeHandler = (e) => {
        if (e.target.files[0] && types.includes(e.target.files[0].type)){
            setFile(e.target.files[0]);
            setError('');
        }
        else{
            setFile(null); 
            setError('Please select a file(jpeg or png)');
        }
    };
    
    return (
        <div className="text-center backdrop justify-center" style={{zIndex:'1'}}>
            <div className="white">
                <form>
                    <label className="input">
                        <input type='file'onChange={changeHandler} hidden/>
                        Add File
                    </label>
                    <div className="output">
                        {error && <div className="error">{ error }</div>}
                        {file && <div className="filename">{ file.name }</div>}
                        {file && <ProgressBar file={file} setFile={setFile} />}
                    </div>
                    <label className="price">
                        Price:  
                        <input style={{margin:'1vw'}} type ='text' onChange={(e)=>{setPrice(e.target.value.replace(/\D/g,''))}} value={price} />
                    </label>
                    
                </form>
            </div>
        </div>
    );
}



