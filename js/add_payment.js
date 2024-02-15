let student_name = document.getElementById('student_name');
let student_id = document.getElementById('student_id');
let semester = document.getElementById('semester');
let Departement = document.getElementById('Departement');
let total_clock_subject = document.getElementById('total_clock_subject');
let status = document.getElementById('status');
let amount_paid_today = document.getElementById('amount_paid_today');
let payment_type = document.getElementById('payment_type');
let payment_status = document.getElementById('payment_status');
let payment_method = document.getElementById('payment_method');
let remaining_money = document.getElementById('remaining_money');
let count_money = document.getElementById('count_money');
let total_money = document.getElementById('total_money');

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
        semester:semester.value,
        Departement:Departement.value,
        total_clock_subject:total_clock_subject.value,
        status:status.value,
        amount_paid_today:amount_paid_today.value,
        payment_type:payment_type.value,
        payment_status:payment_status.value,
        payment_method:payment_method.value,
        remaining_money:remaining_money.value,
        count_money:count_money.value,
        total_money:total_money.value,
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
    semester.value = '';
    Departement.value = '';
    total_clock_subject.value = '';
    status.value = '';
    amount_paid_today.value = '';
    payment_type.value = '';
    payment_status.value = '';
    payment_method.value = '';
    remaining_money.value = '';
    count_money.value = '';
    total_money.value = '';
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
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_clock_subject}</td>
            <td>${dataPro[i].status}</td>
            <td>${dataPro[i].amount_paid_today}</td>
            <td>${dataPro[i].payment_type}</td>
            <td>${dataPro[i].payment_status}</td>
            <td>${dataPro[i].payment_method}</td>
            <td>${dataPro[i].remaining_money}</td>
            <td>${dataPro[i].count_money}</td>
            <td>${dataPro[i].total_money}</td>
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
    semester.value = dataPro[i].semester;
    Departement.value = dataPro[i].Departement;
    total_clock_subject.value = dataPro[i].total_clock_subject;
    status.value = dataPro[i].status;
    amount_paid_today.value = dataPro[i].amount_paid_today;
    payment_type.value = dataPro[i].payment_type;
    payment_status.value = dataPro[i].payment_status;
    payment_method.value = dataPro[i].payment_method;
    remaining_money.value = dataPro[i].remaining_money;
    count_money.value = dataPro[i].count_money;
    total_money.value = dataPro[i].total_money;
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
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_clock_subject}</td>
            <td>${dataPro[i].status}</td>
            <td>${dataPro[i].amount_paid_today}</td>
            <td>${dataPro[i].payment_type}</td>
            <td>${dataPro[i].payment_status}</td>
            <td>${dataPro[i].payment_method}</td>
            <td>${dataPro[i].remaining_money}</td>
            <td>${dataPro[i].count_money}</td>
            <td>${dataPro[i].total_money}</td>
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
            <td>${dataPro[i].semester}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].total_clock_subject}</td>
            <td>${dataPro[i].status}</td>
            <td>${dataPro[i].amount_paid_today}</td>
            <td>${dataPro[i].payment_type}</td>
            <td>${dataPro[i].payment_status}</td>
            <td>${dataPro[i].payment_method}</td>
            <td>${dataPro[i].remaining_money}</td>
            <td>${dataPro[i].count_money}</td>
            <td>${dataPro[i].total_money}</td>
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