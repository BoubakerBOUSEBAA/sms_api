
function envoyerSMS(){
    const messageAenvoyer = document.getElementById("messageAenvoyer").value;
    const numTelToElement = document.getElementById("numTelToElement").value;

    const message = encodeURI(messageAenvoyer);
    const numTelTo = encodeURI(numTelToElement);

//lIGNE A MODIFIER AVEC LES DONNEES DE TWILIO
    const url = "https://api.twilio.com/2010-04-01/Accounts/TON_ACCOUNT_SID/Messages.json";
    const auth = "TON_CODE_API:TON_PASS_API";

    const myHeader = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization':'Basic ' + btoa(auth)
    });

    const init = {
        method :'POST',
        headers : myHeader,
        mode : 'cors',
        body:"To="+numTelTo+"&From=%TON_MUM_EXP&Body="+message
    }

    fetch(url, init)
        .then(response => console.log(response))
        .catch(err => console.log(err));

        if (messageAenvoyer == "" || numTelToElement == "") {
            alert("Veuillez remplir tous les champs");
        }
        else {
            alert("Message envoyé");
        }
        
}