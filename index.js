const inputArea = document.querySelector('#input-area');
const outputArea = document.querySelector('#output-area');


document.querySelector('button').addEventListener('click', ()=> {
    console.log();
    let url = "https://api.funtranslations.com/translate/minion.json/?text=" + inputArea.value 
    fetch(url)
    .then(res => res.json())
    .then(result => {
        console.log(result);
        if (result.error) {
            inputArea.value = result.error.message;
        }else {
            outputArea.value = result.contents.translated
        }       
        
    })

    
})
