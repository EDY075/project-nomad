# Interface em português brasileiro

Esta adaptação acrescenta um dicionário local em `admin/public/nomad-pt-BR.js` e o carrega pelo layout `admin/resources/views/inertia_layout.edge`. A tradução funciona sem internet. Os arquivos originais de livros, documentos e mapas mantêm seus próprios idiomas.

O script traduz os textos e atributos de apresentação conhecidos. Não altera os valores dos campos, os identificadores usados pelas APIs ou os dados salvos. Trechos de código, documentos e mensagens do usuário devem preservar seu conteúdo original.

## Instalação em um NOMAD existente

Preserve os dados e as credenciais da instalação. Monte os dois arquivos abaixo no contêiner `nomad_admin`, em modo somente leitura:

- `admin/public/nomad-pt-BR.js` → `/app/public/nomad-pt-BR.js`
- `admin/resources/views/inertia_layout.edge` → `/app/resources/views/inertia_layout.edge`

Recrie apenas o serviço de administração em uma janela sem downloads ativos. O layout de produção pode estar em cache, por isso apenas copiar o layout para um contêiner em execução não garante que ele será aplicado imediatamente. Recarregue a página após a aplicação.

O dicionário foi preparado para a versão 1.35.1 do painel. Novas telas ou mensagens adicionadas pelo projeto original podem precisar de novas entradas. Interfaces de outros aplicativos, como Kiwix, têm suas próprias configurações de idioma.

## Verificação

Execute `node --check admin/public/nomad-pt-BR.js`. No navegador, confira a página inicial, a configuração fácil, os aplicativos, os mapas e as configurações. Confirme que a navegação continua funcionando e que valores de campos, mensagens e documentos não são alterados. O objeto `window.NOMAD_PT_BR` permite conferir se o dicionário foi carregado.

Para remover a adaptação, retire os dois arquivos montados e recrie o serviço com a imagem original, preservando os volumes de dados.
