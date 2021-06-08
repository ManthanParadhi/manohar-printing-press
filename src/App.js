import './App.css';
import UploadForm from './Comps/UploadForm';
import ImageGrid from './Comps/ImageGrid';
import { useState } from 'react';
import { Model } from './Comps/Model';
import { motion } from 'framer-motion';
import Navigation from './Comps/Navigation';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}} className="app">
      <div className={selectedImg && "blur"}>
        <Navigation/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
      </div>
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </motion.div>
  );
}

export default App;
