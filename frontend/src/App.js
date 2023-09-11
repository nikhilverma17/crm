import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Screen/LandingPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyNotes from './Screen/Mydata/MyNotes';
import LoginScreen from './Screen/LoginScreen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen/RegisterScreen';
import CreateNote from './Screen/CreateNote/CreateNote';
import SingleNote from './Screen/SingleNote'
import { useState } from 'react';
import ProfileScreen from './Screen/ProfileScreen/ProfileScreen';

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/mydata" element={<MyNotes search={search} />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
