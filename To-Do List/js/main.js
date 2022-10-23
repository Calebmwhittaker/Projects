function addLi() {
    const ol = document.getElementById('list');
    const li = document.createElement('li');
    const btn = document.createElement('button');
    // create text inside the button
    btn.innerHTML = 'X';
    //remove the parent of this button when clicked
    const message = document.getElementById('to-do').value;
    const newMessage = document.createTextNode(message);
    li.appendChild(newMessage);
    li.appendChild(btn);
    ol.appendChild(li);
    function clickHandler(event){
        console.log('Button Clicked');
        // Removes the parent element of this button when clicked
        btn.parentElement.remove();
        document.getElementById("submit").addEventListener('click', )
    }
    btn.addEventListener('click', clickHandler);
}