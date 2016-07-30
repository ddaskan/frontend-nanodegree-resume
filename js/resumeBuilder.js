/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var firstName = "Dogan";
 var lastName = "Askan";
 var name = firstName+" "+lastName;
 var age = 31;
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", "Data Analyst");
 var email = "doganaskan@gmail.com";

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);





/*
 $("#main").append(firstName+" "+lastName);
 $("#header").append();
console.log(lastName+firstName); */
var awesomeThoughts = "I am "+firstName+" and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
 $("#main").append(funThoughts);
