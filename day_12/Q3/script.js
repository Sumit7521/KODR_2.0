const form = document.querySelector('#form')
const task = document.querySelector('#task')
const date = document.querySelector('#date')
const list = document.querySelector('#list')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const taskname = task.value
    const taskdate = date.value

    const inputdate = new Date(taskdate)
    const today = new Date()

    // inputdate.setHours(0, 0, 0, 0);
    // today.setHours(0, 0, 0, 0);


    const diff = inputdate - today

    const diffdays = Math.ceil(diff / (1000 * 60 * 60 * 24))

    const status = (inputdate > today) ? "incomplete" : "complete";

    let daysLeftText = "";
    if (inputdate > today) {
    daysLeftText = `<p>${diffdays} day(s) left</p>`;
    }

    const li = document.createElement('li')
    li.innerHTML = `<p>task : ${taskname}</p>
                    <p>Date : ${taskdate}</p>
                    <p>Status : ${status}</p> 
                    <p>Days left : ${daysLeftText} </p>`

    list.appendChild(li)
})