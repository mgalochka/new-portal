import React from "react";
import { NavLink } from "react-router-dom";
import {routMain as routNewsDetail} from 'pages/NewsDetail';
import DateView from "components/DateView";

import { INewsDetail } from "types/INewsDetail";


import './styles.scss';

interface INewsItemParams {
    item: INewsDetail;
}

const NewsItem: React.FC<INewsItemParams> = ({item}) => (
    
        <NavLink className="newsItem" to={routNewsDetail(item._id)} > 
            
                <div className="titleItem"  >
                    <div className="titleSpan">{item.title}</div> 
                </div>
                <div className="bottomWrapper"> 
                    <p className="source" >{item.clean_url}</p>
                    <DateView value={item.published_date} />  
                </div>
        
        </NavLink>
   
)

export default NewsItem;