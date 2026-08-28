# Tableau de bord HG

Site statique pour les outils de classe d'histoire-geographie.

## Publication avec GitHub Pages

1. Creez un depot GitHub vide, par exemple `tableau-bord-hg`.
2. Depuis ce dossier, ajoutez le depot distant puis envoyez les fichiers :

```bash
git add .
git commit -m "Publier le tableau de bord HG"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/tableau-bord-hg.git
git push -u origin main
```

3. Dans GitHub, ouvrez **Settings > Pages**.
4. Choisissez **Deploy from a branch**, puis la branche `main` et le dossier `/(root)`.
5. GitHub fournira l'adresse publique du site.

Le site ne demande ni serveur ni compilation : `index.html` est directement la page d'accueil.
