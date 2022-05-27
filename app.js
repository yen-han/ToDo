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
        if(target.type==='submit'){
            ul.appendChild(newToDo());
        } else{
            if(target.classList.contains('to-do')){
                var span = target.parentNode.querySelector('span');
                span.classList.add('checked');
            } 
            if(target.type=== 'checkbox' && target.checked === false){
                span.classList.remove('checked');
            }
        }
        if(target.classList && target.classList.contains('remove')){
            target.parentNode.style.display = "none";
        }
    });
    
    // 'X' button for remove to-do list
    let list = document.querySelectorAll("li");
    for (i = 0; i < list.length; i++) {
        var span = document.createElement("span");
        var x = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(x);
        list[i].appendChild(span);
    }
});

// Create/Add new to-do list
function newToDo(){
    /***
     *  <li class="list-group-item">
            <input class="to-do form-check-input me-1" type="checkbox" value="">
            <span class="">OOP345-Workshop</span>
        </li>
     */
    var li = document.createElement("li");
    li.classList.add("list-group-item");
    var add = document.querySelector("#add").value;
    var text = document.createTextNode(add);
    //li.appendChild(text);
    if (add === '') {
      alert("You must write something!");
    } else {
        //document.querySelector("#add").appendChild(li);
        var input = document.createElement("input");
        input.classList.add("to-do","form-check-input", "me-1");
        input.type="checkbox";
        li.appendChild(input);
    }
    document.querySelector("#add").value = "";

    var toDoName = document.createElement("SPAN");
    toDoName.appendChild(text);
    li.appendChild(toDoName);

    var span = document.createElement("SPAN");
    var x = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(x);
    li.appendChild(span);
    return li;
}