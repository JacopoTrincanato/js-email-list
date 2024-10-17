//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.  

//richiamo l'elemento della DOM in cui voglio inserire le mail e lo salvo in una costante
const mailContainerEl = document.querySelector('ul');

//creo una funzione che permette di generare una mail
function generateEmails(email) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(response =>{
    console.log(response);
    
    let emailEl =  response.data.response //document.createElement('li');
    console.log(emailEl);
    
    return email
  

});
    
}

//creo un ciclo che mi permetta di generare dieci mail
for (let i = 1; i <= 10; i++) {
    generateEmails()
    
}











