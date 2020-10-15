function openNav() {
	document.getElementById("open").style.display = "none";
	document.getElementById("nav").style.width = "100%";
}
function closeNav() {
	document.getElementById("nav").style.width = "0";
	document.getElementById("open").style.display = "block";
}

const Filebtn = document.getElementById("pubfile");
const btn = document.getElementById("pubbtn");
const Filetxt = document.getElementById("pubtext");

btn.addEventListener("click", function(){
		Filebtn.click();
	});

Filebtn.addEventListener("change", function(){
	if(Filebtn.value){
		Filetxt.innerHTML = Filebtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
			}else{
				Filetxt.innerHTML  ="No file chosen";
				}
		});