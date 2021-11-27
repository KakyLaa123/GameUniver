const data = {
    "rating": [
		{
			"id": "123",
			"name": "Владимир",
			"lastName": "Ларионов",
			"img": "./male.png",
			"points": "463"
		},
		{
			"id": "9",
			"name": "Владимир",
			"lastName": "Сергеев",
			"img": "./male.png",
			"points": "521"
		},
		{
			"id": "231",
			"name": "Вениамин",
			"lastName": "Васильев",
			"img": "./male.png",
			"points": "865"
		},
		{
			"id": "321",
			"name": "Мария",
			"lastName": "Логинова",
			"img": "./female.png",
			"points": "865"
		},
		{
			"id": "492",
			"name": "Борис",
			"lastName": "Казанцев",
			"img": "./male.png",
			"points": "784"
		},
		{
			"id": "452",
			"name": "Полина",
			"lastName": "Калинина",
			"img": "./female.png",
			"points": "225"
		},
		{
			"id": "796",
			"name": "Даниил",
			"lastName": "Воробьёв",
			"img": "./male.png",
			"points": "642"
		},
		{
			"id": "4",
			"name": "Эрик",
			"lastName": "Аксёнов",
			"img": "./male.png",
			"points": "150"
		},
		{
			"id": "1155",
			"name": "Иван",
			"lastName": "Иванов",
			"img": "./male.png",
			"points": "100"
		},
		{
			"id": "12145",
			"name": "Артем",
			"lastName": "Алексеев",
			"img": "./male.png",
			"points": "1000"
		}
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
};

var dataRatingLength = data.rating.length;

	localStorage.setItem("dataRatingLength", dataRatingLength);

var dataRating = data.rating;

for(let i = 0; i < dataRating.length; i++){
	var dataRatingId = "dataRatingId" + i;
	var dataRatingName = "dataRatingName" + i;
	var dataRatingLastName = "dataRatingLastName" + i;
	var dataRatingImg = "dataRatingImg" + i;
	var dataRatingPoints = "dataRatingPoints" + i;

	localStorage.setItem(dataRatingId, dataRating[i].id);

	localStorage.setItem(dataRatingName, dataRating[i].name);

	localStorage.setItem(dataRatingLastName, dataRating[i].lastName);

	localStorage.setItem(dataRatingImg, dataRating[i].img);

	localStorage.setItem(dataRatingPoints, dataRating[i].points);

}

var dataFriendLength = data.friends.length;

	localStorage.setItem("dataFriendLength", dataFriendLength);

var dataFriend = data.friends;

for( let i = 0; i < dataFriend.length; i++){
	var dataFriendId = "dataFriendId" + i;
	var dataFriendName = "dataFriendName" + i;
	var dataFriendLastName = "dataFriendLastName" + i;
	var dataFriendImg = "dataFriendImg" + i;

	localStorage.setItem(dataFriendId, dataFriend[i].id);

	localStorage.setItem(dataFriendName, dataFriend[i].name);

	localStorage.setItem(dataFriendLastName, dataFriend[i].lastName);

	localStorage.setItem(dataFriendImg, dataFriend[i].img);

}