import React from "react";
import { Link } from 'react-router-dom';




const TrendItem = (props) => {
    return (
        <>
        
            <tr>
                <th  className="titemStyle" scope="row" >{props.tid}</th>
                <td className="titemStyle">{props.hashtagi}</td>
                <td className="titemStyle"><Link to="/sentiment"><button className="btn btn-outline-success zsbtn zstbtn" type="submit">Sentiment</button></Link></td>
            </tr>
        </>

    );
}

export {TrendItem};