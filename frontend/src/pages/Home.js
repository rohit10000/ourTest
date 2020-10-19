import React from "react";
import "./Home.css";
import Card from "../components/Card";
import {Loading} from "../components/Loading";
import {baseUrl} from "../shared/baseUrl";

function Home(props){
    if(props.tests.isLoading){
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.tests.errMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.tests.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="home">
                <img className="home__image"
                     src={require("../images/banner.jpg")}
                     alt="" />

                <div className="home__row">
                    {
                        props.tests.tests.map((test,index) =>{
                            return(
                                    <Card src={baseUrl+test.url}
                                          description={test.description}
                                          title={test.title}
                                          id={test._id}
                                          index={index}
                                    />
                            )
                        })
                    }
                </div>
            </div>

        );
    }
}

export default Home;
