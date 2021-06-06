import './App.css';
import UploadForm from './Comps/UploadForm';
import ImageGrid from './Comps/ImageGrid';
import { useState } from 'react';
import { Model } from './Comps/Model';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
