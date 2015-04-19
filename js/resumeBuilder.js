var me = {
  "name": "Roman Bull Di Gaetano",
  "role": "programming"
};

var formattedName = HTMLheaderName.replace("%data%", me.name);
var formattedRole = HTMLheaderRole.replace("%data%", me.role);

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
