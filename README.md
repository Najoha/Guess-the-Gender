# Guess-the-Gender
Jeux ayant pour but de deviner le genre des noms affichés à l'écran. A 20 points le joueur gagne, à 0 il perd. Il commence à 10.


Je rencontre un problème au niveau des fonctions femClick() et mascClick() definies dans la balise head du fichier game.ejs présent dans le dossier views.

J'aimerais les importer dans le fichier game.js afin de les utilisées pour comparer ce que l'utilisateur à choisis comme genre pour le prénom donné et ce que l'API renvoie. Cependant je n'arrive pas à le faire.

J'ai également déjà essayé de les definir directement dans le fichier game.js et de les utiliser par la suite dans le fichier game.ejs mais je n'y suis pas parvenue.



!!!!! MISE A JOUR : j'ai continuer mes test et mon soucis c'est récuperer une réponse sensée être envoyée par les boutons pour ensuite comparer avec ce que l'API me donne. !!!!!




commandes à effectuer dans le terminal poure installer les bons outils:
```
sudo npm install mysql

sudo npm install express --save
```

`Je n'ai pas encore noté tout ce que j'avais installé donc il est possible qu'il manque 1 ou 2 lignes ci-dessus`

Pour la base de donnée il faut copier coller les deux commandes suivantes dans le terminal:
`il ne faut pas oublier avant d'effectuer les commandes suivantes de changer dans les fichiers create_db.js et set_db.js de changer les user et pasword pour que vous puissiez vous connecter à MySQL. `

```
node create_db.js

node set_db.js
```

Suite à ces commandes, vous aurez créé une base de donnée qui s'apelle GuessTheGender avec une table nommée Names, qui comprend 300 prénoms contenus initialement dans le fichier names.json.
