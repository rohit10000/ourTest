import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Section from "./pages/Section";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {useStateValue} from "./contextAPI/StateProvider";
import Logs from "./pages/Logs";
import {saveToLocalStorage} from "./utility/storeUtility";
import {setUser, setUsers} from "./contextAPI/actions";

function App() {
    const [state, dispatch] = useStateValue();

    useEffect(()=>{
        saveToLocalStorage(state);
    }, [state]);


    useEffect(() =>{
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(users =>  {
                console.log(users);

                setUsers(users, dispatch);
            });

    },[]);

  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
              <Route path={"/quiz"}>
                  <Header/>
                  <Quiz/>
              </Route>

              <Route path={"/login"}>
                  <Header/>
                  <Login/>
                  <Footer/>
              </Route>

              <Route path={"/signup"}>
                  <Header/>
                  <Signup/>
                  <Footer/>
              </Route>

              <Route path={"/result"}>
                  <Header/>
                  <Result/>
                  <Footer/>
              </Route>

              <Route path={"/section"}>
                  <Header/>
                  <Section/>
                  <Footer/>
              </Route>

              <Route path={"/yourLogs"}>
                  <Header/>
                  <Logs/>
                  <Footer/>
              </Route>

                <Route path="/">
                    <Header/>
                    <Home/>
                    <Footer/>
                </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
