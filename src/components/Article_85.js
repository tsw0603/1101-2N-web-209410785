import React, { useState } from 'react';
import './Article_85.scss';
import ViewList_85 from './ViewList_85';
import items from './data/otherdrinks_85-data'
import ArticleM_85 from './ArticleM_85';

const Article_85 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>
            <div class="coffee-content">
                <ViewList_85 />
                <div class="article">
                    <h2>其他飲料系列</h2>
                        <ul>
                            <li>
                    {menuItems.map(item => {
                        const { name_cn, name_en, url } = item;
                        return (
                            <ArticleM_85 name_cn={name_cn} name_en={name_en} url={url}/>
                        
                        
                        )
                    })               
                    }

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
  
export default Article_85;