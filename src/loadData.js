import React from 'react';

function loadData({ data }) {
    return (
        <div className="w-100 mb3 bg-white br2 pointer">
            <div className="flex justify-between items-center pa3 bg-near-white">
                <span className="f7 fw5">
                 {data.seriesName}
                </span>
                <span class="f7 gray mr2"> ❯ </span>
            </div>
            <div className="mh3 pb2">
                
                <p className="ma0 mv3 f7 fw5">
                    {data.matchNumber}.{data.venue}
                </p>
                
                {data.matchScore.map(team => (
                    <div className="flex mb2">
                    <div className="flex w-40 flex-column justify-center items-evenly">
                    <div className="flex"><img className="h1 w15 shadow-4" src={`https://images.cricket.com/teams/${team.teamID}_flag.png`}></img>
                    <span className="pl3 w-50 f6">
                            {team.teamShortName}
                        </span>
                    </div>
                       
            </div>
                    </div>
                ))}
                 <div class="flex justify-center"><span class="w-50 f7 v-mid pa1 br4 f8 fw5 tc gray bg-washed-yellow  mt1  truncate">  {new Date(Number(data.startDate)).toDateString()} </span></div>
                </div>
               
        </div>
    );
}

export default loadData;
