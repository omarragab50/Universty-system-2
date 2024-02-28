let employee_name = document.getElementById('employee_name');
let employee_id = document.getElementById('employee_id');
let name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let section = document.getElementById('section');
let graduation_degree = document.getElementById('graduation_degree');
let university_name = document.getElementById('university_name');
let teacher_or_employee = document.getElementById('teacher_or_employee');
let specialization = document.getElementById('specialization');
let starting_date = document.getElementById('starting_date');
let salary = document.getElementById('salary');
let adress = document.getElementById('adress');
let submit = document.getElementById('submit');



let mood = 'create';
let tmp;

// create product
let dataPro;
if(localStorage.product != null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro = [];
}



submit.onclick = function(){
    let newPro = {
        employee_name:employee_name.value,
        employee_id:employee_id.value.toLowerCase(),
        name:name.value,
        email:email.value,
        number:number.value,
        section:section.value,
        graduation_degree:graduation_degree.value,
        university_name:university_name.value,
        teacher_or_employee:teacher_or_employee.value,
        specialization:specialization.value,
        starting_date:starting_date.value,
        salary:salary.value,
        adress:adress.value,
    }

    if(employee_name.value != ''&& employee_id.value != ''){
        if(mood === 'create'){
            dataPro.push(newPro)
        }else{
            dataPro[ tmp ] = newPro;
            mood = 'create';
            submit.innerHTML = 'create';
        }
        clearData()
    }

    // dataPro.push(newPro)
    // save localstorage

    localStorage.setItem('product',   JSON.stringify(dataPro)     )
    
    
    showData()
}









// save localstorage
// clear inputs

function clearData(){
    employee_name.value = '';
    employee_id.value = '';
    name.value = '';
    email.value = '';
    number.value = '';
    section.value = '';
    graduation_degree.value = '';
    university_name.value = '';
    teacher_or_employee.value = '';
    specialization.value = '';
    starting_date.value = '';
    salary.value = '';
    adress.value = '';
}


// read

function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].employee_name}</td>
            <td>${dataPro[i].employee_id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].number}</td>
            <td>${dataPro[i].section}</td>
            <td>${dataPro[i].graduation_degree}</td>
            <td>${dataPro[i].university_name}</td>
            <td>${dataPro[i].teacher_or_employee}</td>
            <td>${dataPro[i].specialization}</td>
            <td>${dataPro[i].starting_date}</td>
            <td>${dataPro[i].salary}</td>
            <td>${dataPro[i].adress}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All(${dataPro.length})</button>

        `
    }else{
        btnDelete.innerHTML = '';
    }
}
showData()


// delete

function deleteData(i)
{
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}

function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()
}



// update

function updateData(i){
    employee_name.value = dataPro[i].employee_name;
    employee_id.value = dataPro[i].employee_id;
    name.value = dataPro[i].name;
    email.value = dataPro[i].email;
    number.value = dataPro[i].number;
    section.value = dataPro[i].section;
    graduation_degree.value = dataPro[i].graduation_degree;
    university_name.value = dataPro[i].university_name;
    teacher_or_employee.value = dataPro[i].teacher_or_employee;
    specialization.value = dataPro[i].specialization;
    starting_date.value = dataPro[i].starting_date;
    salary.value = dataPro[i].salary;
    adress.value = dataPro[i].adress;
    submit.innerHTML = 'updade';
    mood = 'update'
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}


// search
let searchMood = 'id';

function getSearchMood(id)
{
    let search = document.getElementById('search');
    if(id == 'searchId'){
        searchMood = 'employee_id';
        search.placeholder = 'Search By Id';
    }else{
        searchMood = 'employee_name';
        search.placeholder = 'Search By Name';
    }
    search.focus()
    search.value = '';
    showData()
}


function searchData(value)
{
    let table = '';
    if(searchMood == 'employee_id')
    {

        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].employee_id.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].employee_name}</td>
            <td>${dataPro[i].employee_id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].number}</td>
            <td>${dataPro[i].section}</td>
            <td>${dataPro[i].graduation_degree}</td>
            <td>${dataPro[i].university_name}</td>
            <td>${dataPro[i].teacher_or_employee}</td>
            <td>${dataPro[i].specialization}</td>
            <td>${dataPro[i].starting_date}</td>
            <td>${dataPro[i].salary}</td>
            <td>${dataPro[i].adress}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `;
            }
        }

    }else{
        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].employee_name.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].employee_name}</td>
            <td>${dataPro[i].employee_id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].number}</td>
            <td>${dataPro[i].section}</td>
            <td>${dataPro[i].graduation_degree}</td>
            <td>${dataPro[i].university_name}</td>
            <td>${dataPro[i].teacher_or_employee}</td>
            <td>${dataPro[i].specialization}</td>
            <td>${dataPro[i].starting_date}</td>
            <td>${dataPro[i].salary}</td>
            <td>${dataPro[i].adress}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `;
            }
        }
    }
    document.getElementById('tbody').innerHTML = table;
}



// clean data