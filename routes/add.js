var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here

	var new_name = request.query.name;
	var new_description = request.query.description;
	var new_imageURL = "http://lorempixel.com/500/500/people";
	var new_friend = {};
	new_friend["name"] = new_name;
	new_friend["description"] = new_description;
	new_friend["imageURL"] = new_imageURL;
	console.log(new_friend);

	data.friends.push(new_friend);
	response.render('index',data);
 }