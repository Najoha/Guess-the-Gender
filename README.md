# Guess-the-Gender
Jeux ayant pour but de deviner le genre des noms affichés à l'écran. A 20 points le joueur gagne, à 0 il perd. Il commence à 10.


AU SECOURS


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
