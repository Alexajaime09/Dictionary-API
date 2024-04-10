const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');

btn.addEventListener("click", () => {
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    result.innerHTML = `
    <div class="word">
    <h3>${inpWord}</h3>
    <button onclick="playSound()">
        <i class='bx bx-volume-full'></i>
    </button>
</div>

<div class="details">
    <p>${data[0].meanings[0].partOfSpeech} /${data[0].phonetic}/ </p> 
    <p class="word-meaning">
       ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
     ${data[0].meanings[0].definitions[0].example || ""}
    </p> </div>`;
    sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
});

});

function playSound(){
    sound.play();
}