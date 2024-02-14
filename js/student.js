let id = document.getElementById('id');
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let year = document.getElementById('year');
let Score = document.getElementById('Score');
let date = document.getElementById('date');
let Departement = document.getElementById('Departement');
let adress = document.getElementById('adress');
let submit = document.getElementById('submit');


let secondary_school = document.getElementById('secondary_school');
let Section_school = document.getElementById('Section_school');
let National_id = document.getElementById('National_id');
let age = document.getElementById('age');

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
        id:id.value,
        name:name.value.toLowerCase(),
        email:email.value,
        phone:phone.value,
        year:year.value,
        Score:Score.value,
        date:date.value,
        Departement:Departement.value,
        secondary_school:secondary_school.value,
        Section_school:Section_school.value,
        National_id:National_id.value,
        age:age.value,
        adress:adress.value,
    }

    if(id.value != ''&& name.value != ''){
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
    id.value = '';
    name.value = '';
    email.value = '';
    phone.value = '';
    year.value = '';
    Score.value = '';
    date.value = '';
    Departement.value = '';
    secondary_school.value = '';
    Section_school.value = '';
    National_id.value = '';
    age.value = '';
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
            <td>${dataPro[i].id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].phone}</td>
            <td>${dataPro[i].year}</td>
            <td>${dataPro[i].Score}</td>
            <td>${dataPro[i].date}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].secondary_school}</td>
            <td>${dataPro[i].Section_school}</td>
            <td>${dataPro[i].National_id}</td>
            <td>${dataPro[i].age}</td>
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
    id.value = dataPro[i].id;
    name.value = dataPro[i].name;
    email.value = dataPro[i].email;
    phone.value = dataPro[i].phone;
    year.value = dataPro[i].year;
    Score.value = dataPro[i].Score;
    date.value = dataPro[i].date;
    Departement.value = dataPro[i].Departement;
    secondary_school.value = dataPro[i].secondary_school;
    Section_school.value = dataPro[i].Section_school;
    National_id.value = dataPro[i].National_id;
    age.value = dataPro[i].age;
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
        searchMood = 'id';
        search.placeholder = 'Search By Id';
    }else{
        searchMood = 'name';
        search.placeholder = 'Search By Name';
    }
    search.focus()
    search.value = '';
    showData()
}


function searchData(value)
{
    let table = '';
    if(searchMood == 'id')
    {

        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].id.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].phone}</td>
            <td>${dataPro[i].year}</td>
            <td>${dataPro[i].Score}</td>
            <td>${dataPro[i].date}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].secondary_school}</td>
            <td>${dataPro[i].Section_school}</td>
            <td>${dataPro[i].National_id}</td>
            <td>${dataPro[i].age}</td>
            <td>${dataPro[i].adress}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData( ${i})" id="delete">delete</button></td>
        </tr>
        `;
            }
        }

    }else{
        for(let i = 0; i < dataPro.length; i++){
            if(dataPro[i].name.includes(value.toLowerCase())){
                table += `
        <tr>
            <td>${i}</td>
            <td>${dataPro[i].id}</td>
            <td>${dataPro[i].name}</td>
            <td>${dataPro[i].email}</td>
            <td>${dataPro[i].phone}</td>
            <td>${dataPro[i].year}</td>
            <td>${dataPro[i].Score}</td>
            <td>${dataPro[i].date}</td>
            <td>${dataPro[i].Departement}</td>
            <td>${dataPro[i].secondary_school}</td>
            <td>${dataPro[i].Section_school}</td>
            <td>${dataPro[i].National_id}</td>
            <td>${dataPro[i].age}</td>
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