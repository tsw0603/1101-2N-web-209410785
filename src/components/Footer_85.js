import React from "react";
import './Footer_85.scss';

const Footer_85 = () => {
    return (

    <div className="footer">
      <div className="footer__top">
        <div className="footer__top--container">
          <div className="footer__top--container--socialicons">
            <ul>
              <li>
                <a
                  className="fb"
                  href="https://www.facebook.com/starbuckstaiwan?ref=nf"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="ig"
                  href="https://www.instagram.com/starbuckstw/"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="yt"
                  href="https://www.youtube.com/user/STARBUCKSTW?feature=mhum"
                  target="_blank"
                ></a>
              </li>
              <li>
                <a
                  className="line"
                  href="http://line.me/R/ti/p/@471vnurh"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__main--container">
          <div className="footer__main--container--global">
            <div className="footer__main--container--global--infoblock">
              <h4>認識我們</h4>
              <ol>
                <li>
                  <a href="#">關於星巴克</a>
                </li>
                <li>
                  <a href="#">企業責任</a>
                </li>
                <li>
                  <a href="#">企業公告</a>
                </li>
                <li>
                  <a href="#">星聞室</a>
                </li>
              </ol>
            </div>
            <div className="footer__main--container--global--infoblock">
              <h4>夥伴招募</h4>
              <ol>
                <li>
                  <a href="#">夥伴招募</a>
                </li>
                <li>
                  <a href="#">成為我們的夥伴</a>
                </li>
                <li>
                  <a href="#">我們的福利</a>
                </li>
                <li>
                  <a href="#">發展晉升與專業學習</a>
                </li>
              </ol>
            </div>
            <div className="footer__main--container--global--infoblock">
              <h4>社群平台</h4>
              <ol>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LINE</a>
                </li>
              </ol>
            </div>
            <div className="footer__main--container--global--infoblock">
              <h4>顧客關懷</h4>
              <ol>
                <li>
                  <a href="#">常見問題</a>
                </li>
                <li>
                  <a href="#">我在星巴克的小故事</a>
                </li>
                <li>
                  <a
                    className="footer__main--container--global--infoblock--green"
                    href="#"
                    >網路謠言澄清說明</a
                  >
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom--container">
          <ul className="footer__bottom--container-footersub">
            <li>
              <a href="#">網站地圖</a>
            </li>
            <li>
              <a href="#">個人資料保護政策</a>
            </li>
            <li>
              <a href="#">使用條款與須知</a>
            </li>
            <li>
              <a href="#">聯絡我們 Customer Service</a>
            </li>
            <li>
              客服專線 0800-000-482 (服務時間: 週一至週五
              09:00-18:00，六日與國定假日除外)
            </li>
          </ul>
          <div></div>
          <p className="footer__bottom--container--copyright">
            © 2021 Starbucks Coffee Company. All rights reserved.
          </p>
        </div>
      </div>
    </div>

    )
    
}

export default Footer_85;