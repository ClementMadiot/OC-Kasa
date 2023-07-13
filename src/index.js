import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home';
import About from './pages/About/about';
import Loft from './pages/Loft/loft';
import Header from './components/Header/header';
import Error from './components/Error/erreur';
import Footer from './components/Footer/footer';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat';
  margin: 0;
  font-weight: 500;
}
main {
  margin: 0 1rem;
}
h1 {
  color: #ff6060;
}
`

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='/about' element={<About/>} />
        <Route path='/loft/:id' element={<Loft/>} />
      </Routes>
        <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

