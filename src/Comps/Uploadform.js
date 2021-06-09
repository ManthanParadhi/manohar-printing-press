import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [price1, setPrice1] = useState("");
    const [price2, setPrice2] = useState("");
    const [price3, setPrice3] = useState("");
    const [submit, setSubmit] = useState(false)
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
                        {file && submit && <ProgressBar file={file} setFile={setFile} setSubmit={setSubmit} />}
                    </div>
                    <label className="price">
                        Price for 100:  
                        <input style={{margin:'1vw'}} type ='text' onChange={(e)=>{setPrice1(e.target.value.replace(/\D/g,''))}} value={price1} />
                    </label>
                    <label className="price">
                        Price for 500:  
                        <input style={{margin:'1vw'}} type ='text' onChange={(e)=>{setPrice2(e.target.value.replace(/\D/g,''))}} value={price2} />
                    </label>
                    <label className="price">
                        Price for 1000:  
                        <input style={{margin:'1vw'}} type ='text' onChange={(e)=>{setPrice3(e.target.value.replace(/\D/g,''))}} value={price3} />
                    </label>
                </form>
                <button className="input" onClick={()=>{
                    setSubmit(true);
                }}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default UploadForm;
