const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

console.log("this page is linked");

button.addEventListener('click', function(){
    console.log(input.value);
    if (input !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌'
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value = '';
    }
    else {
        const notes = message.innerHTML('Please enter a chapter.');
        document.getElementById('list').textContent = notes.focus();
    }
});