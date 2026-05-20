let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

displayTasks();

function addTask(){

let input =
document.getElementById(
"taskInput"
);

let task = input.value.trim();

if(task===""){
alert("Enter task");
return;
}

tasks.push({
text:task,
completed:false
});

saveTasks();

input.value="";

displayTasks();

}

function displayTasks(){

let list =
document.getElementById(
"taskList"
);

list.innerHTML="";

tasks.forEach(
(task,index)=>{

let li =
document.createElement(
"li"
);

if(task.completed){
li.classList.add(
"completed"
);
}

li.innerHTML=`
<span onclick=
"toggleTask(${index})">
${task.text}
</span>

<button class="deleteBtn"
onclick=
"deleteTask(${index})">
Delete
</button>
`;

list.appendChild(li);

});

}

function toggleTask(index){

tasks[index].completed=
!tasks[index].completed;

saveTasks();

displayTasks();

}

function deleteTask(index){

tasks.splice(index,1);

saveTasks();

displayTasks();

}

function saveTasks(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}