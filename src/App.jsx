// import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our menu</h2>
//       <div>
//         {pizzaData.map((pizza) => (
//           <Pizza
//             pizzaObj={pizza}
//             key={pizza.name}
//           />
//         ))}
//       </div>
//       {/* <Pizza
//         name="Pizza Margherita"
//         ingredients="Tomato and mozarella"
//         price={10}
//         photoName="pizzas/margherita.jpg"
//       />
//       <Pizza
//         name="Pizza Spinaci"
//         ingredients="Tomato, mozarella, spinach, and ricotta cheese"
//         price={12}
//         photoName="pizzas/spinaci.jpg"
//       /> */}
//     </main>
//   );
// }

// function Pizza(props) {
//   console.log(props);
//   return (
//     <div className="pizza">
//       <img
//         src={props.pizzaObj.photoName}
//         alt={props.pizzaObj.name}
//       />
//       <h2>{props.pizzaObj.name}</h2>
//       <p>{props.pizzaObj.ingredients}</p>
//       <span>{props.pizzaObj.price}</span>
//     </div>
//   );
// }
// Pizza.propTypes = {
//   pizzaObj: PropTypes.shape({
//     photoName: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     ingredients: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };
// function Header() {
//   const style = { color: 'red', fontSize: '48px', textTransform: 'upperCase' };

//   return (
//     <header className="header footer">
//       <h1 style={style}>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 8;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;
//   console.log(isOpen);
//   // if (hour >= openHour && hour <= closeHour) alert('we are currently open');
//   // else alert('sorry we are close');
//   return <footer>{new Date().toLocaleTimeString}</footer>;
//   //   return React.createElement('Footer', null, 'We are currently open');
// }

// export default App;

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <>
        <p>
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our tone oven, all organic , all delicious
        </p>
        {numPizzas > 0 ? (
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza
                photoName={pizza.photoName}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                soldOut={pizza.soldOut}
                key={index}
              />
            ))}
          </ul>
        ) : (
          <p>We are still working on our menu. please come back later</p>
        )}
      </>
      {/* <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        photoName="pizzas/margherita.jpg"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        price={12}
        photoName="pizzas/spinaci.jpg"
      /> */}
    </main>
  );
}

function Pizza({ ingredients, price, name, photoName, soldOut }) {
  const pizzaObj = { ingredients, price, name, photoName, soldOut };

  // console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img
        src={photoName}
        alt={name}
      />
      <h2>{name}</h2>
      <p>{ingredients}</p>
      {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : pizzaObj.price} */}
      {/* <span>{pizzaObj.soldOut ? 'sold out' : pizzaObj.price}</span> */}
      {/* use any of the two */}
    </li>
  );
}
Pizza.propTypes = {
  photoName: PropTypes.string,
  name: PropTypes.string,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  soldOut: PropTypes.boolean,
};

function Header() {
  const style = { color: 'red', fontSize: '48px', textTransform: 'upperCase' };

  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert('we are currently open');
  // else alert('sorry we are close');
  // if (!isOpen) return <p>CLOSED</p>;
  return (
    <footer>
      {isOpen ? (
        <Order
          openHour={openHour}
          closeHour={closeHour}
        />
      ) : (
        <p>
          We are happy to welcome you from {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open l {closeHour}:00. Come Visit us or order Online .</p>

      <button className="btn">Order</button>
    </div>
  );
}
//   return React.createElement('Footer', null, 'We are currently open');

export default App;
