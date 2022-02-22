
/************  Roomies  ************/

// create array to store the chores
const roomies = JSON.parse(localStorage.getItem('localTest5') || '[]');;

// remove item from list and array once double clicked
$('#listRoomie').on('dblclick', 'li', function() {
  var roomieName = $(this).text();
  console.log(roomieName);
  if (roomies.includes(roomieName)) {
    removeFromArray(roomies, roomieName);
  }
  $(this).remove();
  console.log(roomies);
});

// function that removes specific item in array
function removeFromArray (array, val) {
  const indexToRemove = array.indexOf(val);
  if (indexToRemove > -1) {
    array.splice(indexToRemove,1);
  }
}

function clearArray(array) {
  window.localStorage.clear();
}


// add each chore to list and store it to array
$('#formRoomie').on('submit', function(ev) {
  var inputR = $('#inputRoomie').val();
  $('#listRoomie').append($('<li>').append(inputR));
  roomies.push(inputR);
  localStorage.setItem('localTest5', JSON.stringify(roomies));
  console.log(roomies);
  $('#inputRoomie').val('');
  ev.preventDefault();
});





/************  Chores  ************/

// create array to store the chores
const chores = JSON.parse(localStorage.getItem('localTest3') || '[]');

// remove item from list and array once double clicked
$('#listChore').on('dblclick', 'li', function() {
  var choreName = $(this).text();
  console.log(choreName);
  if (chores.includes(choreName)) {
    removeFromArray(chores, choreName);
  }
  $(this).remove();
  console.log(chores);
});


// add each chore to list and store it to array
$('#formChore').on('submit', function(e) {
  var inputC = $('#inputChore').val();
  $('#listChore').append($('<li>').append(inputC));
  chores.push(inputC);
  localStorage.setItem('localTest3', JSON.stringify(chores));
  console.log(chores);
  $('#inputChore').val('');
  e.preventDefault();
});



/************  Assign Chores  ************/

$('#assignChores').on('submit', function(e) {
  for (let i = 0; i < roomies.length; i++) {
    let chore = chores[Math.floor(Math.random() * chores.length)];
    if(chore == undefined) {
      $('#listAssign').append(roomies[i] + " has no chores!!" + "<br>");
    } else {
      $('#listAssign').append("The chore is " + chore + " and is assign to " + roomies[i] + "." + "<br>");
      console.log("The chore is " + chore + " and is assign to " + roomies[i] + ".");
    }
    removeFromArray(chores, chore);
    clearArray(roomies);
  }
  e.preventDefault();
});
