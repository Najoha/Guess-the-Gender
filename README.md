## Guess-the-Gender
Jeux ayant pour but de deviner le genre des noms affichés à l'écran. A 20 points le joueur gagne, à 0 il perd. Il commence à 10.


Temps mis pour réaliser cette version du projet : environ 15h.

##Utilisation de l'API 

Avant tout vous devez vous rendre sur le site [https://gender-api.com/fr]
Vous créer un compte pour avoir accès aux 500 requêtes gratuites par mois et avoir un token qui vous permettra de jouer.
Le token est accessible dans la rubrique mon compte.

##Mettre en place le projet

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

##Installation des packages

Effectuez les commandes suivantes dans votre terminal pour avoir tous les packages necessaires au bon fonctionnement du jeu:

```
sudo npm install mysql
sudo npm install file-system --save
```

## Créer la base de donnée et la remplir

Une fois que vous avez effectué les changements ci dessus, copier une par une et dans l'ordre les commandes suivantes dans votre terminal:

Faites un `CTRL + C` après chaque commande lorsque les messages :'database created' et 'Table created, 300 names have been added in it' se sont affichés.
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

Une fois tout cela fait, allez dans `front/index.html` ouvrez la page html dans votre navigateur et jouez.


## Fonctionnement du programme 



