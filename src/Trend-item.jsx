import React from "react";





const TrendItem = (props) => {
    return (
        <>
        
            <tr>
                <th  className="titemStyle" scope="row" >{props.tid}</th>
                <td className="titemStyle">{props.hashtagi}</td>
                <td className="titemStyle"><a href="/"><button class="btn btn-outline-success zsbtn zstbtn" type="submit">Sentiment</button></a></td>
            </tr>
        </>

    );
}

export {TrendItem};