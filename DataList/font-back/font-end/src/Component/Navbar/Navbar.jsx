import { Link } from "react-router-dom";
import "./Navbar.css";

function navbar() {
  return (
    <section id="nav">
      <div className="start">
        <div className="ham">
          <img src="https://cdn-icons-png.flaticon.com/128/4543/4543046.png" alt="" />
        </div>
        <div className="logo">
        <Link className="link" to="/">
          FF&F
        </Link>
        </div>
      </div>
      <div className="center">
        <div className="search-box">
          <input type="text" className="search-input" />
        </div>
        <div id="btn" className="btn btn-success btn-sm">ค้นหา</div>
      </div>
      <div className="end">3</div>
    </section>
  );
}

export default navbar;
