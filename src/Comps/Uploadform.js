import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
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
        <div>
            <form>
                <label className="input">
                    <input type='file'onChange={changeHandler} />
                    <span>Add File</span>
                </label>
                <div className="output">
                    {error && <div className="error">{ error }</div>}
                    {file && <div className="filename">{ file.name }</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
                
            </form>
        </div>
    );
}

export default UploadForm;
