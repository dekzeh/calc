$("#p2 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 1);
	autosetTerrain($(this).val(), 1);
});

$("#p2 .item").bind("keyup change", function () {
	autosetStatus("#p2", $(this).val());
});

lastManualStatus["#p2"] = "Healthy";
lastAutoStatus["#p1"] = "Healthy";

var resultLocations = [[], [], [], []];
for (var i = 0; i < 4; i++) {
	resultLocations[0].push({
		"move": "#resultMoveL" + (i + 1),
		"damage": "#resultDamageL" + (i + 1)
	});
	resultLocations[1].push({
		"move": "#resultMoveR" + (i + 1),
		"damage": "#resultDamageR" + (i + 1)
	});
	resultLocations[2].push({
		"move": "#resultMove2L" + (i + 1),
		"damage": "#resultDamage2L" + (i + 1)
	});
	resultLocations[3].push({
		"move": "#resultMove2R" + (i + 1),
		"damage": "#resultDamage2R" + (i + 1)
	});
}

var damageResults;
/*
	@pP2 potential player 2
	@double, if set the the result will be shown in the second div
*/
function performCalculations(pP2, double) {
	double = double ? 2 : 0;
	var p1info = $("#p1");
	var p2info = pP2 ? pP2 : $("#p2");
	var p1 = createPokemon(p1info);
	var p2 = createPokemon(p2info);
	var p1field = createField();
	var p2field = p1field.clone().swap();

	damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field, double);
	p1 = damageResults[0 + double][0].attacker;
	p2 = damageResults[1 + double][0].attacker;
	var battling = [p1, p2];
	p1.maxDamages = [];
	p2.maxDamages = [];
	try {
		p1info.find(".sp .totalMod").text(p1.stats.spe);
		p2info.find(".sp .totalMod").text(p2.stats.spe);
	} catch (e) {

	}
	var fastestSide = p1.stats.spe > p2.stats.spe ? 0 : p1.stats.spe === p2.stats.spe ? "tie" : 1;

	var result, maxDamage;
	var bestResult;
	var zProtectAlerted = false;
	for (var i = 0; i < 4; i++) {
		// P1
		result = damageResults[0 + double][i];
		maxDamage = result.range()[1] * p1.moves[i].hits;
		if (!zProtectAlerted && maxDamage > 0 && p1.item.indexOf(" Z") === -1 && p1field.defenderSide.isProtected && p1.moves[i].isZ) {
			alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
			zProtectAlerted = true;
		}
		p1.maxDamages.push({moveOrder: i, maxDamage: maxDamage});
		p1.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		$(resultLocations[0 + double][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[0 + double][i].damage).text(result.moveDesc(notation));

		// P2
		result = damageResults[1 + double][i];
		maxDamage = result.range()[1] * p2.moves[i].hits;
		if (!zProtectAlerted && maxDamage > 0 && p2.item.indexOf(" Z") === -1 && p2field.defenderSide.isProtected && p2.moves[i].isZ) {
			alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
			zProtectAlerted = true;
		}
		p2.maxDamages.push({moveOrder: i, maxDamage: maxDamage});
		p2.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		$(resultLocations[1 + double][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[1 + double][i].damage).text(result.moveDesc(notation));

		// BOTH
		var bestMove;
		if (fastestSide === "tie") {
			// Technically the order should be random in a speed tie, but this non-determinism makes manual testing more difficult.
			// battling.sort(function () { return 0.5 - Math.random(); });
			// Following some demands, the speed tie will be shown in favor of the adversary
			bestMove = battling[0].maxDamages[0].moveOrder;
			var chosenPokemon = battling[0] === p2 ? 0 : 1;
			bestResult = $(resultLocations[chosenPokemon + double][bestMove].move);
		} else {
			bestMove = battling[fastestSide].maxDamages[0].moveOrder;
			bestResult = $(resultLocations[fastestSide + double][bestMove].move);
		}
	}
	if ($('.locked-move').length) {
		bestResult = $('.locked-move');
	} else {
		stickyMoves.setSelectedMove(bestResult.prop("id"));
	}
	if (double) {
		$("#resultHeader2L").text(p1.name + "'s Moves");
		$("#resultHeader2R").text(p2.name + "'s Moves");
	} else {
		$("#resultHeaderL").text(p1.name + "'s Moves");
		$("#resultHeaderR").text(p2.name + "'s Moves");
	}
	bestResult.prop("checked", true);
	bestResult.change();
}

function calculationsColors(p1info, p2) {
	if (!p2) {
		var p2info = $("#p2");
		var p2 = createPokemon(p2info);
	}
	var p1 = createPokemon(p1info);
	var p1field = createField();
	var p2field = p1field.clone().swap();

	damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field);
	p1 = damageResults[0][0].attacker;
	p2 = damageResults[1][0].attacker;
	p1.maxDamages = [];
	p2.maxDamages = [];
	var p1s = p1.stats.spe;
	var p2s = p2.stats.spe;
	//Faster Tied Slower
	var fastest = p1s > p2s ? "F" : p1s < p2s ? "S" : p1s === p2s ? "T" : undefined;
	var result, highestRoll, lowestRoll, damage = 0;
	//goes from the most optimist to the least optimist
	var p1KO = 0, p2KO = 0;
	//Highest damage
	var p1HD = 0, p2HD = 0;
	for (var i = 0; i < 4; i++) {
		// P1
		result = damageResults[0][i];
		//lowest rolls in %
		damage = result.damage[0] ? result.damage[0] : result.damage;
		lowestRoll = damage * p1.moves[i].hits / p2.stats.hp * 100;
		damage = result.damage[15] ? result.damage[15] : result.damage;
		highestRoll = damage * p1.moves[i].hits / p2.stats.hp * 100;
		if (highestRoll > p1HD) {
			p1HD = highestRoll;
		}
		if (lowestRoll >= 100) {
			p1KO = 1;
		} else { //if lowest kill obviously highest will
			//highest rolls in %
			if (highestRoll >= 100) {
				if (p1KO == 0) {
					p1KO = 2;
				}
			}
		}

		// P2
		result = damageResults[1][i];
		//some damage like sonic boom acts a bit weird.
		damage = result.damage[0] ? result.damage[0] : result.damage;
		lowestRoll = damage * p2.moves[i].hits / p1.stats.hp * 100;
		damage = result.damage[15] ? result.damage[15] : result.damage;
		highestRoll = damage * p2.moves[i].hits / p1.stats.hp * 100;
		if (highestRoll > p2HD) {
			p2HD = highestRoll;
		}
		if (lowestRoll >= 100) {
			p2KO = 4;
		} else {
			if (highestRoll >= 100) {
				if (p2KO < 3) {
					p2KO = 3;
				}
			}
		}
	}
	// Checks if the pokemon walls it
	// i wouldn't mind change this algo for a smarter one.

	// if the adversary don't three shots our pokemon
	if (Math.round(p2HD * 3) < 100) {
		// And if our pokemon does more damage
		if (p1HD > p2HD) {
			if (p1HD > 100) {
				// Then i consider it a wall that may OHKO
				return {speed: fastest, code: "WMO"};
			}
			// if not Then i consider it a good wall
			return {speed: fastest, code: "W"};
		}
	}
	p1KO = p1KO > 0 ? p1KO.toString() : "";
	p2KO = p2KO > 0 ? p2KO.toString() : "";
	return {speed: fastest, code: p1KO + p2KO};
}


