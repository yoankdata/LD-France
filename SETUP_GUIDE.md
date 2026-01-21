# 🚀 GUIDE DE DÉMARRAGE RAPIDE - LDFRANCE

## 📋 Checklist complète d'installation

### ✅ Étape 1 : Créer un compte Neon (2 min)

1. Va sur **[neon.tech](https://neon.tech)**
2. Clique sur **"Sign Up"** (gratuit, pas de CB requise)
3. Connecte-toi avec GitHub ou Google
4. Clique sur **"Create a project"**
   - Nom du projet : `ldfrance-db`
   - Région : `Europe (Frankfurt)` ou la plus proche de toi
   - PostgreSQL version : Laisser par défaut
5. Clique sur **"Create project"**

### ✅ Étape 2 : Récupérer la DATABASE_URL (1 min)

1. Dans le dashboard Neon, tu es sur ton projet `ldfrance-db`
2. En haut, clique sur **"Connection Details"**
3. **Copie** la chaîne de connexion **"Pooled Connection"**
   
   Elle ressemble à ça :
   ```
   postgresql://user123:xyz789@ep-cool-name-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require
   ```

### ✅ Étape 3 : Configurer .env.local (2 min)

**Dans PowerShell, dans ton dossier LDFRANCE :**

```powershell
# Copier le fichier exemple
cp .env.example .env.local

# Ouvrir .env.local avec ton éditeur
notepad .env.local
```

**Remplace les valeurs :**

```env
# ✅ COLLE TA DATABASE_URL ICI (celle que tu as copiée à l'étape 2)
DATABASE_URL="postgresql://user123:xyz789@ep-cool-name-123456.eu-central-1.aws.neon.tech/neondb?sslmode=require"

# ✅ GÉNÈRE UN SECRET ALÉATOIRE
# Commande PowerShell pour générer :
# [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
# Exemple : "aB3dE5fG7hI9jK1lM3nO5pQ7rS9tU1vW3xY5zA7bC9dE1="
NEXTAUTH_SECRET="aB3dE5fG7hI9jK1lM3nO5pQ7rS9tU1vW3xY5zA7bC9dE1="

# ✅ URL de ton application
NEXTAUTH_URL="http://localhost:3000"
```

**💡 Pour générer NEXTAUTH_SECRET facilement :**

```powershell
# Execute cette commande dans PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

Copie le résultat dans `NEXTAUTH_SECRET`.

---

### ✅ Étape 4 : Initialiser la base de données (2 min)

```bash
# Générer le client Prisma (crée les types TypeScript)
npx prisma generate
```

✅ **Tu devrais voir** : "Generated Prisma Client"

```bash
# Pousser le schéma en base (crée les tables User, Product, etc.)
npx prisma db push
```

✅ **Tu devrais voir** : "Your database is now in sync with your Prisma schema."

---

### ✅ Étape 5 : Vérifier que tout fonctionne (1 min)

```bash
# Ouvre Prisma Studio (interface graphique pour voir les tables)
npx prisma studio
```

✅ **Résultat attendu :**
- Un navigateur s'ouvre sur `http://localhost:5555`
- Tu vois toutes les tables : User, Product, Brand, Category, PriceTier, Lead, Order, OrderItem

**Essaie de créer un User manuellement pour tester !**

---

## 🎉 Félicitations !

Ta base de données LDFRANCE est configurée et opérationnelle sur **Neon**.

### 📚 Prochaines étapes

1. **Seed des données** : Ajouter les catégories et produits de test
2. **NextAuth.js** : Configurer l'authentification
3. **Next.js App** : Créer les pages produits et admin

---

## 🆘 Problèmes fréquents

### ❌ "Error: P1001 Can't reach database server"

**Solution :** Vérifie que ta `DATABASE_URL` est correcte dans `.env.local`

### ❌ "Environment variable not found: DATABASE_URL"

**Solution :** Tu as oublié de créer `.env.local` ou il n'est pas dans le bon dossier.

```bash
# Vérifie que .env.local existe
ls .env.local
```

### ❌ "Invalid `prisma.user.findMany()` invocation"

**Solution :** Tu n'as pas exécuté `npx prisma db push` pour créer les tables.

---

## 📞 Besoin d'aide ?

Copie-moi le message d'erreur complet et je t'aide à le résoudre !
