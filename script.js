const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// 추가 버튼 클릭 시 실행
addBtn.addEventListener('click', function (){
    const task = taskInput.value.trim();
    if (task == '') return;

    const li = document.createElement('li');
    li.textContent = task;

    // 클릭하면 완료 처리 (줄 긋기)
    li.addEventListener('click', function(){
        li.classList.toggle('done');
    });

    // 우클릭으로 삭제
    li.addEventListener('contextmenu', function(e){
        e.preventDefault();
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = '';
});