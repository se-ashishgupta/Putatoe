import React from "react";
import { ImLocation } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";
import {
  MdNotificationsActive,
  MdAddShoppingCart,
  MdOutlineSearch,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <section>
        <div>
          <Link>
            <ImLocation />
          </Link>
          <input type="text" value={"Churk, Ghurma, Sonbhadra, UP, India"} />
        </div>
        <div>
          <Link>
            <MdNotificationsActive />
          </Link>
          <Link>
            <MdAddShoppingCart />
          </Link>
        </div>
      </section>
      <section>
        <form>
          <MdOutlineSearch />
          <input type="search" placeholder="Search for Products" />
        </form>
        <Link>
          <FaMicrophone />
        </Link>
      </section>
    </div>
  );
};

export default Header;
