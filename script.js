const btn = document.querySelectorAll(".dots div");
const imgs = document.querySelector(".slides");
const nxt = document.querySelector(".rbtn");
const prev = document.querySelector(".lbtn");

let ind = 0;
let timeoutId;

  setInd(ind);

function setInd(index) {
  ind = index;
  
  if (ind >= btn.length) {
    ind = 0;
  } else if (ind < 0) {
    ind = btn.length - 1;
  }

  slide(ind);

  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    setInd(ind + 1);
  }, 3000);
}

function slide(index) {
  imgs.style.left = `${index * -100}%`;
  btn.forEach(btn => btn.classList.remove('active'));
  btn[index].classList.add('active');
}

btn.forEach((btnn, index) => {
  btnn.addEventListener("click", () => {
    setInd(index);
  });
});

prev.addEventListener("click", () => {
  setInd(ind - 1);
});

nxt.addEventListener("click", () => {
  setInd(ind + 1);
});