$(".result-move").change(function (ev) {
	if (damageResults) {
		var result = findDamageResult(ev.target);
		if (result) {
			var desc = result.fullDesc(notation, false);
			if (desc.indexOf('--') === -1) desc += ' -- possibly the worst move ever';
			$("#mainResult").text(desc);
			$("#damageValues").text("Possible damage amounts: (" + displayDamageHits(result.damage) + ")");
		}
	}
});

$(".result-move2").change(function (ev) {
	if (damageResults) {
		var result = findDamageResult(ev.target);
		if (result) {
			var desc = result.fullDesc(notation, false);
			if (desc.indexOf('--') === -1) desc += ' -- possibly the worst move ever';
			$("#mainResult2").text(desc);
			$("#damageValues2").text("Possible damage amounts: (" + displayDamageHits(result.damage) + ")");
		}
	}
});
function displayDamageHits(damage) {
	// Fixed Damage
	if (typeof damage === 'number') return damage;
	// Standard Damage
	if (damage.length > 2) return damage.join(', ');
	// Fixed Parental Bond Damage
	if (typeof damage[0] === 'number' && typeof damage[1] === 'number') {
		return '1st Hit: ' + damage[0] + '; 2nd Hit: ' + damage[1];
	}
	// Parental Bond Damage
	return '1st Hit: ' + damage[0].join(', ') + '; 2nd Hit: ' + damage[1].join(', ');
}

