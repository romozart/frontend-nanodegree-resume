$("#main").append("Roman");

var work = {
  "title": "programmer",
  "Description": "Enter description here please"
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDsc = HTMLworkDescription.replace("%data%", work.Description);

$("#main").append(workTitle);
$("#main").append(workDsc);
