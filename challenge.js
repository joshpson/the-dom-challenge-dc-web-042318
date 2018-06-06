//Initialize  Timer
let counterH1 = document.getElementById('counter');
let counter = 0;
let timer = setInterval(increaseCounter, 1000);
let setCounter = () => (counterH1.innerHTML = counter);
let restartTimer = () => (timer = setInterval(increaseCounter, 1000));
let stopTimer = () => (clearInterval(timer));

//Increase Counter
let increaseButton = document.getElementById('+');

function increaseCounter() {
  counter += 1;
  setCounter();
}

function setIncreaseButtonListener() {
  increaseButton.addEventListener('click', increaseCounter)
}

function removeIncreaseButtonListener() {
  increaseButton.removeEventListener('click', increaseCounter)
}

//Decrease Counter
let decreaseButton = document.getElementById('-');

function decreaseCounter() {
  counter -= 1;
  setCounter();
}

function setDecreaseButtonListener() {
  decreaseButton.addEventListener('click', decreaseCounter)
}

function removeDecreaseButtonListener() {
  decreaseButton.removeEventListener('click', decreaseCounter)
}

//Like Button
let likeButton = document.getElementById('<3');
let likesList = document.querySelector('.likes');
let likeTracker = {}

function likeNumber() {
  if (!document.getElementById(`${counter}`)) {
    likeTracker[counter] = 1;
    createLikeListItem();
  } else {
    likeTracker[counter] += 1;
    editLikeListItem();
  }
}

function createLikeListItem() {
  let li = document.createElement("li");
  li.setAttribute("id", `${counter}`);
  li.innerHTML = `${counter} was liked once.`
  likesList.appendChild(li)
}

function editLikeListItem() {
  let li = document.getElementById(`${counter}`);
  li.innerHTML = `${counter} was liked ${likeTracker[counter]} times.`;
}

function setLikeButtonListener() {
  likeButton.addEventListener('click', likeNumber);
}

function removeLikeButtonListener() {
  likeButton.removeEventListener('click', likeNumber);
}

//Comments
let commentForm = document.getElementById('comment-form');
let input = document.querySelector('input');
let commentDiv = document.getElementById('list');

function setCommentFormEventListener() {
  commentForm.addEventListener('submit', function(s){
    s.preventDefault();
    addComment(input);
  })
}

function addComment(input) {
  let comment = document.createElement("p");
  comment.innerHTML = input.value;
  commentDiv.appendChild(comment);
}

//Pause Program
let pauseButton = document.getElementById('pause');
let paused = false;

function setPauseButtonListener() {
  pauseButton.addEventListener('click', pauseProgram)
}

function pauseProgram() {
  if (paused === false) {
    stopProgram();
    paused = true;
    pauseButton.innerHTML = 'resume';
  } else {
    restartProgram()
    paused = false;
    pauseButton.innerHTML = 'pause';
  }
}

function stopProgram() {
  stopTimer();
  removeIncreaseButtonListener();
  removeDecreaseButtonListener();
}

function restartProgram() {
  restartTimer();
  setIncreaseButtonListener()
  setDecreaseButtonListener()
  setLikeButtonListener()
}

//Initalize Program
setCommentFormEventListener()
setIncreaseButtonListener()
setDecreaseButtonListener()
setLikeButtonListener()
setPauseButtonListener()


