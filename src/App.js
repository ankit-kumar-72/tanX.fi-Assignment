import './index.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      "id": 1,
      name : "EYEBOGLER Regular Fit Men's Cotton T-Shirt",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg",
      price: "200",
      rating: "4.0"
    },
    {
      "id": 2,
      name : "RodZen - Men's Cotton Half Sleeve Regular Fit Striped T-Shirt",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/b9/83/a7/b983a7e4e9a4a05ee8ae8333f1c7b2d8.jpg",
      price: "300",
      rating: "4.0"
    },
    {
      "id": 3,
      name : "U.S. POLO ASSN - Men's Solid Regular Fit Cotton Polo",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/55/82/bc/5582bc23ad7619f10f09d10141e7a6b9.jpg",
      price: "400",
      rating: "4.0"
    },
    {
      "id": 4,
      name : "Jockey - Men's Regular Fit Round Neck Half Sleeved T-Shirt",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/26/ee/90/26ee903549b8b69635152f5db58264b2.jpg",
      price: "350",
      rating: "4.0"
    },
    {
      "id": 5,
      name : "Max Men's Slim Polo",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/5a/cc/7f/5acc7f5af23bee76168f0f1fd24c75b4.jpg",
      price: "400",
      rating: "4.0"
    },
    {
      "id": 6,
      name : "Jockey Men's Cotton T-Shirt",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/7f/c0/84/7fc084dbec9b6c0ce19ab73b25bcba7f.jpg",
      price: "600",
      rating: "4.0"
    },
    {
      "id": 7,
      name : "AMERICAN CREW - Men's Regular Fit Polos",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/originals/25/0d/a3/250da32c889b624849bf828ae2ece420.jpg",
      price: "300",
      rating: "4.0"
    },
    {
      "id": 8,
      name : "Scott International Men's Regular Fit T-Shirt (Pack of 3)",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/b9/83/a7/b983a7e4e9a4a05ee8ae8333f1c7b2d8.jpg",
      price: "100",
      rating: "4.0"
    },
    {
      "id": 9,
      name : "AELOMART Men's T Shirt-(Amt250105-P_Green)",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/55/82/bc/5582bc23ad7619f10f09d10141e7a6b9.jpg",
      price: "300",
      rating: "4.0"
    },
    {
      "id": 10,
      name : "F GALLERY Printed Round Neck Half Sleeve T-Shirts for Men",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/26/ee/90/26ee903549b8b69635152f5db58264b2.jpg",
      price: "500",
      rating: "4.0"
    },
    {
      "id": 11,
      name : "Jockey Men's Regular Fit Round Neck Half Sleeved T-Shirt",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/5a/cc/7f/5acc7f5af23bee76168f0f1fd24c75b4.jpg",
      price: "700",
      rating: "4.0"
    },
    {
      "id": 12,
      name : "fanideaz - Mens Cotton Half Sleeve Striped Polo T Shirt with Collar",
      description: "What does it feel like to witness climate change playing out in real-time? #notcool. Sound the alarm with our Women's Climate Change T-shirt, printed on organic cotton in our Carbon Neutral factory. Plus, when it's worn out you can send it back to us to be remade into something new. That's what real sustainability means to us.",
      image: "https://i.pinimg.com/564x/7f/c0/84/7fc084dbec9b6c0ce19ab73b25bcba7f.jpg",
      price: "100",
      rating: "4.0"
    }
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;