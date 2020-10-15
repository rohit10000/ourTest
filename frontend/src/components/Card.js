import React from "react";
import "./Card.css";
import {useHistory} from "react-router-dom";
import {updateTestTitle, updateTestId} from "../contextAPI/actions";
import {useStateValue} from "../contextAPI/StateProvider";

function Card({src, title, description, id}){

    const history = useHistory();
    const [_, dispatch] = useStateValue();

    function updateReducer(){

        updateTestId(id, dispatch);
        updateTestTitle(title, dispatch);

        console.log("updated_test_id as " + id+" and updated_test_title as "+title);
        history.push('/section');
    }

    return (
            <div className="card" onClick={updateReducer}>
                <div className={"card__header"}>
                    <img src={src} alt="" />
                </div>

                <div className="card__info">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>

            </div>

    );
}

export default Card;
