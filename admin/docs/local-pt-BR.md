# Interface local em português brasileiro

Esta adaptação local adiciona uma camada de tradução offline ao painel NOMAD.

## Arquivos

- `public/nomad-pt-BR.js`: dicionário e aplicação incremental da tradução.
- `resources/views/inertia_layout.edge`: define `lang="pt-BR"` e carrega o script local.

O script não faz solicitações a serviços de tradução nem transmite conteúdo. A tradução continua funcionando sem internet. Textos são substituídos diretamente nos nós de texto existentes, sem adicionar elementos ao DOM que o React gerencia. Novos elementos e alterações de texto são processados em lotes por quadro, com um `MutationObserver`.

## Cobertura

A versão de 08/11/2026 contém 1.522 entradas distintas, incluindo botões, menus, estados, assistente de configuração, configurações, mapas, base de conhecimento, descrições do catálogo de aplicativos e avisos de saúde e privacidade. Uma extração de textos estáticos de 130 arquivos TSX encontrou 948 de 1.004 textos no dicionário (94,4%). Boa parte dos demais são nomes próprios, endereços, identificadores, unidades ou títulos tratados por regras. Esse número não representa cobertura de todo texto possível retornado por APIs.

Há regras limitadas para contagens, espaço livre e títulos de ações. Não se faz tradução palavra por palavra de texto desconhecido; uma frase ausente permanece no idioma original.

## Conteúdos preservados

- Campos editáveis e valores de formulários.
- Código, registros pré-formatados e editores.
- Corpo das mensagens da conversa e títulos/prévias na barra lateral.
- Corpo de documentos e conteúdo com `translate="no"` ou `data-no-translate`.
- Nomes próprios, caminhos e identificadores técnicos.
- Texto original dos parágrafos da licença Apache.

Esta camada não traduz os aplicativos externos abertos em outras portas, artigos da Wikipédia, livros, vídeos ou PDFs. Esses conteúdos mantêm seus próprios idiomas.

## Integração com a instalação

O layout deve estar em `/app/resources/views/inertia_layout.edge` e o script em `/app/public/nomad-pt-BR.js` no contêiner de administração. O serviço deve ser reiniciado depois de alterar o layout, pois o Edge pode manter o template em cache. A instalação local deve montar esses arquivos somente para leitura para preservar a adaptação ao recriar o contêiner. A simples cópia para o contêiner não sobrevive à sua recriação.

O endereço do atalho `/biblioteca/index.html`, quando apontando para o host local conhecido na porta 8080, é normalizado para um caminho relativo, permitindo acesso por localhost ou pela rede local.

## Validação realizada

- `node --check` sem erros.
- Doze verificações de tradução exata, preservação de URL desconhecida, contagens, títulos e espaço livre.
- Dicionário sem traduções conflitantes; uma duplicata idêntica.
- Revisão do tratamento de mensagens e campos editáveis em contexto separado.

A integração ao contêiner e a validação no navegador confirmaram a tradução da página inicial e das configurações, a navegação e a preservação de campos, código, documentos e mensagens. Atualizações futuras do NOMAD podem trazer novas frases e exigir ajustes no dicionário ou nos seletores que preservam conteúdo do usuário.
