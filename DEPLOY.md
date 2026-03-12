# Guia de Deploy no GitHub Pages

## 🚀 Opção 1: Repositório Principal (Recomendado)

Para publicar em `https://{username}.github.io` (URL principal, sem subpasta):

### Passo 1: Criar Repositório Especial

1. Acesse: https://github.com/new
2. Nome do repositório: `{username}.github.io` (exatamente esse nome)
3. Deixe como público
4. Não inicialize com README
5. Clique em "Create repository"

### Passo 2: Configurar Git Local

```bash
# Inicializar git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Portfolio com TypeScript"

# Adicionar o repositório remoto
git remote add origin https://github.com/{username}/{username}.github.io.git

# Enviar para o GitHub
git push -u origin main
```

### Passo 3: Deploy

```bash
# Fazer o deploy
npm run deploy
```

Pronto! Seu site estará disponível em: **https://{username}.github.io**

---

## 🎯 Opção 2: Repositório com Nome Personalizado

Para publicar em `https://{username}.github.io/portfolio` (com subpasta):

### Passo 1: Criar Repositório

1. Acesse: https://github.com/new
2. Nome do repositório: `portfolio` (ou qualquer nome)
3. Deixe como público
4. Clique em "Create repository"

### Passo 2: Atualizar Configurações

**package.json:**
```json
"homepage": "https://{username}.github.io/portfolio"
```

**vite.config.ts:**
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
```

### Passo 3: Configurar Git e Deploy

```bash
# Inicializar git
git init

# Adicionar arquivos
git add .

# Commit
git commit -m "Initial commit"

# Adicionar repositório remoto
git remote add origin https://github.com/{username}/portfolio.git

# Enviar para o GitHub
git push -u origin main

# Deploy
npm run deploy
```

### Passo 4: Configurar GitHub Pages

1. Vá para: https://github.com/{username}/portfolio/settings/pages
2. Em "Source", selecione: `gh-pages` branch
3. Clique em "Save"

Aguarde alguns minutos e acesse: **https://{username}.github.io/portfolio**

---

## 🔄 Atualizações Futuras

Sempre que fizer alterações:

```bash
# Adicionar mudanças
git add .

# Commit com mensagem descritiva
git commit -m "Atualização: descrição das mudanças"

# Enviar para o GitHub
git push

# Fazer deploy da nova versão
npm run deploy
```

---

## 🐛 Solução de Problemas

### Erro: "gh-pages not found"

```bash
npm install --save-dev gh-pages
```

### Erro: "Permission denied"

Configure suas credenciais do Git:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Site não atualiza

1. Limpe o cache do navegador (Ctrl + Shift + R)
2. Aguarde alguns minutos (pode demorar até 10 minutos)
3. Verifique se o deploy foi bem-sucedido:
   ```bash
   git log --oneline
   ```

### Imagens não aparecem

Certifique-se de que:
- As imagens estão na pasta `public/`
- Os caminhos começam com `/` (ex: `/foto_perfil.jpg`)
- Você fez o build e deploy após adicionar as imagens

---

## 📝 Checklist de Deploy

- [ ] Repositório criado no GitHub
- [ ] Git inicializado localmente
- [ ] Arquivos commitados
- [ ] Remote origin configurado
- [ ] Push para o GitHub realizado
- [ ] `npm run deploy` executado com sucesso
- [ ] GitHub Pages configurado (se Opção 2)
- [ ] Site acessível na URL

---

## 🎉 Pronto!

Seu portfólio está no ar! Compartilhe o link:

**https://{username}.github.io**

Para personalizar o conteúdo, edite: `src/data/portfolio-info.ts`
