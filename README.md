### 🎟️ e-Ticket - Sistema de Compra de Ingressos 🎫
Descrição
Este é um sistema simples de compra de ingressos desenvolvido em HTML, CSS e JavaScript. O usuário pode escolher entre diferentes tipos de ingressos (Pista, Cadeira Superior, Cadeira Inferior), inserir a quantidade desejada e realizar a compra. O sistema verifica a disponibilidade de ingressos em tempo real e ajusta o total restante após a compra.

### Funcionalidades
📋 Escolha do tipo de ingresso (Pista, Cadeira Superior, Cadeira Inferior).
➕ Verificação da quantidade disponível em cada categoria de ingresso.
✅ Validação da quantidade inserida, garantindo que seja um número positivo e que exista estoque disponível.
⚠️ Alertas para o usuário quando a quantidade solicitada não está disponível.
🛒 Atualização automática da quantidade disponível após cada compra bem-sucedida.

### Tecnologias Utilizadas
HTML para a estrutura da página.
CSS para estilização e layout responsivo.
JavaScript para manipulação do DOM e lógica de negócios.

### Exemplo de Uso
Escolha o tipo de ingresso no campo "Escolha o tipo".
Insira a quantidade de ingressos desejada no campo "Qtde.".
Clique no botão "Comprar".
O sistema irá verificar se há ingressos suficientes para o tipo selecionado:
Se houver ingressos disponíveis, o sistema irá realizar a compra e atualizar a quantidade restante.
Se não houver ingressos suficientes, uma mensagem de alerta será exibida.

### Informações sobre como contribuir
Este projeto aceita qualquer contribuição útil que ajude a manter o código atualizado e a melhorar sua funcionalidade. Isso pode incluir correções de bugs, melhorias na documentação, novas funcionalidades ou otimizações de desempenho. Sinta-se à vontade para abrir um pull request com suas sugestões ou relatar problemas que você encontrar.

### Links para documentação
Para aprender mais sobre JavaScript e suas funcionalidades, consulte a [documentação oficial do JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). Para informações sobre HTML, você pode visitar a [documentação oficial do HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML) e para aprender mais sobre CSS, consulte a [documentação oficial do CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS). Esses recursos abrangentes oferecem guias, tutoriais e referências detalhadas sobre as tecnologias, permitindo que desenvolvedores de todos os níveis aprimorem suas habilidades e conhecimentos.

## Comentários sobre o código
### HTML
A estrutura HTML é responsável pela criação da interface do usuário. Ela define os campos de entrada onde o usuário pode especificar a quantidade de números a serem sorteados, o intervalo mínimo e máximo, e o botão para iniciar o sorteio. Os elementos HTML, como `input` e `button`, permitem interações do usuário com a aplicação. A área de resultados exibe os números sorteados após a execução do sorteio.
### CSS
O CSS é utilizado para estilizar a aplicação, proporcionando uma melhor experiência visual ao usuário. Ele define a aparência dos elementos, como cores, fontes, tamanhos e espaçamentos, garantindo que a interface seja amigável e atraente. Os estilos são aplicados a classes específicas e IDs dos elementos HTML, permitindo que a aparência da aplicação seja ajustada facilmente sem alterar a estrutura do HTML.
### JavaScript
O JavaScript é a parte do código que traz interatividade à aplicação. Ele puxa informações do HTML por meio do uso de métodos como `document.getElementById()`, que permite acessar os valores inseridos pelo usuário nos campos de entrada. As funções JavaScript realizam a lógica do sorteio, gerando números aleatórios dentro do intervalo especificado, garantindo que os números sorteados não se repitam. Além disso, o JavaScript atualiza a interface do usuário com os resultados do sorteio e gerencia o estado dos botões (ativando ou desativando) com base nas ações do usuário.

### Agradecimentos
Agradecimento especial à Alura pelos excelentes cursos e materiais que contribuíram para o desenvolvimento deste projeto.
