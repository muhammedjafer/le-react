import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {

    const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase'};

    return (
        <header className='header footer'>
            <h1 style={style}>
                hello the header of the react elements
            </h1> 
        </header>
    );
}

function Menu() {
    return (
        <div>
            <h2>Our menu</h2>
            <main className='menu'>
                <Pizza name='Pizza Spinaci' ingredient='tomato, mozarella, spinach, and more' photoName='pizzas/spinaci.jpg' price={10} />

                <Pizza name='Pizza Funghi' ingredient='tomato, mozarella' photoName='pizzas/funghi.jpg' price={12} />
            </main>
        </div>
    );
}

function Footer() {
    return <footer className='footer'>{new Date().toLocaleDateString()}. we are the world</footer>
}

function Pizza(props) {
   
    return (
        <div className='pizza'>
            <img src={props.photoName} alt="no-data" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.ingredient}</p>
                <span>{props.price}</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);