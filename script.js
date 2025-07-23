const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const doneList = document.getElementById('doneList');

// 추가 버튼 클릭 시 실행
addBtn.addEventListener('click', function (){
    const task = taskInput.value.trim();
    if (task == '') return;

    // 새로운 해야 할 일 목록 생성
    const li = document.createElement('li');
    li.textContent = task;

    // 완료 버튼 생성
    const doneBtn = document.createElement('button');
    doneBtn.textContent = '완료';
    doneBtn.style.marginLeft = '10Px';
    doneBtn.addEventListener('click', function(){
        moveToDoneList(task);
        li.remove(); // 원래 해야 할 일 목록에서 삭제
    });

    li.appendChild(doneBtn);
    taskList.appendChild(li);
    taskInput.value = '';
});

function moveToDoneList(taskText){
    const doneItem = document.createElement('li');
    doneItem.textContent = taskText;
    doneList.appendChild(doneItem);
}