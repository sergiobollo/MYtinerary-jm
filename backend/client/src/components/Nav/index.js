import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "./Nav.css";
import me from "../../assets/me.jpg";
import logo from '../../assets/MYtinerarySVG.svg'
import { SignBtn } from "../SignBtn";
import classNames  from 'classnames'

export const Menu = ({show}) => {
  
  const fadeMenu = useSpring({
    width: show ? 180 : 0,
    config: {
      duration: .2
    }
  })

  

  return (
    <animated.section className={'Menu'} style={fadeMenu} >
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/">
        <h4>Home</h4>
      </Link>
    </animated.section>
  );
};

export const UserInfo = ({ sessionActive, show }) => {
  let active = "";
  if (show) {
    active = "active";
  } else {
    active = "";
  }
  return (
    <section className={`UserInfo ${active}`}>
      {sessionActive ? (
        <SignBtn account="logout" />
      ) : (
        <div>
          <SignBtn account="create" />
          <SignBtn account="login" />
        </div>
      )}
    </section>
  );
};


export const Nav = ({ session, isLogin, isRegister }) => {
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);

  const navClass = classNames(
    'nav-container',{
      isRegister,
      isLogin
    }
  )

  return (
    <nav className={navClass}>
      <div onClick={() => setShow(!show)}>
        {session ? (
          <img className="Nav__user UserImg" src={me} alt="me" />
        ) : (
          <FaUserCircle />
        )}
      </div>
      <Link className="logo__link" to="/">
      <img className="logo" src={logo} alt="logo"/>
      </Link>
      <MdMenu onClick={() => setMenu(!menu)} />
      <Menu className="Menu__icon" show={menu} />
      <UserInfo show={show} sessionActive={session} />
    </nav>
  );
};