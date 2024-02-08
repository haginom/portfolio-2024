import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div className="flex justify-between items-center landing-page-info">
        <NavLink to="/" className="nav-bar__logo_container flex ">
          <div className="flex ">
            <h1 className="font-thin antialiased md:ml-4 lowercase tracking-wider text-6xl	 ">
              Saki Reid
            </h1>
          </div>
        </NavLink>
        <div className="nav-bar__nav-items flex font-thin flex-col text-right tracking-wider">
          <NavLink to="/portfolio">Work</NavLink>
          <NavLink to="portfolio#about">About</NavLink>
          <NavLink to="portfolio#contact">Contact</NavLink>
        </div>
      </div>
      <nav>
        <NavLink className="nav-bar__logo_container" to="/"></NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