function findDamageResult(resultMoveObj) {
	var selector = "#" + resultMoveObj.getAttribute("id");
	for (var i = 0; i < resultLocations.length; i++) {
		for (var j = 0; j < resultLocations[i].length; j++) {
			if (resultLocations[i][j].move === selector) {
				return damageResults[i][j];
			}
		}
	}
}

function checkStatBoost(p1, p2) {
	if ($('#StatBoostL').prop("checked")) {
		for (var stat in p1.boosts) {
			if (stat === 'hp') continue;
			p1.boosts[stat] = Math.min(6, p1.boosts[stat] + 1);
		}
	}
	if ($('#StatBoostR').prop("checked")) {
		for (var stat in p2.boosts) {
			if (stat === 'hp') continue;
			p2.boosts[stat] = Math.min(6, p2.boosts[stat] + 1);
		}
	}
}

function calculateAllMoves(gen, p1, p1field, p2, p2field, double) {
	double = double ? 2 : 0;
	checkStatBoost(p1, p2);
	var results = [[], [], [], []];
	for (var i = 0; i < 4; i++) {
		results[0 + double][i] = calc.calculate(gen, p1, p2, p1.moves[i], p1field);
		results[1 + double][i] = calc.calculate(gen, p2, p1, p2.moves[i], p2field);
	}
	return results;
}

$(".mode").change(function () {
	var params = new URLSearchParams(window.location.search);
	params.set('mode', $(this).attr("id"));
	var mode = params.get('mode');
	if (mode === 'randoms') {
		window.location.replace('randoms' + linkExtension + '?' + params);
	} else if (mode === 'one-vs-one') {
		window.location.replace('index' + linkExtension + '?' + params);
	} else {
		window.location.replace('honkalculate' + linkExtension + '?' + params);
	}
});

$(".notation").change(function () {
	calcTrigger();
});


function saveTrigger(ev) {
	var isUser = ev.originalEvent ? ev.originalEvent.isTrusted : false;
	if (isUser || ev.added) { //ev.added is for the moves buttons
		$('#save-change').attr("hidden", false);
	}
}

function saveCurrentMon() {
	var data = document.getElementsByClassName("info-group i-f-o-stats")[0];
	var type = data.previousElementSibling.children;
	var stats = data.children[0].children[1].children;
	var props = data.nextElementSibling.children;
	return {
		tp1: type[0].children[1].value,
		tp2: type[0].children[2].value,
		frm: type[2].children[1].value,
		gdr: type[3].children[1].value,
		lvl: type[4].children[1].value,
		att: stats[1].children[6].children[0].value,
		def: stats[2].children[6].children[0].value,
		spa: stats[3].children[6].children[0].value,
		spd: stats[4].children[6].children[0].value,
		spe: stats[6].children[6].children[0].value,
		ntr: props[0].children[1].value,
		abi: props[1].children[1].value,
		itm: props[2].children[1].value,
		sts: props[3].children[1].value,
	};
}

