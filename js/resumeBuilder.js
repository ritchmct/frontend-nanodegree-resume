// Main header info

var bio = {
	"name": "Ritchie Diaper",
	"role": "Software Engineer",
	"welcomeMessage": "IT Professional for over 20 years",
	"contacts": {
		"mobile": "555 1234",
		"email": "myemail@address.com",
		"github": "ritchmct",
		"twitter": "@ritchmctitch",
		"location": "Edinburgh, UK"
	},
	"skills": ["IBM Cloud Orchestrator", "IBM Endpoint Manager", "IBM Configuration Manager", "IBM Business Process Manager"],
	"bioPic": "images/Me.jpg"
};

bio.display = function() {

	if (bio.role != "") {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
	}

	if (bio.name != "") {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
	}

	if (bio.contacts) {

		if (bio.contacts.mobile != "") {
			var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
			$("#topContacts").append(formattedMobile);
			$("#footerContacts").append(formattedMobile);
		}

		if (bio.contacts.email != "") {
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedEmail);
			$("#footerContacts").append(formattedEmail);
		}

		if (bio.contacts.twitter != "") {
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);
			$("#footerContacts").append(formattedTwitter);
		}

		if (bio.contacts.github != "") {
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts").append(formattedGithub);
			$("#footerContacts").append(formattedGithub);
		}

		if (bio.contacts.location != "") {
			var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
			$("#topContacts").append(formattedLocation);
		}

	}

	if (bio.bioPic != "") {
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBiopic);
	}

	if (bio.welcomeMessage != "") {
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
	}


	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}

	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", skill);
		$("#skills").append(formattedSkill);
	});
}

bio.display();

// Work experience

var work = {
	"jobs": [{
		"employer": "IBM",
		"title": "IT Specialist",
		"location": "Edinburgh, UK",
		"dates": "2000-2015",
		"description": "Working with IBM customers to deploy IBM software solutions."
	}, {
		"employer": "Self Employed",
		"title": "IT Consultant",
		"location": "London, UK",
		"dates": "1997-2000",
		"description": "Deploying Systems Management software at UK airports."
	}, {
		"employer": "Schlumberger",
		"title": "Computer Engineer",
		"location": "London, UK",
		"dates": "1990-1997",
		"description": "Maintaining computer hardware at Schlumberger data centers."
	}, {
		"employer": "Seismograph Service Limited",
		"title": "Field Seismologist",
		"location": "Port Harcourt, Nigeria",
		"dates": "1985-1990",
		"description": "Working on a shallow marine Seismic crew in the Niger delta involved in oil exploration."
	}]
};

work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", job.dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
		$(".work-entry:last").append(formattedDescription);
	});
}

work.display();

// Projects undertaken

var projects = {
	"projects":[{
		"title": "Tivoli deployment at BAA",
		"dates": "1997-1999",
		"description": "Large deployment of Tivoli software throughout a number of airports in the UK",
		"images": ["images/Drawers-small-400.jpg", "images/Sill-small-400.jpg"]
	}]
};

projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(formattedDescription);
		project.images.forEach(function(image) {
			var formattedImage = HTMLprojectImage.replace("%data%", image);
			$(".project-entry:last").append(formattedImage);
		});
	});
}

projects.display();

// Education

var education = {
	"schools":[{
		"name": "Heriot Watt University",
		"location": "Edinburgh, UK",
		"degree": "BSc",
		"majors": ["Electrical Engineering", "Electronic Engineering"],
		"dates": "1980-1984",
		"url": "http://www.hw.ac.uk/"
	}]
};

education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", school.name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
		$(".education-entry:last").append(formattedName + formattedDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedLocation);
		school.majors.forEach(function(major) {
			var formattedMajor = HTMLschoolMajor.replace("%data%", major);
			$(".education-entry:last").append(formattedMajor);
		});
	});
}

education.display();

// Map

$("#mapDiv").append(googleMap);