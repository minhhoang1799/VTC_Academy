import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {ROUTER_LINK} from '../../../router/router-path';
import HeaderNavLink from './features/HeaderNavLink/HeaderNavLink';
import USERDATA from "../../../api/user.json"
import './Header.scss'
import { checkUserLocal } from '../../../helper/function';
Header.propTypes = {
 
};

function Header(props) {
   const isLogin = checkUserLocal();
   const [check, setCheck] = useState(isLogin);
   useEffect(() => {
      setCheck(isLogin)
   },[props])
 return (
  <header>
     <div className="inner">
         <div className="container">
            <div className="header__wrapper">
            <div className="header__left">
               <h1 className="header__left--logo">
                  <Link to="/">
                     <img src={require('../../../assets/image/logo.png')} width={268} height={36} alt="VTC Academy" />
                  </Link>
               </h1>
            </div>
            <div className="header__right">
               <nav>
                  <HeaderNavLink isPath={ROUTER_LINK}></HeaderNavLink>
               </nav>
               <div className="header__user">
                  {
                     !check ? (
                        <>
                           <div className="main__btn main__btn--btn01">Đăng ký</div>
                           <div className="main__btn main__btn--btn02 ">
                              <Link to="/login" className="link">Đăng nhập</Link>
                           </div>
                        </>
                     ) : (
                        'logout'
                     )
                  }
               </div>
            </div>
         </div>
         </div>
     </div>
  </header>
 );
}

export default Header;