function setupFields(){
    var field = document.getElementById("opp-mon-field")
    for (var i = 1 ; i< 7; i++){
        
        var pokeField = document.createElement("div")
        pokeField.className = "poke-info"
        pokeField.id= "p2" + i;
        pokeField.innerHTML = getFullHTMLField()
        if (i != 1) {
            // make all but the first one not-visible
            pokeField.setAttribute("hidden", true)

        }
        field.append(pokeField)
    }
}

function refreshField(){
    if (window.PrevP2){

    }
}

function changeField(id){
    window.P2 = "p2" + id;
    document.getElementById(window.PrevP2).setAttribute("hidden", true);
    document.getElementById(window.P2).removeAttribute("hidden");
    window.PrevP2 = "p2" + id;
}


function getFullHTMLField() {
    return `
    <div class="info-group top i-f-o-type">
        <div>
            <label>Type</label>
            <select aria-label="Type 1" class="type1 terrain-trigger calc-trigger"></select>
            <select aria-label="Type 2" class="type2 terrain-trigger calc-trigger"></select>
            <small class="right">(<a class="analysis links-lighten" target="_blank" href="">Smogon&nbsp;analysis</a>)</small>
        </div>
        <div class="gen-specific g9">
            <label>Tera Type</label>
            <select class="teraType terrain-trigger calc-trigger"></select>
            <input type="checkbox" title= "Has this Pok&eacute;mon terastalized?" class="teraToggle terrain-trigger calc-trigger">
        </div>
        <div class="hide">
            <label>Forme</label>
            <select class="forme calc-trigger"></select>
        </div>
        <div class="hide">
            <label>Gender</label>
            <select class="gender calc-trigger"><option></option><option selected="selected">Male</option><option>Female</option></select>
        </div>
        <div>
            <label for="levelR1">Level</label>
            <input class="level calc-trigger" id="levelR1" value="100" />
        </div>
        <div class="hide">
            <label for="weightR1">Weight (kg)</label>
            <input class="weight calc-trigger" id="weightR1" value="10.0" />
        </div>
    </div>
    <div class="info-group i-f-o-stats">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th scope="col">Base</th>
                    <th class="gen-specific g3 g4 g5 g6 g7 g8 g9" scope="col">IVs</th>
                    <th class="gen-specific g3 g4 g5 g6 g7 g8 g9" scope="col">EVs</th>
                    <th class="gen-specific g1 g2 hide" scope="col">DVs</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr class="hp">
                    <th scope="row">
                        <label>HP</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" disabled="disabled" />
                    </td>
                    <td><span class="total">341</span>
                    </td>
                    <td></td>
                </tr>
                <tr class="at">
                    <th scope="row">
                        <label>Attack</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                </tr>
                <tr class="df">
                    <th scope="row">
                        <label>Defense</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                </tr>
                <tr class="sa gen-specific g2 g3 g4 g5 g6 g7 g8 g9">
                    <th scope="row">
                        <label>Sp. Atk</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                </tr>
                <tr class="sd gen-specific g2 g3 g4 g5 g6 g7 g8 g9">
                    <th scope="row">
                        <label>Sp. Def</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" disabled="disabled" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                </tr>
                <tr class="sl gen-specific g1 hide">
                    <th scope="row">
                        <label>Special</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td>
                        <input class="dvs calc-trigger" value="15" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                </tr>
                <tr class="sp">
                    <th scope="row">
                        <label>Speed</label>
                    </th>
                    <td>
                        <input class="base calc-trigger" value="100" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="ivs calc-trigger" value="31" />
                    </td>
                    <td class="gen-specific g3 g4 g5 g6 g7 g8 g9">
                        <input class="evs calc-trigger" type="number" min="0" max="252" step="4" value="0" />
                    </td>
                    <td class="gen-specific g1 g2 hide">
                        <input class="dvs calc-trigger" value="15" />
                    </td>
                    <td><span class="total">236</span>
                    </td>
                    <td>
                        <select class="boost calc-trigger">
                            <option value="6">+6</option>
                            <option value="5">+5</option>
                            <option value="4">+4</option>
                            <option value="3">+3</option>
                            <option value="2">+2</option>
                            <option value="1">+1</option>
                            <option value="0" selected="selected">--</option>
                            <option value="-1">-1</option>
                            <option value="-2">-2</option>
                            <option value="-3">-3</option>
                            <option value="-4">-4</option>
                            <option value="-5">-5</option>
                            <option value="-6">-6</option>
                        </select>
                    </td>
                    <td><span class="totalMod">---</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="info-group info-selectors i-f-o-stats">
        <div class="gen-specific g3 g4 g5 g6 g7 g8 g9">
            <label for="natureR1">Nature</label>
            <select class="nature calc-trigger" id="natureR1">
                <option value="Adamant">Adamant (+Atk, -SpA)</option>
                <option value="Bashful">Bashful</option>
                <option value="Bold">Bold (+Def, -Atk)</option>
                <option value="Brave">Brave (+Atk, -Spe)</option>
                <option value="Calm">Calm (+SpD, -Atk)</option>
                <option value="Careful">Careful (+SpD, -SpA)</option>
                <option value="Docile">Docile</option>
                <option value="Gentle">Gentle (+SpD, -Def)</option>
                <option value="Hardy" selected="selected">Hardy</option>
                <option value="Hasty">Hasty (+Spe, -Def)</option>
                <option value="Impish">Impish (+Def, -SpA)</option>
                <option value="Jolly">Jolly (+Spe, -SpA)</option>
                <option value="Lax">Lax (+Def, -SpD)</option>
                <option value="Lonely">Lonely (+Atk, -Def)</option>
                <option value="Mild">Mild (+SpA, -Def)</option>
                <option value="Modest">Modest (+SpA, -Atk)</option>
                <option value="Naive">Naive (+Spe, -SpD)</option>
                <option value="Naughty">Naughty (+Atk, -SpD)</option>
                <option value="Quiet">Quiet (+SpA, -Spe)</option>
                <option value="Quirky">Quirky</option>
                <option value="Rash">Rash (+SpA, -SpD)</option>
                <option value="Relaxed">Relaxed (+Def, -Spe)</option>
                <option value="Sassy">Sassy (+SpD, -Spe)</option>
                <option value="Serious">Serious</option>
                <option value="Timid">Timid (+Spe, -Atk)</option>
            </select>
        </div>
        <div class="gen-specific g3 g4 g5 g6 g7 g8 g9">
            <label for="abilityR1">Ability</label>
            <select class="ability terrain-trigger calc-trigger" id="abilityR1"></select>
            <input hidden type="checkbox" title= "Is this ability active?" class="abilityToggle calc-trigger">
                <select hidden aria-label="Allies fainted" class="alliesFainted calc-trigger">
                        <option value="0">Zero allies fainted</option>
                        <option value="1">One ally fainted</option>
                        <option value="2">Two allies fainted</option>
                        <option value="3">Three allies fainted</option>
                        <option value="4">Four allies fainted</option>
                        <option value="5">Five allies fainted</option>
                </select>
        </div>
        <div class="gen-specific g2 g3 g4 g5 g6 g7 g8 g9">
            <label for="itemR1">Item</label>
            <select class="item terrain-trigger calc-trigger" id="itemR1"></select>
        </div>
        <div>
            <label for="statusR1">Status</label>
            <select class="status calc-trigger" id="statusR1">
                <option value="Healthy">Healthy</option>
                <option value="Poisoned">Poisoned</option>
                <option value="Badly Poisoned">Badly Poisoned</option>
                <option value="Burned">Burned</option>
                <option value="Paralyzed">Paralyzed</option>
                <option value="Asleep">Asleep</option>
                <option value="Frozen">Frozen</option>
            </select>
            <select aria-label="Toxic counter" class="toxic-counter calc-trigger hide">
                <option value="1">1/16</option>
                <option value="2">2/16</option>
                <option value="3">3/16</option>
                <option value="4">4/16</option>
                <option value="5">5/16</option>
                <option value="6">6/16</option>
                <option value="7">7/16</option>
                <option value="8">8/16</option>
                <option value="9">9/16</option>
                <option value="10">10/16</option>
                <option value="11">11/16</option>
                <option value="12">12/16</option>
                <option value="13">13/16</option>
                <option value="14">14/16</option>
                <option value="15">15/16</option>
            </select>
        </div>
    </div>
    <div class="info-group gen-specific g9">
        <div class="left" title="Has this Pok&eacute;mon been cured with Salt Cure?">
            <div hidden id="selectRevealInstruction">Has this Pok&eacute;mon been cured with Salt Cure?</div>
            <input aria-describedby="selectRevealInstruction" class="visually-hidden saltcure calc-trigger" type="checkbox" id="cureR" />
            <label class="btn btn-xxwide" for="cureR">Salt Cure</label>
        </div>
        <br />
    </div>
    <div class="info-group i-f-o-hp">
        <label for="currentHpR1">Current HP</label>
        <input class="current-hp calc-trigger" id="currentHpR1" value="341" />/<span class="max-hp">341</span> (
        <input class="percent-hp calc-trigger" value="100" />%)
            <input class="visually-hidden max calc-trigger btn-input" type="checkbox" id="maxR" />
            <br />
        <br />
        Health <div class="hpbar"></div>
    </div>
    <div class="move1 i-f-o-move">
        <select class="move-selector calc-trigger small-select"></select>
        <input class="move-bp calc-trigger" value="50" />
        <select class="move-type calc-trigger"></select>
        <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8 g9">
            <option value="Physical">Physical</option>
            <option value="Special">Special</option>
        </select>
        <input aria-describedby="criticalHitInstruction" class="move-crit calc-trigger visually-hidden" type="checkbox" id="critR1" />
        <label class="btn crit-btn" for="critR1" title="Force this attack to be a critical hit?">Crit</label>
        <input aria-describedby="zMoveInstruction" class="move-z calc-trigger visually-hidden" type="checkbox" id="zR1"/>
        <label class="btn z-btn gen-specific g7 g8 g9" for="zR1" title="Make this attack a Z-move?">Z</label>
        <select class="move-hits calc-trigger hide">
            <option value="2">2 hits</option>
            <option value="3">3 hits</option>
            <option value="4">4 hits</option>
            <option value="5">5 hits</option>
        </select>
        <select class="stat-drops calc-trigger hide" title="How many times was this move used in a row?">>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
        <select class="metronome calc-trigger hide" title="How many times was this move successfully and consecutively used while holding Metronome before this turn?">
            <option value="0">Never</option>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
    </div>
    <div class="move2 i-f-o-move">
        <select class="move-selector calc-trigger small-select"></select>
        <input class="move-bp calc-trigger" value="0" />
        <select class="move-type calc-trigger"></select>
        <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8 g9">
            <option value="Physical">Physical</option>
            <option value="Special">Special</option>
        </select>
        <input aria-describedby="criticalHitInstruction" class="move-crit calc-trigger visually-hidden" type="checkbox" id="critR2" />
        <label class="btn crit-btn" for="critR2" title="Force this attack to be a critical hit?">Crit</label>
        <input aria-describedby="zMoveInstruction" class="move-z calc-trigger visually-hidden" type="checkbox" id="zR2"/>
        <label class="btn z-btn gen-specific g7 g8 g9" for="zR2" title="Make this attack a Z-move?">Z</label>
        <select class="move-hits calc-trigger hide">
            <option value="2">2 hits</option>
            <option value="3">3 hits</option>
            <option value="4">4 hits</option>
            <option value="5">5 hits</option>
        </select>
        <select class="stat-drops calc-trigger hide" title="How many times was this move used in a row?">>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
        <select class="metronome calc-trigger hide" title="How many times was this move successfully and consecutively used while holding Metronome before this turn?">
            <option value="0">Never</option>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
    </div>
    <div class="move3 i-f-o-move">
        <select class="move-selector calc-trigger small-select"></select>
        <input class="move-bp calc-trigger" value="0" />
        <select class="move-type calc-trigger"></select>
        <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8 g9">
            <option value="Physical">Physical</option>
            <option value="Special">Special</option>
        </select>
        <input aria-describedby="criticalHitInstruction" class="move-crit calc-trigger visually-hidden" type="checkbox" id="critR3" />
        <label class="btn crit-btn" for="critR3" title="Force this attack to be a critical hit?">Crit</label>
        <input aria-describedby="zMoveInstruction" class="move-z calc-trigger visually-hidden" type="checkbox" id="zR3"/>
        <label class="btn z-btn gen-specific g7 g8 g9" for="zR3" title="Make this attack a Z-move?">Z</label>
        <select class="move-hits calc-trigger hide">
            <option value="2">2 hits</option>
            <option value="3">3 hits</option>
            <option value="4">4 hits</option>
            <option value="5">5 hits</option>
        </select>
        <select class="stat-drops calc-trigger hide" title="How many times was this move used in a row?">>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
        <select class="metronome calc-trigger hide" title="How many times was this move successfully and consecutively used while holding Metronome before this turn?">
            <option value="0">Never</option>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
    </div>
    <div class="move4 i-f-o-move">
        <select class="move-selector calc-trigger small-select"></select>
        <input class="move-bp calc-trigger" value="0" />
        <select class="move-type calc-trigger"></select>
        <select class="move-cat calc-trigger gen-specific g4 g5 g6 g7 g8 g9">
            <option value="Physical">Physical</option>
            <option value="Special">Special</option>
        </select>
        <input aria-describedby="criticalHitInstruction" class="move-crit calc-trigger visually-hidden" type="checkbox" id="critR4" />
        <label class="btn crit-btn" for="critR4" title="Force this attack to be a critical hit?">Crit</label>
        <input aria-describedby="zMoveInstruction" class="move-z calc-trigger visually-hidden" type="checkbox" id="zR4"/>
        <label class="btn z-btn gen-specific g7 g8 g9" for="zR4" title="Make this attack a Z-move?">Z</label>
        <select class="move-hits calc-trigger hide">
            <option value="2">2 hits</option>
            <option value="3">3 hits</option>
            <option value="4">4 hits</option>
            <option value="5">5 hits</option>
        </select>
        <select class="stat-drops calc-trigger hide" title="How many times was this move used in a row?">>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
        <select class="metronome calc-trigger hide" title="How many times was this move successfully and consecutively used while holding Metronome before this turn?">
            <option value="0">Never</option>
            <option value="1">Once</option>
            <option value="2">Twice</option>
            <option value="3">3 times</option>
            <option value="4">4 times</option>
            <option value="5">5 times</option>
        </select>
    </div>`
}

$(document).ready(function () {
    setupFields()
    window.PrevP2 = "p21";
    window.P2 = "p21"
});
