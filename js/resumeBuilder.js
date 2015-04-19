var formattedName = HTMLheaderName.replace("%data%", "Roman Bull Di Gaetano");
var formattedRole = HTMLheaderRole.replace("%data%", "programmer");

var work = {
  "title": "programmer",
  "description": "Enter description here please"
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDsc = HTMLworkDescription.replace("%data%", work.description);

$("#workExperience").append(formattedName);
$("#workExperience").append(formattedRole);
$("#workExperience").append(workTitle);
$("#workExperience").append(workDsc);
