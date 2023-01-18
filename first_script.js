let desc = document.getElementById("description")

desc.innerHTML = "trol"

desc.style.color = "green"


function annoyingWindowPopup(message, times) {
	console.log("congratulations, you got " + times + "robux")
	for (let i = 0; i < times; ++i) {
		window.alert(message)
	}
}