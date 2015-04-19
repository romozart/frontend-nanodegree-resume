var formattedName = HTMLheaderName.replace("%data%", "Roman Bull Di Gaetano");
var formattedRole = HTMLheaderRole.replace("%data%", "programmer");

var work = {
  "title": "programmer",
  "description": "Enter description here please"
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDsc = HTMLworkDescription.replace("%data%", work.description);

$("#main").append(formattedName);
$("#main").append(formattedRole);
$("#workExperience").append(workTitle);
$("#workExperience").append(workDsc);
