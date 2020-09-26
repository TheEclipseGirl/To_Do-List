var totalTasks=0;
var taskId=1;
let input=document.getElementById('box');

var adder=function(){
    let text;

    
        // take input in text variable from input box
        text=input.value;
        if(!text){
            return;
        }
        totalTasks++;
        // For Clear textBox
        input.value="";
        // Select task-container byId
        let tasksContainer=document.getElementById('tasks-container');
        // Select Token By Id
        let token=document.getElementById('token');
        // In newTask , the div that we have to update for further addition of task
        let newTask=`<div id="task${taskId}" class="task d-flex justify-content-between">
            <div>
                <input class="checkbox" type="checkbox">
                <span>${text}</span>
            </div>
            <div class="clear">
                <i id="${taskId}" class="remove far fa-times-circle change-cursor" title="Delete Task!"></i>
            </div>
        </div>`
        // Increment taskId by +1 Everytime it happens because task is added over here
        taskId++;
        // Add newTask before p tag
        token.insertAdjacentHTML('beforebegin', newTask);
        // Call Function taskAdd() that we have built below for increase the count of Task That we have mentioned  
        taskAdd();
    }

// Add Task after click the button
let button=document.getElementById('button');
button.addEventListener('click',function(key){
    adder();

});


// Add  Task after keypress Enter
input.addEventListener('keypress',function(key){
    if(key.key==="Enter"){
       adder();
    }

});

// Add EventListner to whole document
document.addEventListener('click',function(e){
    // Remove a task
    if(e.target && e.target.className === 'remove far fa-times-circle change-cursor'){
        // Fetching TaskId
        let taskNumber=e.target.id;
        let deleteTask=document.getElementById(`task${taskNumber}`);
       
        // Delete Same Task
        deleteTask.remove();
        totalTasks--;
        taskAdd();
    }
});

var taskAdd=function(){
    let changetaskNum=document.getElementById('taskAdd');
    changetaskNum.innerText=totalTasks;
}
