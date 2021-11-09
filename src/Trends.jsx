import React from "react";
import { TrendItem } from "./Trend-item";
import { TData } from "./TrendData";

// Get data from TData and get custom made tag from TrendItem then make a funciton for mapping then call the map() method below and map data into
// custom tag
const nTrend = (val) => {
    return (
        <>
            <TrendItem tid={val.id} hashtagi={val.hashtagi} />
        </>
    );
}

const Trends = () => {
    return (
        <>
            <div className="zTrendContainer">
                <div>
                    <h3>Top Trending Topics</h3>
                </div>
                <div className="trend-table">
                    <table className="table table-striped table-hover ztable">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Hashtag</th>
                                <th scope="col"/>
                            </tr>
                        </thead>
                        <tbody>

                            {TData.map(nTrend)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export { Trends };