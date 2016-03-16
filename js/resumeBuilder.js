//$(function(){
  
  var model = {
    // Bio Object Definition
    bio: {
      "name" : "Shawn Muldrew",
      "role" : "Web Developer",
      "welcomeMessage" : "A skilled and experienced consultant, fully capable in the roles of data architect, database administrator, performance analyst, and very junior web developer :)",
      "biopic" : "images/shawn300x300.jpg",
      "contacts" : 
      {
        "mobile" : "888-234-5678",
        "email" : "shawnmuldrew@gmail.com",
        "github" : "shawnmuldrew",
        "twitter" : "shawnmuldrew",
        "location" : "Edmonton"
      },
      "skills" : ["SQL","Oracle DB","Postgresql DB","MySQL DB","Query Tuning", "PLSQL", "HTML", "CSS", "JavaScript"]
    },
    
    // Work Object Definition
    work: {
      "jobs" : [
      {
        "employer" : "Alberta Blue Cross",
        "title" : "Senoior Performance Analyst anbd Database Migration Specialist",
        "location" : "Edmonton",
        "dates" : "2013-2015",
        "description" : "Analyzed and improved the performance of the company's new customer administration system. Migrated databases and server environments from Unix to Linux.",
      },
      {
        "employer" : "Epcor",
        "title" : "Project Manager and System Architect",
        "location" : "Edmonton",
        "dates" : "2012",
        "description" : "Managed project to deploy and integrate IT Infrastructure for acquired water sites in USA. Worked with business and technical staff to define Infrastructure requirements.",
      },
      {
        "employer" : "Government of Alberta",
        "title" : "Data Architect",
        "location" : "Edmonton",
        "dates" : "2010-2011",
        "description" : "Worked with business to define the requirements for a replacement Trust Management solution."
      },
      {
        "employer" : "Intec",
        "title" : "Performance Analyst",
        "location" : "Toronto",
        "dates" : "2008-2009",
        "description" : "Analyzed the performance of large telecom company's billing system. Implemented and tested performance improvements."
      }
      ]
    },
    // Define education object
    education: {
      "schools" : [
       {
          "name" : "University of Alberta",
          "location" : "Edmonton",
          "degree" : "Bachlor of Science",
          "majors" : ["Computer Engineering"],
          "dates" : 1988,
          "url" : "http://www.test.com"
        }
      ],
      "onlineCourses" : [
      {
        "title" : "JavaScript Basics",
        "school" : "Udacity",
        "dates" : 2015,
        "url" : "https://www.udacity.com"
      },
      {
        "title" : "HTML and CSS",
        "school" : "Udacity",
        "dates" : 2015,
        "url" : "https://www.udacity.com"
      },
      {
        "title" : "Git and Github",
        "school" : "Udacity",
        "dates" : 2015,
        "url" : "https://www.udacity.com"
      }
      ]
    },
    // Define Projects object
    projects: { 
      "projects" : [
      {
        "title" : "Data Conversion",
        "dates" : "Jan 2004 - Jul 2005",
        "description" : "Migrate data to new application. Lots of data!",
        "images" : ["images/data-conversion.jpg","images/data-conversion-2.jpg"]
      },
      {
        "title" : "Application Performance",
        "dates" : "Aug 2007 - Jul 2008",
        "description" : "Fix the slow application. Very slow!",
        "images" : ["images/performance-1.jpg"]
      }
      ]
    }
  };

  var view = {
    bioDisplay: function(bio) {
      var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
      $("#header").prepend(formattedRole);
      var formattedName = HTMLheaderName.replace("%data%",bio.name);
      $("#header").prepend(formattedName);
      var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
      $("#topContacts").append(formattedMobile);
      var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
      $("#topContacts").append(formattedEmail);
      var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
      $("#topContacts").append(formattedTwitter);
      var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
      $("#topContacts").append(formattedGithub);
      var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
      $("#topContacts").append(formattedLocation);
      var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
      $("#header").append(formattedWelcomeMsg);
      var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
      $("#header").prepend(formattedImage);
      $("#header").append(HTMLskillsStart);
      for (var skill = 0, len = bio.skills.length; skill < len; skill++) {
        formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
        $("#skills").append(formattedSkill);
      }
      formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
      $("#footerContacts").append(formattedMobile);
      formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
      $("#footerContacts").append(formattedEmail);
      formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
      $("#footerContacts").append(formattedTwitter);
      formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
      $("#footerContacts").append(formattedGithub);
      formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
      $("#footerContacts").append(formattedLocation);
    },
    workDisplay: function(work) {
      for (var job = 0, len = work.jobs.length; job < len; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer+formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
      }
    },
    educationDisplay: function(education) {
      $("#education").append(HTMLschoolStart);
      for (var school = 0, len = education.schools.length; school < len; school++) {
        var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
        $(".education-entry:last").append(formattedschoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);
        for (major = 0, len = education.schools[school].majors.length; major < len;  major++) {
          var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedschoolMajor);
        }
      }
      $(".education-entry:last").append(HTMLonlineClasses);
      for (var course = 0, len = education.onlineCourses.length; course < len; course++) {
        var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedonlineTitle);
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedonlineSchool);
        var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedonlineDates);
        var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineURL);
      }
    },
    projectsDisplay: function(projects) {
      for (var project = 0, len = projects.projects.length; project < len; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDate = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
        $(".project-entry:last").append(formattedDate);
        var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        for (var image = 0, len = projects.projects[project].images.length; image < len; image++) {
          var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  };

  var octopus = {
    init: function() {
      var bio = model.bio;
      var work = model.work;
      var education = model.education;
      var projects = model.projects;
      view.bioDisplay(bio);
      view.workDisplay(work);
      view.educationDisplay(education);
      view.projectsDisplay(projects);
    }
  };

  octopus.init();
  $("#mapDiv").append(googleMap);
//});
