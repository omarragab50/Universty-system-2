let subject_name = document.getElementById('subject_name');
let doctor_of_subject = document.getElementById('doctor_of_subject');
let clock_of_subject = document.getElementById('clock_of_subject');
let semster_of_subject = document.getElementById('semster_of_subject');
let student_name = document.getElementById('student_name');
let student_id = document.getElementById('student_id');
let Departement = document.getElementById('Departement');
let total_colck_of_subject = document.getElementById('total_colck_of_subject');
let date_of_addition = document.getElementById('date_of_addition');
let employee_name_add = document.getElementById('employee_name_add');
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
        subject_name:subject_name.value,
        doctor_of_subject:doctor_of_subject.value.toLowerCase(),
        clock_of_subject:clock_of_subject.value,
        semster_of_subject:semster_of_subject.value,
        student_name:student_name.value,
        student_id:student_id.value,
        Departement:Departement.value,
        total_colck_of_subject:total_colck_of_subject.value,
        date_of_addition:date_of_addition.value,
        employee_name_add:employee_name_add.value,
    }

    if(subject_name.value != ''&& doctor_of_subject.value != ''){
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
    subject_name.value = '';
    doctor_of_subject.value = '';
    clock_of_subject.value = '';
    semster_of_subject.value = '';
    student_name.value = '';
    student_id.value = '';
    Departement.value = '';
    total_colck_of_subject.value = '';
    date_of_addition.value = '';
    employee_name_add.value = '';
}


// read

function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].doctor_of_subject}</td>
            <td>${dataPro[i].clock_of_subject}</td>
            <td>${dataPro[i].semster_of_subject}</td>
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_colck_of_subject}</td>
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
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
    subject_name.value = dataPro[i].subject_name;
    doctor_of_subject.value = dataPro[i].doctor_of_subject;
    clock_of_subject.value = dataPro[i].clock_of_subject;
    semster_of_subject.value = dataPro[i].semster_of_subject;
    student_name.value = dataPro[i].student_name;
    student_id.value = dataPro[i].student_id;
    Departement.value = dataPro[i].Departement;
    total_colck_of_subject.value = dataPro[i].total_colck_of_subject;
    date_of_addition.value = dataPro[i].date_of_addition;
    employee_name_add.value = dataPro[i].employee_name_add;
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
        searchMood = 'student_id';
        search.placeholder = 'Search By Id';
    }else{
        searchMood = 'student_name';
        search.placeholder = 'Search By Name';
    }
    search.focus()
    search.value = '';
    showData()
}


function searchData(value)
{
    let table = '';
    if(searchMood == 'student_id')
    {

        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].student_id.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].doctor_of_subject}</td>
            <td>${dataPro[i].clock_of_subject}</td>
            <td>${dataPro[i].semster_of_subject}</td>
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_colck_of_subject}</td>
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `;
            }
        }

    }else{
        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].student_name.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].doctor_of_subject}</td>
            <td>${dataPro[i].clock_of_subject}</td>
            <td>${dataPro[i].semster_of_subject}</td>
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_colck_of_subject}</td>
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
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