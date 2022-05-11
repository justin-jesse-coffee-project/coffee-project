"use strict"

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// Table Form for Coffee Array
function renderCoffee(coffee) {
    // var html = coffee.name + '' + coffee.roast


    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//sort by roast
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var searchRoast = searchBox.value.toUpperCase();
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === 'all') && (coffee.name.toUpperCase().includes(searchRoast) || coffee.name.length <1)) {
            filteredCoffees.push(coffee);
        }

    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//sort by coffee name
// function searchCoffees() {
//     var searchRoast = searchBox.value.toUpperCase();
//     var filteredCoffees = [];
//     // console.log(searchRoast);
//     coffees.forEach(function(coffee) {
//         if (coffee.name.toUpperCase().includes(searchRoast)) {
//             filteredCoffees.push(coffee);
//             // console.log(filteredCoffees);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

//Coffee Array
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide


function addCoffee(e){
    e.preventDefault()
    var newCoffee = {
        id : coffees.length+1,
        name: coffeeName.value,
        roast: newRoast.value
    }
    coffees.push(
        newCoffee
)
}

//Submit buttons for searches
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeName = document.querySelector('#add-coffee')
tbody.innerHTML = renderCoffees(coffees);
var newRoast = document.querySelector('#add-roast')
submitButton.addEventListener('click', updateCoffees);
// submitButton.addEventListener('click', addCoffee);                    //This code added when updating, not idea
// coffeeName.addEventListener('click',addCoffee );
// newRoast.addEventListener('click',addCoffee );
var submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click',addCoffee );
submitButton2.addEventListener('click',updateCoffees );
var searchBox = document.querySelector('#searchBox');
searchBox.addEventListener('keyup', updateCoffees);


