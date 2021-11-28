import React from "react";
import './ArticleM_85.scss';

const ArticleM_85 = ({ name_cn, name_en, url }) => {

    return (
        <a href="#">
            <div class="column-img">
                <img src={url} alt="" />
            </div>
            <div class="column-text">
                <h1 class="title-cn">{name_cn}</h1>
                <h3 class="title-en">{name_en}</h3>
            </div>
        </a>
    )
}

export default ArticleM_85;