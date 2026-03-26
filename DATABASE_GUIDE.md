# 📂 Planejamento de Banco de Dados (Biohazard Lore)

Este documento serve como guia para a implementação futura do backend para submissão de teorias e armazenamento de dados de lore.

---

## 🚀 1. As Melhores Opções Gratuitas (Free Tier)

Para um projeto como o **Biohazard Lore**, onde o foco principal é armazenar textos (teorias, descrições, logs), estas são as 3 melhores opções atuais:

| Banco de Dados | Tipo | Vantagem Principal | Dificuldade |
| :--- | :--- | :--- | :--- |
| **Supabase** | Relacional (Postgres) | **Melhor custo-benefício.** Ele já fornece a API pronta, você não precisa criar um servidor Node.js/Express separado. | Iniciante |
| **MongoDB Atlas** | NoSQL (Documentos) | **Flexibilidade total.** Como as teorias são objetos JSON, o MongoDB é o reflexo perfeito do seu código. | Médio (Requer Servidor) |
| **Firebase Firestore** | NoSQL | **Tempo real.** Ideal se você quiser que as teorias apareçam instantaneamente para todos sem dar refresh. | Iniciante |

---

## 🏆 2. A Escolha do Especialista

Para o seu projeto (que já usa Vite + React):
1. **Se você NÃO quer criar um servidor backend separado:** Use **Supabase**. Ele permite que o React fale diretamente com o banco de dados de forma segura (usando politicas de RLS).
2. **Se você QUER criar seu próprio backend (Node.js/Express):** Use **MongoDB Atlas**. É o padrão da indústria para dados flexíveis.

---

## 🛠️ 3. Passo a Passo: MongoDB Atlas + Node.js (Como solicitado)

Siga este passo a passo quando for começar:

### Passo 1: Configurar o MongoDB Atlas
1. Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Crie um **Cluster Grátis** (Shared Cluster).
3. Em "Network Access", adicione o IP `0.0.0.0/0` (Permitir acesso de qualquer lugar - apenas para desenvolvimento!).
4. Em "Database Access", crie um usuário r/w (leitura e escrita) e salve a senha.
5. Clique em "Connect" e pegue a **SRV Connection String** (ex: `mongodb+srv://usuario:senha@cluster0...`).

### Passo 2: Criar o Servidor Backend (Node.js + Express)
Você precisará de uma pasta separada (ou um subdiretório `/api`) com:

```javascript
// Instale: npm install express mongoose cors dotenv
import mongoose from 'mongoose';

const theorySchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  status: { type: String, default: 'Em Observação' },
  createdAt: { type: Date, default: Date.now }
});

const Theory = mongoose.model('Theory', theorySchema);
// Crie as rotas POST para salvar e GET para listar as teorias.
```

### Passo 3: Conectar o Frontend (React)
No seu `TheoriesPage.jsx`, quando clicar no botão de upload, você fará um `fetch`:

```javascript
const response = await fetch('http://sua-api.com/theories', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(dadosDaTeoria)
});
```

---

## ✨ 4. Alternativa Rápida: Supabase (Sem Servidor)

Se quiser economizar tempo, o **Supabase** é a escolha "Senior":

1. Crie o projeto no [Supabase](https://supabase.com/).
2. Na aba "Table Editor", crie a tabela `theories` com as colunas que você já usa (`title`, `description`, `source`).
3. Instale no seu projeto: `npm install @supabase/supabase-js`.
4. Crie um arquivo `src/lib/supabase.jsx` e conecte usando sua URL e Key.
5. Use diretamente no Componente:
   ```javascript
   const { data, error } = await supabase.from('theories').insert([ novaTeoria ]);
   ```

---

## 🛑 5. Aviso de Segurança (IMPORTANTE)
**Nunca** coloque suas credenciais de banco de dados diretamente no código que vai para o GitHub. Use arquivos `.env` e adicione-os ao `.gitignore`.
