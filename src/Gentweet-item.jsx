import React from "react";
import { GenData } from "./GenTweetData";
import Navbar from "./Header";
import { Link } from 'react-router-dom';

const nTweet = (val) => {
    return (
        <>
            <GenItem tid={val.id} hashtagi={val.hashtagi} tweetg={val.gTweet} />
        </>
    );
}

const Gentweet=()=>{
return (
    <>
        <Navbar/>
        <div className="zTrendContainer">
                <div>
                    <h3>Generated Tweets</h3>
                </div>
                <div className="trend-table">
                    <table className="table table-striped table-hover ztable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hashtag</th>
                                <th scope="col">Tweet</th>
                            </tr>
                        </thead>
                        <tbody>

                            {GenData.map(nTweet)}

                        </tbody>
                    </table>
                </div>
            </div>
    </>
);
}

const GenItem = (props) => {
    return (
        <>
        
            <tr>
                <th  className="titemStyle" scope="row" >{props.tid}</th>
                <td className="titemStyle">{props.hashtagi}</td>
                <td className="titemStyle">{props.tweetg}</td>
                <td className="titemStyle"><Link to="/gentweet"><button class="btn btn-outline-success zsbtn zstbtn" type="submit">Post to Twitter</button></Link></td>
            </tr>
        </>

    );
}

export {Gentweet};