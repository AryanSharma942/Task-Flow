let list = []

let add = () => {
    const input = document.getElementById("add")
    let value = input.value
    if (value == '') {
        alert('Enter something')
        return;
    }
    list.push(value)
    console.log(list)
    input.value = ''
 
    renderList()
}

let renderList = () => {
    let  listStr = ""

    for(let i=0; i<list.length; i++) {
       listStr += `<li>
       <div class = "checkAndlist">
       <div class = "check">
       <input type = "checkbox" onchange="toggleDone(this)">
       </div>
       <span class="task-text"> ${list[i]} </span>
       </div>
       <div class="both">
       <button class="delBtn" onclick='delbtn(${i})'>Delete</button>
       <button class="upBtn" onclick="update(${i})">Update</button>
       <button class="store" onclick="store(${i})">Store</button>
       </div>
       </li>`
    }
    const taskList =  document.getElementById("taskList")
    taskList.innerHTML = listStr

}

let delbtn = index => { list.splice(index, 1);  console.log(list);   renderList() }

let update = index => {
    const newValue = prompt("Update the task:" + list[index])
    if (newValue !== null && newValue.trim() !== "") {
        list[index] = newValue.trim()
        renderList()
    }
}

let toggleDone = checkbox => {
    const taskText = checkbox.closest("li").querySelector(".task-text")
    if (checkbox.checked) {
        taskText.classList.add("completed")
    } else {
        taskText.classList.remove("completed")
    }
}


let store = index => {
let key = "Item"
let value = list[index]
for (let i = 1; i <= list.length; i++){
    key = "Item " + i
}
localStorage.setItem(key, value)
localStorage.getItem(value)
}