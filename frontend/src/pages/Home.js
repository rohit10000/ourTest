import React, {useState} from "react";
import "./Home.css";
import Card from "../components/Card";
import local from "../data/local";

function Home(){

    const test = local.testData

    return (

        <div className="home">
            <img className="home__image"
                 src={require("../images/banner.jpg")}
                 alt="" />

            <div className="home__row">
                {
                    test.map((info, i) =>{
                       return(
                           <Card src={info.url}
                                 description={info.description}
                                 title={info.title}
                                 id={i}
                           />
                       )
                    })
                }
            </div>

        </div>

    );
}

export default Home;
