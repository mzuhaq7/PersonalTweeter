import React, {useState, useEffect } from "react";
import { TrendItem } from "./Trend-item";
import { TData } from "./TrendData";
// import axios from "axios";
import axios, * as others from 'axios';

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
    const [trends, setTrends] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('http://localhost:8000/').then((res)=>{
            console.log(res.data.trends)
            setLoading(false)
            setTrends(res.data.trends)
        }).catch(err => console.log(err))
    },[])
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

                            {loading ? 'Loading...' : trends.map(nTrend)}
                            {/* {loading && 'Loading...'} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export { Trends };