//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.  

//richiamo l'elemento della DOM in cui voglio inserire le mail e lo salvo in una costante
const mailContainerEl = document.querySelector('ul');

//creo un ciclo che mi permetta di generare dieci mail
for (let i = 1; i <= 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response =>{
    console.log(response);
    
    //creo una mail randomica
    let emailEl =  response.data.response 
    console.log(emailEl);
    
    //creo un list item
    const list = document.createElement('li');

    //aggiungo il list item nell'ul
    mailContainerEl.appendChild(list);

    //aggiungo le mail generate nel list item
    list.innerText = emailEl;

    
});
    
}













