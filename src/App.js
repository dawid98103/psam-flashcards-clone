import HomePage from './pages/HomePage';
import FlashcardsCreate from './pages/FlashcardsCreate';
import FlashcardsList from './pages/FlashcardsList';
import FlashcardLearn from './pages/FlashcardLearn';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashcards/create" element={<FlashcardsCreate />} />
        <Route path="/flashcards/list" element={<FlashcardsList />} />
        <Route path="/flashcards/learn/:id" element={<FlashcardLearn />} />
      </Routes>
    </div>
  );
}

export default App;
