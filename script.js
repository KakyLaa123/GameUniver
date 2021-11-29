const button = document.querySelector('.button');
const girl = document.querySelector('.devushka');
const ratingButton = document.querySelector('.rating-button');
const ratingTable = document.querySelector('.rating-table');
const ratingClose = document.querySelector('.table-close-button');
const buttonChat = document.querySelector('.chat');
const buttonImg = document.querySelector('.chat-img');
const friendsList = document.querySelector('.friends-list');
const buttonScrollFriendsLeft = document.querySelector('.scroll-left');
const buttonScrollFriendsRight = document.querySelector('.scroll-right');

button.addEventListener('click', () => {

    button.disabled = true;

    if(button.disabled == true){
        setTimeout(() => {
            button.disabled = false;
        }, 3000);
    }

    if(girl.classList.contains('walking-nine')){
        girl.classList.add('walking-ten');
        setTimeout(() => {
            alert('Игра окончена');
        }, 3500);
    }

    if(girl.classList.contains('walking-eight')){
        girl.classList.add('walking-nine');
    }

    if(girl.classList.contains('walking-seven')){
        girl.classList.add('walking-eight');
    }

    if(girl.classList.contains('walking-six')){
        girl.classList.add('walking-seven');
    }

    if(girl.classList.contains('walking-five')){
        girl.classList.add('walking-six');
    }

    if(girl.classList.contains('walking-four')){
        girl.classList.add('walking-five');
    }

    if(girl.classList.contains('walking-three')){
        girl.classList.add('walking-four');
    }

    if(girl.classList.contains('walking-two')){
        girl.classList.add('walking-three');
    }
    
    if(girl.classList.contains('walking')){
        girl.classList.add('walking-two');
    }

    girl.classList.add('walking');

});

const tableBackground = document.querySelector('.table-background');

ratingButton.addEventListener('click', () => {
    ratingTable.classList.add('rating-table-on');
    ratingTable.classList.remove('rating-table-off');
    tableBackground.classList.remove('table-background-off');
    tableBackground.classList.remove('table-background-off-animation');
});

ratingClose.addEventListener('click', () => {
    ratingTable.classList.add('rating-table-off');
    ratingTable.classList.remove('rating-table-on');
    setTimeout(() => {
        tableBackground.classList.add('table-background-off');
    }, 700);
    tableBackground.classList.add('table-background-off-animation');
});

const ratingPeople = document.querySelector('.pepople-in-table');
const ratingList = document.querySelector('.rating-list');

const dataRatingLengthGet = localStorage.getItem("dataRatingLength");

let dataRatingIdGet = [];

let dataRatingNameGet = [];

let dataRatingLastNameGet = [];

let dataRatingImgGet = [];

let dataRatingPointsGet = [];

for(let i = 0; i < dataRatingLengthGet; i++){
    let dataRatingIdExport = "dataRatingId" + i;
    let dataRatingNameExport = "dataRatingName" + i;
    let dataRatingLastNameExport = "dataRatingLastName" + i;
    let dataRatingImgExport = "dataRatingImg" + i;
    let dataRatingPointsExport = "dataRatingPoints" + i;

    dataRatingIdGet.push(localStorage.getItem(dataRatingIdExport));

    dataRatingNameGet.push(localStorage.getItem(dataRatingNameExport));

    dataRatingLastNameGet.push(localStorage.getItem(dataRatingLastNameExport));

    dataRatingImgGet.push(localStorage.getItem(dataRatingImgExport));

    dataRatingPointsGet.push(localStorage.getItem(dataRatingPointsExport));
}

let dataRatingTable = [];

function addRatingTable(i){
    let dataRatingTableObject = {};

    dataRatingTableObject.id = dataRatingIdGet[i];
    dataRatingTableObject.name = dataRatingNameGet[i];
    dataRatingTableObject.lastName = dataRatingLastNameGet[i];
    dataRatingTableObject.img = dataRatingImgGet[i];
    dataRatingTableObject.points = dataRatingPointsGet[i];
    dataRatingTable.push(dataRatingTableObject);
}

for(let i = 0; i < dataRatingLengthGet; i++){
    addRatingTable(i);
}

for(let abc = 0; abc < 2; abc++){
    for (let i = 0; i < dataRatingTable.length - 1; i++){
        let maxValue = Number(dataRatingTable[i].points);
        
            for (let j = i + 1; j < dataRatingTable.length; j++) {
            if (Number(dataRatingTable[j].points) > maxValue) {
                let minValueObj = dataRatingTable[j];
                let swapObj = dataRatingTable[i];
                dataRatingTable[i] = minValueObj;
                dataRatingTable[j] = swapObj;
            }
        }
    }
}

