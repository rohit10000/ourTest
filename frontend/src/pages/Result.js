import React from "react";
import {useStateValue} from "../contextAPI/StateProvider";
import ResultCard from "../components/ResultCard";
import "./Result.css";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";


function Result(){
    const[state, dispatch] = useStateValue();

    return(
      <div className={"result"}>
          <div className={"result__header"}>
              <div className={"result__header__title"}>
                  <p><strong>Your result </strong> for <strong>{state.topicDetails.name} </strong> test</p>
              </div>
              <div className={"result__header__score"}>
                  <p>You scored <strong>{state.yourScore} </strong>
                      out of <strong>{state.resultClass.length}</strong></p>
              </div>
          </div>
          <div className="container">
              <div className="row">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                      <BreadcrumbItem active>Result</BreadcrumbItem>
                  </Breadcrumb>
              </div>
          </div>
          <div className={"result__body"}>
              {
                  state.topicDetails.questions.map((info, index) => {
                      return(
                          <ResultCard question={info.text}
                                      options={info.options}
                                      answer={info.answer}
                                      index={index}
                                      resultClass={state.resultClass}
                          />
                      )
                  })
              }
          </div>

      </div>
    );
}

export default Result;
