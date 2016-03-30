window.onload = initAll;
function initAll() {
	document.getElementById("redirect").onclick = onclickhandle;
}
function onclickhandle() {
	alert("See you on github");
	return true;
}
