const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const temp = () => {
	window.location.replace("https://matias.ma/nsfw/");
};
document.addEventListener("DOMContentLoaded", function () {
	var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	fetch('https://temp-name.onrender.com/api/saveText', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			text: 'Logged In ' + datetime,
		}),
	})
	.then(response => response.json())
	.then(data => {
		console.log('API response:', data);
	})
	.catch(error => {
		console.error('API error:', error);
	});

});
yesBtn.addEventListener("click", () => {
var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	fetch('https://temp-name.onrender.com/api/saveText', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			text: ' Yesssss ' + datetime,
		}),
	})
	.then(response => response.json())
	.then(data => {
		console.log('API response:', data);
	})
	.catch(error => {
		console.error('API error:', error);
	});
	question.innerHTML = "Yay, see you on the 18th!";
	gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
	setTimeout(temp, 3000);
	console.log("cyesss ",datetime);
});

noBtn.addEventListener("mouseover", () => {
	const noBtnRect = noBtn.getBoundingClientRect();
	const maxX = window.innerWidth - noBtnRect.width;
	const maxY = window.innerHeight - noBtnRect.height;

	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);

	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
});
