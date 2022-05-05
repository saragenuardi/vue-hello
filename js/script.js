Vue.config.devtools = true;

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.


//BONUS
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const saluto = new Vue(
    {
        el: '#root',
        data: {
            salutaUtente: "Ciao Sara",
            immagine: "https://www.unycastile.ch/wp-content/uploads/2020/07/shutterstock_679581043-1024x1024.jpg"
        }
    }
); 