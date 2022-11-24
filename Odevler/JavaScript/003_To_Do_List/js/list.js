const tost = document.querySelector("#liveToast")
const task = document.querySelector("#task")
const liveToastBtn = document.querySelector("#liveToastBtn")
const list = document.querySelector("#list")
const allLi = document.querySelectorAll("li")



allLi.forEach(e => {
    e.addEventListener("click", selectTask)

    function selectTask(){
        e.classList.toggle("checked")
    }

    const removeBtn = document.createElement("span")
    removeBtn.classList.add("close")
    const btnImg = document.createTextNode("\u00D7")
    removeBtn.appendChild(btnImg)
    e.appendChild(removeBtn)

    removeBtn.addEventListener("click", removeTask)

    function removeTask(){
        e.remove()
    }
})


function newElement(){
    if (task.value == "" || !task.value.trim() ) {
        $(`.error`).toast("show")
    }
    else{
        const newTask = document.createElement("li")
        newTask.innerHTML = task.value
        $(`.success`).toast("show")
        list.appendChild(newTask)

        const removeBtn = document.createElement("span")
        removeBtn.classList.add("close")
        const btnImg = document.createTextNode("\u00D7")
        removeBtn.appendChild(btnImg)
        newTask.appendChild(removeBtn)

        removeBtn.addEventListener("click", removeTask)

        function removeTask(){

            newTask.remove()
        }

        newTask.addEventListener("click",selectTask)

        function selectTask(){
            newTask.classList.toggle("checked")
        }
    }
}

