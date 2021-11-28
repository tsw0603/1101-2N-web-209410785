import React from "react";
import './ArticleM_85.scss';

const ArticleM_85 = ({ name_cn, name_en, url }) => {

    return (
        <a href="#">
            <div className="column-img">
                <img src={url} alt=""/>
            </div>
            <div className="column-text">
                <h1>{name_cn}</h1>
                <h3>{name_en}</h3>
            </div>
        </a>
    )
}

export default ArticleM_85;