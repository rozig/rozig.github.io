import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { styled, createGlobalStyle } from 'styled-components';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Header from './components/Header';
import { colors } from './global';

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    position: relative;
    overflow: hidden;
    display: block;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}

  body {
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    background-color: ${colors.bg};
    overflow: hidden;
    display: block;
    height: 100%;
    color: ${colors.text};
    width: 100%;
    padding: 0;
    margin: 0;
  }

  body a {
    -webkit-transition: .5s all;
    -moz-transition: .5s all;
    transition: .5s all;
    text-decoration: none;
    color: ${colors.text};
    outline: 0;
    &:hover {
      color: ${colors.textHover};
    }
  }

  #root {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1200px;
  height: 100%;
  margin: auto;
  .page-content {
    position: relative;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const PageContent = styled.div`position: relative;`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Container>
    </React.Fragment>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
