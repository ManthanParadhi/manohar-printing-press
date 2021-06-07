import React from 'react';
import { motion } from 'framer-motion';

export const Model = ({ selectedImg, setSelectedImg }) => {
    const deselect = (e) => {
        if (e.target.classList.contains('backdrop')){
            setSelectedImg(null);
        }
    }
    return (
            
            <motion.div className="backdrop" onClick={deselect} initial={{opacity:0}} animate={{opacity:1}} >
                
                    <motion.img src={selectedImg} alt=''
                    initial={{scale:0}}
                    animate={{scale:1}}
                    />
                
            </motion.div>
            
    )
}
