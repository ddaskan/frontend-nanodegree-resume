/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name" : "Dogan Askan",
    "role" : "Data Analyst",
    "age" : 31,
    "contacts" : {
        "e-mail" : "doganaskan@gmail.com",
        "GitHub" : "github.com/ddaskan",
        "mobile" : "919-961-5715",
        "location" : "Potsdam, NY"
    },
    "pic" : "images/ben2.jpg",
    "welcome" : "Carpe Diem",
    "skills" : ["Python", "R", "SPSS", "SQL", "Tableau", "JavaScript", "HTML", "CSS"]
 };


var work = {
    "jobs" : [
    {
        "employer" : "Clarkson University",
        "position" : "Research Assistant",
        "location" : "New York, NY",
        "duration" : "September 2015 - Present",
        "desc" : "Design and manage database; code web applications and back end tools. Design and develop a program for anomaly detection by implementing descriptive and predictive analytics. Provide data analytics support to the project team. Design, conduct and evaluate behavior research pilots designed to influence clean energy- and water- related behavior and decisions in New York State."
    },
    {
        "employer" : "Bosch",
        "position" : "Area Sales Manager",
        "location" : "Istanbul, Turkey",
        "duration" : "November 2012 - July 2015",
        "desc" : "Managed all product range of Bosch Thermotechnology including sales & marketing activities covering 8 million Euros in Middle East & Caucasus. Coordinated and advised projects in Middle East and Caucasus for Air Conditioning and Solar Energy System, 8 awarded international projects. Established the development of foreign markets and product portfolio by introducing innovative and new products to markets, impacting business growth by distributor acquisition activities, 40% increase in Lebanon market share for related product groups. Conducted marketing campaigns, seminars and sales trainings for each country and product segment to attain sustainable customer loyalty and satisfaction, 15% increase in customer wallet share on average."
    }
  ]
};

var education = {
    "schools" : [
    {
        "name" : "Clarkson University",
        "location" : "Raleigh, NC",
        "degree" : "MS",
        "major" : "Data Analytics",
        "gradyear" : 2016
    },
    {
        "name" : "Istanbul Technical University",
        "location" : "Rome, Italy",
        "degree" : "BS",
        "major" : "Mechanical Engineering",
        "gradyear" : 2009
    }
  ]
};

var project = {
    "projects" : [
    {
        "name" : "Plant Professor",
        "tools" : ["Python", "MySQL"],
        "year" : "2016",
        "desc" : "Web application for plant owners. Coded back-end tools in Python, designed relational and analytical database"
    },
    {
        "name" : "Real Time Anomaly Detection Algortihm",
        "tools" : ["Python", "Machine Learning"],
        "year" : "2016",
        "desc" : "Project aimed to reduce unnecessary water usage by controlling usage behaviors. Created a real time anomaly detection software. Performed anomaly detection algorithm by utilizing machine learning techniques in Python"
    }
  ]
};

for (i in bio.contacts) {
    $("#header").append(HTMLcontactGeneric.replace("%data%", bio.contacts[i]).replace("%contact%", i));
};

$("#header").append(HTMLbioPic.replace("%data%", bio.pic));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

//if append
if (bio.skills.length  > 0) {
    $("#header").append(HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

//function append
function displayWork() {
    for (i in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].position);
        var formattedWorkCity = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var fomattedWork = formattedEmployer + formattedWorkTitle
        $(".work-entry:last").append(formattedWorkCity);
        $(".work-entry:last").append(fomattedWork);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].duration));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].desc));
    }
};
displayWork();

// click tracker
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});

// to make name capitilze and lastname uppercase
function inName(oldName) {
    var finalName = oldName;
    var temp = oldName.trim().split(" ");
    console.log(temp);
    finalName = temp[0][0].toUpperCase() + temp[0].slice(1).toLowerCase() + " " + temp[1].toUpperCase();
    return finalName;
};
oldName = bio.name
$('#main').append(internationalizeButton);

//Encapsulating Functions
project.display = function() {
    for (i in project.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.projects[i].name));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.projects[i].year));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.projects[i].desc));
    }
};
project.display()

$("#mapDiv").append(googleMap);

/*
 $("#main").append(firstName+" "+lastName);
 $("#header").append();
console.log(lastName+firstName);
var awesomeThoughts = "I am "+firstName+" and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
 $("#main").append(funThoughts);
 */