function loadSavedMon(data) {
	var dataField = document.getElementsByClassName("info-group i-f-o-stats")[0];
	var typeField = dataField.previousElementSibling.children;
	var statsField = dataField.children[0].children[1].children;
	var propsField = dataField.nextElementSibling.children;
	typeField[0].children[1].value = data.tp1;
	typeField[0].children[2].value = data.tp2;
	typeField[2].children[1].value = data.frm;
	typeField[3].children[1].value = data.gdr;
	typeField[4].children[1].value = data.lvl;
	statsField[1].children[6].children[0].value = data.att;
	statsField[2].children[6].children[0].value = data.def;
	statsField[3].children[6].children[0].value = data.spa;
	statsField[4].children[6].children[0].value = data.spd;
	statsField[6].children[6].children[0].value = data.spe;
	propsField[0].children[1].value = data.ntr;
	propsField[1].children[1].value = data.abi;
	propsField[2].children[1].value = data.itm;
	propsField[3].children[1].value = data.sts;
}

function calcTrigger() {
	/*
		This prevents like 8 performCalculations out of 8 that were useless
		without causing bugs (so far)
	*/
	if (window.NO_CALC || window.NO_CALC_RECURSION) {
		return;
	}
	if (window.AUTO_REFRESH) {
		window.refreshColorCode();
	}
	if (window.isInDoubles) {
		var monRow1 = document.getElementById("trainer-pok-list-opposing").children[0];
		monRow1 = monRow1 ? monRow1.getAttribute("data-id") : null;
		var monRow2 = document.getElementById("trainer-pok-list-opposing2").children[0];
		monRow2 = monRow2 ? monRow2.getAttribute("data-id") : null;
		var activeMon = $('#p2').find("input.set-selector").val();
		window.NO_CALC = true;
		window.NO_CALC_RECURSION = true;
		var dataSave = saveCurrentMon();
		if (!monRow1 || !monRow2) {
			performCalculations();
		} else {
			if (monRow1 != activeMon && monRow2 != activeMon) {
				if (document.querySelectorAll(`[data-id="${activeMon}"]`)[0].parentNode.id=="trainer-pok-list-opposing"){
					performCalculations();
					$('.opposing').val(monRow2);
					$('.opposing').change();
					$('.opposing .select2-chosen').text(monRow2);
					performCalculations(false, true);
				} else {
					performCalculations(false, true);
					$('.opposing').val(monRow1);
					$('.opposing').change();
					$('.opposing .select2-chosen').text(monRow1);
					performCalculations();
				}
			} else if (monRow1 == activeMon) {
				performCalculations();
				$('.opposing').val(monRow2);
				$('.opposing').change();
				$('.opposing .select2-chosen').text(monRow2);
				performCalculations(false, true);
			} else if (monRow2 == activeMon) {
				performCalculations(false, true);
				$('.opposing').val(monRow1);
				$('.opposing').change();
				$('.opposing .select2-chosen').text(monRow1);
				performCalculations();
			}
		}
		$('.opposing').val(activeMon);
		$('.opposing').change();
		$('.opposing .select2-chosen').text(activeMon);
		loadSavedMon(dataSave);
		window.NO_CALC_RECURSION = false;
		window.NO_CALC = false;
	} else {
		performCalculations();
	}
}

$(document).ready(function () {
	var params = new URLSearchParams(window.location.search);
	var m = params.get('mode');
	if (m) {
		if (m !== 'one-vs-one' && m !== 'randoms') {
			window.location.replace('honkalculate' + linkExtension + '?' + params);
		} else {
			if ($('#randoms').prop('checked')) {
				if (m === 'one-vs-one') {
					window.location.replace('index' + linkExtension + '?' + params);
				}
			} else {
				if (m === 'randoms') {
					window.location.replace('randoms' + linkExtension + '?' + params);
				}
			}
		}
	}
	$(".calc-trigger").bind("change keyup drop", calcTrigger);
	$(".save-trigger").bind("change keyup", saveTrigger);
	$(".ic").click(calcTrigger);
	$(".ic").click(saveTrigger);
	//performCalculations(); i think it's no longer usefull
});

/* Click-to-copy function */
$("#mainResult").click(function () {
	navigator.clipboard.writeText($("#mainResult").text()).then(function () {
		document.getElementById('tooltipText').style.visibility = 'visible';
		setTimeout(function () {
			document.getElementById('tooltipText').style.visibility = 'hidden';
		}, 2000);
	});
});
