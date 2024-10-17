//Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista.  

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(response =>{
    console.log(response);
      
});

//richiamo l'elemento della DOM in cui voglio inserire le mail e lo salvo in una costante
const mailLiEl = document.querySelector('li');