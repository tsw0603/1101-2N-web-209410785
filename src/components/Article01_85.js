import React, { useState } from 'react';
import './Article_85.scss';
import items from './data/coffee_85-data'
import ArticleM_85 from './ArticleM_85';

const Article01_85 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>

                <div class="article">
                    <div class="ah2">濃縮咖啡飲料</div>
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
   
    )
}
  
export default Article01_85;