const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter =
searchInput.value.toLowerCase();

let rows =
document.querySelectorAll("#workerTable tbody tr");

rows.forEach(function(row){

let name =
row.cells[1].textContent.toLowerCase();

if(name.includes(filter)){

row.style.display="";

}

else{

row.style.display="none";

}

});

});