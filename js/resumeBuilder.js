$("#main").append("Roman");

var work = {
  "title": "programmer",
  "description": "Enter description here please"
};

var workTitle = HTMLworkTitle.replace("%data%", work.title);
var workDscrptn = HTMLworkDescrption.replace("%data%", work.description);

$("#main").append(workTitle);
$("#main").append(workDscrptn);
