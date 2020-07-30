document.addEventListener("DOMContentLoader", function(){
  const plus = document.getElementById("plus")
  const minus = document.getElementById("minus")
  const heart = document.getElementById("heart")
  const counter = document.getElementById("counter")
  const likes = document.getElementById("likes")
  const commentForm = document.getElementById("comment-form")
  let comment = document.getElementById("list")
  const submit = document.getElementById("submit")
  let pause = document.getElementById("pause")
  let paused = false

  function startCounter() {
      return setInterval(increaseCounter, 1000)
  }

  let currentTimer = startCounter()

  function toggleState(){
      plus.disabled === false ? plus.disabled = true : plus.disabled = false
      minus.disabled === false ? minus.disabled = true : minus.disabled = false
      heart.disabled === false ? heart.disabled = true : heart.disabled = false
      likes.disabled === false ? likes.disabled = true : likes.disabled = false  
  }
pause.addEventListener("click", function(e){
    if (paused){
        toggleState()
        currentTimer = startCounter()
        e.target.innerHTML = "Paused"
        paused = false
    }
    else {
        toggleState()
        clearInterval(currentTimer)
        e.target.innerHTML = "Resume"
        paused = true
    }
})

function increaseCounter(){
    const timeCounter = parseInt(counter.innerText)
    counter.innerHTML = timeCounter +1
}

plus.addEventListener("click", function(e){
    increaseCounter()
})

function decreaseCounter(){
    const timeCounter = parseInt(counter.innerText)
    counter.innerHTML = timeCounter -1
}

minus.addEventListener("click", function(e){
    decreaseCounter()
})

commentForm.addEventListener("submit", function(e){
    e.preventDefault()
    let commentInput = document.getElementById("comment-input")
    let newComment = document.createElement("p")
    newComment.innerHTML = `$"{commentInput.value}`
    commentForm.appendChild(newComment)
    commentInput.value = ""
})
})