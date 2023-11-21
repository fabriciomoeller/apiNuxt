# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


echo "# apiNuxt" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/fabriciomoeller/apiNuxt.git
git push -u origin main

or push an existing repository from the command line
git remote add origin https://github.com/fabriciomoeller/apiNuxt.git
git branch -M main
git push -u origin main




********************
# Documentaçao para Rotas
https://nitro.unjs.io/guide/routing

# Api basica 
http 192.168.15.3:3000/api/foo


# Api de login
http 192.168.15.3:3000/api/auth/login/32


# Rotas para paginas
http 192.168.15.3:3000/page


# Api usuario
http 192.168.15.3:3000/api/user/foo


# Middleware
http 192.168.15.3:3000/api/user/foo Cookie:token=hi

# Storage Layer - Armazenamento
