import React, {useEffect} from "react";
import "./Logs.css";
import {Loading} from "../components/Loading";

function Logs(props){

    useEffect(() => {
        if(props.user && props.user.authorizedUserDetail) {
            props.fetchLogs(props.user.authorizedUserDetail._id);
        }

        return () => {}
    }, []);

    if(!props.user || !props.user.authorizedUserDetail){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12" style={{minHeight: "82vh"}}>
                        <h4>Your are not logged in. Please login to see your logs!</h4>
                    </div>
                </div>
            </div>
        )
    }
    else if(props.logs.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading minHeight={"82vh"}/>
                </div>
            </div>
        )
    }
    else if(props.logs.errMess){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.logs.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className={"logs"}>
                <div className={"logs__header"}>
                    <p>Your Test Records</p>
                </div>
                <div className={"logs__body"}>
                    {
                        props.logs.logs.length > 0 ? (
                                props.logs.logs.map((log, index) => {
                                    return(
                                        <div className={"logs__body__content"}>
                                            <div className={"logs__body__content__title"}>
                                                <p>{log.name} Test</p>
                                            </div>
                                            <div className={"logs__body__content__marks"}>
                                                <p>Your score: {log.scoredMarks}</p>
                                                <p>Out of: {log.totalMarks}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            ):(<div><h3>You don't have any logs!</h3></div>)
                    }
                </div>
            </div>
        )
    }
}

export default Logs;
