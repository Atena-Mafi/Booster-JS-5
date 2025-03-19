/**
 * 
 * 1) make an array as MockTask and put some tasks inside it
 * 
 * 2) create a function named fetchTasks(), which returns tasks as a promise with 1 second delay.
 * 2-1) once you start your program the tasks inside the MockTask should display with 1 sec delay
 * 
 * 3) you need to create a function named renderTasks(tasks), to show the taken tasks as list's items on screen
 * 
 * 4) you should have an input for the clients to write their tasks inside, and add them to the list (MockTask array) with addTask button next to input.
 * 
 * 5)Implement the addTask(task) function to simulate adding a task to the MockTasks. Use a Promise to represent the asynchronous operation of adding a task.
 *5-1) your data should add to the list with 0.5 second delay

 * notice:
 * Ensure that when the "Add Task" button is clicked, the new task is added to the list of tasks and rendered on the webpage.
 * Ensure the initial list of tasks is fetched and rendered when the page loads.
 */



 const tasks=["Write email","Make coffe" , "Read book" , "Fix chair" , "Clean desk" ,  "Call friend"];
 console.log(tasks);
 
 const taskList=document.querySelector("#taskList");
 const addTaskBtn=document.querySelector("#addTaskBtn");
 const taskInput=document.querySelector("#taskInput");

 function fetchTasks(){

return new Promise((resolve, reject) => {
    setTimeout(() => {
       
            resolve(tasks);

    }, 1000);
 })


 }



function renderTasks(tasksToDo){
    tasksToDo.forEach(task => {
        const taskEl=document.createElement("li");
        taskList.append(taskEl);
           taskEl.textContent=task;

    });


}




addTaskBtn.addEventListener("click",(e)=>{
const inputEl=taskInput.value.trim();
if (inputEl!=="") {
addTask(inputEl)
.then(addedTask=>{
    const liEl=document.createElement("li");
    liEl.textContent=addedTask;
    taskList.append(liEl);
    taskInput.value="";
}).catch(err=>{
    console.log(err);
    
})


}else{
    alert("Please write a task.")
}


})


 function addTask(task){
return new Promise((resolve)=>{

setTimeout(()=>{

tasks.push(task);
resolve(task)


},500)


});


 }



 
fetchTasks()
.then(result=>{
    renderTasks(result);

 })
 .catch(err=>{
    console.log(err);
    
 })


 