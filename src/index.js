import React from 'react';
import ReactDOM from 'react-dom/client';

import { Header, Footer } from './sections';
import { Main } from './Main';
import { GlobalStyle } from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);
