sessionStorage.setItem('numberOfOptions', '1');

function addOption(){
    let element = document.getElementById('options');
    let numberOfOptions = parseInt(sessionStorage.getItem('numberOfOptions'));
    sessionStorage.setItem('numberOfOptions', (numberOfOptions+1).toString());

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control option');
    input.setAttribute('name', 'option'+numberOfOptions);
    input.setAttribute('placeholder', 'Enter option '+numberOfOptions);
    input.setAttribute('id', numberOfOptions.toString());

    element.appendChild(input);
}

function submitQuestionToTopic(event){
    let questionText = document.getElementById('text').value;
    let answerText = document.getElementById('answerText').value;
    let answerIndex = document.getElementById('answerIndex').value;
    let topicId = document.getElementById('topicId').value;


    let elements = document.getElementsByClassName('option');
    let options = Array(elements.length);
    for(let i=0; i<elements.length; i++){
        let text = elements[i].value;
        let index = elements[i].id;
        options[i] = {
            text: text,
            index: index
        }
        console.log(text, " ", index);
    }
    let newQuestion = {
        text: questionText,
        options: options,
        answer: {
            text: answerText,
            index: answerIndex
        },
        topicId: topicId
    }

    fetch('http://localhost:5000/questions',{
        method: 'POST',
        body: JSON.stringify(newQuestion),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"

    })
        .then((response) => response.json(), error => {throw error;})
        .then((question) => {
            console.log('Question Added ', question);
            alert("You successfully submitted the Question.\n");
        })
        .catch(err => {
            console.log(err);
            alert("Error: \n" + err);
        });
}
