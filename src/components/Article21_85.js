import React, { useState } from 'react';
import './Article_85.scss';
import items from './data/frappuccino1_85-data'
import ArticleM_85 from './ArticleM_85';

const Article21_85 = () => {
    const [menuItems, setMenuItems] = useState(items);
    console.log('menuItems', menuItems);
    return (
        <div>

                <div class="article">
                    <div class="ah2">星冰樂咖啡系列</div>
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
  
export default Article21_85;