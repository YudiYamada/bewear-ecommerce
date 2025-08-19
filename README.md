# 🛍️ Bewear - E-commerce Moderno

Uma plataforma de e-commerce completa e moderna desenvolvida com as melhores tecnologias do ecossistema React/Next.js.

## Visualize o Projeto Clicando [AQUI](https://bewear-ecommerce-bice.vercel.app/)

## ✨ Características

- 🛒 **Carrinho de Compras Inteligente** - Gerenciamento completo de produtos no carrinho
- 🔐 **Autenticação Segura** - Sistema de login/registro com BetterAuth
- 💳 **Pagamentos Integrados** - Processamento de pagamentos com Stripe
- 📦 **Gestão de Pedidos** - Acompanhamento completo de pedidos
- 🏠 **Endereços de Entrega** - Sistema de endereços múltiplos
- 📱 **Design Responsivo** - Interface otimizada para todos os dispositivos
- ⚡ **Performance Otimizada** - Server Components e React Query

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca de interface do usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI modernos e acessíveis

### Backend & Banco de Dados

- **PostgreSQL** - Banco de dados relacional
- **Drizzle ORM** - ORM type-safe para TypeScript
- **BetterAuth** - Sistema de autenticação moderno
- **Stripe** - Processamento de pagamentos

### Ferramentas & Bibliotecas

- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de esquemas
- **React Query** - Gerenciamento de estado do servidor
- **Lucide React** - Ícones modernos
- **Sonner** - Notificações toast elegantes

## 📁 Estrutura do Projeto

```
src/
├── actions/           # Server Actions
├── app/              # Páginas e rotas (App Router)
├── components/       # Componentes reutilizáveis
│   ├── common/       # Componentes comuns
│   └── ui/          # Componentes de UI base
├── data/            # Funções de acesso a dados
├── db/              # Configuração do banco de dados
├── hooks/           # Hooks customizados
├── lib/             # Utilitários e configurações
└── providers/       # Providers do React
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta no Stripe (para pagamentos)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd bewear-bootcamp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Banco de dados
DATABASE_URL="postgresql://usuario:senha@localhost:5432/bewear"

# Autenticação
AUTH_SECRET="sua-chave-secreta-aqui"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# URLs
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configure o banco de dados

```bash
# Execute as migrações
npx drizzle-kit push

# (Opcional) Popule com dados de exemplo
npm run db:seed
```

### 5. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 🎯 Funcionalidades Principais

### 🛒 Carrinho de Compras

- Adicionar/remover produtos
- Ajustar quantidades
- Cálculo automático de totais
- Persistência de dados

### 🔐 Autenticação

- Login com email/senha
- Registro de novos usuários
- Sessões seguras
- Recuperação de senha

### 💳 Checkout

- Seleção de endereço de entrega
- Integração com Stripe
- Processamento de pagamentos
- Confirmação de pedidos

### 📦 Gestão de Pedidos

- Histórico de pedidos
- Status de entrega
- Detalhes completos

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Constrói a aplicação para produção
npm run start        # Inicia o servidor de produção
npm run lint         # Executa o linter

# Banco de dados
npm run db:generate  # Gera migrações
npm run db:push      # Aplica migrações
npm run db:seed      # Popula com dados de exemplo
```

## 🏗️ Arquitetura

### Server Actions

Todas as operações de dados são realizadas através de Server Actions organizadas em `src/actions/`:

- `add-cart-product/` - Adicionar produto ao carrinho
- `create-checkout-session/` - Criar sessão de checkout
- `finish-order/` - Finalizar pedido
- `get-cart/` - Obter dados do carrinho

### Hooks Customizados

Hooks React Query para gerenciamento de estado:

- `use-cart.ts` - Gerenciamento do carrinho
- `use-user-addresses.ts` - Endereços do usuário
- `use-increase-cart-product.ts` - Aumentar quantidade

### Componentes

- **Common**: Componentes específicos da aplicação
- **UI**: Componentes base reutilizáveis (shadcn/ui)

## 🎨 Design System

O projeto utiliza o shadcn/ui como base para componentes, garantindo:

- Consistência visual
- Acessibilidade
- Customização fácil
- Performance otimizada

## 🔒 Segurança

- Autenticação com BetterAuth
- Validação de dados com Zod
- Sanitização de inputs
- HTTPS em produção
- Proteção CSRF

## 📱 Responsividade

Interface totalmente responsiva com:

- Mobile-first design
- Breakpoints otimizados
- Componentes adaptativos
- Touch-friendly

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👥 Autores

- **[Yudi Yamada](https://www.linkedin.com/in/yudi-yamada-0a10181b9/)**

## 🙏 Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pelos componentes
- [Vercel](https://vercel.com/) pela plataforma
- [Stripe](https://stripe.com/) pelos pagamentos
- [Drizzle](https://orm.drizzle.team/) pelo ORM

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
