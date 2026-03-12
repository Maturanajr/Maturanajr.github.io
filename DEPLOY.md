# Guia de Deploy no GitHub Pages

Este guia é para você que clonou este projeto e quer publicar seu próprio portfólio.

## 📋 Pré-requisitos

- Node.js instalado
- Conta no GitHub
- Git configurado localmente

## 🚀 Passo a Passo

### 1. Personalize o Conteúdo

Edite o arquivo `src/data/portfolio-info.ts` com suas informações:
- Nome, email, links
- Experiências profissionais
- Habilidades
- Projetos

### 2. Crie seu Repositório no GitHub

**Opção A: URL Principal (Recomendado)**
- Nome do repositório: `{seu-usuario}.github.io`
- Exemplo: `joaosilva.github.io`
- Resultado: `https://joaosilva.github.io`

**Opção B: URL com Subpasta**
- Nome do repositório: qualquer nome (ex: `portfolio`)
- Atualize `vite.config.ts`: `base: '/portfolio/'`
- Atualize `package.json`: `"homepage": "https://{seu-usuario}.github.io/portfolio"`
- Resultado: `https://joaosilva.github.io/portfolio`

### 3. Configure o Git Local

```bash
# Remover o remote origin antigo (se existir)
git remote remove origin

# Adicionar seu repositório
git remote add origin https://github.com/{seu-usuario}/{seu-repositorio}.git

# Verificar sua branch atual
git branch
```

### 4. Ajuste o Workflow (se necessário)

Se sua branch principal for `main` (não `master`), edite `.github/workflows/deploy.yml`:

```yaml
on:
  push:
    branches: [ main ]  # Mude de 'master' para 'main'
```

### 5. Faça o Commit e Push

```bash
# Adicionar suas alterações
git add .

# Fazer commit
git commit -m "Personalizar portfólio"

# Enviar para o GitHub (use master ou main conforme sua branch)
git push -u origin master
# OU
git push -u origin main
```

### 6. Configure o GitHub Pages

1. Acesse: `https://github.com/{seu-usuario}/{seu-repositorio}/settings/pages`

2. Em **"Build and deployment"**:
   - **Source**: Selecione **"GitHub Actions"**

3. Aguarde 2-5 minutos

4. Acesse seu site: `https://{seu-usuario}.github.io`

## ✅ Pronto!

Seu portfólio está no ar! O deploy acontece automaticamente a cada push.

## 🔄 Atualizações Futuras

Sempre que quiser atualizar seu portfólio:

```bash
# 1. Edite os arquivos (principalmente src/data/portfolio-info.ts)

# 2. Commit e push
git add .
git commit -m "Atualizar informações"
git push

# 3. GitHub Actions faz o deploy automaticamente!
```

## 🐛 Solução de Problemas

### Site mostra 404

1. Verifique se GitHub Pages está configurado para "GitHub Actions"
2. Aguarde 5-10 minutos após o primeiro deploy
3. Limpe o cache do navegador (Ctrl + Shift + R)
4. Verifique os logs em: `https://github.com/{seu-usuario}/{seu-repositorio}/actions`

### Erro: "src refspec main does not match any"

Você está na branch `master`, não `main`. Use:
```bash
git push -u origin master
```

### Build falha no GitHub Actions

1. Acesse a aba "Actions" no seu repositório
2. Clique no workflow que falhou para ver os logs
3. Teste localmente: `npm run build`
4. Verifique se não há erros de TypeScript

### Imagens não aparecem

- Coloque as imagens na pasta `public/`
- Use caminhos começando com `/` (ex: `/foto_perfil.jpg`)
- Atualize o caminho em `src/data/portfolio-info.ts`

### Verificar status do deploy

Acesse: `https://github.com/{seu-usuario}/{seu-repositorio}/actions`

Você verá:
- ✅ Deploy bem-sucedido (verde)
- ⏳ Deploy em andamento (amarelo)
- ❌ Deploy falhou (vermelho) - clique para ver os logs

## 📝 Checklist

- [ ] Personalizei `src/data/portfolio-info.ts`
- [ ] Criei meu repositório no GitHub
- [ ] Configurei o remote origin
- [ ] Fiz commit e push
- [ ] Configurei GitHub Pages para "GitHub Actions"
- [ ] Aguardei alguns minutos
- [ ] Meu site está acessível

## 💡 Dicas

1. **Teste localmente** antes de fazer push:
   ```bash
   npm run build
   npm run preview
   ```

2. **Personalize tudo** em `src/data/portfolio-info.ts` - é só um arquivo!

3. **Acompanhe os deploys** na aba Actions do GitHub

4. **Mantenha atualizado** - adicione novos projetos e experiências regularmente

## 📚 Mais Informações

- Personalização detalhada: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- Solução de problemas: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- README do projeto: [README.md](README.md)
