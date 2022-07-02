const currentData = {}

let score = 19;
let genderChoosed;
const div = document.getElementById("name");
div.innerHTML = "No name";
let nb_chance = 1;

const getData = async () => {
    const res = await axios.get('http://localhost:5000/game');
    currentData.name = res.data.name;
    currentData.genderData = res.data.genderData;
}

const displayName = () => {
    const btn = document.getElementById("newName");
    const btnF = document.getElementById("fem");
    const btnM = document.getElementById("masc");
    btn.addEventListener('click', () => {
        getData().then(() => {
            div.innerHTML = `${currentData.name}`;
            btnF.disabled = false;
            btnM.disabled = false;
        });
    })
}

const fem = () => {
    const btn = document.getElementById("fem");
    btn.addEventListener('click', () => {
        checkGender("female");
        nb_chance--;
        nextName(nb_chance);
    })
}

const masc = () => {
    const btn = document.getElementById("masc");
    btn.addEventListener('click', () => {
        checkGender("male");
        nb_chance--;
        nextName(nb_chance);
    })
}

const nextName = (essais) => {
    if( essais < 1){
        document.getElementById("fem").disabled = true;
        document.getElementById("masc").disabled = true;
    }
}

const checkGender = (choosedGender) => {
    if (currentData.genderData.gender === "unknown") score++
    else {
        choosedGender === currentData.genderData.gender ? score++ : score--
    }
    endGame(score)

    document.getElementById("score").innerHTML = "Score : " + score;
}

const endGame = (score) => {
    if(score === 20){
        const divToHide = document.getElementById("game");
        divToHide.style.display = "none";
        const divToDisplay = document.getElementById("win");
        divToDisplay.style.display = "block";
        const btnToDisplay = document.getElementById("again");
        btnToDisplay.style.display = "block";
        
    }
    if(score === 0){
        const divToHide = document.getElementById("game");
        divToHide.style.display = "none";
        const divToDisplay = document.getElementById("loose");
        divToDisplay.style.display = "block";
        const btnToDisplay = document.getElementById("tryAgain");
        btnToDisplay.style.display = "block";
        
    }
    
}



const newGame = () => {
    
    const btn = document.getElementById("again");
    btn.addEventListener('click', () => {      
        score = 10;  
        const div = document.getElementById("name");
        div.innerHTML = "No name";
        document.getElementById("score").innerHTML = "Score : "+ score;
        const divToDisplay = document.getElementById("game");
        divToDisplay.style.display = "block";
        const divToHide = document.getElementById("win");
        divToHide.style.display = "none";
        const btnToHide = document.getElementById("again");
        btnToHide.style.display = "none";
    })

    const btnloose = document.getElementById("tryAgain");
    btnloose.addEventListener('click', () => {
        score = 10;
        const div = document.getElementById("name");
        div.innerHTML = "No name";
        document.getElementById("score").innerHTML = "Score : "+ score;
        const divToDisplay = document.getElementById("game");
        divToDisplay.style.display = "block";
        const divToHide = document.getElementById("loose");
        divToHide.style.display = "none";
        const btnToHide = document.getElementById("tryAgain");
        btnToHide.style.display = "none";
    })
    
}

getData();
displayName();
fem();
masc();
newGame();
