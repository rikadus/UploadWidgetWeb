<h1 align="center">
  Upload Widget (Full Stack)
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" />
  <img src="https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-cyan?style=for-the-badge&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Fastify-5-black?style=for-the-badge&logo=fastify" />
  <img src="https://img.shields.io/badge/Amazon_S3-Uploads-orange?style=for-the-badge&logo=amazonaws" />
</p>

<p align="center">
  Uma solução robusta e moderna de upload de arquivos com interface arrasta-e-solta (Drag & Drop), barra de progresso real-time e gerenciamento de estado otimizado.
</p>

---

## 🚀 Sobre o Projeto

Este projeto consiste em um sistema completo de **Upload de Arquivos**, demonstrando arquitetura limpa e tecnologias de ponta no ecossistema JavaScript/TypeScript.

O sistema é dividido em duas partes principais:
1.  **Frontend (Web)**: Interface rica construída com **React 19** e **TailwindCSS v4**, focada em UX (User Experience). Possui animações fluidas, acessibilidade (Radix UI) e gerenciamento de estado global com Zustand.
2.  **Backend (Server)**: API de alta performance com **Fastify**, responsável por gerenciar uploads via *multipart streams* e integração direta com serviços de armazenamento (AWS S3).

## ✨ Funcionalidades

- **Interface Intuitiva**: Widget flutuante que pode ser minimizado.
- **Drag & Drop**: Suporte nativo para arrastar arquivos.
- **Indicadores de Progresso**: Feedback visual em tempo real para cada upload.
- **Gerenciamento de Estado**: Controle centralizado de uploads usando **Zustand**.
- **Animações Fluidas**: Transições suaves utilizando **Motion** (Framer Motion).
- **Acessibilidade**: Componentes baseados no **Radix UI**.
- **Upload Seguro**: Backend validado com **Zod** e streams eficientes.

## 🛠 Tech Stack

### Frontend (`/web`)
-   **Core**: React 19, TypeScript, Vite
-   **Estilização**: TailwindCSS v4, PostCSS, Tailwind Variants
-   **Estado & Data**: Zustand, Axios, Immer
-   **UI & UX**: Radix UI (Collapsible, Progress, ScrollArea), Lucide React (Ícones), Motion
-   **Upload**: React Dropzone

### Backend (`/server`)
-   **Core**: Node.js, Fastify, TypeScript
-   **Validação**: Zod
-   **Storage**: AWS SDK (S3 Client, Lib Storage)
-   **Utils**: Fastify Multipart, Fastify Cors

## 📦 Como Rodar o Projeto

Pré-requisitos: Certifique-se de ter o **Node.js** e um gerenciador de pacotes (recomendo **pnpm** ou npm) instalados.

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/upload-widget.git
cd upload-widget
```

### 2. Configurar e Rodar o Backend
```bash
cd server
npm install
# Crie um arquivo .env com suas credenciais AWS (veja o código para referência)
npm run dev
```
*O servidor rodará em `http://localhost:3333` (padrão).*

### 3. Configurar e Rodar o Frontend
```bash
cd ../web
npm install
npm run dev
```
*Acesse a aplicação no navegador (geralmente `http://localhost:5173`).*

## 📂 Estrutura de Pastas

```
upload-widget/
├── server/       # API Backend (Fastify)
│   ├── src/
│   │   ├── components/
│   │   ├── http/
│   │   └── server.ts
│   └── ...
├── web/          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/  # Upload Widget e UI components
│   │   ├── store/       # Gerenciamento de estado (Zustand)
│   │   └── ...
│   └── ...
└── README.md     # Documentação Principal
```

--

Desenvolvido por Ricardo Rodrigo

LinkedIn: https://www.linkedin.com/in/ricardorodrigues/ 
GitHub: https://github.com/ricardorodrigues
