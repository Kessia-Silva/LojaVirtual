# 🎵 Loja Virtual de Música - Projeto Full Stack

Sistema completo de e-commerce para venda de CDs musicais, integrando uma **API REST em Spring Boot** com **Frontend em Angular**.

Desenvolvido como projeto final da disciplina de **Linguagem de Programação III** (Sistemas de Informação - UNEB).

---

## 🚀 Tecnologias e Arquitetura

O projeto foi dividido em dois módulos principais:

### ☕ Backend (API)
* **Java 21**
* **Spring Boot 3** (Web, Data JPA, Validation)
* **H2 Database** (Banco em memória)
* **Lombok** & **Maven**

### 🅰️ Frontend (Interface)
* **Angular** (Framework SPA)
* **JavaScript e TypeScript**
* **HTML5 / CSS3**

---

## ⚙️ Funcionalidades do Sistema

O sistema atende aos requisitos funcionais propostos (detalhes no PDF do projeto), com destaque para:

* **🎧 Catálogo Musical:** Visualização de álbuns com filtros por gênero e busca por nome. Carregamento inicial automático de **100 produtos**.
* **🛒 Carrinho Inteligente:** Criação automática de carrinho por usuário, cálculo de totais em tempo real e persistência de dados.
* **👤 Gestão de Usuários:** Cadastro completo com endereço (CEP, Cidade, UF) e edição de perfil.
* **📦 Pedidos:** Finalização de compra e histórico de pedidos realizados.
* **🛡️ Painel Administrativo:** Controle total (CRUD) de Produtos e Gêneros Musicais, com validações de integridade (ex: não excluir gêneros em uso).

---

## 🛠️ Como Rodar o Projeto

Para testar a aplicação completa, você precisará de dois terminais abertos, um para o backend e outro para o frontend.

### Pré-requistos
Certifique-se de ter instalado:
* **Java JDK 21**
* **Node.js** e **Angular CLI**
* **Maven**

### Passo a Passo
### 1.  **Clone o repositório:**
    git clone [https://github.com/Kessia-Silva/LojaVirtual.git](https://github.com/Kessia-Silva/LojaVirtual.git)

### 2. Rodando o Backend (Porta 8080)
```
cd backend
mvn clean install
mvn spring-boot:run

O servidor iniciará na porta `8080`.
* **API URL:** `http://localhost:8080/api`
* **Banco H2 (Console):** `http://localhost:8080/h2-console`
    * *JDBC URL:* `jdbc:h2:mem:lojadb`
    * *User:* `RAFA`
    * *Password:* (vazio)
```
### 3. Rodando o Frontend (Porta 4200)
```bash
cd frontend
npm install
ng serve

Abra o navegador em: http://localhost:4200
```
---

# 🧪 Dados Iniciais (Seed)
O sistema sobe com **2 usuários de teste** e **100 produtos** pré-carregados:

* **Admin:** `admin@loja.com` / `senha1234`
* **Cliente:** `cliente@loja.com` / `senha1234`

---

## 👨‍💻 Time de Desenvolvimento

* **Rafael & Samuel** - *Backend & API*
* **Késsia & Ana** - *Frontend Developers*

Universidade do Estado da Bahia (UNEB) - 2025
