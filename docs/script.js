const CDN_URL = 'https://cdn.jsdelivr.net/npm/@brumelite/razcss@1.0.1/dist/reset.css';

const examples = {
  content: `
    <h1>Un titre de page</h1>
    <p>Voici un paragraphe et <a href="#">un lien classique</a>.</p>
    <h2>Liste ordinaire</h2>
    <ul>
      <li>Premier élément</li>
      <li>Deuxième élément</li>
    </ul>
    <blockquote>Un exemple de citation.</blockquote>
  `,
  navigation: `
    <h1>Navigation</h1>
    <p>Une liste portant role="list" est réinitialisée.</p>
    <nav aria-label="Exemple de navigation">
      <ul role="list">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <h2>Liste classique</h2>
    <ul>
      <li>Premier élément</li>
      <li>Deuxième élément</li>
    </ul>
  `,
  media: `
    <h1>Médias et formulaire</h1>
    <p>Image plus large que son conteneur :</p>
    <img width="620" height="130" alt="Illustration de test" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='620' height='130'%3E%3Crect width='620' height='130' fill='%23c1ead5'/%3E%3Ctext x='24' y='72' font-family='Arial' font-size='24' fill='%23144835'%3ERazCSS — image 620 px%3C/text%3E%3C/svg%3E">
    <p><label>Votre prénom <input placeholder="Prénom"></label></p>
    <button type="button">Un bouton</button>
  `
};

function iframeDocument(markup, withReset) {
  const stylesheet = withReset ? `<link rel="stylesheet" href="${CDN_URL}">` : '';

  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ${stylesheet}
</head>
<body>
  ${markup}
</body>
</html>`;
}

function showExample(name) {
  const markup = examples[name];
  if (!markup) return;

  document.querySelector('#native-frame').srcdoc = iframeDocument(markup, false);
  document.querySelector('#reset-frame').srcdoc = iframeDocument(markup, true);

  document.querySelectorAll('[data-example]').forEach((button) => {
    const active = button.dataset.example === name;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('[data-example]').forEach((button) => {
  button.addEventListener('click', () => showExample(button.dataset.example));
});

showExample('content');

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      const previousLabel = button.textContent;
      button.textContent = 'Copié !';
      window.setTimeout(() => { button.textContent = previousLabel; }, 1500);
    } catch {
      button.textContent = 'Sélectionnez le code';
    }
  });
});
