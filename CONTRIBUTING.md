# Come modificare il sito
Clona questa repository sul tuo computer, scarica Node.js ed npm, apri un prompt dei comandi, naviga alla cartella dove hai clonato la repository
ed esegui il comando
```shell
npm install
```

Verranno installati tutti i programmi necessari ad eseguire il server
# ESEGUIRE IL SERVER:COSE DA SAPERE

Il server si esegue con il comando 
```shell
PORT=3000 npm start
```
Andando con il tuo browser a

```url
localhost:3000
```
Potrai vedere lo stato attuale del sito

> **NB:** Non eseguire il push senza aver testato che il server funzioni sul tuo computer, la versione su heroku si aggiorna automaticamente quando esegui ill push

## Ci sono tanti file! Cosa fanno? In che linguaggio di programmazione sono scritti?

* **Il file server.js** è scritto in JavaScript (con comandi specifici di Node.js e Express) ed è il file principale del server, se si va alla home dice di renderizzare il file [index.ejs](views/index.ejs), altrimenti renderizza [iniziamo.ejs](views/iniziamo.ejs), app.listen eccetera crea il server e lo mette in attesa
* **I file .ejs nella cartella views** teroricamente sono scritti in EJS ma al momento sono semplici file HTML scritti con l'ausilio dei template di Bootstrap
* **Nella cartella public** ci sono altri file che vengono utilizzati dalle pagine web (come l'albero che esce in alto a sinistra)
