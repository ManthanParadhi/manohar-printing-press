import './App.css';
import ImageGrid from './Comps/ImageGrid';
import { useState } from 'react';
import { Model } from './Comps/Model';
import { motion } from 'framer-motion';
import Admin from './Comps/Admin'
import Navigation from './Comps/Navigation';
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <Router>
      <Route path='/admin/admin' exact component={Admin}/>
    <motion.div initial={{scale:0}} animate={{scale:1}} className="app">
      <div className={selectedImg && "blur"}>
        <Navigation/>
        <ImageGrid setSelectedImg={setSelectedImg} />
      </div>
      {selectedImg && <Model selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </motion.div>
    
    </Router>
  );
}

export default App;
