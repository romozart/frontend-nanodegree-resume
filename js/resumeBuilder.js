$("#main").append("Roman");

var work = {
  "title": "programmer",
  "dsc": "Enter description here please"
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDsc = HTMLworkDescription.replace("%data%", work.dsc);

$("#main").append(workTitle);
$("#main").append(workDsc);
