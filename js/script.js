Vue.config.devtools = true;

//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const saluto = new Vue(
    {
        el: '#root',
        data: {
            salutaUtente: "Ciao Sara",
        }
    }
); 