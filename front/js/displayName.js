const currentData = {}

let score = 10;
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

    document.getElementById("score").innerHTML = "Score : " + score;
}

getData();
displayName();
fem();
masc();