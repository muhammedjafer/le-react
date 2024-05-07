import React from "react";
import "./index.css";
import pizzaData from "./data.js";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

    return (
        <header className="header footer">
            <h1 style={style}>hello the header of the react elements</h1>
        </header>
    );
}

function Menu() {
    const pizzaList = pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name} />);

    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className="pizzas">{pizzaList}</ul>
        </main>
    );
}

function Footer() {
    return <footer className="footer">{new Date().toLocaleDateString()}. we are the world</footer>;
}

function Pizza({pizza}) {
    return (
        <li className="pizza">
            <img src={pizza.photoName} alt="no-data" />
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredient}</p>
                <span>{pizza.price}</span>
            </div>
        </li>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);