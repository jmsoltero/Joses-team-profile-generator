function team(arrTeam){
const empHtml = [];
const mngrFunc = (manager) => {
    let htmlMngr = `
    <div class="manager-card container bg-light mb-2">
        <h2 class="manager-name container">${manager.name}</h2>
        <ul class="manager-info container">
            <li class="id col">ID: ${manager.id}</li>
            <li class="email col">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
            <li class="office-number col">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
    empHtml.push(htmlMngr)
};

const engnrFunc = (engineer) => {
    let htmlEngnr = `
    <div class="engineer-card container bg-light mb-2">
        <h2 class="engineer-name container">${engineer.name}</h2>
        <ul class="engineer-info container">
            <li class="id col">ID: ${engineer.id}</li>
            <li class="engineer-email col">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
            <li class="engineer-username col">Github: <a href="https://github.com/${engineer.gitUser}"></a></li>
        </ul>
    </div>
    `;
    empHtml.push(htmlEngnr)
};

const intrnFunc = (intern) => {
    let htmlIntrn = `
    <div class="intern-card container bg-light mb-2">
        <h2 class="intern-name container">${intern.name}</h2>
        <ul class="intern-info container">
            <li class="intern-id col">ID: ${intern.id}</li>
            <li class="intern-email col">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
            <li class="intern-school col">${intern.school}</li>
        </ul>
    </div>
    `;
    empHtml.push(htmlIntrn)
};

for(let i=0;i < arrTeam.length; i++){
    if(arrTeam[i].getRole() == "Manager") {
        mngrFunc(arrTeam[i]);
    }
    if(arrTeam[i].getRole() == "Engineer") {
        engnrFunc(arrTeam[i]);
    }
    if(arrTeam[i].getRole() == "Intern") {
        intrnFunc(arrTeam[i]);
    }
}
return empHtml.join("")
}
function makehtml(arrTeam){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA_COmpatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team-Generator</title>
    </head>
    <body>
        <header>
            <h1 class="team-card">My Team</h1>
        </header>
        <main> ${team(arrTeam)} </main>
        
        <footer>
        
        </footer>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
        </html>
        `;
}


module.exports = makehtml;
