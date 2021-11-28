import React from 'react'
import './ProductPage_85.scss';
import Products_85 from '../components/Products_85';


const Product_85 = () => {
    return (   
        <div>
            <div class="top">
                <div class="container">
                    <ul>
                        <li><a href="#">首頁</a></li>
                        <li><a href="#">商品</a></li>
                        <li><a href="#">飲料專區</a></li>
                        <li><a href="#">其他飲料</a></li>
                    </ul>
                </div>
            </div>
            <Products_85 />
            <div class="fields">
                <div class="container">
                    <ul>
                        <li><a href="#">首頁</a></li>
                        <li><a href="#">商品</a></li>
                        <li><a href="#">飲料專區</a></li>
                        <li><a href="#">其他飲料</a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Product_85;