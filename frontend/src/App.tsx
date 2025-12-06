import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './pages/Home';
import RequestAccess from './pages/RequestAccess';
import MyAccess from './pages/MyAccess';
import Approvals from './pages/Approvals';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/request" element={<RequestAccess />} />
            <Route path="/myaccess" element={<MyAccess />} />
            <Route path="/approvals" element={<Approvals />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
