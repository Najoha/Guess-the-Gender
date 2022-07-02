## Guess-the-Gender
Jeux ayant pour but de deviner le genre des noms affichés à l'écran. A 20 points le joueur gagne, à 0 il perd. Il commence à 10.


Temps mis pour réaliser cette version du projet : environ 15h.

## Utilisation de l'API 

Avant tout vous devez vous rendre sur le site [https://gender-api.com/fr]
Vous créer un compte pour avoir accès aux 500 requêtes gratuites par mois et avoir un token qui vous permettra de jouer.
Le token est accessible dans la rubrique mon compte.

## Mettre en place le projet

Une fois que vous avez clone le projet vous devrez aller dans le fichier `index.js` qui contient tout le back du projet.

Il vous faudra modifier plusieurs éléments dans ce fichier:


```
8: const genderApi = "your_token";
```
C'est à cette ligne que vous mettez votre token à la place de `your_token`


```
12: const con = mysql.createConnection({
13:    host: "localhost",
14:    user: "your_sql_id",
15:    password: "your_sql_password",
16:    database: "GuessTheGender"
17: });
```
Des lignes 12 à 17 vous devez remplacer les élément en fonction de vos identifiants MySQL et du nom que vous voulez donner à votre base de données.

Vous devrez remplacer les mêmes informations dans `db/create_db.js` l 3 à 7 ainsi que dans `db/set_db.js` l 4 à 9.

## Installation des packages

Effectuez les commandes suivantes dans votre terminal pour avoir tous les packages necessaires au bon fonctionnement du jeu:

```
sudo npm install mysql
sudo npm install file-system --save
sudo npm install axios
sudo npm install express --save
sudo npm i nodemon
sudo npm i http
sudo npm install cors
```

## Créer la base de donnée et la remplir

Une fois que vous avez effectué les changements ci dessus, copier une par une et dans l'ordre les commandes suivantes dans votre terminal:

> Faites un `CTRL + C` après chaque commande lorsque les messages :'database created' et 'Table created, 300 names have been added in it' se sont affichés.
```
node db/create_db.js
```


```
node db/set_db.js
```

Après ça votre base de données sera créée et remplis avec la table Names contenant 300 noms présents dans `db/names.json`.

## Requêtes à l'API

Ecrivez dans votre terminal : 

```
npm run start
```

Ainsi vous avez lancé le programme permettant de faire les requêtes. Pour voir la réponse obtenue allez dans votre navigateur et ecrivez la commande suivante dans votre termianl : 

```
curl http://localhost:5000/game
```

Une fois tout ça fait, allez dans `front/index.html` ouvrez la page html dans votre navigateur et jouez.


## Fonctionnement du programme 

**Coté base de données :**

Pour la création et le remplissage de la base de données respectivement, les fichiers se connectent à MySQL, une fois fait, ils console.log "Connected!" puis un message correspondant à l'action attendu du fichier.

J'ai décidé de mettre les noms dans un `fichier.json` car parser ce fichier était plus propre dans le code que de tout écrire nom par nom dans le fichier `set_db.js`.

> Je pourrais probablement améliorer ce coté là en créant un fichier qui jouer le role de `create_db.js` et de `set_db.js` en même temps.

**Coté Back :**

Tout le Back est réunis dans un unique fichier : `index.js`.

On se connecte à nouveau à la base de données pour y selectionner un prénom au hasard et envoyer la requête à l'API  grâce à deux fonctions: 

- `checkGender(prenom, country);` -> appelle l'API en utilisant axios on récupère la réponse et on la retourne.

- `getRandomPerson();` -> envoie la requête SQL, utilise la fonction précédente et lui passe comme paramètres le résultat de la requête SQL et "FR".

> Notes: l'API propose deux fonction pour verifier le genre d'un prénom. Une qui ne prend comme paramètre que le prénom et celle que j'utilise qui prend également le pays. J'ai choisis la seconde pour prévoir une version du jeux dans un autre language car les prénoms peuvent ne pas avoir le même genre d'un pays à l'autre.

Pour utiliser la fonction ci dessus, on l'appelle dans `game()` qui essaye d'executer la fonction et si il y à une erreur, `game()` renvoie l'erreur qui correspond. Cette fonction est elle même appelée dans `gameController()` ce controller vas essayer d'executer la fonction et renvoyer status = 200 si il y parvient. Sinon il renvoie l'erreur associée au problème rencontré.

A la fin du fichier, on retrouve une dizaine de ligne permettant de créer un server sur un port définit, d'appeler `gameController()` dans une route "/game" et de donner un status aux erreurs si il y en a.

> Notes: Je pourrais surement mieux organiser ce fichier.

**Coté Front**

Tous le Front est regroupé dans le dossier Front qui contient les dossiers: css, images, js ; ainsi que le fichier `index.html`.

Dans le dossier : js, game.js permet tous le fonctionnement du jeux sauf la gestion de l'affichage des règle du jeux.

`game.js` contient des fonctions permettant :

- la récupération du prénom selectionné dans le back -> `getData()`,
- l'affichage du prénom récupéré plus tôt -> `displayName()`,
- l'indication du bouton sur lequel le joueur à choisis de cliquer et ce que ça signifie  -> `fem()` et `masc()`,
- le fait "d'obliger" le joueur à appuyer sur le bouton nouveau prénom pour continuer le jeux -> `nextName()`,
- la comparaison du choix du joueur et du genre renvoyé dans le .json par l'API -> `checkGender()`,
- la fin du jeux et l'affichage des éléments de fin -> `endGame()`,
- le lancement de la partie suivante -> `newGame`.

> Notes: Les fonctions de fin sont rédigées d'une façon qui, je pense, peut être moins longue et plus efficace.
> Un système de changement de language du jeux peut être mis en place.
> On peut également mettre en place un système de sauvegarde des données, de comptage de fautes et de bonnes réponses qui permettrais de faire un classement en fonction du taux de bonnes réponses que le joueur obtient au cours de ses parties.


