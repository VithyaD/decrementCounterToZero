import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <Link href="/decrementSeconds">DecrementSeconds</Link>
        <Link href="/dropdown">Dropdown</Link>
      </ul>
    </div>
  );
};

export default Header;
