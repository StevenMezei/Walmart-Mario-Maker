import React from 'react';
import { createRoot } from 'react-dom/client';
import './globals.scss';
import Home from './views/home';

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Home />);