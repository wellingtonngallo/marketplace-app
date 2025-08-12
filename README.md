# Marketplace Microfrontends

Microfrontend com host (Vite + Module Federation) e dois MFEs (header, cards).

## Requisitos
- Node 20+
- npm 10+

## Instalação
```bash
npm i --prefix marketplace-host
npm i --prefix header-app
npm i --prefix cards-app
```

## Rodando tudo junto
```bash
npm run dev:all
```
Esse comando:
- Libera as portas 5000/5001/5003 se estiverem ocupadas
- Sobe `header-app` (preview em 5001)
- Sobe `cards-app` (preview em 5003)
- Aguarda `remoteEntry.js` dos MFEs e sobe o host (preview em 5000)

Acesse:
- Host: `http://localhost:5000`
- Header MFE remote: `http://localhost:5001/assets/remoteEntry.js`
- Cards MFE remote: `http://localhost:5003/assets/remoteEntry.js`

## Scripts individuais
```bash
# Host
npm run build --prefix marketplace-host
npm run preview --prefix marketplace-host -- --port 5000 --strictPort

# Header MFE
npm run start-mf --prefix header-app
# (executa build + preview em 5001)

# Cards MFE
npm run start-mf --prefix cards-app
# (executa build + preview em 5003)
```

## Tecnologias
- React 18 + TypeScript 5
- Vite 7
- Module Federation: `@originjs/vite-plugin-federation`
- Tailwind CSS 4 (com `@tailwindcss/vite`)
- Flowbite + Flowbite React (componentes UI)
- TanStack React Query (cache/estado de dados assíncronos)
- Lucide React (ícones)
- ESLint/Biome (lint/format)
- Scripts de orquestração: `concurrently`, `wait-on`