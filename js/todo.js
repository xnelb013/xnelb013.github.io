const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY , JSON.stringify(toDos)); //todos 리스트를 stringify로 스트링형식으로 변환해서 localstorage에 저장한다.
}

function deleteTodo(event){
    const li =event.target.parentElement; //삭제 버튼을 누른 li찾아내기
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //filter는 함수의 return값이 true여야만 남겨놓는다. 여기서 버튼을 클릭한 id를 불러와서 그 값은 false로 처리하여 array에서 지워줌
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), //랜덤 값임
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
    const parsedToDos = JSON.parse(savedToDos); //JSON.stringify로 스트링형식으로 만들어 둔 것을 parse로 다시 풀어 array형식으로 만들어 줬음.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
        
    }; //forEach는 각각의 item마다 함수를 실행시켜 주는 일을 함.

