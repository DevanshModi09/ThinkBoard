import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import toast from 'react-hot-toast';
import NotesDetailPage from './pages/NoteDetailPage';

function App() {
  return (
    <div data-theme="coffee">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/create" element={<CreatePage></CreatePage>} />
        <Route path="/note/:id" element={<NotesDetailPage></NotesDetailPage>} />
      </Routes>
    </div>
  );
}
export default App;
