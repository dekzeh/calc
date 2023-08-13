const itemBoxFrameHtml = `<div class="item-box-body">
    <legend>Damage</legend>
    <div class="box-item-list">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/silk-scarf.png" data-id="Silk Scarf">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/silver-powder.png" data-id="Silver Powder">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/poison-barb.png" data-id="Poison Barb">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/soft-sand.png" data-id="Soft Sand">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/miracle-seed.png" data-id="Miracle Seed">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/metal-coat.png" data-id="Metal Coat">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/mystic-water.png" data-id="Mystic Water">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/magnet.png" data-id="Magnet">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/hard-stone.png" data-id="Hard Stone">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/never-melt-ice.png" data-id="Nevermelt Ice">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/dragon-fang.png" data-id="Dragon Fang">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/charcoal.png" data-id="Charcoal">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/black-glasses.png" data-id="Black Glasses">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/sharp-beak.png" data-id="Sharp Beak">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/twisted-spoon.png" data-id="Twisted Spoon">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/plate/pixie.png" data-id="Pixie Plate">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/black-belt.png" data-id="Black Belt">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/spell-tag.png" data-id="Spell Tag">
    </div>
    <hr>
    <legend>Held</legend>
    <div class="box-item-list">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/wide-lens.png" data-id="Wide Lens">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/muscle-band.png" data-id="Muscle Band">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/wise-glasses.png" data-id="Wise Glasses">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/protective-pads.png" data-id="Protective Pads">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/zoom-lens.png" data-id="Zoom Lens">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/evo-item/razor-claw.png" data-id="Razor Claw">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/evo-item/razor-fang.png" data-id="Razor Fang">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/kings-rock.png" data-id="King's Rock">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/life-orb.png" data-id="Life Orb">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/metronome.png" data-id="Metronome">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/shell-bell.png" data-id="Shell Bell">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/expert-belt.png" data-id="Expert Belt">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/assault-vest.png" data-id="Assault Vest">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/leftovers.png" data-id="Leftovers">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-band.png" data-id="Choice Band">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-scarf.png" data-id="Choice Scarf">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/choice-specs.png" data-id="Choice Specs">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/rocky-helmet.png" data-id="Rocky Helmet">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/heavy-duty-boots.png" data-id="Heavy Duty Boots">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/white-herb.png" data-id="White Herb">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/shed-shell.png" data-id="Shed Shell">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/electric-seed.png" data-id="Electric Seed">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/grassy-seed.png" data-id="Grassy Seed">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/misty-seed.png" data-id="Misty Seed">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/psychic-seed.png" data-id="Psychic Seed">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/power-herb.png" data-id="Power Herb">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/mental-herb.png" data-id="Mental Herb">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/room-service.png" data-id="Room Service">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/eject-button.png" data-id="Eject Button">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/eject-pack.png" data-id="Eject Pack">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/red-card.png" data-id="Red Card">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/hold-item/focus-sash.png" data-id="Focus Sash">
    </div>
    <hr>
    <legend>Gems</legend>
    <div class="box-item-list">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/bug.png" data-id="Bug Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/dark.png" data-id="Dark Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/steel.png" data-id="Steel Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/water.png" data-id="Water Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/fire.png" data-id="Fire Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/grass.png" data-id="Grass Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/electric.png" data-id="Electric Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/ground.png" data-id="Ground Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/flying.png" data-id="Grass Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/fairy.png" data-id="Fairy Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/psychic.png" data-id="Psychic Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/fighting.png" data-id="Fighting Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/ghost.png" data-id="Ghost Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/dragon.png" data-id="Dragon Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/ice.png" data-id="Ice Gem">
        <img class="ic save-trigger"src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/rock.png" data-id="Rock Gem">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/poison.png" data-id="Poison Gem">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/gem/normal.png" data-id="Normal Gem">
    </div>
    <hr>
    <legend>Damage reduction Berry</legend>
    <div class="box-item-list"> 
        <img class="berry-bb ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/babiri.png" data-id="Babiri Berry">
        <img class="berry-cr ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/charti.png" data-id="Charti Berry">
        <img class="berry-cl ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/chilan.png" data-id="Chilan Berry">
        <img class="berry-cp ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/chople.png" data-id="Chople Berry">
        <img class="berry-co ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/coba.png" data-id="Coba Berry">
        <img class="berry-cb ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/colbur.png" data-id="Colbur Berry">
        <img class="berry-ha ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/haban.png" data-id="Haban Berry">
        <img class="berry-ka ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/kasib.png" data-id="Kasib Berry">
        <img class="berry-ke ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/kebia.png" data-id="Kebia Berry">
        <img class="berry-oc ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/occa.png" data-id="Occa Berry">
        <img class="berry-ps ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/passho.png" data-id="Passho Berry">
        <img class="berry-py ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/payapa.png" data-id="Payapa Berry">
        <img class="berry-ri ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/rindo.png" data-id="Rindo Berry">
        <img class="berry-ro ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/roseli.png" data-id="Roseli Berry">
        <img class="berry-sh ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/shuca.png" data-id="Shuca Berry">
        <img class="berry-ta ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/tanga.png" data-id="Tanga Berry">
        <img class="berry-wa ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/wacan.png" data-id="Wacan Berry">
        <img class="berry-ya ic save-trigger"  src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/yache.png" data-id="Yache Berry">
    </div>
    <hr>
    <legend>Berries</legend>
    <div class="box-item-list">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/oran.png" data-id="Oran Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/sitrus.png" data-id="Sitrus Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/lum.png" data-id="Lum Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/pecha.png" data-id="Pecha Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/chesto.png" data-id="Chesto Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/rawst.png" data-id="Rawst Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/aspear.png" data-id="Aspear Berry">
        <img class="ic save-trigger" src="https://raw.githubusercontent.com/msikma/pokesprite/master/items/berry/persim.png" data-id="Persim Berry">
    </div>
</div>`;