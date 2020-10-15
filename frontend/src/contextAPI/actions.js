
export const updateTestId = (id, dispatch) => {
    dispatch({
        type: 'UPDATE_TEST_ID',
        item: id
    })
}

export const updateTestTitle = (title, dispatch) => {
    dispatch({
        type: 'UPDATE_TEST_TITLE',
        item: title
    })
}

export const updateTopicId = (id, dispatch) => {
    dispatch({
        type: 'UPDATE_TOPIC_ID',
        item: id
    })
}

export const updateTopicDetails = (topicDetails, dispatch) => {
    dispatch({
        type: 'UPDATE_TOPIC_DETAIL',
        item: topicDetails
    })
}

export const setActiveQuestion = (item, dispatch) => {
    dispatch({
        type: 'SET_ACTIVE_QUESTION',
        item: item
    });
}

export const setVisitedQuestions = (list, dispatch) => {
    dispatch({
        type: 'SET_VISITED_QUESTION',
        item: list
    });
}

export const updateVisitedQuestions = (index, dispatch) => {
    dispatch({
        type: 'UPDATE_VISITED_QUESTION',
        item: index
    });
}
export const setAnsweredQuestions = (list, dispatch) => {
    dispatch({
        type: 'SET_ANSWERED_QUESTION',
        item: list
    });
}
export const updateAnsweredQuestions = (flag, dispatch) => {
    dispatch({
        type: 'UPDATE_ANSWERED_QUESTION',
        item: flag
    });
}

export const setYourAnswer = (list, dispatch) => {
    dispatch({
        type: 'SET_YOUR_ANSWER',
        item: list
    });
}

export const updateYourAnswer = (userAnswer, dispatch) => {
    dispatch({
        type: 'UPDATE_YOUR_ANSWER',
        item: userAnswer
    });
}


export const updateResultClass = (resultClass, dispatch) => {
    dispatch({
        type: 'UPDATE_RESULT_CLASS',
        item: resultClass
    })
}
export const setYourScore = (score, dispatch) => {
    dispatch({
        type: 'SET_YOUR_SCORE',
        item: score
    })
}

export const addUser = (user, dispatch) => {
    dispatch({
        type: "ADD_USER",
        item: user
    })
}

export const setUser = (user, dispatch) => {
    dispatch({
        type: "SET_USER_ID",
        item: user
    })
}

export const setAuthorizedUser = (user, dispatch) => {
    dispatch({
        type: "SET_AUTHORIZED_USER",
        item: user
    })
}

export const setUsers = (users, dispatch) => {
    dispatch({
        type: "SET_USERS",
        item: users
    });
}




// export const
