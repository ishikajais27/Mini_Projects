function createObj() {
  //get elements from html

  let task = document.getElementById('name')
  task = task.value
  let category = document.getElementById('type')
  category = category.value
  let obj = {
    Task: task,
    Cat: category,
  }
  let main = document.createElement('div')

  main.setAttribute('class', 'fix')
  document.getElementById(obj.Cat).appendChild(main)

  //create a tick sign button

  const button = document.createElement('button')
  const icon1 = document.createElement('i')
  icon1.classList.add('fas', 'fa-check')
  button.setAttribute('class', 'tick-btn')
  //   element.appendChild(button)
  button.appendChild(icon1)
  button.addEventListener('click', cut)
  main.appendChild(button)

  //create a li elemnt and add in ul of html

  let element = document.createElement('li')
  element.setAttribute('class', 'set')
  element.innerText = obj.Task
  main.appendChild(element)
  //   document.getElementById(obj.Cat).appendChild(element)

  // create a delete button to delete task

  let del = document.createElement('button')
  del.setAttribute('class', 'delete-btn')
  const icon = document.createElement('i')
  icon.classList.add('fas', 'fa-trash-alt')
  del.appendChild(icon)
  main.appendChild(del)
  del.addEventListener('click', deleteTask)

  //function to delete the task

  function deleteTask() {
    main.remove()
  }
  function cut() {
    element.setAttribute('class', 'complete')
  }
}

document.getElementById('btn').addEventListener('click', createObj)
