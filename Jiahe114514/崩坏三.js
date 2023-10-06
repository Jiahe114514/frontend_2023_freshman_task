let audio = document.getElementById('my-audio');
let playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<img class="play" src="./暂停.jpg" alt="Pause Music">';
  } 
  else {
    audio.pause();
    playBtn.innerHTML = '<img class="play" src="./播放.jpg" alt="Play Music">';
  }
});
// 简单的一个播放音乐
