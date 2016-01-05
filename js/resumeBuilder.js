// Main header info

var bio = {
	"name": "Ritchie Diaper",
	"role": "Software Engineer",
	"welcomeMessage": "Howdie dudes!",
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
		}

		if (bio.contacts.email != "") {
			var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
			$("#topContacts").append(formattedEmail);
		}

		if (bio.contacts.twitter != "") {
			var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
			$("#topContacts").append(formattedTwitter);
		}

		if (bio.contacts.github != "") {
			var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
			$("#topContacts").append(formattedGithub);
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