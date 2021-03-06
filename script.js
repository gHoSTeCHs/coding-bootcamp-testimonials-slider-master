const reviews = [
  {
    id: 1,
    name: "Tanya Sinclair",
    work: "Ux Engineer",
    img:
      "/images/image-tanya.jpg",
    text:
      "\ \"I’ve been interested in coding for a while but never taken the jump, until now.I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.\"" ,
  },
  {
    id: 2,
    name: "John Tarkpor",
    work: "Junior Front-end Developer",
    img:
      "/images/image-john.jpg",
    text:
      "\ \"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\"",
    },
]

const names = document.querySelector('.names')
const job = document.querySelector('.job')
const img = document.querySelector('.img')
const text = document.querySelector('.text')
const next = document.querySelector('.right')
const prev = document.querySelector('.left')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', genUser())

next.addEventListener('click', switchUser)
prev.addEventListener('click', switchUser)

function genUser() {
    let item = reviews[currentItem]
    names.textContent = item.name
    img.src = item.img
    text.textContent = item.text
    job.innerHTML = item.work
}
function switchUser() {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    genUser()
}