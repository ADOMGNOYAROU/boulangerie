# Guide d'Utilisation - Site Web Boulangerie

Ce guide explique comment utiliser et maintenir le site web de la boulangerie.

## Structure du Projet

- `index.html`: Page d'accueil
- `produits.html`: Page des produits
- `apropos.html`: Page À propos
- `horaires.html`: Page des horaires
- `contact.html`: Page de contact
- `cart.html`: Page du panier
- `checkout.html`: Page de commande
- `styles.css`: Feuille de style principale
- `script.js`: Script pour le menu mobile
- `cart.js`: Script pour la gestion du panier
- `products.json`: Base de données des produits

## Fonctionnalités

### Navigation
Le site comprend un menu de navigation en haut de chaque page. Sur mobile, un menu hamburger (☰) permet d'afficher le menu.

### Commande de Produits
1. Sur la page `produits.html`, cliquez sur les boutons "+" et "-" pour ajuster les quantités.
2. La barre de panier en bas de l'écran affiche le nombre total d'articles.
3. Cliquez sur "Commander" pour valider votre panier.

### Panier d'Achat (`cart.html`)
- Affiche les articles sélectionnés
- Permet de supprimer des articles
- Affiche le total à payer

### Passage de Commande (`checkout.html`)
- Formulaire pour saisir les informations de livraison
- Validation de commande

## Personnalisation

### Modifier les Produits
Ouvrez `products.json` pour modifier les produits, prix ou images.

```json
{
    "id": 1,
    "name": "Nouveau Produit",
    "price": 5.99,
    "image": "🥐"
}
```

### Modifier le Style
Ouvrez `styles.css` pour modifier les couleurs, polices ou mise en page.

## Déploiement

Le site peut être hébergé sur:
1. **GitHub Pages**: Déposez les fichiers dans un dépôt GitHub et activez GitHub Pages.
2. **Netlify**: Drag-and-drop du dossier du projet sur [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. **Serveur Web**: Copiez les fichiers sur votre serveur web via FTP.

## Développement

Pour tester localement, ouvrez simplement les fichiers HTML dans un navigateur. Aucun serveur n'est requis.

## Support

Pour toute question, contactez-nous à contact@votredomaine.fr
