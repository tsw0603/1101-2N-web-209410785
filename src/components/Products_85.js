import React from 'react'
import './Products_85.scss';
import Article_85 from './Article_85';
import Article01_85 from './Article01_85';
import ViewList_85 from './ViewList_85';

const Products_85 = () => {
    return(
        <div class="wrap-coffee">
            <div class="coffee-content">
                <ViewList_85 />
                    <Article_85 />
                    <Article01_85 />
            </div>
        </div>

    )
}


export default Products_85;
