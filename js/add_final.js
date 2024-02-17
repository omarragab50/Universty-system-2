let student_name = document.getElementById('student_name');
let student_id = document.getElementById('student_id');
let student_section = document.getElementById('student_section');
let final_score = document.getElementById('final_score');
let subject_name = document.getElementById('subject_name');
let grade = document.getElementById('grade');
let total_grade_subject = document.getElementById('total_grade_subject');
let pay_or_not = document.getElementById('pay_or_not');
let appear_or_not = document.getElementById('appear_or_not');
let total_grade = document.getElementById('total_grade');
let semester = document.getElementById('semester');
let employee_name_add = document.getElementById('employee_name_add');
let student_result = document.getElementById('student_result');

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
        student_name:student_name.value,
        student_id:student_id.value.toLowerCase(),
        student_section:student_section.value,
        final_score:final_score.value,
        subject_name:subject_name.value,
        grade:grade.value,
        total_grade_subject:total_grade_subject.value,
        pay_or_not:pay_or_not.value,
        appear_or_not:appear_or_not.value,
        total_grade:total_grade.value,
        semester:semester.value,
        employee_name_add:employee_name_add.value,
        student_result:student_result.value,
    }

    if(student_name.value != ''&& student_id.value != ''){
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
    student_name.value = '';
    student_id.value = '';
    student_section.value = '';
    final_score.value = '';
    subject_name.value = '';
    grade.value = '';
    total_grade_subject.value = '';
    pay_or_not.value = '';
    appear_or_not.value = '';
    total_grade.value = '';
    semester.value = '';
    employee_name_add.value = '';
    student_result.value = '';
}


// read

function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].student_section}</td>
            <td>${dataPro[i].final_score}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].grade}</td>
            <td>${dataPro[i].total_grade_subject}</td>
            <td>${dataPro[i].pay_or_not}</td>
            <td>${dataPro[i].appear_or_not}</td>
            <td>${dataPro[i].total_grade}</td>
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].student_result}</td>
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
    student_name.value = dataPro[i].student_name;
    student_id.value = dataPro[i].student_id;
    student_section.value = dataPro[i].student_section;
    final_score.value = dataPro[i].final_score;
    subject_name.value = dataPro[i].subject_name;
    grade.value = dataPro[i].grade;
    total_grade_subject.value = dataPro[i].total_grade_subject;
    pay_or_not.value = dataPro[i].pay_or_not;
    appear_or_not.value = dataPro[i].appear_or_not;
    total_grade.value = dataPro[i].total_grade;
    semester.value = dataPro[i].semester;
    employee_name_add.value = dataPro[i].employee_name_add;
    student_result.value = dataPro[i].student_result;
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
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].student_section}</td>
            <td>${dataPro[i].final_score}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].grade}</td>
            <td>${dataPro[i].total_grade_subject}</td>
            <td>${dataPro[i].pay_or_not}</td>
            <td>${dataPro[i].appear_or_not}</td>
            <td>${dataPro[i].total_grade}</td>
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].student_result}</td>
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
            <td>${dataPro[i].student_name}</td>
            <td>${dataPro[i].student_id}</td>
            <td>${dataPro[i].student_section}</td>
            <td>${dataPro[i].final_score}</td>
            <td>${dataPro[i].subject_name}</td>
            <td>${dataPro[i].grade}</td>
            <td>${dataPro[i].total_grade_subject}</td>
            <td>${dataPro[i].pay_or_not}</td>
            <td>${dataPro[i].appear_or_not}</td>
            <td>${dataPro[i].total_grade}</td>
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].student_result}</td>
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