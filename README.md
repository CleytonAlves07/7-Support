# 7-Support: Transformando a Gestão de Ordens de Serviço Automotivas - Projeto em Andamento

[Tela inicial.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/50a9bffb-4cf7-43f1-be94-ee60cecd0e53)


Bem-vindo ao 7-Support, sua solução completa para o eficiente gerenciamento de Ordens de Serviço em oficinas mecânicas. Desenvolvido para atender tanto clientes quanto administradores, nossa plataforma oferece uma experiência otimizada no processo de manutenção automotiva.

## Recursos Principais:

## Tela inicial - mobile first

[Tela_inicial.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/7cae621b-c6e2-4a26-8cd5-cd1b15ba2e3e)




## Registro e Login com várias validações feitas pelo desenvolvedor

[Tela_registro.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/8ba2aee8-8466-40e6-8603-23ef0479f0fd)


[tela_login.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/4974cca2-8e1c-45cd-b588-40bedecf6b24)

## Menu com opções de cadastro de produto, serviços e pesquisas
[menu_administrador.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/7e08172c-eae8-4cc1-9f00-77e043f7b7b2)

## Cadastro de serviços e produtos feito apenas pelo administrador com validações

[cadastro_servico.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/0240208e-bdf7-44ba-9c29-e649cebfed81)

## Pesquisa por serviços e produtos com edição (case insensitive)

[Pesquisa_com_edicao.webm](https://github.com/CleytonAlves07/7-Support/assets/89083420/d61b1ee1-fb1b-48b3-93e1-976a9ef96513)




### Portal do Cliente:
- Visualize detalhes cruciais sobre suas Ordens de Serviço.
- Verifique o diagnóstico inicial do mecânico, identifique peças para substituição e obtenha uma estimativa de tempo para a entrega do veículo.

### Controle Administrativo:
- Tenha total controle sobre todas as Ordens de Serviço.
- Monitore o progresso de cada serviço e identifique possíveis atrasos.
- Acesse uma tela com gráficos que demonstram a eficiência dos mecânicos, fornecendo insights valiosos para aprimorar o desempenho da equipe.

### Portal do Mecânico:
- Mecânicos têm acesso à plataforma para incluir informações detalhadas sobre os veículos, registrar diagnósticos e atualizar o status das Ordens de Serviço.
- Possibilidade de visualizar a lista de clientes aguardando atendimento, otimizando a distribuição de tarefas.

## Tecnologias Utilizadas:

### Back-end:
- Express, Node.js, TypeScript: Base sólida para o desenvolvimento do servidor e lógica de negócios.
- ORM Prisma: Facilita a interação com o banco de dados PostgreSQL, tornando a manipulação de dados mais intuitiva e segura.
- Jest: Framework de teste para garantir a confiabilidade e qualidade do código.
- Docker: Contêineres para facilitar a implementação e garantir a consistência do ambiente de desenvolvimento para produção.
- Arquitetura em Camadas MSC (Model, Service, Controller): Organização estrutural que favorece a manutenção e escalabilidade do sistema.

### Front-end:
- React, Next.js: Estrutura robusta para a construção da interface do usuário, proporcionando uma experiência dinâmica e responsiva.
- Tailwind: Biblioteca de estilos utilizada para facilitar a estilização do front-end, seguindo as melhores práticas de design.

## Como Contribuir:

O projeto está aberto a contribuições. Sinta-se à vontade para abrir issues, propor melhorias ou colaborar diretamente no código.

## Instruções de Instalação:

1. Clone o repositório: `git clone https://github.com/seu-usuario/7-support.git` 
2. Instale as dependências do back-end: `cd server && npm install`
3. Instale as dependências do front-end: `cd client && npm install`
4. Configure o banco de dados PostgreSQL e atualize as variáveis de ambiente necessárias.
5. Inicie o back-end: `cd server && npm run dev`
6. Inicie o front-end: `cd client && npm run dev`

## Passos em andamento
1. Ordem de Serviço utilizando produtos e serviços já cadastrados.
2. OS em andamento
3. Stock de produtos
4. Área do cliente
5. Área do mecânico
6. Página de análise e desempenho dos mecânicos