function takeInfo(info, i){
    let ratingPeopleClone = ratingPeople.cloneNode(true);

        ratingPeopleClone.classList.remove('example');

    let ratingPeoplePlace = ratingPeopleClone.querySelector('.people-place');

        ratingPeoplePlace.textContent = i + 1;

    let ratingPeopleImg = ratingPeopleClone.querySelector('.pople-img');

        ratingPeopleImg.src = info.img;

    let ratingPeopleFriend = ratingPeopleClone.querySelector('.name-lastName');

        ratingPeopleFriend.textContent = info.name + ' ' + info.lastName;

    let ratingPeopleExp = ratingPeopleClone.querySelector('.exp-number');

        ratingPeopleExp.textContent = info.points;

    ratingList.appendChild(ratingPeopleClone);
}

const dataFriendLengthGet = localStorage.getItem("dataFriendLength");

let dataFriendIdGet = [];

let dataFriendNameGet = [];

let dataFriendLastNameGet = [];

let dataFriendImgGet = [];

for(let i = 0; i < dataFriendLengthGet; i++){
    let dataFriendIdExport = "dataFriendId" + i;
    let dataFriendNameExport = "dataFriendName" + i;
    let dataFriendLastNameExport = "dataFriendLastName" + i;
    let dataFriendImgExport = "dataFriendImg" + i;

    dataFriendIdGet.push(localStorage.getItem(dataFriendIdExport));

    dataFriendNameGet.push(localStorage.getItem(dataFriendNameExport));

    dataFriendLastNameGet.push(localStorage.getItem(dataFriendLastNameExport));

    dataFriendImgGet.push(localStorage.getItem(dataFriendImgExport));
}

let dataFriendTable = [];

function addFriendTable(i){
    let dataFriendTableObject = {};

    dataFriendTableObject.id = dataFriendIdGet[i];
    dataFriendTableObject.name = dataFriendNameGet[i];
    dataFriendTableObject.lastName = dataFriendLastNameGet[i];
    dataFriendTableObject.img = dataFriendImgGet[i];
    dataFriendTable.push(dataFriendTableObject);
}

for(let i = 0; i < dataFriendLengthGet; i++){
    addFriendTable(i);
}


for(let i = 0; i < dataRatingLengthGet; i++){
    takeInfo(dataRatingTable[i], i );
}

let ratingPeopleFriend = document.querySelectorAll('.pepople-in-table');

for(let i = 0; i < dataRatingLengthGet; i++){
    for(let g = 0; g < dataFriendLengthGet; g++){
        if(dataRatingTable[i].id == dataFriendTable[g].id){
            ratingPeopleFriend[i + 1].classList.add('friend-in-table');
            ratingPeopleFriend[i + 1].classList.remove('pepople-in-table');
        }
    }
}

buttonChat.addEventListener('mouseover', () =>{
    buttonImg.src = "./pic/chat-active.png";
});

buttonChat.addEventListener('mouseout', () => {
    buttonImg.src = "./pic/chat-disactiv.png";
});

friendsList.addEventListener('mouseover', () => {
    friendsList.classList.add('friends-list-scroll-disabled');
});

friendsList.addEventListener('mouseout', () => {
    friendsList.classList.remove('friends-list-scroll-disabled');
});

let scrollPx = 0;

let friendNumber = document.querySelectorAll('.friend');

buttonScrollFriendsLeft.addEventListener('click', () => {
    if(scrollPx >= 1){
        let scroll = (59 + 1) * scrollPx;

        let scrollMove = scroll;
        
        scrollPx--;

        let scrollAnimation = setInterval(() => {
            friendsList.scrollLeft = scrollMove--;
            buttonScrollFriendsLeft.disabled = true;
            console.log(friendsList.scrollLeft);
            console.log(scrollPx);
            if(scrollMove == scroll - (59 + 2)){
                clearInterval(scrollAnimation);
                buttonScrollFriendsLeft.disabled = false;
            }
        
        }, 5);
    }
});

buttonScrollFriendsRight.addEventListener('click', () => {
    if(scrollPx < friendNumber.length - (5 + 2)){
        let scroll = (59 + 1) * scrollPx;

        let scrollMove = scroll;
        
        scrollPx++;

        let scrollAnimation = setInterval(() => {
            friendsList.scrollLeft = scrollMove++;
            buttonScrollFriendsRight.disabled = true;
            console.log(friendsList.scrollLeft);
                console.log(scrollPx);
            if(scrollMove == scroll + (59+2)){
                clearInterval(scrollAnimation);
                buttonScrollFriendsRight.disabled = false;
            }
        
        }, 5);
    }
});

let friendButtonArea = document.querySelectorAll('.friend-button-area');
let friendButton = document.querySelectorAll('.friend-button');
let addFriend = dataFriendTable.length;

for(let i = 0; i < dataFriendTable.length; i++){
    friendButton[i].src = dataFriendTable[i].img;
    let friendAdd = document.querySelector('.friend-add');
    friendButtonArea[addFriend].appendChild(friendAdd);
}