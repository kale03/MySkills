import './App.css';
import Content from './components/content/content';
import LoginForm from './components/content/loginPage/LoginForm/loginForm';
import Colections from './components/workPage/colections/colectionContainer/colections';
import Header from './components/workPage/header/header';
import Timer from './components/workPage/timer/Form/timer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
      </Content>
      <Footer/>
    </div>
  );
}

export default App;
