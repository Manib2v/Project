import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import RenderData from './renderData';
import './App.css';

const LOAD_CRIC = gql`
  query getSchedule($type: String!, $status: String!, $page: Int!){
    schedule(type: $type, status: $status, page: $page){
      matchID
      seriesName
      homeTeamName
      awayTeamName
      matchNumber
      startDate
      venue
      matchScore{
        teamID
        teamShortName
      }
    }
  }
`;

function App() {//react hoot: set state method to viewstate;
  const onStatusChange = status => {
    setMatchStatus(status);
}
const onTypeChange = (type) => {
    setMatchType(type);
}
  const [matchType, setMatchType] = useState("all");
  const [matchStatus, setMatchStatus] = useState("upcoming");
  const { loading, error, data } = useQuery(LOAD_CRIC,//pass query; 
    {
      variables: {
        type: matchType,
        status: matchStatus,
        page: 0
      }
    });

  if (loading) return <p>Loading...</p>;//destructing of object
  if (error) return <p>Error :(</p>;
  return (
    <div className="ph3 relative bg-light-gray">
            <header className="pr0">
                <div className="black-70 f4 b db pt3 pb2">
                    Schedule
                </div>
                <div className="bg-white pt3 pl4 pr4 br2 overflow-hidden">
                    <div className="w-100 pa1 relative flex items-center justify-center">
                        <span  onClick={() => onStatusChange("upcoming")} className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 br-0" + (matchStatus === "upcoming" ? " bg-white dark-red" : " bg-near-white")}>UPCOMING</span>
                        <span  onClick={() => onStatusChange("running")} className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 br-0" + (matchStatus === "running" ? " bg-white dark-red" : " bg-near-white")}>RUNNING</span>
                        <span  onClick={() => onStatusChange("completed")} className={"black-20 pointer f7 fw6 pa2 w-100 tc ba b--black-10 " + (matchStatus === "completed" ? " bg-white dark-red" : " bg-near-white")}>COMPLETED</span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="scroll pt3 tc bg-white flex justify-around w-100">
                        <span  onClick={() => onTypeChange("all")} className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "all" ? "bb b--dark-red" : "")}>All</span>
                        <span  onClick={() => onTypeChange("international")} className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "international" ? "bb b--dark-red" : "")}>International</span>
                        <span  onClick={() => onTypeChange("domestic")} className={"gray pointer f7 ph3 pv2 w-30 " + (matchType === "domestic" ? "bb b--dark-red" : "")}>Domestic</span>
                    </div>
                </div>
            </header>
            <div className="flex w-100 flex-column min-vh-100 bg-light-gray">
      <RenderData data={data} />
   
    </div>
        </div>
   
    
  );
}

export default App;
