import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SpeechText from '../component/speechtext/SpeechText';
import TextSpeech from '../component/textspeech/TextSpeech';

const AppRouter = () => {
    return (
        <div className="App">
          <Routes>
            <Route path="/" element={ <TextSpeech/> } />
            <Route path="speech" element={ <SpeechText/> } />
          </Routes>
        </div>
      )
};

export default AppRouter;