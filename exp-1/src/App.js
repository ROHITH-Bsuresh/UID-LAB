import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Product from './components/Product';
import iphone from './assets/iphone.png'
function App() {
  // Sample product data
  const productData = {
    image: iphone, // Replace with actual image URL
    title: 'Sample Product',
    description: 'This is a brief description of the product. It highlights its main features and benefits.',
    price: 99.99,
  };

  // Handler for adding product to cart
  const handleAddToCart = () => {
    console.log('Product added to cart');
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Services />
        <Product
          image={productData.image}
          title={productData.title}
          description={productData.description}
          price={productData.price}
          onAddToCart={handleAddToCart}
        />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
