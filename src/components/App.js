import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import FindOutMore from '../pages/FindOutMore';
import Contact from '../pages/Contact';
import ActionModal from './ActionModal';

const App = () => {
    const [trigger, setTrigger] = useState(false);
    const handleAction = (action = true) => {
        setTrigger(action);
    }

    return (
        <>
            <Header triggerAction={handleAction} />
            <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/find-out-more" element={<FindOutMore triggerAction={handleAction} />} />
                <Route path="/" element={<Homepage triggerAction={handleAction} />} />
            </Routes>
            <ActionModal trigger={trigger} triggerAction={handleAction} />
            <Footer triggerAction={handleAction} />
        </>            
    );
}

export default App;
