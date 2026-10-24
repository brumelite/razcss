# RazCSS

**Un reset CSS moderne, léger et volontairement minimaliste.** Sans dépendance à l’exécution et sans styles graphiques imposés.

> Un projet développé et maintenu sous le label **BrumeLite**.

RazCSS fournit une base CSS cohérente pour démarrer un projet web, tout en conservant les comportements natifs utiles des navigateurs.

## Installation

> Les commandes et les URL ci-dessous seront utilisables une fois `@brumelite/razcss` publié sur npm.

### Avec npm

```bash
npm install @brumelite/razcss
```

Dans un projet utilisant un bundler compatible avec l’import de CSS :

```javascript
import '@brumelite/razcss/dist/reset.css';
```

### Avec un CDN

Ajoutez cette feuille de style dans la section `<head>` de votre page, **avant vos propres styles** :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@brumelite/razcss@1.0.0/dist/reset.css">
```

Pour utiliser la version minifiée fournie automatiquement par jsDelivr (sans fichier `reset.min.css` dans le package npm) :

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@brumelite/razcss@1.0.0/dist/reset.min.css">
```

### Téléchargement direct

Récupérez le fichier [`dist/reset.css`](dist/reset.css) depuis le repository et chargez-le avant votre propre feuille de style.

## Que fait RazCSS ?

- Applique `box-sizing: border-box` aux éléments et pseudo-éléments.
- Supprime certaines marges par défaut (`body`, titres, paragraphes, etc.).
- Supprime les puces et espacements des listes qui utilisent explicitement `role="list"`.
- Rend les médias plus faciles à adapter à leur conteneur.
- Permet aux contrôles de formulaire d’hériter de la police environnante.
- Facilite le retour à la ligne des textes longs.

RazCSS **ne supprime pas** les indicateurs de focus, ne définit pas de thème graphique et ne réinitialise pas systématiquement l’apparence native des boutons, des liens ou des listes classiques.

## Développement et vérification

Le développement nécessite **Node.js 20 ou une version ultérieure**. L’utilisation du fichier CSS lui-même ne nécessite pas Node.js.

```bash
# Générer le fichier de distribution
npm run build

# Exécuter les tests
npm test

# Générer puis tester
npm run check

# Vérifier le contenu du package sans le publier
npm pack --dry-run
```

Le build génère `dist/reset.css` depuis `src/reset.css`. Le fichier distribué est actuellement une copie du source, sans minification locale.

## Licence

Distribué sous licence **MIT**. Voir le fichier [LICENSE](LICENSE).
