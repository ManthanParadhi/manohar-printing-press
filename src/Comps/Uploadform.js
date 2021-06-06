import React, { useState } from 'react'

export const Uploadform = () => {
    const [file, setfile] = useState(null);
    const [error, seterror] = useState(null);
    const types = ['image/jpeg','image/png'];
    const changeHandler = (e) => {
        if (e.target.files[0] && types.includes(e.target.files[0].type)){
            setfile(e.target.files[0]);
            seterror('');
        }
        else{
            setfile(null); 
            seterror('Please select a file(jpeg or png)');
        }
    }
    
    return (
        <div>
            <form>
                <input type='file' onChange={changeHandler} />
                <div className="output">
                    {error && <div className="error">{ error }</div>}
                    {file && <div className="filename">{ file.name }</div>}
                </div>
            </form>
        </div>
    )
}
