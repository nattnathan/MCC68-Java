// let judul = document.getElementById("judul")
// console.log(judul);

// judul.onclick = function(){
//     judul.innerHTML = "berubah";
// }

// judul.onclick = function(){
//     judul.style.backgroundColor = "cyan";
// }

// judul.addEventListener("click",function(){
//     judul.innerHTML = "pakai addevent";
// });

// judul.addEventListener("click",function(){
//     judul.style.backgroundColor = "pink";
// });


// array 1 dimensi
// int nilai[10];
//high level language -> untyped

let array = [1,2,3,4];
console.log(array);
let arrayMulti = ['a','b', 3, ['tes','halo',true], false];
console.log(arrayMulti[3][1]);

//input new value 
array.push("tes");
console.log(array);
//stack => taro di belakang
//pop
array.pop();
console.log(array);
array.unshift("tes");
console.log(array);
array.shift();
console.log(array);

let mhs = {
    name : "budi",
    nim: "a112017",
    hobby: ['mancing','ngegame', 'tawuran'],
    age: 25,
    isActive: true
}
console.log(mhs.hobby[2]);

const user = {};
user.username = "tejo";
user.password = "1234";

console.log(user);
user.password = "tes";
console.log(user);

//array of object (API)
const animals = [
    {name: "fluffy",species:"cat",class:{name:"mamalia"}},
    {name: "Ludwig",species:"snail",class:{name:"invertebrata"}},
    {name: "Garfield",species:"cat",class:{name:"mamalia"}},
    {name: "Carlo",species:"cat",class:{name:"mamalia"}},
    {name: "Dory",species:"fish",class:{name:"invertebrata"}}
]

console.log(animals);

var onlyCat = animals.filter(x => x.species == "cat");

var hitung = (x,y)=>{
    return x+y;
}

console.log(onlyCat);
console.log(hitung(5,7));

// $.ajax({
//     url: "https://pokeapi.co/api/v2/pokemon"
// }).done((result)=>{
//     console.log(result.results);
//     var text = "";
//     $.each(result.results,function(key,val){
//         text += `<tr>
//                     <td>${key+1}</td>
//                     <td>${val.name}</td>
//                     <td><button data-toggle="modal" onclick="detailPoke('${val.url}')" data-target="#modalPoke" class="btn btn-warning">Detail</button></td>
//                 </tr>`;
//     })
//     $("#tbodyPoke").html(text);
// }).fail((error)=>{
//     console.log(error);
// });


function detailPoke(stringURL){
    $.ajax({
        url : stringURL
    }).done((res)=>{
        var temp = "";
        temp = `<h2 class="text-primary">${res.name}</h2>`

        $(".modal-title").html(temp)
    })
}


$(document).ready(function(){
    $("#tablePoke").DataTable({
        ajax: {
            url:"https://pokeapi.co/api/v2/pokemon/",
            dataSrc: 'results',
            dataType: 'json'
        },
        buttons: [
            'copy', 'excel', 'pdf'
        ],
        columns:[
            {  
            data: '',
            render: function (data, type, row, meta) {
                return meta.row + meta.settings._iDisplayStart + 1;
            }
            },
            { data: 'name' },
            { data: '',
            render: function (data, type, row, meta) {
                return `<button data-toggle="modal" onclick="detailPoke('${row['url']}')" data-target="#modalPoke" class="btn btn-warning">Detail</button>`;
            }
            }
        ]
    });
});
