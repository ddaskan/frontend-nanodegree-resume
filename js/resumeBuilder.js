/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name" : "Dogan Askan",
    "role" : "Data Analyst",
    "age" : 31,
    "contact" : {
        "email" : "doganaskan@gmail.com",
        "github" : "https://github.com/ddaskan",
        "mobile" : "919-961-5715"
    },
    "pic" : "images/ben2.jpg",
    "welcome" : "Welcome Guys",
    "skills" : ["Python", "R", "SQL", "Tableau", "JavaScript", "HTML", "CSS"]
 };


var work = {
    "works" : [
    {
        "employer" : "Clarkson University",
        "position" : "Research Assistant",
        "city" : "Potsdam, NY"
    },
    {
        "employer" : "Bosch",
        "position" : "Area Sales Manager",
        "city" : "Istanbul"
    }
  ]
};

var education = {
    "schools" : [
    {
        "name" : "Clarkson University",
        "city" : "Potsdam, NY",
        "degree" : "MS",
        "major" : "Data Analytics",
        "gradyear" : 2016
    },
    {
        "name" : "Istanbul Technical University",
        "city" : "Istanbul, Turkey",
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
        "year" : "2016"
    },
    {
        "name" : "Real Time Anomaly Detection Algortihm",
        "tools" : ["Python", "Machine Learning"],
        "year" : "2016"
    }
  ]
};




$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

$("#main").append(HTMLwelcomeMsg.replace("%data%", bio.welcome));
$("#main").append(HTMLbioPic.replace("%data%", bio.pic));
$("#main").append(HTMLskills.replace("%data%", bio.skills));
$("#main").append(HTMLemail.replace("%data%", bio.contact.email));

$("#main").append(HTMLworkTitle.replace("%data%", work["position"]));
$("#main").append(HTMLschoolName.replace("%data%", education.schools[0].name));


/*
 $("#main").append(firstName+" "+lastName);
 $("#header").append();
console.log(lastName+firstName);
var awesomeThoughts = "I am "+firstName+" and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
 $("#main").append(funThoughts);
 */
