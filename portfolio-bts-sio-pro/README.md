# Portfolio BTS SIO SISR - Version professionnelle

Mot de passe de l’espace jury : `bts-sio-2026`

## Ouvrir le site
1. Décompresse le ZIP.
2. Ouvre le dossier dans VS Code.
3. Ouvre `index.html` avec Live Server.

## Ajouter une preuve
1. Mets ton fichier dans le bon dossier :
   - `preuves/patrimoine`
   - `preuves/incidents`
   - `preuves/presence`
   - `preuves/projet`
   - `preuves/service`
   - `preuves/professionnel`

2. Ouvre `pages/competences.html`.

3. Pour ajouter une preuve dans la même compétence, copie une ligne comme :
```html
<a class="proof" href="../preuves/patrimoine/mon-fichier.pdf" target="_blank">📄 Mon fichier</a>
```

4. Envoie en ligne :
```bash
git add .
git commit -m "Ajout preuve"
git push
```

## Important
La protection par mot de passe est une protection simple côté navigateur.
Garde les preuves anonymisées.
