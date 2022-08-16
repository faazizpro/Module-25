//Option 2: Add onclick function
function makeAqua(){
    document.body.style.backgroundColor = '#8FE3CF';
}

function makeAzure(){
    document.body.style.backgroundColor = '#0096FF'
}



//Option 3
const makeBlueButton = document.getElementById('make-periwinkle-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = '#9C9EFE';
}

//Option 3: Another

const makeBarleyWhite = document.getElementById('make-barley-white');
makeBarleyWhite.onclick = function barleyWhite(){
    document.body.style.backgroundColor = '#FFF4CF';
}