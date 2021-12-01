import React from "react";
import './ArticleM_85.scss';

const ArticleM_85 = ({ name_cn, name_en, url }) => {

    return (
        <a href="#" class="ama">
            <div className="column-img">
                <img src={url} alt="" class="amimg"/>
            </div>
            <div className="column-text">
                <h2>{name_cn}</h2>
                <h3>{name_en}</h3>
            </div>
        </a>
    )
}

export default ArticleM_85;