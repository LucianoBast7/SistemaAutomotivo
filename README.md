# Sistema Automotivo

## Descrição
O **Sistema Automotivo** é uma aplicação web completa desenvolvida para facilitar a gestão de veículos em concessionárias ou empresas do setor automotivo. Ele permite **cadastrar**, **listar**, **atualizar**, **remover** e **filtrar veículos** com base em atributos como modelo, marca, ano, preço, quilometragem e status de disponibilidade.

O projeto utiliza as seguintes tecnologias:
- **Frontend:** React
- **Backend:** Spring Boot
- **Banco de Dados:** MySQL

---

## Funcionalidades
- **Cadastro de Veículos:** Inserir informações detalhadas sobre um veículo.
- **Consulta e Listagem:** Exibir todos os veículos cadastrados, com opção de filtros avançados.
- **Atualização:** Editar informações como preço, quilometragem ou status.
- **Remoção:** Excluir veículos vendidos ou descontinuados.
- **Filtro:** Buscar veículos com base em critérios específicos, como marca e ano.

---

## Tecnologias Utilizadas
### Frontend
- **React**
- **Axios** para requisições HTTP
- **React Router** para navegação entre páginas

### Backend
- **Spring Boot**
- **Spring Data JPA** para persistência de dados
- **MySQL** como banco de dados relacional
- **Hibernate** como framework ORM

### Ferramentas Adicionais
- **Postman:** Testes de API
- **Git/GitHub:** Controle de versão
- **Maven:** Gerenciador de dependências do backend

---

## Estrutura do Projeto
```
Sistema Automotivo/
├── backend/
│   ├── src/main/java/
│   │   ├── com/example/demo/controller/VeiculoController.java
│   │   ├── com/example/demo/model/Veiculo.java
│   │   ├── com/example/demo/service/VeiculoService.java
│   │   └── com/example/demo/repository/VeiculoRepository.java
│   ├── src/main/resources/application.properties
│   └── pom.xml
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── VehicleForm.js
│   │   │   └── VehicleList.js
│   │   ├── pages/
│   │   │   └── VehiclePage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── services/api.js
│   └── package.json
└── README.md
```

---

## Configuração do Ambiente

### Backend
1. Clone o repositório.
2. Certifique-se de ter o MySQL configurado e crie um banco de dados chamado `sistema_automotivo`.
3. Atualize o arquivo `application.properties` com as credenciais do seu banco de dados.
4. No diretório `backend`, execute:
   ```bash
   mvn spring-boot:run
   ```

### Frontend
1. No diretório `frontend`, instale as dependências:
   ```bash
   npm install
   ```
2. Execute o servidor de desenvolvimento:
   ```bash
   npm start
   ```
3. O frontend será iniciado em `http://localhost:3000`.

---

## Endpoints da API
### Base URL: `http://localhost:8080/veiculos`

| Método | Endpoint      | Descrição                         |
|--------|---------------|-----------------------------------|
| GET    | `/`           | Lista todos os veículos          |
| POST   | `/`           | Cadastra um novo veículo         |
| PUT    | `/{id}`       | Atualiza um veículo pelo ID      |
| DELETE | `/{id}`       | Remove um veículo pelo ID        |
| GET    | `/filtros`    | Filtra veículos por critérios    |

---

## Prints da Aplicação
Adicione aqui imagens da aplicação em funcionamento, como tela de cadastro, listagem e edição.

---

## Testes
Os testes foram realizados utilizando o Postman para validar os endpoints do backend. Foram executadas requisições GET, POST, PUT e DELETE para verificar a funcionalidade de cada operação. Os resultados confirmaram que o backend está respondendo corretamente e que as alterações são refletidas no banco de dados.

---

## Conclusão
O Sistema Automotivo implementa funcionalidades importantes para a gestão de veículos, integrando frontend e backend de maneira eficiente. Este projeto demonstra o uso de conceitos como programação orientada a objetos, integração com banco de dados e desenvolvimento de interfaces reativas.

