const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if (input !== '') {
        const li = document.createDocument('li');
        const deleteButton = document.createDocument('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌'
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });
        input.focus();
        input.value= '';
        document.getElementById("list").textContent = input.focus();
    }
    else {
        message.innerHTML = 'Please enter a chapter.';
        document.getElementById("list").textContent = message.innerHTML.focus();
    }
});