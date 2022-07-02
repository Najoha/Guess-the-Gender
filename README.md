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



