import React from "react";
import "../../index.css";
import NavLink from "react-router-dom/NavLink";
import { connect } from "react-redux";
import { logout } from "../../redux/Auth-reducer";
import vklogo from "../../pic/vk.png";
import Button from "@material-ui/core/Button";

export const Header = ({ isAuth, logout, login }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_block">
			
          <img src={vklogo} width="30px" />
          <Button
            href="https://social-network.samuraijs.com/docs"
            size="small"
            color="primary"
            variant="contained"
          >
            API DOCS
          </Button>

          <div>
            {isAuth ? (
              <div>
                {login}{" "}
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={logout}
                >
                  LOG OUT
                </Button>
              </div>
            ) : (
              <NavLink style={{ textDecoration: "none" }} to={"/login/"}>
                <Button size="small" color="primary" variant="contained">
                  LOGIN
                </Button>
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});
export default connect(mapStateToProps, { logout })(Header);
