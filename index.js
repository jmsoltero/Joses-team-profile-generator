const Manager =require('./lib/Manager');
const Engineer =require('./lib/Engineer'); 
const Intern =require('./lib/Intern');
const makeHTML =require('./dist/makehtml')
const inquirer =require('inquirer');
const fs =require('fs');
const { takeCoverage } = require('v8');

const arrTeam = [];

const chooseEmpQ = {
    name: 'employee',
    type: 'list',
    message: 'What employee are you adding?',
    choices: ['Intern', 'Engineer', 'Manager', 'Team complete']
}


const employeeQuestions = [{
    type: 'input',
    name: 'name',
    message: 'name of employee?',
    validate: (name) => {
        if (name) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'id',
    message: 'id of employee?',
    validate: (id) => {
        if (id) {
            return true;
        } else {
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'email of employee?',
    validate: (email) => {
        if (email) {
            return true;
        } else {
            return false;
        }
    }
}
]

const init = () => {
    return (
        inquirer
        .prompt(chooseEmpQ)
        .then((choose) => {
            if (choose.employee == 'Intern'){
                addIntern()
            } else if (choose.employee == 'Engineer'){
                addEngineer()
            } else if (choose.employee == 'Manager'){
                addManager()
            } else {
                console.log('Please choose an employee to add!')
            }
        })
    )
}




const addIntern=() => {
    employeeQuestions.push({
        type : 'input',
        name: 'school',
        message: 'What school does intern attend?',
        validate: (school) => {
            if(school) {
                return true;
            } else {
                return false;
            }
        }
    })
    return (
        inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            )
            arrTeam.push(intern)
            genHtml();
            loopInq();
        
        }
    ))
}

const loopInq = () => {
    inquirer
            .prompt({
                type: 'list',
                name: 'loop',
                message: 'Add another employee?',
                choices: ['yes', 'no']
            })
    .then((answer) => {
    if ( answer.loop === 'yes'){
        init();
    } else if( answer.loop === 'no' ) {
        console.log('Team generator complete')
    } else {
        console.log(answer)
    }})
}

const addEngineer=() => {
    employeeQuestions.push({
        type : 'input',
        name: 'gitUser',
        message: 'What is the engineers github username?',
        validate: (gitUser) => {
            if(gitUser) {
                return true;
            } else {
                return false;
            }
        }
    })
    return (
        inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.gitUser
            )
            arrTeam.push(engineer)
            genHtml()
            loopInq()
        
        }
    ))
}

const addManager=() => {
    employeeQuestions.push({
        type : 'input',
        name: 'officeNumber',
        message: 'What is the office number?',
        validate: (officeNumber) => {
            if(officeNumber) {
                return true;
            } else {
                return false;
            }
        }
    })
    return (
        inquirer
        .prompt(employeeQuestions)
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            )
            arrTeam.push(manager)
            genHtml()
            loopInq();
        
        }
        
    ))
}


const genHtml = () => {
    const data = makeHTML(arrTeam);
    fs.writeFile("index.html", data, function (err) {
        if (err) throw err;
        console.log('Employee has been added!')
    })
}

init();