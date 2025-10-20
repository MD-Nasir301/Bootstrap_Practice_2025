  

const div = document.getElementById('test');
console.log(div.dataset.name, div.dataset.price, div.dataset.color);


// 🪄 JS দিয়ে ব্যাকগ্রাউন্ড পজিশন স্ক্রল অনুযায়ী পরিবর্তন করা হচ্ছে
window.addEventListener("scroll", function() {
  const scrollY = window.scrollY;
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${scrollY * .5}px`;
});


const title = document.getElementById("title");
const trigger = 3100; // scroll position যখন fixed হবে

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  if (scroll > trigger) {
    title.classList.add("fixed");
    title.style.transform = "translateY(0)"; // smooth top move
  } else {
    title.classList.remove("fixed");
    title.style.transform = "translateY(3200px)"; // scroll হওয়ার আগের offset
  }
});

const box = document.querySelector('.box');
const container = document.querySelector('.container'); // পেরেন্টে perspective থাকে

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;  // container এর ভিতরে X অবস্থান
  const y = e.clientY - rect.top;   // container এর ভিতরে Y অবস্থান

  const midX = rect.width / 2;
  const midY = rect.height / 2;

  const rotateY = (x - midX) / 10;  // মাউস ডানে-বামে ঘোরানো
  const rotateX = -(y - midY) / 10; // মাউস উপরে-নিচে ঘোরানো

  box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// মাউস চলে গেলে আবার আগের অবস্থায় ফিরে যাবে
container.addEventListener('mouseleave', () => {
  box.style.transform = 'rotateX(0deg) rotateY(0deg)';
});





