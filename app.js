window.addEventListener("DOMContentLoaded", function () {
    // Set the date for today
    let today = new Date();
    let date = document.querySelector("#today");
    date.innerHTML = `${today.getMonth()+1} / ${today.getDate()}`;

    // strikethrough the task by Checked box
     document.addEventListener("click", function (e) {
         let target = e.target;
       console.log(target);

        let ul = document.querySelector("ul");
        if(target.id ==='btn-add'){
            ul.appendChild(newToDo());
        } else{
            if(target.classList.contains('to-do')){
                var span = target.parentNode.querySelector('span');
                span.classList.add('checked');
            } 
            if(target.type === 'checkbox' && target.checked === false){
                span.classList.remove('checked');
            }
        }
        // Remove selected to-do from the list
        if(target.classList && target.classList.contains('remove')){
            target.parentNode.remove();

        } else if(target.classList && target.classList.contains('edit')){
            console.log(target.parentNode.childNodes.length)
            if(target.parentNode.childNodes.length===4||target.parentNode.childNodes.length===7){
                prepareEditToDo(target.parentNode);
            }
        }else if(target.classList && target.classList.contains('complete')){

                editToDo(target.parentNode);

        }
    });
    
    // Create edit & remove button
    let list = document.querySelectorAll("li");
    for (i = 0; i < list.length; i++) {
        var edit = document.createElement("span");
        var pencil = document.createTextNode("\u270E");
        edit.className = "edit";
        edit.appendChild(pencil);
        list[i].appendChild( edit);

        var remove = document.createElement("span");
        var x = document.createTextNode("\u00D7");
        remove.className = "remove";
        remove.appendChild(x);
        list[i].appendChild(remove);
    }
});

function prepareEditToDo(target){
    // Creat input to edit to-do
    //<input class="btn btn-primary" type="submit" value="+">
    var input = document.createElement("input");
    input.classList.add("editbox", "form-control");
    input.type="text";
    input.id="edit1"
    input.placeholder="Edit to-do";
    var complete = document.createElement("input")
    complete.classList.add("btn", "btn-primary", "complete");
    complete.type="submit"
    complete.value="\u2713"
    target.appendChild(input);
    target.appendChild(complete);

}
function editToDo(target){
    var toEdit = document.getElementById("edit1").value;
    console.log(toEdit);
    if(toEdit==='') {
        alert("Write for editing to-do!");}
    else{

        //var toEditText= document.createTextNode(toEdit);
        let name = target.querySelector(".to-do-name")
        name.innerText=toEdit;
        let clearEdit = target.querySelector(".editbox");
        let clearCom = target.querySelector(".complete");
        clearCom.remove();
        clearEdit.remove();

    }
}

// Create/Add new to-do list
function newToDo(){
    /***
     *  <li class="list-group-item">
            <input class="to-do form-check-input me-1" type="checkbox" value="">
            <span class="">OOP345-Workshop</span>
        </li>
     */
    var add = document.querySelector("#add").value;
    if (add === '') {
        alert("Write the to-do!");
    } 
    else {
        var li = document.createElement("li");
        li.classList.add("list-group-item");

        var text = document.createTextNode(add);

            var input = document.createElement("input");
            input.classList.add("to-do","form-check-input", "me-1");
            input.type = "checkbox";
            li.appendChild(input);

        document.querySelector("#add").value = "";

        var toDoName = document.createElement("SPAN");
        toDoName.appendChild(text);
        li.appendChild(toDoName);

        var edit = document.createElement("span");
        var pencil = document.createTextNode("\u270E");
        edit.className = "edit";
        edit.appendChild(pencil);
        li.appendChild(edit);

        var remove = document.createElement("span");
        var x = document.createTextNode("\u00D7");
        remove.className = "remove";
        remove.appendChild(x);
        li.appendChild(remove);
        return li;
    }
}