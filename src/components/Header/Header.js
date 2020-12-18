import React from "react";
import "../../index.css";
import NavLink from "react-router-dom/NavLink";
import { useDispatch, useSelector } from "react-redux";
import {logout} from "../../redux/Auth-reducer";
import vklogo from "../../pic/vk.png";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";


export const Header = () => {
  const login = useSelector((state) => state.auth.login);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  
  return (
	  <>
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
                {login}
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => dispatch(logout())}
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
	{!isAuth ?  <Redirect to={"/login"}/>  : null}    
	</>
  );
};

