import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

  <header>
    <h1>Bakery Delight</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>


  <section class="hero">
    <div class="hero-content">
      <div class="hero-text">
        <h2>Delicious Baked Goods, Fresh Every Day</h2>
        <p>Join our mailing list for sweet offers and fresh updates!</p>
      </div>
      <div class="form-container">
        <h3>Register</h3>
        <form>
          <input type="text" placeholder="Full Name" required/>
          <input type="email" placeholder="Email Address" required/>
          <input type="tel" placeholder="Phone Number"/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </section>


  <footer>
    <h4>Contact Us</h4>
    <p>Email: info@bakerydelight.com</p>
    <p>Phone: +1 234 567 8900</p>
    <p>Address: 123 Sweet Street, Cupcake City</p>
    <p>&copy; 2025 Bakery Delight</p>
  </footer>
    </>
  )
}

export default App
