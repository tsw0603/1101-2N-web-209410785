import React from "react";
import { Link } from 'react-router-dom';
import './ViewList_85.scss';

const ViewList_85 = () => {
    return (
        <div>
        <ul class="view-list">
            <li><Link to="./Product_85">咖啡飲品</Link></li>
            <li><Link to="./Product1_85">茶瓦納</Link></li>
            <li><Link to="./Product2_85">星冰樂</Link></li>
            <li><Link to="./Product3_85">冷萃咖啡</Link></li>
            <li><Link to="./Product4_85">其他飲料</Link></li>
            <li><Link to="./Product5_85">罐裝飲料</Link></li>
        </ul>
        </div>

    )
    
}

export default ViewList_85;

