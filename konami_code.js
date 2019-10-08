const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0

  document.body.addEventListener('keydown', (triggerKeyDown) => {
    const key = triggerKeyDown.key

    if (codes[index] === key) {
      ++index
      console.log(index)
      if (index === 10) {
        alert("ACHIEVEMENT GET - LEVEL UP")
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
