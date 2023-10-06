const data = [
    { url: './崩崩崩.jpg', color: 'white',href:'./崩坏三档案.html' },
    { url: './原始人.jpg', color: 'white',href:'./原神档案.html'},
    { url: './崩铁.jpg', color: 'white' ,href:'./崩坏：星穹铁道档案.html'}
];
  
const img = document.querySelector('.slidepaper img');
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const link = document.querySelector('#imageLink');
const a=document.querySelector('#imageLink')
let i = 0;
let autoplayInterval;
  
right.addEventListener('click', function() {
    i++;
    if (i>2) {
      i = 0;
    }
    img.src = data[i].url;
    a.href = data[i].href;
    document.querySelector(`.under.active`).classList.remove('active')
    const li=document.querySelector(`.under li:nth-child(${i+1})`)
    li.classList.add('active')

    
});

left.addEventListener('click', function() {
    i--;
    if (i < 0) {
      i=2;
    }
    img.src = data[i].url;
    a.href = data[i].href;
    document.querySelector(`.under.active`).classList.remove('active')
    const li=document.querySelector(`.under li:nth-child(${i+1})`)
    li.classList.add('active')

    
});
  

function startAutoplay() {
    autoplayInterval = setInterval(function() {
      right.click();
    }, 3000);
}
  

img.addEventListener('mouseenter', function() {
    clearInterval(autoplayInterval);
});
  

img.addEventListener('mouseleave', function() {
    startAutoplay();
});
  
startAutoplay();





