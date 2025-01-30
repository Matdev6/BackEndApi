// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext'; // Importa o AuthProvider
import PrivateRoute from './components/PrivateRoute'; // Importa o PrivateRoute
import MetaDiaria from './pages/MetaDiaria';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
                    <Route path='/metadiaria' element={
                        <PrivateRoute>
                            <MetaDiaria />
                        </PrivateRoute>
                    } />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
