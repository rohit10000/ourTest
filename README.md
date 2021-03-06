# ourTest (A Test System)

It is an end to end real-time, responsive test website for 
hard-working aspiring candidates where they can practice for
exams of their choice.

#### This project consists of 2 parts:
- Frontend: build in reactJs and bootstrap using javascript, HTML
 and CSS
- Backend: build in nodeJs, mongoDB.

## Requirements of Test System
- User can select the Test category like JEE Advance, CAT, GATE, etc.
- User can further select the subsections inside of test category.
- Every sub-area's can have multiple topic.
- You can perform quiz on a particular chapter.
- Every chapter can have multiple questions.
- User can signup, login and logout.
- User can even view his dashboard.
- Admin can add or remove tests, sections, topics, questions.
- Any user can only login from only one device and can only login
to other device once it is logged-out from the logged-in device.

<table style="width: 100%">
    <tr>
        <th>Actor</th>
        <th>Use Case</th>
    </tr>
    <tr>
        <td>User</td>
        <td>
            Can select test category, subsection category and topic,
            can do quiz, can login, can see to dashboard, can only
            login from one device.
        </td>
    </tr>
    <tr>
            <td>Admin</td>
            <td>
                Can add or remove tests, sections, topics, questions.
            </td>
        </tr>
</table>

## Class Diagram
![alt text](images/classDig.png)

## Configure to run app
As I have earlier there are 2 parts in this project. For frontend
part it is very simple. For the backend part, it is also very 
simple just you have to run mongo server in local and import 
few collections and then run the nodeJs server.

- Clone the repository.
- In the frontend folder run command <b>npm install</b> and 
<b>npm start</b>. 
Now, your frontend app server will be running on port 3000.
- Run mongoDB server on local and import certain necessary 
collection to dB ourTest as is given in the folder 
<a href="/backend/database">/backend/database</a>.
- Then in the backend folder also, run command <b>npm install</b> and <b>npm start </b> 
to run the nodeJs server.

- Last thing you need to set the config file n frontend
and backend. 
Add config.js file inside
<a href="/frontend/src/shared">/frontend/src/shared</a>
with the following content:
```
export const baseUrl = <base url>;
export const clientId = <clent id for google oauth>;

```
<br>
Also add a config.js file to 
<a href="/backend">/backend</a> folder with the 
following code content:

```
const user = <user of mongo client>;
const password = <password>;
const host = <host ip>;
const port = <host port>;
const database = <db>;

module.exports = {
    'secretKey': <secretKey>,
    'mongoUrl' : `mongodb://${user}:${password}@${host}:${port}/${database}?authSource=<...>`,
}
```

Our basic structure will look like this:
![alt text](images/flowDig.jpeg)

Go head and have a code look!

If you want to see how I deployed my first
nodeJs app on google cloud. Feel free to
checkout the <a href="https://rohitsingh-68836.medium.com/deploy-your-first-node-js-and-mongodb-app-on-google-cloud-51c2488aa8d8">link</a>.

## Screenshots for the project are as follows:

### Web UI

<div>
<img src="images/web/pic19.png" width="40%">
<img src="images/web/pic20.png" width="40%">
</div>
<div>
<img src="images/web/pic20_.png" width="40%">
<img src="images/web/pic21.png" width="40%">
</div>
<div>
<img src="images/web/pic22.png" width="40%">
<img src="images/web/pic23.png" width="40%">
</div>
<div>
<img src="images/web/pic25.png" width="40%">

</div>


### Mobile UI

<div>
<img src="images/mobile/pic1.png" width="30%">
<img src="images/mobile/pic2.png" width="30%">
<img src="images/mobile/pic3.png" width="30%">
</div>

<div>
<img src="images/mobile/pic3.png" width="30%">
<img src="images/mobile/pic4.png" width="30%">
<img src="images/mobile/pic5.png" width="30%">
</div>

<div>
<img src="images/mobile/pic6.png" width="30%">
<img src="images/mobile/pic7.png" width="30%">
<img src="images/mobile/pic8.png" width="30%">
</div>

<div>
<img src="images/mobile/pic11.png" width="30%">
<img src="images/mobile/pic12.png" width="30%">
<img src="images/mobile/pic13.png" width="30%">
</div>

<div>
<img src="images/mobile/pic14.png" width="30%">
<img src="images/mobile/pic15.png" width="30%">
<img src="images/mobile/pic16.png" width="30%">
</div>
<div>
<img src="images/mobile/pic17.png" width="30%">
<img src="images/mobile/pic18.png" width="30%">
</div>


<i><b>Happy Visiting!</b></i>