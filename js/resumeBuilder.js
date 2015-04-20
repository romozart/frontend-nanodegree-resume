var bio = {
  "name": "Roman Bull Di Gaetano",
  "role": "programming",
  "msg": "Welcome to my personal site!",
};

var project = {};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.msg); 

var work = {
  "title": "programmer",
  "description": "Enter description here please",
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDsc = HTMLworkDescription.replace("%data%", work.description);

$("#main").append(formattedName);
$("#main").append(formattedRole);
$("#main").append(welcome);
$("#workExperience").append(workTitle);
$("#workExperience").append(workDsc);
