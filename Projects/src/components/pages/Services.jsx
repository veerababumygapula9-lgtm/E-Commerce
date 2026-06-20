import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page">
      <h1>Services</h1>

      <Link to="electronics">
        Electronics
      </Link>

      <br />
      <br />

      <Link to="fashion">
        Fashion
      </Link>

      <br />
      <br />

      <Link to="grocery">
        Grocery
      </Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Services;