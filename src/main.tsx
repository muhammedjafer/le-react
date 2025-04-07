import { ElementType, ReactElement, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reactImg from './assets/react.svg';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const heading: ReactElement<string, any> = (
    <>
        <img src={reactImg} alt="example" />
        <h1 className="">Hello, world</h1>
    </>
);

createRoot(document.getElementById('root')!).render(heading);
