import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">

      <section className="hero">

        <div className="hero-text">

          <h1>
            Welcome to ShopEase
          </h1>

          <p>
            Discover quality products at affordable prices.
            Shop electronics, clothing, jewellery and much more
            all in one place.
          </p>

          <Link to="/products" className="btn">
            Shop Now
          </Link>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=900"
            alt="Shopping"
          />

        </div>

      </section>



      <section className="features">

        <div className="feature-card">

          <h3> Fast Delivery</h3>

          <p>
            Receive your orders quickly and safely.
          </p>

        </div>

        <div className="feature-card">

          <h3> Secure Payments</h3>

          <p>
            Shop with confidence using secure checkout.
          </p>

        </div>

        <div className="feature-card">

          <h3> Quality Products</h3>

          <p>
            Carefully selected products from trusted sellers.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;