let audio = document.getElementById('my-audio');
let playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = '<img class="play" src="./琪门.jpg" alt="Pause Music">';
  } 
  else {
    audio.pause();
    playBtn.innerHTML = '<img class="play" src="./琪宝啃月亮.jpg" alt="Play Music">';
  }
});



// 从localStorage中获取学生信息列表，如果不存在就创建一个空列表
let studentList = JSON.parse(localStorage.getItem('studentList')) || [];

// 渲染表格
function renderTable() {
	const table = document.querySelector('table');
	const tbody = table.querySelector('tbody');

	// 清空表格内容
	tbody.innerHTML = '';

	// 遍历列表，生成表格行
	studentList.forEach((student, index) => {
		const tr = document.createElement('tr');
		tr.innerHTML = `
			<td>${student.name}</td>
			<td>${student.height}</td>
            <td>${student.birthday}</td>
			<td>${student.age}</td>
            <td>${student.weight}</td>
			<td>${student.age}</td>
            <td>${student.nickname}</td>
			<td>${student.saySth}</td>
			<td><button data-index="${index}">删除</button></td>
		`;
		tbody.appendChild(tr);
	});

	// 添加删除按钮的点击事件
	const deleteButtons = document.querySelectorAll('button');
	deleteButtons.forEach(button => {
		button.addEventListener('click', function() {
			const index = this.getAttribute('data-index');
			studentList.splice(index, 1);
			localStorage.setItem('studentList', JSON.stringify(studentList));
			renderTable();
		});
	});
}

// 添加表单提交事件
const addForm = document.getElementById('addForm');
addForm.addEventListener('submit', function(event) {
	event.preventDefault();

	// 获取表单数据，并添加到学生信息列表中
	const name = document.getElementById('name').value;
	const height = document.getElementById('height').value;
    const birthday = document.getElementById('birthday').value;
	const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
	const nickname = document.getElementById('nickname').value;
    const saySth = document.getElementById('saySth').value;
	const student = { name, height,birthday,age,weight,nickname,saySth };
	studentList.push(student);

	// 将学生信息列表保存到localStorage中
	localStorage.setItem('studentList', JSON.stringify(studentList));

	// 渲染表格
	renderTable();

	// 重置表单
	this.reset();
});

// 页面加载完成后，渲染表格
document.addEventListener('DOMContentLoaded', renderTable);


document.getElementById("toggleButton").addEventListener("click", function() {
  var hiddenContent = document.getElementById("hiddenContent");
  if (hiddenContent.style.display === "none") {
    hiddenContent.style.display = "block";
    this.innerHTML = "收起";
  } else {
    hiddenContent.style.display = "none";
    this.innerHTML = "点击修改";
  }
});
// 本页面有相当一部分由gpt生成，因为我自己敲得代码tmd跑不起来！！！！我写了两个小时！！！   附上我自己写的代码，在“错误”那个文本文档里，有闲工夫帮我看看呗
