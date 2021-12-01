import React from "react";
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Product_85 from '../pages/ProductPage_85';
import Product1_85 from '../pages/ProductPage1_85';
import Product2_85 from '../pages/ProductPage2_85';
import Product3_85 from '../pages/ProductPage3_85';
import Product4_85 from '../pages/ProductPage4_85';
import Product5_85 from '../pages/ProductPage5_85';
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
            <Switch>
                <Route exact path='/Product_85' component={Product_85} />
                <Route exact path='/Product1_85' component={Product1_85} />
                <Route exact path='/Product2_85' component={Product2_85} />
                <Route exact path='/Product3_85' component={Product3_85} />
                <Route exact path='/Product4_85' component={Product4_85} />
                <Route exact path='/Product5_85' component={Product5_85} />
              </Switch>
        </div>

    )
    
}

export default ViewList_85;

