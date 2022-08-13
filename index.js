const buttonClick = document.getElementById('button')

function addingEventListener() {
  buttonClick.addEventListener('click', clicked)
}

function clicked() {
  alert('I was clicked by addingEventListener')
}
