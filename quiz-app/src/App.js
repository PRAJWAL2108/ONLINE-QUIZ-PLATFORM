import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';
import Quit from './components/Quit';
import QuitBetween from './components/QuitBetween';

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/play/instructions" exact component={QuizInstructions} />
      <Route path="/play/quiz" exact component={Play} />
      <Route path="/play/quizSummary" exact component={QuizSummary} />
      <Route path="/quit" exact component={Quit} />
      <Route path="/quitBetween" exact component={QuitBetween} />
    </Router>
  );
}

export default App;
