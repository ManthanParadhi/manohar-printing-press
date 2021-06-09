import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = ({setViewmf}) => {
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
            <div className="close">
                <svg width='20px' height='20px' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsxlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlspace="preserve">
				    <g>
				    <g>
						<path d="M257,0C116.39,0,0,114.39,0,255s116.39,257,257,257s255-116.39,255-257S397.61,0,257,0z M383.22,338.79
						c11.7,11.7,11.7,30.73,0,42.44c-11.61,11.6-30.64,11.79-42.44,0L257,297.42l-85.79,83.82c-11.7,11.7-30.73,11.7-42.44,0
						c-11.7-11.7-11.7-30.73,0-42.44l83.8-83.8l-83.8-83.8c-11.7-11.71-11.7-30.74,0-42.44c11.71-11.7,30.74-11.7,42.44,0L257,212.58
						l83.78-83.82c11.68-11.68,30.71-11.72,42.44,0c11.7,11.7,11.7,30.73,0,42.44l-83.8,83.8L383.22,338.79z"/>
				    </g>
			    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
			    </svg>
            </div>
                    
                <form>
                    <label className="input">
                        <input type='file'onChange={changeHandler} hidden/>
                        Add File
                    </label>
                    <div className="output">
                        {error && <div className="error">{ error }</div>}
                        {file && <div className="filename">{ file.name }</div>}
                        {file && submit && <ProgressBar file={file} setFile={setFile} setSubmit={setSubmit} setViewmf={setViewmf} />}
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
