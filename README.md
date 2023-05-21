# sms-api

Pour pouvoir utiliser l'API d'envoie de SMS, il faut avoir un compte sur le site https://www.twilio.com/fr-fr/ et avoir un numéro de téléphone valide.

## Installation

Le projet est fonctionnel une fois le fichier app.js configuré avec les informations de votre compte Twilio.

##Voici les 2 lignes à modifier en remplaçant les valeurs entre les guillemets par celles de votre compte Twilio.

``const url = "https://api.twilio.com/2010-04-01/Accounts/TON_ACCOUNT_SID/Messages.json";``

``const auth = "TON_CODE_API:TON_PASS_API";``

### Css et Html

Le fichier index.html est un formulaire qui permet d'envoyer un SMS à un numéro de téléphone valide.

## Screenshots

![App Screenshot](API_SMS_video.gif)
