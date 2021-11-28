import React from 'react';
import { Link } from 'react-router-dom';
import './Header_85.scss';

const Header_85 = () => {
    return (
      <div className="header">
        <div className="header__container">
          <div className="header__main">
            <div className="header__logo">
              <Link to='/'></Link>
            </div>
            <div className="header__item">
              <ul className="header__list">
                <li><Link to="./Coffee_85">咖啡</Link></li>
                <li><Link to="./Product_85">商品</Link></li>
                <li><Link to="./Store_85">門市</Link></li>
                <li><Link to='./StarCourtesy_85'>星禮程</Link></li>
                <li><Link to='./FourthSpace_85'>第四生活空間</Link></li>
                <li><Link to='./GiftArea_85'>送禮專區</Link></li>
                <li><Link to='./OnlineStore_85'>線上門市</Link></li>
              </ul>
            </div>
          </div>
          <div className="header__sub"><Link to='#'></Link></div>
        </div>
      </div>
    )
    
}

export default Header_85;