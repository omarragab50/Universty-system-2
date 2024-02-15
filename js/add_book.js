let student_name = document.getElementById('student_name');
let student_id = document.getElementById('student_id');
let student_section = document.getElementById('student_section');
let date_of_addition = document.getElementById('date_of_addition');
let employee_name_add = document.getElementById('employee_name_add');
let book_price = document.getElementById('book_price');
let money_payment = document.getElementById('money_payment');
let student_book = document.getElementById('student_book');
let employee = document.getElementById('employee');
let doctor = document.getElementById('doctor');
let assistant = document.getElementById('assistant');


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
        date_of_addition:date_of_addition.value,
        employee_name_add:employee_name_add.value,
        book_price:book_price.value,
        money_payment:money_payment.value,
        student_book:student_book.value,
        employee:employee.value,
        doctor:doctor.value,
        assistant:assistant.value,
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
    date_of_addition.value = '';
    employee_name_add.value = '';
    book_price.value = '';
    money_payment.value = '';
    student_book.value = '';
    employee.value = '';
    doctor.value = '';
    assistant.value = '';
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
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].book_price}</td>
            <td>${dataPro[i].money_payment}</td>
            <td>${dataPro[i].student_book}</td>
            <td>${dataPro[i].employee}</td>
            <td>${dataPro[i].doctor}</td>
            <td>${dataPro[i].assistant}</td>
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
    date_of_addition.value = dataPro[i].date_of_addition;
    employee_name_add.value = dataPro[i].employee_name_add;
    book_price.value = dataPro[i].book_price;
    money_payment.value = dataPro[i].money_payment;
    student_book.value = dataPro[i].student_book;
    employee.value = dataPro[i].employee;
    doctor.value = dataPro[i].doctor;
    assistant.value = dataPro[i].assistant;
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
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].book_price}</td>
            <td>${dataPro[i].money_payment}</td>
            <td>${dataPro[i].student_book}</td>
            <td>${dataPro[i].employee}</td>
            <td>${dataPro[i].doctor}</td>
            <td>${dataPro[i].assistant}</td>
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
            <td>${dataPro[i].date_of_addition}</td>
            <td>${dataPro[i].employee_name_add}</td>
            <td>${dataPro[i].book_price}</td>
            <td>${dataPro[i].money_payment}</td>
            <td>${dataPro[i].student_book}</td>
            <td>${dataPro[i].employee}</td>
            <td>${dataPro[i].doctor}</td>
            <td>${dataPro[i].assistant}</td>
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