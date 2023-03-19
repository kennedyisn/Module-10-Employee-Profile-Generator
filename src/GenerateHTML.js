
function createHTML(SavedEmployees) {
    let generatedHTML = "";
    SavedEmployees.forEach((Employee) => {
    console.log("Employee: ", Employee);
    console.log("Role: ", Employee.getRole());
    if (Employee.constructor.name === "Manager") {
        generatedHTML += `
        <div class="card Manager">
            <div class="Manager-card-header">
                <ul class="header-info">
                <li>${Employee.getName()}</li>
                <li>Manager</li>
                </ul>
            </div>
            <div>
                <ul class="header-info">
                <li>ID: ${Employee.getId()}</li>
                <li>Office: ${Employee.getOfficeNumber()}</li>
                <li> <a href="mailto: ${Employee.getEmail()}" target="none"><p>Email Address: ${Employee.getEmail()}</p></a></li>
                </ul>
            </div>
        </div>
    `
    }

    if (Employee.constructor.name === "Intern") {
        generatedHTML += `
            <div class="card Employee">
                <div class="Intern-card-header">
                    <ul class="header-info">
                        <li>${Employee.getName()}</li>
                        <li>Intern</li>
                    </ul>
                </div>
                <div>
                    <ul class="header-info">
                        <li>ID: ${Employee.getId()}</li>
                        <li>School: ${Employee.getSchool()}</li>
                        <li> <a href="mailto: ${Employee.getEmail()}" target="none"><p>Email Address: ${Employee.getEmail()}</p></a></li>
                    </ul>
                </div>
            </div>
        `
    }

    if (Employee.constructor.name === "Engineer") {
    generatedHTML += `
            <div class="card Employee">
                <div class="Engineer-card-header">
                    <ul class="header-info">
                        <li>${Employee.getName()}</li>
                        <li>Engineer</li>
                    </ul>
                </div>
                <div>
                    <ul class="header-info">
                    <li> ID: ${Employee.getId()}</li>
                    <li> <a href="mailto: ${Employee.getEmail()}" target="none"><p>Email Address: ${Employee.getEmail()}</p></a></li>
                    <li> <a href="https://github.com/${Employee.getGithub()}"> <p>Github Username: ${Employee.getGithub()}</p></a></li>
                    </ul>
                </div>
            </div>
        `
    }
    });
    return generatedHTML;
}

module.exports = (SavedEmployees) => {
return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Team Profiles</title>
<link rel="stylesheet" "style.css">
</head>
<body>
	<header class="dash">
		<h1>Team Profiles</h1>
	</header>
	<div class="container">
	${createHTML(SavedEmployees)}	
	</div>
</body>
</html>
`
}