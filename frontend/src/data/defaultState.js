import local from "./local";

export const defaultState = {
    proxy: "http://localhost:5000",
    testId: "0",
    testTitle: "Jee Advance",

    sectionDetails: local.sectionDetails,

    topicId: "5f5b576203130afeafb583d3",

    topicDetails: {"_id":"5f5b576203130afeafb583d3","name":"Relations and Functions","questions":[{"options":["5","-5","0","2"],"_id":"5f5b576203130afeafb583d4","text":"Which is greater than 4?","answer":{"_id":"5f5b576203130afeafb583d5","index":1,"value":"5"}},{"options":["Electric field","Magnetic Field","emf","force"],"_id":"5f5b71a7301aa712b9bb779f","text":"What is the full form of emf?","answer":{"_id":"5f5b71a7301aa712b9bb77a0","index":1,"value":"5"}}],"__v":1},
    visitedQuestion: [true, false],
    activeQuestion: 1,
    answeredQuestion: [false, false],
    questionTimer: ["1233", "10"],
    yourAnswer: [1, 4],
    yourScore: 5,

    resultClass: ["resultSuccess", "resultFailure"],

    users:[{"_id":"5f5fa0a94d03c4792875b6a4","firstname":"Rohit","lastname":"Singh","email":"rohitsingh18997@gmail.com","password":"1234","testAttempted":[],"createdAt":"2020-09-14T16:56:09.369Z","updatedAt":"2020-09-14T16:56:09.369Z","__v":0}],

    authorizedUser: null
};
