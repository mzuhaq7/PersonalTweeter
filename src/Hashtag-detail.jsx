import { Chart } from "react-google-charts";
import { Tweetconfig } from "./Tweetconfig";
import { Link } from 'react-router-dom';

const trendingSince = "10 Hrs";
const countTweet = "10k";
const tweet_data = [
    ['sentiment', 'no. of tweets'],
    ['Positive Tweets', 11],
    ['Negative Tweets', 2],
    ['Neutral Tweets', 2],

];

const HashtagContainer = () => {
    return (
        <>
            <div className="hc-container">
                <div className="hc-head">
                    <h4 className="hc1 hc1-s1">#BlackLivesMatter</h4>
                    <div className="form-group hc1 hc1-s2">
                        <button type="submit" className="btn btn-light hcbtng" data-toggle="modal" data-target="#twtcfg">Tweet</button>
                    </div>
                </div>
                {/* Modal */}
                <form action="/gentweet" className="modal fade" id="twtcfg" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="tchead">
                                <h4 className="modal-title" id="exampleModalLabel">Tweet Configuration</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <span>
                                        <label for="tweettone">Select tone:</label>
                                        <select id="tweettone">
                                            <option value="positive">Positive</option>
                                            <option value="negative">Negative</option>

                                        </select>
                                    </span>
                                    <span id="tcspan">
                                        <label for="tweetcount">No. of tweets:</label>
                                        <select id="tweetcount">
                                            <option value="count1">1</option>
                                            <option value="count2">2</option>
                                            <option value="count3">3</option>

                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* <Link to="/gentweet"> */}
                                <button type="submit" className="btn btn-primary">Generate tweet</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </form>
                {/* ----------------Body of Hashdetail */}

                <div className="hcinfo">
                    <span className="hcinfo-la">
                        <label >Trending Since: {trendingSince}</label>

                    </span>
                    <span className="hcinfo-la">
                        <label>No. of Tweets: {countTweet}</label>

                    </span>
                </div>

                <Chart className="hcpie"
                    width={'520px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={tweet_data}
                    options={{
                        title: 'Sentiment Analysis of Tweets',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />


            </div>
        </>
    );
}


export default HashtagContainer;