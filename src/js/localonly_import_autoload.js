var exportScriptTag;
var EXTERNAL_DATA_TEAM;
var EXTERNAL_DATA_BOX;

function ReplaceMonsByImport() {
	// erase all traces of pokemons
	// In storage
	localStorage.removeItem("customsets");
	// Then all on screen
	var toRmMons = document.getElementsByClassName("box-poke");
	for (mon of toRmMons){
		mon.innerHTML="";
	}
	//Add the pokemons
	var name =  "Custom Set" 
	addSets(EXTERNAL_DATA_TEAM, name, document.getElementById("team-poke-list"));
	addSets(EXTERNAL_DATA_BOX, name, document.getElementById("box-poke-list"));
}

function autoLoadEnable() {
	document.getElementById("ali-enable").toggleAttribute("hidden");
	document.getElementById("ali-disable").toggleAttribute("hidden");
	document.getElementById("ali-refresh").toggleAttribute("hidden");
}

function autoLoadDisable() {
	document.getElementById("autoload-import").toggleAttribute("hidden");
}

function autoLoadRefresh() {
	var head = document.getElementsByTagName("head")[0];
	if (exportScriptTag) {
		head.removeChild(exportScriptTag);
	}
	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = "runbun_exports.js";
	js.addEventListener("load", function(event) {
		ReplaceMonsByImport();
	});
	js.addEventListener("error", function(event) {
		head.removeChild(exportScriptTag);
	});
	head.appendChild(js);
	exportScriptTag = js;
}

document.getElementById("autoload-import").toggleAttribute("hidden");
document.getElementById("ali-enable").onclick = autoLoadEnable;
document.getElementById("ali-disable").onclick = autoLoadDisable;
document.getElementById("ali-refresh").onclick = autoLoadRefresh;
