/* Tradução local da interface NOMAD. Não envia dados para serviços externos. */
(() => {
  'use strict'
  const entries = `
Command Center|Central de comando
Open chat|Abrir conversa
Close chat|Fechar conversa
Back to Home|Voltar ao início
Home|Início
Settings|Configurações
System|Sistema
Advanced|Avançado
System Information|Informações do sistema
Supply Depot|Central de aplicativos
Open Supply Depot|Abrir central de aplicativos
Information Library|Biblioteca de conhecimento
Education Platform|Plataforma de ensino
AI Assistant|Assistente de IA
AI Chat|Conversa com IA
AI|IA
Maps|Mapas
Maps Manager|Gerenciador de mapas
Content|Conteúdo
Content Explorer|Explorador de conteúdo
Content Manager|Gerenciador de conteúdo
Creator Packs|Pacotes de criadores
Service Logs & Metrics|Registros e métricas dos serviços
Check for Updates|Verificar atualizações
API Reference|Referência da API
Support the Project|Apoiar o projeto
Legal Notices|Avisos legais
Benchmark|Teste de desempenho
Docs|Documentação
Documentation|Documentação
Easy Setup|Configuração fácil
Easy Setup Wizard|Assistente de configuração
Drug Reference|Referência de medicamentos
Knowledge Base|Base de conhecimento
Notes|Anotações
Data Tools|Ferramentas de dados
About|Sobre
About Project NOMAD|Sobre o Project NOMAD
Knowledge That Never Goes Offline|Conhecimento sempre disponível offline
View offline maps|Consultar mapas offline
Offline FDA drug labels. Search by drug name or by symptom|Bulas da FDA offline. Pesquise por medicamento ou sintoma
Not sure where to start? Use the setup wizard to quickly configure your NOMAD!|Não sabe por onde começar? Use o assistente para configurar seu NOMAD.
Browse and install curated apps, or add your own Docker container|Explore e instale aplicativos selecionados ou adicione seu próprio contêiner Docker
Read Project NOMAD manuals and guides|Leia os manuais e guias do Project NOMAD
Configure your NOMAD settings|Ajuste as configurações do seu NOMAD
All|Todos
All Apps|Todos os aplicativos
Apps|Aplicativos
Installed|Instalado
Not Installed|Não instalado
Not installed|Não instalado
Installing|Instalando
Installing...|Instalando...
Installed Apps|Aplicativos instalados
Available Apps|Aplicativos disponíveis
Productivity|Produtividade
Media|Mídia
Security|Segurança
Networking|Redes
Utility|Utilitários
Education|Educação
Custom|Personalizado
Custom Apps|Aplicativos personalizados
Add Custom App|Adicionar aplicativo personalizado
Add App|Adicionar aplicativo
Edit App|Editar aplicativo
Manage Apps|Gerenciar aplicativos
Install|Instalar
Install App|Instalar aplicativo
Uninstall|Desinstalar
Uninstall App|Desinstalar aplicativo
Reinstall|Reinstalar
Launch|Abrir
Open|Abrir
Start|Iniciar
Stop|Parar
Restart|Reiniciar
Running|Em execução
Stopped|Parado
Starting|Iniciando
Stopping|Parando
Status|Estado
Healthy|Funcionando
Unhealthy|Com falha
Unknown|Desconhecido
Update|Atualizar
Updates|Atualizações
Update Available|Atualização disponível
Update available|Atualização disponível
Up to date|Atualizado
Automatic Updates|Atualizações automáticas
Auto-update|Atualização automática
Auto-updates|Atualizações automáticas
Check Updates|Verificar atualizações
Checking...|Verificando...
Refresh|Atualizar
Refresh Catalog|Atualizar catálogo
Refreshing...|Atualizando...
Download|Baixar
Downloads|Downloads
Download Manager|Gerenciador de downloads
Download Queue|Fila de downloads
Downloading|Baixando
Downloading...|Baixando...
Downloaded|Baixado
Queued|Na fila
Pending|Pendente
Processing|Processando
Processing...|Processando...
Completed|Concluído
Complete|Concluído
Failed|Falhou
Cancelled|Cancelado
Canceled|Cancelado
Paused|Pausado
Retry|Tentar novamente
Retry Download|Tentar baixar novamente
Cancel Download|Cancelar download
Remove|Remover
Delete|Excluir
Delete All|Excluir tudo
Clear|Limpar
Clear All|Limpar tudo
Cancel|Cancelar
Close|Fechar
Save|Salvar
Save Changes|Salvar alterações
Saving...|Salvando...
Saved|Salvo
Apply|Aplicar
Apply Changes|Aplicar alterações
Confirm|Confirmar
Continue|Continuar
Next|Próximo
Previous|Anterior
Back|Voltar
Done|Concluído
Finish|Finalizar
Complete Setup|Concluir configuração
Skip|Pular
Skip for now|Pular por enquanto
Review|Revisão
Search|Pesquisar
Search...|Pesquisar...
Search apps...|Pesquisar aplicativos...
Search models...|Pesquisar modelos...
Search files...|Pesquisar arquivos...
Search content...|Pesquisar conteúdo...
Search books...|Pesquisar livros...
Filter|Filtrar
Filters|Filtros
Sort|Ordenar
Sort by|Ordenar por
Name|Nome
Description|Descrição
Category|Categoria
Categories|Categorias
Language|Idioma
Languages|Idiomas
English|Inglês
Portuguese|Português
Size|Tamanho
Total Size|Tamanho total
Version|Versão
Latest|Mais recente
Date|Data
Actions|Ações
Action|Ação
Details|Detalhes
View Details|Ver detalhes
View All|Ver tudo
Show More|Mostrar mais
Show Less|Mostrar menos
More|Mais
Less|Menos
Enabled|Ativado
Disabled|Desativado
Enable|Ativar
Disable|Desativar
Yes|Sim
No|Não
None|Nenhum
Optional|Opcional
Required|Obrigatório
Recommended|Recomendado
Default|Padrão
Select|Selecionar
Selected|Selecionado
Select All|Selecionar tudo
Deselect All|Desmarcar tudo
Loading|Carregando
Loading...|Carregando...
Please wait...|Aguarde...
Error|Erro
Warning|Atenção
Success|Sucesso
Information|Informação
No results found|Nenhum resultado encontrado
No results found.|Nenhum resultado encontrado.
No results|Nenhum resultado
Try again|Tentar novamente
Copy|Copiar
Copied!|Copiado!
Copied|Copiado
Copy to clipboard|Copiar para a área de transferência
Upload|Enviar arquivo
Upload File|Enviar arquivo
Upload Files|Enviar arquivos
Uploading...|Enviando...
Browse|Explorar
Browse Files|Selecionar arquivos
Files|Arquivos
File|Arquivo
Folder|Pasta
Folders|Pastas
Storage|Armazenamento
Available|Disponível
Used|Usado
Free|Livre
Total|Total
Free Space|Espaço livre
Used Space|Espaço usado
Available Space|Espaço disponível
Disk Usage|Uso do disco
Storage Usage|Uso do armazenamento
Storage Projection|Estimativa de armazenamento
Current Usage|Uso atual
Projected Usage|Uso previsto
After installation|Após a instalação
Insufficient Storage|Armazenamento insuficiente
Insufficient disk space|Espaço insuficiente em disco
Resource Usage|Uso dos recursos
CPU Usage|Uso do processador
Memory Usage|Uso da memória
Swap Usage|Uso da memória swap
Memory|Memória
Processor|Processador
Operating System|Sistema operacional
System Uptime|Tempo ligado
Uptime|Tempo ligado
Hardware|Equipamento
Network|Rede
Network Interfaces|Interfaces de rede
GPU|Placa de vídeo
GPU Information|Informações da placa de vídeo
System Details|Detalhes do sistema
Very High Memory Usage Detected|Uso de memória muito elevado
System memory usage exceeds 90%. Performance degradation may occur.|O uso da memória ultrapassa 90%. O desempenho pode cair.
Refreshing data every 30 seconds|Os dados são atualizados a cada 30 segundos
Real-time monitoring and diagnostics • Last updated:|Monitoramento e diagnóstico em tempo real • Última atualização:
Online|Com internet
Offline|Sem internet
Internet Connection|Conexão com a internet
No Internet Connection|Sem conexão com a internet
You'll need an internet connection to proceed. Please connect to the internet and try again.|É necessário conectar à internet para continuar. Conecte-se e tente novamente.
What do you want NOMAD to do?|O que você quer que o NOMAD faça?
Select the capabilities you need. You can always add more later.|Selecione os recursos de que precisa. Você poderá adicionar outros depois.
Core Capabilities|Recursos principais
All available capabilities are already installed!|Todos os recursos disponíveis já estão instalados!
Use remote Ollama instance|Usar o Ollama de outro computador
Powered by|Tecnologia:
Offline access to Wikipedia, medical references, how-to guides, and encyclopedias|Acesso offline à Wikipédia, referências médicas, guias práticos e enciclopédias
Complete Wikipedia offline|Wikipédia completa offline
Medical references and first aid guides|Referências médicas e guias de primeiros socorros
DIY repair guides and how-to content|Guias de reparos e instruções práticas
Project Gutenberg books and literature|Livros e literatura do Projeto Gutenberg
Interactive learning platform with video courses and exercises|Plataforma interativa de ensino com cursos em vídeo e exercícios
Khan Academy math and science courses|Cursos de matemática e ciências da Khan Academy
K-12 curriculum content|Conteúdo do ensino básico
Interactive exercises and quizzes|Exercícios e questionários interativos
Progress tracking for learners|Acompanhamento do progresso dos estudantes
Local AI chat that runs entirely on your hardware - no internet required|Conversa com IA executada no seu computador, sem precisar de internet
Private conversations that never leave your device|Conversas privadas que ficam no seu dispositivo
No internet connection needed after setup|Não precisa de internet após a configuração
Ask questions, get help with writing, brainstorm ideas|Faça perguntas, receba ajuda para escrever e explore ideias
Runs on your own hardware with local AI models|Funciona no seu computador com modelos locais de IA
Looking for more apps?|Quer mais aplicativos?
Notes, data tools, and the full catalog of add-on apps are available any time in Supply Depot.|Anotações, ferramentas de dados e o catálogo completo de aplicativos estão disponíveis na central de aplicativos.
Choose Map Regions|Escolha as regiões dos mapas
Select map region collections to download for offline use. You can always download more regions later.|Selecione as regiões para baixar e consultar offline. Você poderá baixar outras depois.
Only need a specific country, or want the whole world? Individual countries and a full global map can be installed any time from the|Precisa de um país específico ou do mundo inteiro? Os mapas de países e o mapa global podem ser instalados pelo
No map collections available at this time.|Nenhuma coleção de mapas disponível no momento.
Choose Content|Escolha o conteúdo
Select content categories for offline knowledge.|Selecione categorias de conhecimento para consultar offline.
Configure content for your selected capabilities.|Configure o conteúdo dos recursos selecionados.
Additional Content|Conteúdo adicional
Curated collections for offline reference|Coleções selecionadas para consulta offline
Select your preferred Wikipedia package|Selecione o pacote da Wikipédia que prefere
- Click to choose|- Clique para escolher
No Wikipedia|Sem Wikipédia
Skip Wikipedia installation|Pular a instalação da Wikipédia
Quick Reference|Consulta rápida
Popular Articles|Artigos populares
Complete Wikipedia (Compact)|Wikipédia completa (compacta)
Complete Wikipedia (No Images)|Wikipédia completa (sem imagens)
Complete Wikipedia (With Images)|Wikipédia completa (com imagens)
Complete Wikipedia|Wikipédia completa
No download|Sem download
Stock Creator Packs|Baixar pacotes de criadores
No creator packs available right now.|Nenhum pacote de criadores disponível no momento.
AI Models|Modelos de IA
Select models to download for offline AI|Selecione modelos para usar a IA offline
No recommended AI models available at this time.|Nenhum modelo de IA recomendado disponível no momento.
Review Your Selections|Revise suas escolhas
Review your choices before starting the setup process.|Confira suas escolhas antes de iniciar a configuração.
Ready to Start|Tudo pronto para começar
Click 'Complete Setup' to begin installing apps and downloading content. This may take some time depending on your internet connection and the size of the downloads.|Clique em 'Concluir configuração' para instalar os aplicativos e baixar o conteúdo. A duração depende da conexão e do tamanho dos downloads.
Auto-index Setting|Indexação automática
New content will be|O novo conteúdo será
indexed automatically|indexado automaticamente
as it arrives so|assim que chegar para que
can search it.|possa pesquisá-lo.
New content will|O novo conteúdo vai
wait for you to opt in|aguardar sua autorização
Setup Complete|Configuração concluída
Setup Complete!|Configuração concluída!
Setup in Progress|Configuração em andamento
Installing Apps|Instalando aplicativos
Downloading Content|Baixando conteúdo
Go to Dashboard|Ir ao painel
Go to Home|Ir ao início
View Downloads|Ver downloads
Getting Started|Primeiros passos
Welcome to Project NOMAD|Bem-vindo ao Project NOMAD
Medical|Saúde
Medicine|Medicina
Survival|Sobrevivência
Preparedness|Preparação para emergências
Emergency Preparedness|Preparação para emergências
First Aid|Primeiros socorros
Repair|Reparos
Science|Ciências
Technology|Tecnologia
Reference|Referência
Books|Livros
Encyclopedias|Enciclopédias
Survival & Preparedness|Sobrevivência e preparação
Health & Medicine|Saúde e medicina
Repair & DIY|Reparos e faça você mesmo
Agriculture|Agricultura
Food & Agriculture|Alimentos e agricultura
Basic|Básico
Standard|Padrão
Comprehensive|Completo
Essential|Essencial
Essentials|Essenciais
Starter|Inicial
Full|Completo
Complete Collection|Coleção completa
Manage|Gerenciar
Installed Content|Conteúdo instalado
Remote Content|Conteúdo para baixar
Local Content|Conteúdo local
Browse Content|Explorar conteúdo
Browse Catalog|Explorar catálogo
Remote Explorer|Explorador remoto
ZIM Files|Arquivos ZIM
No files found|Nenhum arquivo encontrado
No files found.|Nenhum arquivo encontrado.
No content installed|Nenhum conteúdo instalado
Download Content|Baixar conteúdo
Delete File|Excluir arquivo
Remove File|Remover arquivo
View Library|Abrir biblioteca
Open Library|Abrir biblioteca
Open in Kiwix|Abrir no Kiwix
Download Selected|Baixar selecionados
Download All|Baixar tudo
Install Selected|Instalar selecionados
Download Complete|Download concluído
Download Failed|Falha no download
Active Downloads|Downloads em andamento
Recent Downloads|Downloads recentes
Progress|Progresso
Speed|Velocidade
Time Remaining|Tempo restante
Remaining|Restante
Downloaded Files|Arquivos baixados
Download URL|Endereço do download
File Name|Nome do arquivo
File Size|Tamanho do arquivo
Last Updated|Última atualização
Last updated|Última atualização
Last updated:|Última atualização:
Update Available!|Atualização disponível!
Current Version|Versão atual
Latest Version|Versão mais recente
Release Notes|Notas da versão
Update Now|Atualizar agora
Check for updates|Verificar atualizações
Checking for updates...|Verificando atualizações...
No updates available|Nenhuma atualização disponível
Automatic updates|Atualizações automáticas
Content Updates|Atualizações de conteúdo
App Updates|Atualizações de aplicativos
System Updates|Atualizações do sistema
Update Settings|Configurações de atualização
Schedule|Agendamento
Daily|Diariamente
Weekly|Semanalmente
Monthly|Mensalmente
Never|Nunca
Always|Sempre
Manual|Manual
Ask me first|Pedir minha autorização
Reboot|Reiniciar computador
Reboot System|Reiniciar computador
Shutdown|Desligar
Hostname|Nome do computador
IP Address|Endereço IP
Port|Porta
Ports|Portas
Container|Contêiner
Container Name|Nome do contêiner
Container Image|Imagem do contêiner
Image|Imagem
Volumes|Volumes
Environment Variables|Variáveis de ambiente
Logs|Registros
View Logs|Ver registros
Metrics|Métricas
View Stats|Ver estatísticas
Statistics|Estatísticas
Custom URL|Endereço personalizado
Launch URL|Endereço de abertura
Edit Launch URL|Editar endereço de abertura
Reset to Default|Restaurar padrão
Restore Defaults|Restaurar padrões
Connection|Conexão
Connect|Conectar
Disconnect|Desconectar
Test Connection|Testar conexão
Connection successful|Conexão estabelecida
Connection failed|Falha na conexão
Local|Local
Remote|Remoto
Local Models|Modelos locais
Remote Models|Modelos remotos
Model|Modelo
Models|Modelos
Model Name|Nome do modelo
Download Model|Baixar modelo
Delete Model|Excluir modelo
Remove Model|Remover modelo
Installed Models|Modelos instalados
Available Models|Modelos disponíveis
Recommended Models|Modelos recomendados
No models installed|Nenhum modelo instalado
No models available|Nenhum modelo disponível
Chat|Conversa
New Chat|Nova conversa
New Conversation|Nova conversa
Conversations|Conversas
Delete Conversation|Excluir conversa
Clear Conversation|Limpar conversa
Send|Enviar
Send Message|Enviar mensagem
Message|Mensagem
Type a message...|Digite uma mensagem...
Ask a question...|Faça uma pergunta...
Ask anything...|Pergunte o que quiser...
Thinking...|Pensando...
Stop generating|Parar resposta
Regenerate|Gerar novamente
Retry response|Tentar responder novamente
Sources|Fontes
Source|Fonte
Documents|Documentos
Document|Documento
Upload Documents|Enviar documentos
Add Documents|Adicionar documentos
Add to Knowledge Base|Adicionar à base de conhecimento
Knowledge Base Settings|Configurações da base de conhecimento
Index|Indexar
Indexing|Indexando
Indexed|Indexado
Not indexed|Não indexado
Collection|Coleção
Collections|Coleções
New Collection|Nova coleção
Create Collection|Criar coleção
Delete Collection|Excluir coleção
All Collections|Todas as coleções
System Prompt|Instruções do assistente
Temperature|Criatividade
Context Length|Tamanho do contexto
Max Tokens|Limite de tokens
Appearance|Aparência
Theme|Tema
Light|Claro
Dark|Escuro
Light mode|Modo claro
Dark mode|Modo escuro
Toggle theme|Alternar tema
Toggle dark mode|Alternar modo escuro
General|Geral
General Settings|Configurações gerais
Display Name|Nome de exibição
Save Settings|Salvar configurações
Reset|Redefinir
Reset Settings|Redefinir configurações
Export|Exportar
Import|Importar
Export Settings|Exportar configurações
Import Settings|Importar configurações
Backup|Cópia de segurança
Restore|Restaurar
Danger Zone|Área de atenção
Are you sure?|Tem certeza?
This action cannot be undone.|Esta ação não pode ser desfeita.
Confirmation|Confirmação
Help|Ajuda
Learn more|Saiba mais
Learn More|Saiba mais
Read more|Leia mais
View Documentation|Ver documentação
Documentation & Guides|Documentação e guias
View on GitHub|Ver no GitHub
Report an Issue|Relatar um problema
Support|Apoio
Donate|Doar
License|Licença
Licenses|Licenças
Terms of Service|Termos de serviço
Privacy Policy|Política de privacidade
Open Source Licenses|Licenças de código aberto
Built with|Desenvolvido com
Version:|Versão:
Powered by Project NOMAD|Desenvolvido com Project NOMAD
Map Settings|Configurações de mapas
Offline Maps|Mapas offline
Map Regions|Regiões dos mapas
Available Maps|Mapas disponíveis
Installed Maps|Mapas instalados
Global Map|Mapa global
Download Global Map|Baixar mapa global
Download Base Assets|Baixar recursos básicos dos mapas
Country|País
Countries|Países
Region|Região
Regions|Regiões
Zoom In|Ampliar
Zoom Out|Reduzir
Reset View|Restaurar visualização
Current Location|Localização atual
Search location...|Pesquisar local...
Search places...|Pesquisar lugares...
Base Assets|Recursos básicos
Base assets|Recursos básicos
Map Style|Estilo do mapa
Satellite|Satélite
Terrain|Relevo
Street|Ruas
All Countries|Todos os países
South America|América do Sul
North America|América do Norte
Europe|Europa
Asia|Ásia
Africa|África
Oceania|Oceania
Brazil|Brasil
United States|Estados Unidos
Canada|Canadá
United Kingdom|Reino Unido
Germany|Alemanha
France|França
Spain|Espanha
Italy|Itália
Japan|Japão
China|China
India|Índia
Australia|Austrália
Pacific Region|Região do Pacífico
Mountain Region|Região das Montanhas
Midwest Region|Região Centro-Oeste dos EUA
Northeast Region|Região Nordeste dos EUA
Southeast Region|Região Sudeste dos EUA
Southwest Region|Região Sudoeste dos EUA
Run Benchmark|Executar teste de desempenho
Start Benchmark|Iniciar teste de desempenho
Benchmark Results|Resultados do teste
System Benchmark|Teste de desempenho do sistema
Overall Score|Pontuação geral
Score|Pontuação
Leaderboard|Classificação
Community Leaderboard|Classificação da comunidade
Your Score|Sua pontuação
Run Again|Executar novamente
View Results|Ver resultados
Estimated Time|Tempo estimado
CPU|Processador
RAM|Memória RAM
Network Speed|Velocidade da rede
Disk Speed|Velocidade do disco
Model Settings|Configurações do modelo
Performance|Desempenho
Details & Settings|Detalhes e configurações
Search by name or description...|Pesquisar por nome ou descrição...
Search apps by name or description...|Pesquisar aplicativos por nome ou descrição...
No apps found|Nenhum aplicativo encontrado
No apps found.|Nenhum aplicativo encontrado.
No apps match your search.|Nenhum aplicativo corresponde à pesquisa.
Try adjusting your search or filter.|Tente alterar a pesquisa ou o filtro.
Install Apps|Instalar aplicativos
Manage your installed apps and discover new tools.|Gerencie os aplicativos instalados e descubra novas ferramentas.
Browse and install apps to expand your NOMAD.|Explore e instale aplicativos para ampliar os recursos do NOMAD.
Auto-start|Iniciar automaticamente
Auto-update enabled|Atualização automática ativada
Auto-update disabled|Atualização automática desativada
Security Warning|Aviso de segurança
Internet Required|Precisa de internet
No internet required|Não precisa de internet
Works offline|Funciona offline
Offline Ready|Pronto para uso offline
Ready|Pronto
Not ready|Não está pronto
Connected|Conectado
Disconnected|Desconectado
Active|Ativo
Inactive|Inativo
Enabled by default|Ativado por padrão
Disabled by default|Desativado por padrão
New|Novo
Edit|Editar
Add|Adicionar
Create|Criar
Create New|Criar novo
Rename|Renomear
Move|Mover
Move to|Mover para
Open in new tab|Abrir em nova aba
Open in New Tab|Abrir em nova aba
View|Ver
Preview|Prévia
List|Lista
Grid|Grade
Expand|Expandir
Collapse|Recolher
Show|Mostrar
Hide|Ocultar
Show password|Mostrar senha
Hide password|Ocultar senha
Password|Senha
Username|Nome de usuário
Read Only|Somente leitura
Read-only|Somente leitura
Not available|Indisponível
Unavailable|Indisponível
N/A|Não se aplica
OK|OK
or|ou
and|e
of|de
to|até
from|de
by|por
per page|por página
items|itens
files|arquivos
file|arquivo
models|modelos
apps|aplicativos
books|livros
regions|regiões
selected|selecionado(s)
installed|instalado(s)
available|disponível(is)
remaining|restante(s)
total|total
used|usado
free|livre
cores|núcleos
threads|tarefas
seconds|segundos
minutes|minutos
hours|horas
days|dias
ago|atrás
just now|agora mesmo
Download failed|Falha no download
Dismiss failed download|Dispensar download com falha
Retry download|Tentar baixar novamente
Open resource download page|Abrir página de download do recurso
Download page|Página de download
Keep|Manter
Cancel download|Cancelar download
Waiting...|Aguardando...
No data received for|Sem receber dados há
No active downloads|Nenhum download em andamento
Processing Queue|Fila de processamento
· last activity|· última atividade
chunks|trechos
No files are currently being processed|Nenhum arquivo está sendo processado
Cancel Download?|Cancelar download?
Stop downloading|Parar o download
Any data already downloaded will remain on disk. If you re-download this model later, it will resume from where it left off rather than starting over.|Os dados já baixados permanecerão no disco. Se você baixar este modelo novamente, o download continuará de onde parou.
Active Model Downloads|Downloads de modelos em andamento
No active model downloads|Nenhum download de modelo em andamento
Set Custom URL|Definir endereço personalizado
Set custom URL|Definir endereço personalizado
Set where|Defina onde
opens from — useful if you reach it through a reverse proxy or local DNS. Leave this empty to use the default address (|será aberto. Útil para acesso por proxy reverso ou DNS local. Deixe vazio para usar o endereço padrão (
Enter a valid http(s) address (e.g. https://jellyfin.myhomelab.net). A bare host like "jellyfin.lan" becomes http://jellyfin.lan.|Digite um endereço HTTP ou HTTPS válido. Sem protocolo, o endereço usará HTTP.
No scheme? We'll default to|Sem protocolo? Será usado
Opens as:|Endereço de abertura:
AI Inference|Processamento da IA
Tokens per Second|Tokens por segundo
Utilization|Utilização
Compiling Report|Preparando relatório
Calculating your NOMAD Score...|Calculando sua pontuação NOMAD...
Identifying Hardware|Identificando o equipamento
Detecting your system...|Detectando o sistema...
Events per second|Eventos por segundo
CPU Load|Carga do processador
Overall|Geral
CPU package|Conjunto do processador
Disk|Disco
Read|Leitura
Write|Gravação
thread|tarefa
Results so far|Resultados até agora
Report|Relatório
Partial|Parcial
Randomize|Sortear
Your Builder Tag:|Sua identificação:
tiers available|níveis disponíveis
Size:|Tamanho:
Start a conversation|Inicie uma conversa
Interact with your installed language models directly in the Command Center.|Converse com os modelos de IA instalados diretamente na central de comando.
Suggestions:|Sugestões:
Need some inspiration? Enable chat suggestions in settings to get started with example prompts.|Precisa de ideias? Ative as sugestões nas configurações para ver exemplos de perguntas.
Reasoning|Raciocínio
This answer hit the length limit and was cut off.|Esta resposta atingiu o limite de tamanho e foi interrompida.
No previous chats|Nenhuma conversa anterior
Project NOMAD Logo|Logotipo do Project NOMAD
Models & Settings|Modelos e configurações
Loading…|Carregando…
not|não
Type|Tipo
Resource warning|Aviso de recursos
I understand — install anyway|Entendi; instalar mesmo assim
It is|É
No drug data yet|Nenhum dado de medicamento disponível
Download the offline FDA drug labels from Drug Reference to see matches for this situation.|Baixe as bulas offline da FDA em Referência de medicamentos para consultar esta situação.
Go to Drug Reference|Ir à referência de medicamentos
Over-the-counter options|Opções de venda livre
result|resultado
Natural remedies|Remédios naturais
Source:|Fonte:
Matches are FDA label-indication text, not medical recommendations. Do not rely on this data to make decisions regarding medical care.|Os resultados são textos de indicações das bulas da FDA, não recomendações médicas. Não use estes dados para decidir sobre cuidados de saúde.
How:|Como:
Evidence:|Evidências:
Cautions:|Cuidados:
No FDA drug data yet|Nenhum dado de medicamento da FDA disponível
Download the openFDA drug-label dataset to enable offline search. Requires ~1.7 GB compressed download (~8–10 GB after ingestion).|Baixe a base de bulas openFDA para pesquisar offline. O download ocupa cerca de 1,7 GB e a base preparada ocupa de 8 a 10 GB.
Search by drug|Pesquisar por medicamento
By situation|Por situação
FDA data|Dados da FDA
Search a medicine by name — ibuprofen, Benadryl, loratadine…|Pesquise o nome de um medicamento, como ibuprofeno ou loratadina…
Over-the-counter|Venda livre
Prescription|Com receita
Form (how you take it)|Forma de uso
Any form|Todas as formas
Best match|Mais relevante
Searching…|Pesquisando…
Type a medicine name above to search|Digite acima o nome de um medicamento para pesquisar
FDA drug labels.|bulas da FDA.
Looking for something to treat a symptom instead? Try the|Quer pesquisar por sintoma? Experimente a aba
tab.|.
ingredient|ingrediente
product|produto
Selected:|Selecionado:
Pick a situation (or a few) above to see the over-the-counter drugs whose FDA labels list it.|Escolha uma ou mais situações acima para ver medicamentos de venda livre cujas bulas da FDA mencionam essa indicação.
Finding options…|Buscando opções…
Treats all|Menciona todas as situações
No single option treats all|Nenhuma opção menciona todas
of these — here are options for each situation.|essas situações; veja opções para cada uma.
No additional OTC options found for|Nenhuma opção adicional de venda livre encontrada para
For|Para
FDA drug data|Dados de medicamentos da FDA
drug labels installed. Updating re-checks openFDA for a newer dataset and refreshes the offline copy.|bulas instaladas. A atualização verifica novos dados na openFDA e atualiza a cópia offline.
Compare label warnings|Comparar avisos das bulas
Look up a medicine by name, or start from a symptom to find over-the-counter options — all from offline FDA drug labels.|Pesquise pelo nome do medicamento ou por um sintoma para encontrar opções de venda livre nas bulas offline da FDA.
drugs.|medicamentos.
This shows each drug's own FDA-labeled interaction warnings, individually.|Aqui são exibidos, separadamente, os avisos de interação presentes na bula de cada medicamento.
a cross-drug interaction checker and is|um verificador de interações entre medicamentos e não é
a substitute for professional medical review. Absence of text here does not mean a drug is safe to combine.|substituto de avaliação médica profissional. A ausência de texto não significa que a combinação seja segura.
Download the openFDA drug-label dataset to enable offline search and comparison.|Baixe a base de bulas openFDA para pesquisar e comparar offline.
Go to Drug Reference to download data|Vá à referência de medicamentos para baixar os dados
Select drugs to compare|Selecione medicamentos para comparar
Maximum|Máximo de
drugs reached|medicamentos atingido
Search for a drug to add…|Pesquise um medicamento para adicionar…
Select drugs above to compare their labeled interaction warnings.|Selecione medicamentos acima para comparar os avisos de interação das bulas.
Added|Adicionado
Add to interaction comparison|Adicionar à comparação de avisos de interação
Manufacturer:|Fabricante:
Route:|Via de administração:
Label date:|Data da bula:
Boxed Warning|Alerta destacado
Indications & Usage|Indicações e uso
Commonly used for|Usos frequentemente descritos
Dosage & Administration|Posologia e administração
Warnings|Advertências
Drug Interactions|Interações medicamentosas
Contraindications|Contraindicações
When Using|Durante o uso
Stop Use|Interromper o uso
Do not rely on this data to make decisions regarding medical care. While every effort is made to ensure accuracy, you should assume all results are unvalidated.|Não use estes dados para decidir sobre cuidados médicos. Apesar dos esforços para garantir a precisão, considere os resultados não validados.
Last refreshed:|Última atualização:
Easy Setup Wizard Complete|Assistente de configuração concluído
It looks like you're not connected to the internet. Installing apps and downloading content will require an internet connection.|Parece que você está sem internet. A instalação de aplicativos e os downloads precisam de conexão.
App Installation Activity|Atividade de instalação de aplicativos
Running in the Background|Executando em segundo plano
Feel free to leave this page at any time - your app installs and downloads will continue in the background! Please note, the Information Library (if installed) may be unavailable until all initial downloads complete.|Você pode sair desta página: as instalações e os downloads continuarão em segundo plano. A biblioteca de conhecimento poderá ficar indisponível até os downloads iniciais terminarem.
No content-based capabilities selected. You can skip this step or go back to select capabilities that require content.|Nenhum recurso que usa conteúdo foi selecionado. Pule esta etapa ou volte para selecionar esses recursos.
Branded video collections from creators, downloaded for offline viewing in Kiwix.|Coleções de vídeos de criadores, baixadas para assistir offline no Kiwix.
Configure|Configurar
Choose models to download and set how|Escolha os modelos para baixar e defina como
handles new content.|lidará com novos conteúdos.
Remote Ollama selected|Ollama remoto selecionado
Models are managed on the remote machine. You can add models from Settings > AI Assistant after setup, note this is only supported when using Ollama, not LM Studio and other OpenAI API software.|Os modelos são gerenciados no computador remoto. Você pode adicionar modelos em Configurações > Assistente de IA após a configuração. Esse recurso funciona com Ollama, mas não com LM Studio ou outras APIs compatíveis com OpenAI.
Supports images|Aceita imagens
Auto-index new content for|Indexar automaticamente novos conteúdos para
When you add new ZIMs, documents, or curated content, should|Ao adicionar novos arquivos ZIM, documentos ou coleções,
index them automatically so it can search them while answering your questions?|deve indexá-los automaticamente para pesquisá-los ao responder às suas perguntas?
Yes, always|Sim, sempre
You can change this any time from the Knowledge Base panel inside AI Chat.|Você pode mudar isso a qualquer momento no painel da base de conhecimento dentro da conversa com IA.
No Selections Made|Nenhuma seleção realizada
You haven't selected anything to install or download. You can go back to make selections or go back to the home page.|Você não selecionou nada para instalar ou baixar. Volte para escolher os recursos ou retorne ao início.
Capabilities to Install|Recursos para instalar
Map Collections to Download (|Coleções de mapas para baixar (
Creator Packs to Install (|Pacotes de criadores para instalar (
Content Categories (|Categorias de conteúdo (
files)|arquivos)
AI Models to Download (|Modelos de IA para baixar (
from the Knowledge Base panel before|no painel da base de conhecimento antes que
indexes it.|o indexe.
map region|região de mapas
content categor|categoria de conteúdo
creator pack|pacote de criador
AI model|modelo de IA
Cancel & Go to Home|Cancelar e voltar ao início
Page not found|Página não encontrada
This page does not exist.|Esta página não existe.
Server Error|Erro no servidor
An update is available for Project NOMAD!|Há uma atualização disponível para o Project NOMAD!
Your benchmark can be re-scored with Score v2|Seu teste de desempenho pode ser recalculado com a pontuação v2
We've upgraded the benchmark scoring system. Re-run your benchmark to get an updated Score v2 result on the community leaderboard.|O sistema de pontuação foi atualizado. Execute novamente o teste para obter o resultado v2 na classificação da comunidade.
A shortcut you added. NOMAD does not manage this.|Um atalho que você adicionou. O NOMAD não gerencia esse recurso.
Start here!|Comece aqui!
Edit this link|Editar este atalho
Remove this link|Remover este atalho
Add a Link|Adicionar atalho
A shortcut to something else on your network|Um atalho para outro recurso da sua rede
Fly to coordinates|Ir para as coordenadas
Add marker at coordinates|Adicionar marcador nas coordenadas
Manage Map Regions|Gerenciar regiões dos mapas
Advanced configuration for operators. These settings are optional — the defaults work for most deployments.|Configurações avançadas de administração. São opcionais; os padrões atendem à maioria das instalações.
Connectivity|Conectividade
NOMAD periodically checks whether it can reach the internet. By default it probes Cloudflare's utility endpoint with a few fallbacks. Set a custom endpoint below if your network blocks the defaults. Leave blank to use the built-in defaults.|O NOMAD verifica periodicamente a conexão com a internet usando a Cloudflare e alternativas. Configure um endereço personalizado se sua rede bloquear os padrões. Deixe vazio para manter os endereços padrão.
Managed by environment variable|Gerenciado por variável de ambiente
The INTERNET_STATUS_TEST_URL environment variable is set and takes precedence over this setting. Remove it to manage the test URL here.|A variável INTERNET_STATUS_TEST_URL está definida e tem prioridade. Remova-a para configurar aqui o endereço do teste.
Internet Status Test URL|Endereço para testar a conexão com a internet
Install Service?|Instalar serviço?
Are you sure you want to install|Tem certeza de que deseja instalar
? This will start the service and make it available in your Project NOMAD instance. It may take some time to complete.|? Isso iniciará o serviço e o disponibilizará no NOMAD. A conclusão pode demorar um pouco.
Are you sure you want to force reinstall|Tem certeza de que deseja forçar a reinstalação de
? This will|? Isso vai
WIPE ALL DATA|APAGAR TODOS OS DADOS
for this service and cannot be undone. You should only do this if the service is malfunctioning and other troubleshooting steps have failed.|deste serviço e não poderá ser desfeito. Faça isso apenas se o serviço estiver com problemas e outras tentativas de correção falharem.
Force Reinstall|Forçar reinstalação
Are you sure you want to|Tem certeza de que deseja
Are you sure you want to restart|Tem certeza de que deseja reiniciar
App Settings|Configurações dos aplicativos
Manage the applications that are available in your Project NOMAD instance. Nightly update checks will automatically detect when new versions of these apps are available.|Gerencie os aplicativos do seu NOMAD. A verificação noturna identifica automaticamente novas versões.
Measure your server's performance and compare with the NOMAD community|Meça o desempenho do seu servidor e compare com a comunidade NOMAD
Compiling report...|Preparando relatório...
Benchmark Failed|Falha no teste de desempenho
Go to Apps to install|Vá a Aplicativos para instalar
Run a benchmark to measure your system's CPU, memory, disk, and AI inference performance. The benchmark takes approximately 3-6 minutes to complete.|Execute um teste para medir processador, memória, disco e processamento da IA. A duração aproximada é de 3 a 6 minutos.
Run Full Benchmark|Executar teste completo
System Only|Somente sistema
AI Only|Somente IA
Note:|Observação:
is not installed.|não está instalado.
Install it|Instale-o
to run full benchmarks and share results with the community.|para executar testes completos e compartilhar os resultados com a comunidade.
NOMAD Score|Pontuação NOMAD
Reference Build = 1000.|Equipamento de referência = 1000.
Legacy scale:|Escala antiga:
Share with Community|Compartilhar com a comunidade
Share your benchmark on the community leaderboard. Choose a Builder Tag to claim your spot, or share anonymously.|Compartilhe seu teste na classificação da comunidade. Escolha uma identificação ou compartilhe anonimamente.
Your Builder Tag|Sua identificação
Share anonymously (no Builder Tag shown on leaderboard)|Compartilhar anonimamente, sem identificação na classificação
Submission Failed|Falha no envio
Partial Benchmark|Teste parcial
Shared with Community|Compartilhado com a comunidade
Your benchmark has been submitted to the community leaderboard. Thanks for contributing!|Seu teste foi enviado à classificação da comunidade. Obrigado pela contribuição!
View the leaderboard →|Ver classificação →
System Performance|Desempenho do sistema
Disk Read|Leitura do disco
Disk Write|Gravação no disco
AI Performance|Desempenho da IA
AI Score|Pontuação da IA
Time to First Token|Tempo até o primeiro token
No AI Benchmark Data|Nenhum dado de teste da IA
Run a Full Benchmark or AI Only benchmark to measure AI inference performance.|Execute um teste completo ou somente de IA para medir seu desempenho.
Hardware Information|Informações do equipamento
Benchmark Details|Detalhes do teste
Benchmark ID|Identificador do teste
Raw Scores|Pontuações originais
CPU Score|Pontuação do processador
Memory Score|Pontuação da memória
Disk Read Score|Pontuação de leitura do disco
Disk Write Score|Pontuação de gravação do disco
AI Tokens/sec|Tokens por segundo da IA
AI Time to First Token|Tempo da IA até o primeiro token
Benchmark Info|Informações do teste
Full Benchmark ID|Identificador completo do teste
Benchmark Type|Tipo de teste
Run Date|Data de execução
Builder Tag|Identificação
AI Model Used|Modelo de IA utilizado
Submitted to Repository|Enviado ao repositório
Repository ID|Identificador do repositório
Measured Performance (v2)|Desempenho medido (v2)
CPU single-thread|Processador com uma tarefa
CPU multi-thread (|Processador com várias tarefas (
Memory (|Memória (
Environment|Ambiente
Run environment|Ambiente de execução
Storage backend|Sistema de armazenamento
GPU compute|Processamento da placa de vídeo
Benchmark History|Histórico de testes
benchmark|teste
recorded|registrado(s)
Shared|Compartilhado
No Benchmark Results|Nenhum resultado de teste
Run your first benchmark to see your server's performance scores.|Execute seu primeiro teste para ver as pontuações de desempenho.
Install branded video collections from creators. Packs download in the background and play offline through Kiwix.|Instale coleções de vídeos dos criadores. Os downloads são realizados em segundo plano e os vídeos podem ser vistos offline no Kiwix.
Confirm Delete?|Confirmar exclusão?
Are you sure you want to delete|Tem certeza de que deseja excluir
? This action cannot be undone.|? Esta ação não pode ser desfeita.
Confirm Download?|Confirmar download?
Are you sure you want to download|Tem certeza de que deseja baixar
? It may take some time for it to be available depending on the file size and your internet connection.|? A duração depende do tamanho do arquivo e da sua conexão.
Download Global Map?|Baixar mapa global?
This will download the full Protomaps global map (|Será baixado o mapa global completo do Protomaps (
, build|, versão
). Covers the entire planet so you won't need individual region files. Make sure you have enough disk space.|). Cobre todo o planeta e dispensa arquivos de regiões individuais. Confira o espaço disponível em disco.
Download Map File|Baixar arquivo de mapa
Manage your stored map files and explore new regions!|Gerencie os mapas armazenados e explore novas regiões.
The base map assets have not been installed. Please download them first to enable map functionality.|Os recursos básicos dos mapas não foram instalados. Baixe-os primeiro para habilitar os mapas.
World base map not downloaded|Mapa básico do mundo não baixado
The low-zoom world base map (~15 MB) hasn't been downloaded yet, so the map appears blank outside any regions you've downloaded. Connect this NOMAD to the internet and download it once for offline use.|O mapa básico do mundo, de cerca de 15 MB, ainda não foi baixado. Por isso, regiões não baixadas aparecem vazias. Conecte o NOMAD à internet e baixe esse mapa uma vez para usá-lo offline.
Global Map Installed|Mapa global instalado
Global Map Coverage Available|Cobertura global disponível
Download by country or region|Baixar por país ou região
Pick the countries you actually need — from a single country to a whole continent — and we'll pull just those tiles from the global Protomaps archive. Much smaller than the full 125 GB global map.|Escolha os países de que precisa, de um país a um continente inteiro. Serão baixadas apenas essas áreas do arquivo global Protomaps, ocupando menos espaço que o mapa completo de 125 GB.
Curated Map Regions|Regiões de mapas selecionadas
Force Refresh Collections|Forçar atualização das coleções
No curated collections available.|Nenhuma coleção selecionada disponível.
Stored Map Files|Arquivos de mapas armazenados
Download a Custom Map File|Baixar um arquivo de mapa personalizado
Delete Model?|Excluir modelo?
Are you sure you want to delete this model? You will need to download it again if you want to use it in the future.|Deseja excluir este modelo? Será necessário baixá-lo novamente para voltar a usá-lo.
Easily manage the|Gerencie com facilidade
's settings and installed models. We recommend starting with smaller models first to see how they perform on your system before moving on to larger ones.|e seus modelos instalados. Comece com modelos menores para avaliar o desempenho antes de escolher os maiores.
Chat Suggestions|Sugestões de conversa
Display AI-generated conversation starters in the chat interface|Exibir sugestões de perguntas geradas pela IA
Flash Attention|Atenção otimizada
Enables OLLAMA_FLASH_ATTENTION=1 for improved memory efficiency. Disable if you experience instability. Takes effect after reinstalling the AI Assistant.|Ativa OLLAMA_FLASH_ATTENTION=1 para usar a memória com mais eficiência. Desative em caso de instabilidade. Entra em vigor após reinstalar o assistente de IA.
Use thinking automatically when a model supports it|Ativar o raciocínio automaticamente nos modelos compatíveis
Sets the default for models that can think. You can still turn thinking on or off for an individual model in the chat window.|Define o padrão dos modelos com raciocínio. Você pode ativá-lo ou desativá-lo por modelo na janela de conversa.
Knowledge Base Retrieval|Pesquisa na base de conhecimento
Search your knowledge base for relevant documents before answering. Turn this off to save memory and speed up replies when your knowledge base is small or empty. This is the same switch as the one in the chat window.|Pesquisar documentos relevantes na base antes de responder. Desative para economizar memória e acelerar respostas quando a base estiver vazia ou pequena. É o mesmo controle da janela de conversa.
Assistant Name|Nome do assistente
Tasks Model|Modelo para tarefas auxiliares
Knowledge Base Relevance|Relevância da base de conhecimento
Double-check knowledge base matches|Conferir a relevância dos resultados da base
Response Style|Estilo de resposta
Context Window|Janela de contexto
Currently in effect:|Configuração atual:
. Changes take effect for new conversations.|. As alterações valem para novas conversas.
No models installed. Browse the model catalog below to get started.|Nenhum modelo instalado. Explore o catálogo abaixo para começar.
Parameters|Parâmetros
Disk Size|Tamanho em disco
Remote Connection|Conexão remota
Connect to any OpenAI-compatible API server — Ollama, LM Studio, llama.cpp, and others are all supported. For remote Ollama instances, the host must be started with|Conecte um servidor de API compatível com OpenAI, como Ollama, LM Studio ou llama.cpp. Para usar Ollama remoto, inicie o servidor com
Remote Ollama/OpenAI API URL|Endereço da API remota Ollama/OpenAI
Save & Test|Salvar e testar
Model downloading is only supported when using a Ollama backend.|O download de modelos só é compatível com o Ollama.
If you are connected to an OpenAI API host (e.g. LM Studio), please download models directly in that application.|Se estiver conectado a uma API OpenAI, como o LM Studio, baixe os modelos diretamente nesse aplicativo.
Search language models..|Pesquisar modelos de linguagem...
Refresh Models|Atualizar modelos
Tag|Versão
Input Type|Tipo de entrada
Context Size|Tamanho do contexto
Model Size|Tamanho do modelo
Load More|Carregar mais
Graphics|Placa de vídeo
Memory Allocation|Distribuição da memória
Total RAM|Memória RAM total
Used RAM|Memória RAM usada
Available RAM|Memória RAM disponível
% Utilized|% em uso
Storage Devices|Dispositivos de armazenamento
No storage devices detected|Nenhum dispositivo de armazenamento detectado
System Status|Estado do sistema
CPU Cores|Núcleos do processador
System Update|Atualização do sistema
Keep your Project NOMAD instance up to date with the latest features and improvements.|Mantenha seu NOMAD atualizado com os recursos e melhorias mais recentes.
Update Failed|Falha na atualização
Container Restarting|Contêiner reiniciando
The admin container is restarting. This page will reload automatically when the update is complete.|O contêiner de administração está reiniciando. A página será recarregada quando a atualização terminar.
Connection Temporarily Lost (Expected)|Conexão temporariamente interrompida (esperado)
You may see error notifications while the backend restarts during the update. This is completely normal and expected. Connection should be restored momentarily.|Podem aparecer notificações de erro durante a reinicialização do servidor. Isso é esperado; a conexão deverá voltar em instantes.
% complete|% concluído
Check Again|Verificar novamente
What happens during an update?|O que acontece durante a atualização?
Pull Latest Images|Baixar imagens mais recentes
Downloads the newest Docker images for all core containers|Baixa as imagens Docker mais recentes dos componentes principais
Recreate Containers|Recriar contêineres
Safely stops and recreates all core containers with the new images|Para e recria os componentes principais com as novas imagens
Automatic Reload|Recarregamento automático
This page will automatically reload when the update is complete|Esta página será recarregada ao concluir a atualização
View Update Logs|Ver registros da atualização
Backup Reminder|Lembrete de cópia de segurança
While updates are designed to be safe, it's always recommended to backup any critical data before proceeding.|Antes de atualizar, recomenda-se fazer cópia de segurança dos dados importantes.
Temporary Downtime|Indisponibilidade temporária
Services will be briefly unavailable during the update process. This typically takes 2-5 minutes depending on your internet connection.|Os serviços ficarão temporariamente indisponíveis durante a atualização. Isso costuma levar de 2 a 5 minutos, conforme sua conexão.
Early Access|Acesso antecipado
Enable Early Access|Ativar acesso antecipado
Receive release candidate (RC) versions before they are officially released. Note: RC versions may contain bugs and are not recommended for environments where stability and data integrity are critical.|Receba versões candidatas antes do lançamento oficial. Elas podem conter falhas e não são recomendadas quando estabilidade e integridade dos dados são essenciais.
Your email address|Seu endereço de e-mail
Subscribe|Inscrever-se
We care about your privacy. Project NOMAD will never share your email with third parties or send you spam.|O Project NOMAD não compartilhará seu e-mail com terceiros nem enviará mensagens indesejadas.
Update Logs|Registros da atualização
Manage your stored content files.|Gerencie seus arquivos de conteúdo armazenados.
Rebuild the Kiwix library index from the files on disk. Use this after manually adding ZIM files outside of NOMAD.|Reconstrua o índice da biblioteca Kiwix com os arquivos do disco. Use após adicionar arquivos ZIM manualmente.
Rescan Library|Verificar biblioteca novamente
Upload a ZIM file from your browser. Files up to 20 GB are supported. For best results upload from the same machine or over a stable LAN connection. Larger files should be copied directly to the storage volume.|Envie um arquivo ZIM pelo navegador. São aceitos arquivos de até 20 GB. Prefira o mesmo computador ou uma conexão local estável. Arquivos maiores devem ser copiados diretamente para o armazenamento.
The Kiwix application is not installed. Please install it to view downloaded ZIM files|O Kiwix não está instalado. Instale-o para consultar os arquivos ZIM baixados
? It may take some time for it to be available depending on the file size and your internet connection. The Kiwix application will be restarted after the download is complete.|? A duração depende do tamanho do arquivo e da conexão. O Kiwix será reiniciado após o download.
? The Kiwix application will be restarted after the download is complete.|? O Kiwix será reiniciado após o download.
Browse and download content for offline reading!|Explore e baixe conteúdo para leitura offline.
No internet connection. You may not be able to download files.|Sem conexão com a internet. Talvez não seja possível baixar arquivos.
The Kiwix application is not installed. Please install it to view downloaded content files.|O Kiwix não está instalado. Instale-o para consultar os conteúdos baixados.
Curated Content|Conteúdo selecionado
No curated content categories available.|Nenhuma categoria de conteúdo selecionado disponível.
Browse the Kiwix Library|Explorar a biblioteca Kiwix
Default (Kiwix)|Padrão (Kiwix)
Search available ZIM files...|Pesquisar arquivos ZIM disponíveis...
Language:|Idioma:
All languages|Todos os idiomas
Author:|Autor:
Publisher:|Editora:
Category:|Categoria:
Articles:|Artigos:
Media:|Mídias:
Issued:|Publicação:
File:|Arquivo:
Could not fetch directory listing from this URL.|Não foi possível listar os arquivos desse endereço.
The server may not support directory browsing, or the URL may be incorrect.|O servidor pode não permitir explorar pastas ou o endereço pode estar incorreto.
No directories or ZIM files found at this location.|Nenhuma pasta ou arquivo ZIM encontrado neste local.
Manage Custom Libraries|Gerenciar bibliotecas personalizadas
Add Kiwix mirrors or other ZIM file sources for faster downloads.|Adicione espelhos do Kiwix ou outras fontes de arquivos ZIM para downloads mais rápidos.
(built-in)|(incluído)
Remove library|Remover biblioteca
Library Name|Nome da biblioteca
e.g., Debian Mirror|Ex.: espelho Debian
Base URL|Endereço base
Add Library|Adicionar biblioteca
Browse and install curated apps, or add your own custom apps by providing a Docker image.|Explore e instale aplicativos selecionados ou adicione aplicativos personalizados com uma imagem Docker.
No apps match your filter.|Nenhum aplicativo corresponde ao filtro.
This will download and start|Isso vai baixar e iniciar
on port|na porta
Checking for conflicts…|Verificando conflitos…
This will start the container.|Isso iniciará o contêiner.
The container will be stopped. Your data is preserved.|O contêiner será parado. Seus dados serão preservados.
The container will be briefly stopped and restarted.|O contêiner será parado brevemente e reiniciado.
This will delete all app data and cannot be undone.|Isso excluirá todos os dados do aplicativo e não poderá ser desfeito.
The container and its associated volumes will be removed, then a fresh installation will begin.|O contêiner e seus volumes serão removidos; em seguida, será feita uma nova instalação.
This will permanently remove this custom app.|Isso removerá permanentemente este aplicativo personalizado.
The container will be stopped and removed. Host volume data will remain on disk.|O contêiner será parado e removido. Os dados dos volumes permanecerão no disco.
Also remove the Docker image to reclaim disk space|Remover também a imagem Docker para liberar espaço
This will remove the app from this device.|Isso removerá o aplicativo deste dispositivo.
The container will be stopped and removed, and the app returns to the catalog below. App data under the storage folder stays on disk, so reinstalling brings it back as it was.|O contêiner será parado e removido, e o aplicativo voltará ao catálogo. Os dados da pasta de armazenamento permanecerão no disco e serão recuperados ao reinstalar.
custom|personalizado
You've customized this app, so it won't be overwritten by catalog updates.|Este aplicativo foi personalizado e não será sobrescrito pelas atualizações do catálogo.
modified|modificado
This is a legacy version that's no longer maintained. Install the current Education Platform from the catalog, then uninstall this one.|Esta versão antiga não recebe manutenção. Instale a plataforma de ensino atual pelo catálogo e depois desinstale esta versão.
legacy|versão antiga
Stats|Estatísticas
App auto-updates off — open Settings|Atualizações automáticas desativadas; abra as configurações
Update (pull latest)|Atualizar para a versão mais recente
In progress…|Em andamento…
Clear History|Limpar histórico
Uncategorized|Sem categoria
+ Create "|+ Criar "
No matches|Nenhum resultado
Manage Collections|Gerenciar coleções
Rename or remove collections. Removing a collection doesn't delete any files — they're simply moved back to Uncategorized so you can re-sort them.|Renomeie ou remova coleções. Remover uma coleção não exclui arquivos: eles voltam para Sem categoria e podem ser reorganizados.
No collections yet. Assign a file to a collection from the Knowledge Base table to create one.|Ainda não há coleções. Para criar uma, associe um arquivo a uma coleção na tabela da base de conhecimento.
Remove "|Remover "
"? Files move to Uncategorized.|"? Os arquivos serão movidos para Sem categoria.
Clear All Chat History?|Limpar todo o histórico de conversas?
Are you sure you want to delete all chat sessions? This action cannot be undone and all conversations will be permanently deleted.|Deseja excluir todas as conversas? Esta ação não pode ser desfeita e todas serão excluídas permanentemente.
Switching to|Mudar para
will start a new chat. Your current conversation stays available in the sidebar.|iniciará uma nova conversa. A conversa atual continuará disponível na barra lateral.
Search in:|Pesquisar em:
Model:|Modelo:
Loading models...|Carregando modelos...
Knowledge Base:|Base de conhecimento:
Thinking:|Raciocínio:
When indexed,|Após a indexação,
can reference them while answering your questions.|poderá consultá-los para responder às suas perguntas.
Index existing content|Indexar conteúdo existente
Maybe later|Talvez depois
Not Indexed|Não indexado
Stalled|Interrompido
Cancel All Embedding Jobs?|Cancelar todas as tarefas de indexação?
This stops|Isso interrompe
every|toda
embedding job — including ones still in progress or stuck — and clears the processing queue. The uploaded source files for those jobs are deleted, so you'll need to re-upload anything you still want indexed. Stored files that already finished embedding are not affected. Are you sure you want to proceed?|tarefa de indexação, incluindo as em andamento ou travadas, e limpa a fila. Os arquivos enviados dessas tarefas serão excluídos e precisarão ser enviados novamente. Arquivos cuja indexação já terminou não serão afetados. Deseja continuar?
Confirm Sync?|Confirmar sincronização?
This will scan the NOMAD's storage directories for any new files and queue them for processing. This is useful if you've manually added files to the storage or want to ensure everything is up to date. This may cause a temporary increase in resource usage if new files are found and being processed. Are you sure you want to proceed?|As pastas de armazenamento serão verificadas e novos arquivos entrarão na fila de processamento. Use após adicionar arquivos manualmente ou para conferir se tudo está atualizado. O processamento pode elevar temporariamente o uso de recursos. Deseja continuar?
Knowledge Base unavailable:|Base de conhecimento indisponível:
The Qdrant vector database is offline.|O banco vetorial Qdrant está indisponível.
Collection:|Coleção:
Why upload documents to your Knowledge Base?|Por que enviar documentos à base de conhecimento?
Knowledge Base Integration|Integração com a base de conhecimento
When you upload documents to your Knowledge Base, NOMAD processes and embeds the content, making it directly accessible to|Ao enviar documentos à base de conhecimento, o NOMAD processa e indexa o conteúdo para disponibilizá-lo a
. This allows|. Isso permite
to reference your specific documents during conversations, providing more accurate and personalized responses based on your uploaded data.|consultar seus documentos durante as conversas e elaborar respostas mais relevantes com base nos dados enviados.
Enhanced Document Processing with OCR|Processamento de documentos com reconhecimento de texto
NOMAD includes built-in Optical Character Recognition (OCR) capabilities, allowing it to extract text from image-based documents such as scanned PDFs or photos. This means that even if your documents are not in a standard text format, NOMAD can still process and embed their content for AI access.|O NOMAD possui reconhecimento óptico de caracteres (OCR) para extrair texto de PDFs digitalizados e fotos. Assim, documentos em imagem também podem ser processados e indexados para consulta pela IA.
Information Library Integration|Integração com a biblioteca de conhecimento
NOMAD will automatically discover and extract any content you save to your Information Library (if installed), making it instantly available to|O NOMAD identifica e extrai automaticamente o conteúdo salvo na biblioteca de conhecimento, quando instalada, para disponibilizá-lo a
without any extra steps.|sem outras etapas.
Auto-index new content for AI?|Indexar automaticamente novos conteúdos para a IA?
Indexed content typically uses 5–10× the original file size on disk. Changes apply to new content added after this setting changes.|O conteúdo indexado costuma ocupar de 5 a 10 vezes o tamanho do arquivo original. A alteração vale para novos conteúdos adicionados a partir de agora.
Clean Up Failed|Falha na limpeza
Stop and clear every embedding job regardless of state, including stuck or in-progress ones. Deletes the uploaded source files for those jobs.|Interrompe e remove todas as tarefas de indexação, incluindo as travadas ou em andamento. Exclui os arquivos enviados para essas tarefas.
Cancel All Jobs|Cancelar todas as tarefas
Stored Knowledge Base Files|Arquivos armazenados na base de conhecimento
Drop the entire embeddings collection and re-embed everything from scratch. Permanently removes vectors for files no longer on disk. Destructive: requires typing RESET to confirm.|Apaga toda a coleção vetorial e refaz a indexação. Remove permanentemente os vetores de arquivos que já não estão no disco. Ação destrutiva: digite RESET para confirmar.
Reset & Rebuild|Redefinir e reconstruir
Re-embed every file on disk, replacing existing vectors file-by-file. Vectors for files no longer on disk are preserved. Use this if the chunker or embedding model has changed.|Reindexa cada arquivo do disco e substitui seus vetores. Preserva os vetores de arquivos que já não estão no disco. Use se o modelo ou a divisão em trechos mudou.
Re-embed All|Reindexar tudo
Scan storage for new files and queue any that haven't been embedded yet. Safe to run anytime; won't touch already-embedded content.|Verifica novos arquivos e adiciona à fila os que ainda não foram indexados. Não altera conteúdos já indexados.
Sync Storage|Sincronizar armazenamento
File warnings unavailable — couldn't read storage state. Retrying…|Avisos de arquivos indisponíveis: não foi possível consultar o armazenamento. Tentando novamente…
Embedded 0 chunks — this file has no text content. AI Assistant cannot reference it.|Nenhum trecho indexado: este arquivo não contém texto. O assistente de IA não poderá consultá-lo.
Only|Somente
of est.|de aproximadamente
chunks embedded — ingestion may have stalled.|trechos indexados; o processamento pode ter sido interrompido.
Managed by NOMAD|Gerenciado pelo NOMAD
Remove from knowledge base?|Remover da base de conhecimento?
Re-embed All Documents?|Reindexar todos os documentos?
This will re-process every document currently in your knowledge base — about|Isso processará novamente todos os documentos da base de conhecimento, cerca de
. For each file, NOMAD will delete the existing embeddings from Qdrant and queue a fresh embedding job using the current chunking and embedding model.|. Para cada arquivo, o NOMAD excluirá os vetores existentes do Qdrant e criará nova tarefa com o modelo e a divisão em trechos atuais.
What this is for|Quando usar
Use this when the embedding model or chunking logic has changed, or when you suspect stored vectors are stale. Files on disk are|Use se o modelo de indexação ou a divisão em trechos mudou, ou se os vetores estiverem desatualizados. Os arquivos no disco não serão
deleted, and any orphan points whose source file is no longer present will be preserved untouched (see|excluídos, e os vetores de arquivos ausentes serão preservados (veja
Reset & Rebuild|Redefinir e reconstruir
if you want a fully clean slate).|para reconstruir a base sem esses vetores).
Heads up|Atenção
Embedding|Indexação
may take a long time, especially for large PDFs or ZIM archives.|pode demorar, especialmente para PDFs grandes ou arquivos ZIM.
On systems without GPU acceleration, expect sustained high CPU usage for the duration.|Sem aceleração por placa de vídeo, o uso do processador pode permanecer elevado durante todo o processo.
Knowledge Base search results may be incomplete until every file finishes re-embedding.|As pesquisas na base poderão ficar incompletas até que todos os arquivos sejam reindexados.
If embed jobs are already in progress, this action will be refused — wait for the queue to drain first.|Se houver indexações em andamento, esta ação será recusada. Aguarde o fim da fila.
Reset & Rebuild Knowledge Base?|Redefinir e reconstruir a base de conhecimento?
This will|Isso vai
permanently delete every point|excluir permanentemente todos os vetores
in the|da coleção
Qdrant collection and rebuild from the|do Qdrant e reconstruí-la a partir dos
currently on disk. The collection is dropped, recreated, and every file is re-queued for embedding.|existentes no disco. A coleção será apagada, recriada e os arquivos voltarão à fila de indexação.
How this differs from Re-embed All|Diferença em relação a Reindexar tudo
replaces vectors file-by-file. Any orphan points (vectors whose source file was deleted from disk at some point) are preserved.|substitui os vetores por arquivo e preserva os vetores de arquivos que foram excluídos do disco.
drops the entire collection. Orphan points are|apaga toda a coleção. Os vetores de arquivos ausentes são
gone forever|excluídos permanentemente
. Only files currently on disk will exist in Qdrant afterwards.|. Depois, apenas os arquivos existentes no disco estarão representados no Qdrant.
This action is destructive and cannot be undone|Esta ação é destrutiva e não pode ser desfeita
Knowledge Base search will be empty until embedding finishes (potentially hours on CPU-only systems).|A base não retornará resultados até que a indexação termine. Isso pode levar horas sem placa de vídeo.
For a few seconds during the reset, the Qdrant collection does not exist — any chat-with-RAG queries in that window may return a "collection not found" error. Avoid using chat until the rebuild has begun.|Por alguns segundos durante a redefinição, a coleção não existirá. Consultas nesse intervalo podem retornar erro de coleção não encontrada. Evite conversar com a IA até que a reconstrução comece.
to confirm:|para confirmar:
Type RESET exactly (uppercase, no spaces) to enable the confirm button.|Digite RESET exatamente assim, em maiúsculas e sem espaços, para habilitar a confirmação.
Re-embed this file?|Reindexar este arquivo?
This will delete the existing embeddings for|Isso excluirá os vetores existentes de
and queue a fresh embedding job. The file on disk is not touched.|e criará uma nova tarefa de indexação. O arquivo no disco será preservado.
For large ZIM archives this can take a long time, especially on CPU-only systems.|Arquivos ZIM grandes podem levar muito tempo, especialmente sem placa de vídeo.
Search results that referenced this file will be incomplete until the new embedding finishes.|Pesquisas que consultem este arquivo ficarão incompletas até o fim da nova indexação.
If a job for this file is already running, the re-embed will be refused — wait for it to finish first.|Se o arquivo já estiver sendo indexado, a nova tarefa será recusada. Aguarde a conclusão.
Couldn't load file. It may have been moved or its type isn't viewable.|Não foi possível abrir o arquivo. Ele pode ter sido movido ou seu formato não permite visualização.
Custom instructions passed to|Instruções personalizadas enviadas a
as a system prompt on every chat.|como orientação do sistema em cada conversa.
Tip: this file is also stored on disk at|Dica: este arquivo também fica armazenado em
and can be edited directly.|e pode ser editado diretamente.
Download map by country or region|Baixar mapa por país ou região
Clear all|Limpar tudo
Quick picks|Seleções rápidas
No countries match "|Nenhum país corresponde a "
Already downloaded — re-select to update with a different zoom|Já baixado; selecione novamente para atualizar com outro nível de detalhe
Max zoom level:|Nível máximo de ampliação:
(world)|(mundo)
(street)|(ruas)
Lower zoom = smaller file, less detail. Zoom 15 shows individual streets; zoom 10 shows city-level detail.|Menor ampliação gera arquivos menores, com menos detalhes. O nível 15 mostra ruas; o nível 10 mostra cidades.
Estimating size…|Estimando tamanho…
tiles, ~|blocos de mapa, cerca de
(source build|(versão da fonte
Pick at least one country to estimate size.|Selecione pelo menos um país para estimar o tamanho.
Uninstall pack|Desinstalar pacote
Branded video collections from creators, for offline viewing|Coleções de vídeos de criadores para assistir offline
No creator packs available.|Nenhum pacote de criadores disponível.
videos from|vídeos de
, about|, cerca de
. It will download in the background and appear in Kiwix when ready.|. O download acontecerá em segundo plano e o conteúdo aparecerá no Kiwix quando estiver pronto.
Licensed content — personal use, not for redistribution.|Conteúdo licenciado para uso pessoal, sem autorização para redistribuição.
View license|Ver licença
This removes the downloaded videos (|Isso remove os vídeos baixados (
) from this NOMAD. You can reinstall the pack anytime.|) deste NOMAD. Você pode reinstalar o pacote depois.
All items downloaded|Todos os itens baixados
Items:|Itens:
Docker Image|Imagem Docker
My App|Meu aplicativo
Icon|Ícone
Icon preview|Prévia do ícone
Port Mappings|Mapeamento de portas
Add Port|Adicionar porta
No port mappings — the app won't be accessible from a browser.|Sem mapeamento de portas, o aplicativo não poderá ser aberto no navegador.
Container port|Porta do contêiner
Host port (8600+)|Porta do computador (8600 ou superior)
Host ports should be in the 8600+ range. Custom apps get ports starting at|Use portas a partir de 8600 no computador. Os aplicativos personalizados recebem portas a partir de
Checking port availability…|Verificando disponibilidade da porta…
Volume Mounts|Pastas de dados
Add Volume|Adicionar pasta
No volumes — data won't persist across restarts.|Sem pastas de dados, as informações não serão preservadas ao recriar o contêiner.
Host path (absolute)|Caminho completo no computador
Container path|Caminho no contêiner
Add Variable|Adicionar variável
No environment variables provided.|Nenhuma variável de ambiente definida.
Resource Limits (optional)|Limites de recursos (opcional)
Memory (MB) — default 1024|Memória (MB), padrão 1024
CPUs — default 1|Processadores, padrão 1
Caps prevent a runaway container from starving the host. Leave blank to use the defaults (1024 MB / 1 CPU).|Os limites evitam que um contêiner esgote os recursos do computador. Deixe vazio para usar o padrão de 1024 MB e 1 processador.
Not allowed|Não permitido
Containers are created with|Os contêineres são criados com
. Data is not persisted unless you add volume mounts above.|. Os dados só serão preservados se você adicionar pastas de dados acima.
Debug Info|Informações de diagnóstico
This is non-sensitive system info you can share when reporting issues. No passwords, IPs, or API keys are included.|Estas informações de diagnóstico podem ser compartilhadas ao relatar problemas. Não incluem senhas, endereços IP ou chaves de API.
Copy to Clipboard|Copiar para a área de transferência
Open a GitHub Issue|Relatar problema no GitHub
Enter the URL of the map region file you wish to download. The URL must be publicly reachable and end with .pmtiles. A preflight check will be run to verify the file's availability, type, and approximate size.|Digite o endereço público do mapa que deseja baixar, terminado em .pmtiles. Será feita uma verificação de disponibilidade, formato e tamanho aproximado.
Before you use the Drug Reference|Antes de usar a referência de medicamentos
This tool shows general health information from official|Esta ferramenta apresenta informações gerais de saúde das
FDA drug labels|bulas oficiais da FDA
and matches symptoms to over-the-counter options. It is provided for|e relaciona sintomas a opções de venda livre. O conteúdo serve para
information only|informação geral
not medical advice|não é orientação médica
and not a substitute for a doctor, pharmacist, or nurse.|e não substitui médico, farmacêutico ou profissional de enfermagem.
Situation matches come from label text, not clinical recommendations — they can be incomplete or include products you wouldn’t expect.|As correspondências vêm do texto das bulas, não de recomendações clínicas. Podem estar incompletas ou incluir produtos inesperados.
Always follow the directions on the|Siga sempre as instruções do
actual product you have|produto que você tem em mãos
; dosages and warnings differ between products.|; doses e advertências variam entre produtos.
Data is from openFDA (U.S. FDA, public domain). NOMAD is not affiliated with or endorsed by the FDA.|Os dados vêm da openFDA, dos EUA, e são de domínio público. O NOMAD não tem vínculo com a FDA nem seu endosso.
I understand — continue|Entendi; continuar
labels|bulas
Elapsed|Tempo decorrido
this part|nesta etapa
left|restante
(estimate)|(estimativa)
Download FDA data|Baixar dados da FDA
Ingest into search|Preparar para pesquisa
of ~|de aproximadamente
Runs in the background — you can leave this page and it keeps going. Search turns on automatically when ingest finishes.|O processo continua em segundo plano mesmo se você sair da página. A pesquisa será habilitada quando o processamento terminar.
FDA data version|Versão dos dados da FDA
products|produtos
No labeled interaction text on this label.|Esta bula não contém texto específico sobre interações.
Project NOMAD™ Command Center v|Project NOMAD™ Central de comando v
This will recreate the|Isso recriará o
container with GPU support enabled. Your downloaded models will be preserved. The service will be briefly unavailable during reinstall.|contêiner com suporte à placa de vídeo. Seus modelos serão preservados. O serviço ficará brevemente indisponível durante a reinstalação.
Set AMD GFX Override|Definir compatibilidade AMD GFX
Detected GPU:|Placa de vídeo detectada:
. Current override:|. Compatibilidade atual:
GFX version override|Versão GFX de compatibilidade
Installation Activity|Atividade de instalação
Confirm large AI indexing operation|Confirmar indexação de grande volume para IA
Indexing this batch for the AI Assistant will use approximately|A indexação deste lote para o assistente de IA ocupará aproximadamente
of disk space for embeddings, on top of the raw downloads.|no disco para os vetores, além dos arquivos baixados.
That's more than 10% of your remaining free disk space (|Isso representa mais de 10% do espaço livre restante (
free). Embedding can take several hours and is hard to interrupt cleanly once started.|livres). A indexação pode levar várias horas e é difícil interrompê-la com segurança após o início.
If you'd rather review per-item before indexing, cancel here and switch your Auto-index setting to|Para revisar cada item antes da indexação, cancele aqui e altere a indexação automática para
from the Knowledge Base panel.|no painel da base de conhecimento.
Proceed anyway|Continuar mesmo assim
Add a shortcut to something you already run, on this machine or anywhere else on your network. NOMAD does not manage it, it just puts a button on your dashboard.|Adicione um atalho para um recurso deste computador ou da rede. O NOMAD não o gerencia; apenas inclui um botão no painel.
Living room NAS|Armazenamento da sala
Enter a valid URL, for example 192.168.1.50:8080 or https://nas.local.|Digite um endereço válido, como 192.168.1.50:8080 ou https://nas.local.
Description (optional)|Descrição (opcional)
Photos and backups|Fotos e cópias de segurança
Color|Cor
Links stay outlined rather than filled whichever color you pick, so they are distinguishable from apps NOMAD manages.|Os atalhos usam apenas contorno na cor escolhida para se diferenciarem dos aplicativos gerenciados pelo NOMAD.
Name this location|Nome deste local
Add notes (optional)|Adicionar anotações (opcional)
Choose custom marker color|Escolher cor do marcador
Choose custom marker icon|Escolher ícone do marcador
Delete pin|Excluir marcador
Show saved locations|Mostrar locais salvos
Pins|Marcadores
Close panel|Fechar painel
Saved Locations|Locais salvos
Search pins...|Pesquisar marcadores...
Sort by name|Ordenar por nome
Sort by hue|Ordenar por cor
Sort by icon|Ordenar por ícone
Sort by visibility|Ordenar por visibilidade
Click anywhere on the map to drop a pin|Clique no mapa para adicionar um marcador
No pins match your search.|Nenhum marcador corresponde à pesquisa.
Metric|Métrico
Imperial|Imperial
Nautical|Náutico
Download complete|Download concluído
Est. Speed:|Velocidade estimada:
This app is not running. Start it to see live resource usage.|Este aplicativo está parado. Inicie-o para ver o uso de recursos em tempo real.
Updates every 2 seconds.|Atualização a cada 2 segundos.
selected)|selecionado(s))
Current (|Atual (
Selected (+|Selecionado (+
Exceeds available space by|Ultrapassa o espaço disponível em
will remain free|permanecerão livres
Close sidebar|Fechar barra lateral
Select a tier based on your storage capacity and needs. Higher tiers include all content from lower tiers.|Escolha um nível conforme o espaço disponível e suas necessidades. Os níveis maiores incluem o conteúdo dos menores.
(includes|(inclui
additional|adicional
(plus everything in|(mais tudo de
included|incluído
of additional storage if these are indexed for the AI Assistant|de espaço adicional caso os arquivos sejam indexados para o assistente de IA
(estimate excludes some files we have no prior data for)|(a estimativa não inclui arquivos para os quais ainda não há dados)
Your|Sua configuração de
Auto-index|indexação automática
setting is|está em
, so these files will be indexed automatically once downloaded. You can change this in the Knowledge Base settings.|, portanto os arquivos serão indexados automaticamente após o download. Você pode mudar isso nas configurações da base de conhecimento.
, so these files will sit unindexed until you opt in from the Knowledge Base settings.|, portanto os arquivos só serão indexados quando você autorizar nas configurações da base de conhecimento.
You can change your selection at any time. Click Submit to confirm your choice.|Você pode mudar a seleção depois. Clique em Confirmar para salvar sua escolha.
Submit|Confirmar
Automatic App Updates|Atualizações automáticas de aplicativos
Enable Automatic App Updates|Ativar atualizações automáticas de aplicativos
Automatically install minor and patch updates for apps you've opted in (toggle each app in Supply Depot). Major versions always require a manual update. Uses the same update window and cool-off period as the core schedule above.|Instala correções e atualizações menores dos aplicativos autorizados na central de aplicativos. Versões principais exigem atualização manual. Usa o mesmo horário e período de espera da atualização do sistema.
Update window:|Horário de atualização:
); cool-off|); período de espera
Last run:|Última execução:
No apps are opted in yet. Enable auto-update on individual apps from the Supply Depot.|Nenhum aplicativo autorizado ainda. Ative a atualização automática de cada aplicativo na central de aplicativos.
Automatic Content Updates|Atualizações automáticas de conteúdo
Automatic Content Updates Disabled|Atualizações automáticas de conteúdo desativadas
Enable Automatic Content Updates|Ativar atualizações automáticas de conteúdo
Window Start|Início do horário permitido
Window End|Fim do horário permitido
Cool-off Period|Período de espera
Delay after a new version appears|Espera após o lançamento de nova versão
Data Cap (GB)|Limite de dados (GB)
Save Schedule|Salvar agendamento
h; data cap|h; limite de dados
used this window)|usados neste período)
Last error:|Último erro:
All installed content is up to date. New versions will appear here when detected.|Todo o conteúdo instalado está atualizado. Novas versões aparecerão aqui quando forem detectadas.
Manual Content Updates|Atualizações manuais de conteúdo
Check if newer versions of your installed ZIM files and maps are available.|Verifique novas versões dos arquivos ZIM e mapas instalados.
Check for Content Updates|Verificar atualizações de conteúdo
Update Check Issue|Problema ao verificar atualizações
All Content Up to Date|Todo o conteúdo está atualizado
All your installed content is running the latest available version.|Todo o conteúdo instalado está na versão mais recente disponível.
update(s) available|atualização(ões) disponível(is)
Update All (|Atualizar tudo (
Last checked:|Última verificação:
Automatic Core Updates|Atualizações automáticas do sistema
Automatic Core Updates Disabled|Atualizações automáticas do sistema desativadas
Enable Automatic Core Updates|Ativar atualizações automáticas do sistema
Automatically install minor and patch updates during your chosen window. Major versions always require a manual update due to their potentially breaking nature.|Instala correções e atualizações menores no horário escolhido. Versões principais exigem atualização manual porque podem trazer incompatibilidades.
Delay after a release is published|Espera após a publicação de uma versão
Status:|Estado:
Last check:|Última verificação:
Update Service|Atualizar serviço
Your data and configuration will be preserved during the update.|Seus dados e configurações serão preservados durante a atualização.
View release notes|Ver notas da versão
available versions|versões disponíveis
Loading versions...|Carregando versões...
No other versions available|Nenhuma outra versão disponível
Release notes|Notas da versão
Downloading Wikipedia... This may take a while for larger packages.|Baixando a Wikipédia... Pacotes maiores podem demorar.
Wikipedia download failed. Select a package and try again.|Falha ao baixar a Wikipédia. Selecione um pacote e tente novamente.
Night Ops|Modo noturno
Day Ops|Modo diurno
Open Full Chat|Abrir conversa completa
Switch to Day Ops|Mudar para modo diurno
Switch to Night Ops|Mudar para modo noturno
Informational only — not medical advice.|Somente informação geral; não é orientação médica.
These remedies have limited or mixed evidence, are not FDA-evaluated, and are not a substitute for professional care. Check with a clinician before using any of them, and before combining one with a medication you already take.|Esses recursos têm evidências limitadas ou divergentes, não foram avaliados pela FDA e não substituem atendimento profissional. Consulte um profissional antes de usá-los ou de combiná-los com medicamentos.
In an emergency, or if symptoms are severe or worsening,|Em uma emergência ou se os sintomas forem graves ou estiverem piorando,
seek real medical care — call emergency services|procure atendimento médico; ligue para o serviço de emergência
Informational reference only — not medical advice.|Material informativo; não é orientação médica.
These results match FDA drug-label indications to a situation. They are|Estes resultados relacionam indicações das bulas da FDA a uma situação. Eles
not a recommendation|não são recomendação de tratamento
not an FDA endorsement|não representam endosso da FDA
This is|Isto
not a drug-interaction checker|não é um verificador de interações medicamentosas
. Read each label’s full warnings, and check with a pharmacist or clinician before combining medicines.|. Leia todas as advertências de cada bula e consulte um farmacêutico ou médico antes de combinar medicamentos.
contact a medical professional or call emergency services|procure um profissional de saúde ou ligue para o serviço de emergência
videos ·|vídeos ·
| Size:|• Tamanho:
. Always read each product’s full label and check with a professional before combining medicines.|. Leia sempre a bula completa de cada produto e consulte um profissional antes de combinar medicamentos.
In an emergency, or if symptoms are severe, worsening, or you’re unsure,|Em uma emergência, se os sintomas forem graves, estiverem piorando ou se houver dúvida,
Rx|Com receita
OTC|Venda livre
ROCm ships GPU kernels for a fixed list of AMD chips. Integrated Radeon GPUs outside that list run on CPU unless ROCm treats them as a supported chip, set through HSA_OVERRIDE_GFX_VERSION.|O ROCm oferece suporte a uma lista específica de placas AMD. Placas Radeon integradas fora dessa lista usam o processador, salvo quando a variável HSA_OVERRIDE_GFX_VERSION permite identificá-las como um modelo compatível.
Automatically download newer versions of your installed Information Library content (ZIM files) and maps during your chosen window. Content downloads can be very large, so set a per-window data cap to limit how much is pulled at once. We recommend allowing at least 0.5 GB per update window to ensure most updates can be pulled in a timely manner, but you can set a lower cap if you have very limited bandwidth and don't mind some updates being skipped (they will still appear in the UI and can be updated manually). If an update repeatedly fails to download within the window, it will be automatically disabled and require manual intervention to re-enable.|Baixa novas versões dos arquivos ZIM e mapas no horário escolhido. Como os downloads podem ser grandes, defina um limite de dados por período. Recomenda-se pelo menos 0,5 GB por período. Um limite menor pode adiar atualizações, que continuarão disponíveis para instalação manual. Após falhas repetidas dentro do horário, a atualização automática será desativada e precisará ser reativada manualmente.
It's not recommended to upgrade to a new major version (e.g. 1.8.2 → 2.0.0) unless you have verified compatibility with your current configuration. Always review the release notes and test in a staging environment if possible.|Antes de mudar para uma versão principal, como 1.8.2 → 2.0.0, confira a compatibilidade com sua configuração. Leia as notas da versão e, se possível, teste antes em outro ambiente.
Hello from About!|Sobre o Project NOMAD
No over-the-counter drugs match “|Nenhum medicamento de venda livre corresponde a “
” in the current label data. Try searching by drug name in|” nas bulas disponíveis. Tente pesquisar pelo nome em
Sources: NCCIH “Herbs at a Glance” (NIH) and US-government health guidance (CDC, MedlinePlus/NLM, FDA). Public domain (US government works).|Fontes: NCCIH “Herbs at a Glance” (NIH) e orientações de saúde do governo dos EUA (CDC, MedlinePlus/NLM, FDA). Obras governamentais em domínio público.
U.S. Food & Drug Administration drug labeling, via|Bulas da agência de medicamentos dos EUA (FDA), via
— public domain (CC0 1.0). NOMAD is not affiliated with or endorsed by the FDA.|— domínio público (CC0 1.0). O NOMAD não tem vínculo com a FDA nem seu endosso.
No medicines match “|Nenhum medicamento corresponde a “
— public domain (CC0 1.0). NOMAD is not affiliated with or endorsed by the FDA. Label data and situation matches are label-text only; do not rely on them for medical decisions.|— domínio público (CC0 1.0). O NOMAD não tem vínculo com a FDA nem seu endosso. Os dados e as correspondências são apenas textos das bulas; não os use para decisões médicas.
View each drug's FDA-labeled interaction warnings side by side. Select up to|Veja lado a lado os avisos de interação da bula de cada medicamento. Selecione até
No results for "|Nenhum resultado para "
— public domain (CC0 1.0). NOMAD is not affiliated with or endorsed by the FDA. Label data is provided as-is; do not rely on it for medical decisions.|— domínio público (CC0 1.0). O NOMAD não tem vínculo com a FDA nem seu endosso. Os dados são fornecidos sem garantia e não devem orientar decisões médicas.
Creator Packs aren't available on this build.|Pacotes de criadores não estão disponíveis nesta versão.
License Agreement|Contrato de licença
Third-Party Software Attribution|Créditos de programas de terceiros
Project NOMAD™ integrates the following open source projects. We are grateful to their developers and communities:|O Project NOMAD™ integra os seguintes projetos de código aberto. Agradecemos aos desenvolvedores e às comunidades:
- Offline Wikipedia and content reader (GPL-3.0 License)|- Leitor de Wikipédia e conteúdo offline (licença GPL-3.0)
- Offline learning platform by Learning Equality (MIT License)|- Plataforma de ensino offline da Learning Equality (licença MIT)
- Local large language model runtime (MIT License)|- Execução local de modelos de linguagem (licença MIT)
- Data analysis and encoding toolkit by GCHQ (Apache 2.0 License)|- Ferramentas de análise e codificação de dados do GCHQ (licença Apache 2.0)
- Self-hosted note-taking application (MIT License)|- Aplicativo local de anotações (licença MIT)
- Vector search engine for AI knowledge base (Apache 2.0 License)|- Mecanismo de pesquisa vetorial para a base de conhecimento da IA (licença Apache 2.0)
Privacy Statement|Declaração de privacidade
Project NOMAD is designed with privacy as a core principle:|A privacidade é um princípio central do Project NOMAD:
Zero Telemetry:|Sem telemetria:
NOMAD does not collect, transmit, or store any usage data, analytics, or telemetry.|O NOMAD não coleta, transmite nem armazena dados de uso, análises ou telemetria.
Local-First:|Prioridade ao armazenamento local:
All your data, downloaded content, AI conversations, and notes remain on your device.|Seus dados, conteúdos baixados, conversas com a IA e anotações ficam no seu dispositivo.
No Accounts Required:|Não exige conta:
NOMAD operates without user accounts or authentication by default.|Por padrão, o NOMAD funciona sem contas de usuário ou autenticação.
Network Optional:|Conexão opcional:
An internet connection is only required to download content or updates. All installed features work fully offline.|A internet é necessária apenas para baixar conteúdo ou atualizações. Os recursos instalados funcionam offline.
Content Disclaimer|Aviso sobre os conteúdos
Project NOMAD provides tools to download and access content from third-party sources including Wikipedia, Wikibooks, medical references, educational platforms, and other publicly available resources.|O Project NOMAD oferece ferramentas para baixar e consultar fontes de terceiros, como Wikipédia, Wikilivros, referências médicas, plataformas de ensino e outros recursos públicos.
Crosstalk Solutions, LLC does not create, control, verify, or guarantee the accuracy, completeness, or reliability of any third-party content. The inclusion of any content does not constitute an endorsement.|A Crosstalk Solutions, LLC não cria, controla, verifica nem garante a precisão, a integridade ou a confiabilidade dos conteúdos de terceiros. Sua inclusão não significa endosso.
Users are responsible for evaluating the appropriateness and accuracy of any content they download and use.|Cada usuário deve avaliar a adequação e a precisão dos conteúdos que baixa e utiliza.
Medical and Emergency Information Disclaimer|Aviso sobre informações médicas e de emergência
Some content available through NOMAD includes medical references, first aid guides, and emergency preparedness information. This content is provided for general informational purposes only.|O NOMAD disponibiliza referências médicas, guias de primeiros socorros e preparação para emergências. Esses conteúdos são apenas informativos.
This information is NOT a substitute for professional medical advice, diagnosis, or treatment.|Essas informações NÃO substituem orientação, diagnóstico ou tratamento médico profissional.
Always seek the advice of qualified health providers with questions about medical conditions.|Consulte profissionais de saúde qualificados para dúvidas sobre condições médicas.
Never disregard professional medical advice or delay seeking it because of something you read in offline content.|Não ignore orientações médicas nem adie atendimento por causa de informações lidas em conteúdos offline.
In a medical emergency, call emergency services immediately if available.|Em uma emergência médica, ligue imediatamente para o serviço de emergência, se disponível.
Medical information may become outdated. Verify critical information with current professional sources when possible.|Informações médicas podem ficar desatualizadas. Sempre que possível, confira informações essenciais em fontes profissionais atuais.
Data Storage|Armazenamento de dados
All data associated with Project NOMAD is stored locally on your device:|Todos os dados do Project NOMAD ficam armazenados localmente no seu dispositivo:
Installation Directory:|Pasta de instalação:
Downloaded Content:|Conteúdo baixado:
Application Data:|Dados dos aplicativos:
Stored in Docker volumes on your local system|Armazenados em volumes Docker no sistema local
You maintain full control over your data. Uninstalling NOMAD or deleting these directories will permanently remove all associated data.|Você controla seus dados. Desinstalar o NOMAD ou excluir essas pastas removerá permanentemente os dados associados.
Before answering, ask the Tasks Model whether the passages found are actually about your question, and leave them out (and uncited) when they are not. Helps most with large libraries like Wikipedia or Project Gutenberg, where something always looks similar. Needs a capable Tasks Model (about 8B parameters or larger); smaller models reject too many good matches. Adds a short delay to every reply.|Antes de responder, o modelo auxiliar verifica se os trechos encontrados tratam da pergunta e descarta os irrelevantes. Ajuda em bibliotecas grandes, como a Wikipédia e o Projeto Gutenberg. Exige um modelo auxiliar capaz, com cerca de 8 bilhões de parâmetros ou mais; modelos menores podem rejeitar bons resultados. Acrescenta um pequeno atraso a cada resposta.
Project NOMAD is 100% free and open source — no subscriptions, no paywalls, no catch. If you'd like to help keep the project going, here are a few ways to show your support.|O Project NOMAD é gratuito e de código aberto, sem assinatura ou conteúdo pago. Veja algumas formas de ajudar o projeto a continuar.
Buy Us a Coffee|Ofereça um café
Every contribution helps fund development, server costs, and new content packs for NOMAD. Even a small donation goes a long way.|As contribuições ajudam a financiar o desenvolvimento, os servidores e novos conteúdos. Mesmo uma pequena doação faz diferença.
Support on Ko-fi|Apoiar pelo Ko-fi
Need Help With Your Home Network?|Precisa de ajuda com a rede de casa?
Rogue Support — Conquer Your Home Network|Rogue Support — cuide da sua rede doméstica
Rogue Support is a networking consultation service for home users. Think of it as Uber for computer networking — expert help when you need it.|O Rogue Support oferece consultoria de redes para usuários domésticos, com ajuda especializada quando necessário.
Visit Rogue.Support|Visitar Rogue.Support
Other Ways to Help|Outras formas de ajudar
Star the project on GitHub|Marque o projeto com uma estrela no GitHub
— it helps more people discover NOMAD|— isso ajuda mais pessoas a conhecer o NOMAD
Report bugs and suggest features|Relate falhas e sugira recursos
— every report makes NOMAD better|— cada relato ajuda a melhorar o NOMAD
Share NOMAD with someone who'd use it — word of mouth is the best marketing|Apresente o NOMAD a quem possa aproveitar seus recursos
Join the Discord community|Participe da comunidade no Discord
— hang out, share your build, help other users|— converse, compartilhe sua configuração e ajude outros usuários
• Refreshing data every 30 seconds|• Atualização dos dados a cada 30 segundos
Want to stay updated with the latest from Project NOMAD? Subscribe to receive release notes directly to your inbox. Unsubscribe anytime.|Quer acompanhar as novidades do Project NOMAD? Inscreva-se para receber as notas das versões por e-mail. Você pode cancelar quando quiser.
Qdrant Vector Database|Banco de dados vetorial Qdrant
Vector database for storing and searching embeddings|Banco de dados para armazenar e pesquisar vetores da base de conhecimento
Swiss Army knife for data encoding, encryption, and analysis|Ferramentas de codificação, criptografia e análise de dados
Simple note-taking app with local storage|Aplicativo simples de anotações com armazenamento local
Education Platform (Gen 2)|Plataforma de ensino (geração 2)
Locally-hosted PDF manipulation tool — merge, split, compress, convert, and more|Ferramenta local para unir, dividir, comprimir e converter PDFs
File Browser|Explorador de arquivos
Web-based file manager — browse, upload, download, and organize files on your device|Gerenciador de arquivos no navegador para explorar, enviar, baixar e organizar arquivos
Web-based e-book reader and library manager for your Calibre collection|Leitor de livros digitais e gerenciador da biblioteca Calibre no navegador
IT Tools|Ferramentas de informática
Collection of handy utilities for developers — UUID, hash, encoding, formatters, and more|Utilitários para desenvolvimento: identificadores, resumos digitais, codificação e formatação
Virtual whiteboard for sketching hand-drawn-style diagrams — works fully offline|Quadro virtual para desenhar diagramas à mão livre; funciona offline
Browser-based client for managing Meshtastic mesh radio devices|Aplicativo no navegador para gerenciar rádios em rede Meshtastic
Browser-based client for MeshCore mesh radio devices|Aplicativo no navegador para gerenciar rádios em rede MeshCore
Home inventory and asset management — track everything you own|Inventário doméstico e gestão de bens para organizar seus pertences
Lightweight Bitwarden-compatible password manager server — secure your credentials offline|Gerenciador de senhas compatível com Bitwarden para proteger suas credenciais offline
Open-source media server — stream your video, music, and photo libraries|Servidor de mídia de código aberto para acessar vídeos, músicas e fotos
Translated Library|Biblioteca traduzida
Read the Information Library in another language. Machine translation that works offline, on CPU|Leia a biblioteca em outro idioma com tradução automática offline executada no processador
Medical references, guides, and encyclopedias for healthcare information and emergency preparedness.|Referências médicas, guias e enciclopédias de saúde e preparação para emergências.
Core medical references for first aid, medications, and emergency care. Start here.|Referências essenciais sobre primeiros socorros, medicamentos e emergências. Comece aqui.
capabilities|recursos
map regions|regiões de mapas
content categories|categorias de conteúdo
creator packs|pacotes de criadores
AI models|modelos de IA
Advanced Settings|Configurações avançadas
Distribution|Distribuição
Kernel Version|Versão do núcleo
Architecture|Arquitetura
Platform|Plataforma
Manufacturer|Fabricante
Brand|Marca
Cores|Núcleos
Physical Cores|Núcleos físicos
Virtualization|Virtualização
Vendor|Fornecedor
Links|Atalhos
Ai|IA
capability|recurso
`.trim().split('\n').map((line) => {
    const separator = line.lastIndexOf('|')
    return [line.slice(0, separator), line.slice(separator + 1)]
  })

  const dictionary = new Map(entries)
  const normalize = (value) => value.replace(/\s+/g, ' ').trim()
  const translated = new WeakMap()
  const original = new WeakMap()
  const excluded = 'script,style,noscript,code,pre,textarea,[contenteditable]:not([contenteditable="false"]),[translate="no"],[data-no-translate],.prose,.cm-editor,.monaco-editor,.break-words,.whitespace-pre-wrap,button.group .truncate'
  const attributes = ['placeholder', 'aria-label', 'title', 'alt']

  function translate(value) {
    const normalized = normalize(value)
    const result = dictionary.get(normalized)
    if (result) return value.replace(value.trim(), result)
    const count = normalized.match(/^(\d+) (content categories|creator packs|map regions|AI models|capabilities|capability|files|items|apps|models|books|regions|cores|threads|seconds|minutes|hours|days)(.*)$/)
    if (count && dictionary.has(count[2])) return `${count[1]} ${dictionary.get(count[2])}${count[3]}`
    const suffix = normalized.match(/^(.*?)(\s*[:(]\s*)$/)
    if (suffix && dictionary.has(suffix[1])) return `${dictionary.get(suffix[1])}${suffix[2]}`
    const freeSpace = normalized.match(/^([\d.,]+\s*[KMGT]?B) will remain free$/)
    if (freeSpace) return `${freeSpace[1]} permanecerão livres`
    const headingCount = normalized.match(/^(Installed|Available)\s*\((\d+)\)$/)
    if (headingCount) return `${headingCount[1] === 'Installed' ? 'Instalados' : 'Disponíveis'} (${headingCount[2]})`
    const action = normalized.match(/^(Install|Uninstall|Start|Stop|Restart|Delete|Update|Force Reinstall) (.+)$/)
    if (action) return `${dictionary.get(action[1]) || action[1]} ${dictionary.get(action[2]) || action[2]}`
    if (normalized.includes(' | Project NOMAD')) return normalized.replace(/^(.*?) \| Project NOMAD$/, (_, title) => `${dictionary.get(title) || title} | Project NOMAD`)
    return value
  }

  function allowed(element) {
    if (!element || element.closest(excluded)) return false
    // O corpo dos documentos e as mensagens do usuário preservam o idioma original.
    if (element.closest('[data-message-author-role],.markdown-body,.chat-message,.message-content')) return false
    return true
  }

  function updateText(node) {
    if (!allowed(node.parentElement)) return
    const value = node.nodeValue || ''
    if (translated.get(node) !== value) original.set(node, value)
    const summary = setupSummary(node)
    if (!summary && translated.get(node) === value) return
    const output = summary ? translateSummaryText(node) : translate(value)
    translated.set(node, output)
    if (output !== value) node.nodeValue = output
  }

  function setupSummary(node) {
    if (window.location.pathname !== '/easy-setup') return null
    const paragraph = node.parentElement
    if (!paragraph?.matches('p.text-sm.text-text-secondary')) return null
    if (!paragraph.closest('.flex.justify-between.mt-8.pt-4.border-t')) return null
    return paragraph
  }

  function translateSummaryText(node) {
    const source = original.get(node) ?? node.nodeValue ?? ''
    const value = normalize(source)
    const stems = {
      'map region': ['região de mapas', 'regiões de mapas'],
      'content categor': ['categoria de conteúdo', 'categorias de conteúdo'],
      'creator pack': ['pacote de criador', 'pacotes de criadores'],
      'AI model': ['modelo de IA', 'modelos de IA'],
    }
    if (stems[value]) {
      let previous = node.previousSibling
      while (previous && !/^\d+$/.test(normalize(original.get(previous) ?? previous.nodeValue ?? ''))) previous = previous.previousSibling
      const count = previous ? Number(normalize(original.get(previous) ?? previous.nodeValue ?? '')) : 0
      return source.replace(source.trim(), stems[value][count === 1 ? 0 : 1])
    }
    if (['s', 'ies', 'y'].includes(value)) {
      let previous = node.previousSibling
      while (previous && !normalize(original.get(previous) ?? previous.nodeValue ?? '')) previous = previous.previousSibling
      const stem = normalize(previous ? original.get(previous) ?? previous.nodeValue ?? '' : '')
      if (stems[stem]) return ''
    }
    return translate(source)
  }

  function updateAttributes(element) {
    if (!allowed(element)) return
    if (element.matches('a[href]')) {
      try {
        const target = new URL(element.getAttribute('href'), window.location.origin)
        if (target.pathname === '/biblioteca/index.html' && ['localhost', '127.0.0.1'].includes(target.hostname) && target.port === '8080') {
          element.setAttribute('href', '/biblioteca/index.html')
        }
      } catch { /* Endereços desconhecidos permanecem inalterados. */ }
    }
    for (const attribute of attributes) {
      if (!element.hasAttribute(attribute)) continue
      const value = element.getAttribute(attribute)
      const output = translate(value)
      if (output !== value) element.setAttribute(attribute, output)
    }
  }

  function walk(root) {
    if (root.nodeType === Node.TEXT_NODE) return updateText(root)
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document.body) return
    if (!allowed(root)) return
    updateAttributes(root)
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode(node) {
        if (node.nodeType === Node.ELEMENT_NODE && !allowed(node)) return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      },
    })
    let node
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) updateText(node)
      else updateAttributes(node)
    }
  }

  function start() {
    document.documentElement.lang = 'pt-BR'
    const updateTitle = () => {
      const title = document.title
      const match = title.match(/^(.*?) - (Project NOMAD)$/)
      const output = match ? `${translate(match[1])} - ${match[2]}` : translate(title)
      if (output !== title) document.title = output
    }
    updateTitle()
    new MutationObserver(updateTitle).observe(document.head, { childList: true, characterData: true, subtree: true })
    walk(document.body)
    const pending = new Set()
    let scheduled = false
    const flush = () => {
      scheduled = false
      for (const node of pending) if (node.isConnected) walk(node)
      pending.clear()
    }
    new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'characterData') pending.add(setupSummary(mutation.target) || mutation.target)
        else if (mutation.type === 'attributes') pending.add(mutation.target)
        else for (const node of mutation.addedNodes) pending.add(node)
      }
      if (!scheduled && pending.size) {
        scheduled = true
        requestAnimationFrame(flush)
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: attributes })
    window.NOMAD_PT_BR = Object.freeze({ version: '2026-11-08', entries: dictionary.size })
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true })
  else start()
})()
