const bio = {
    "name": "Tony Wahula",
    "role": "Front End Web Developer",
    "contacts": {
        "email": "mawahula4@gmail.com",
        "mobile": "919-608-1562",
        "github": "wahula4",
        "linkedIn": "https://www.linkedin.com/in/tony-wahula/",
        "location": "Denver, CO"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Hi, I'm a frontend web developer that's passionate about learning and growing as a professional. ",
    "skills": ["HTML", "CSS", "JavaScript", "JQuery", "Git", "WordPress"],
    display: () => {
        const formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        $('#header').append(HTMLskillsStart);
        for (let skill of bio.skills) {
            const formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        }

        const formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedBioPic);
        const formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        const formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#topContacts").append(formattedRole);
        const formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        const formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);
        const formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        const formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
    }
}

const work = {
    "jobs": [{
            "title": "Landscape Supervisor",
            "employer": "Shea Properties",
            "dates": "September 2015 - present",
            "location": "Denver, CO",
            "description": "I supervise and schedule the daily tasks for maintenance operations in the Highlands Ranch area. I help with proposals for enhancements to the landscape and monitor contract work being done in the field. I also contribute to our safety program by monitoring safety reports done by each employee."
        },
        {
            "title": "Landscape Supervisor",
            "employer": "North American Lawn and Landscape",
            "dates": "August 2013 - August 2015",
            "location": "Charlotte, NC",
            "description": "Supervise a 15-man crew for a full service commercial landscaping company. The daily tasks involve scheduling, irrigation maintenance, and chemical applications."
        },
        {
            "title": "Assistant Golf Course Superintendent",
            "employer": "River Hills Country Club",
            "dates": "August 2011 - August 2015",
            "location": "Lake Wylie, SC",
            "description": "Assisted the golf course superintendent in all aspects of golf course maintenance."
        }
    ],
    display: () => {
        for (job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            const formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            const formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            const formattedEmployerTitle = formattedEmployer + formattedTitle;
            const formattedDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            const formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
            const formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDate);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        }
    }
};

const projects = {
    "projects": [{
            "title": "Friend Finder",
            "dates": 2018,
            "images": "images/friend-finder.PNG",
            "description": "A compatibility-based 'FriendFinder' application. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match."
        },
        {
            "title": "Cystal Collector",
            "dates": "2018",
            "images": "images/crystal.png",
            "description": "This game is an example of how to dynamically update the HTML using jQuery."
        },
        {
            "title": "Eat the Burger",
            "dates": "2018",
            "images": "",
            "description": "This web app allows users to input the name of the burger they want to eat, then click to devour it.  The state of each burger is stored in a MySQL database."
        }
    ],
    display: () => {
        for (project in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            const formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            const formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            const formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            const formattedProjectImage = HTMLprojectImage.replace("%data", projects.projects[project].images);
            $('.project-entry:last').append(formattedProjectTitle);
            $('.project-entry:last').append(formattedProjectDates);
            $('.project-entry:last').append(formattedProjectDescription);
            $('.project-entry:last').append(formattedProjectImage);
        }
    }
};

const education = {
    "schools": [{
            "name": "North Carolina State University",
            "degree": "BA",
            "location": "Raleigh, NC",
            "majors": ["Turfgrass Science"],
        },
        {
            "name": "University of Denver",
            "degree": "Certificate",
            "location": "Denver, CO",
            "majors": ["6 month coding bootcamp"],
        }
    ],
    display: () => {
        $("#education").append(HTMLschoolStart);
        for (school in education.schools) {
            const formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            const formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            const formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            const formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);

        }
    }
};

bio.display();
work.display();
projects.display();
education.display();


$('#mapDiv').append(googleMap);