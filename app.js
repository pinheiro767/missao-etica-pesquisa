
const rooms={
  campus:'assets/campus.png',classroom:'assets/classroom.png',library:'assets/library.png',
  laboratory:'assets/laboratory.png',computer_lab:'assets/computer_lab.png',
  cafeteria:'assets/cafeteria.png',bedroom:'assets/bedroom.png',creators_room:'assets/creators_room.png'
};
const labels={campus:'Campus',classroom:'Sala de aula',library:'Biblioteca',laboratory:'Laboratório',computer_lab:'Informática',cafeteria:'Cantina',bedroom:'Quarto',creators_room:'Sala dos Criadores'};

const CASES = [
{id:'contribuicoes',cat:'Créditos',title:'Quem realmente contribuiu?',kicker:'PUBLICAÇÃO · CONTRIBUIÇÕES',icon:'assets/folder.png',
scene:'O grupo terminou um artigo e um serious game. Uma participante não programou, mas ajudou a conceber a atividade, revisou conteúdo científico, testou acessibilidade e apontou falhas que mudaram o produto final.',
stakes:'Excluir essa participação pode apagar contribuição intelectual real. Ao mesmo tempo, chamar todos de “programadores” também seria incorreto.',
question:'Como registrar essa participação de forma ética?',principle:'Crédito deve refletir contribuições reais, com papéis descritos de modo fiel.',
choices:[
{label:'Incluir a participante e descrever exatamente o que ela fez',hint:'Concepção, revisão, testes e acessibilidade, sem atribuir funções inexistentes.',delta:[9,6,6],result:'Boa decisão. O crédito fica verificável e proporcional ao trabalho realizado.',practice:'Use uma declaração de contribuições. Quando o veículo adotar uma taxonomia específica, siga as categorias exigidas por ele.'},
{label:'Omitir porque ela não escreveu o código',hint:'Considerar programação como a única contribuição relevante.',delta:[-10,-4,-7],result:'Isso reduz indevidamente o trabalho coletivo a uma única tarefa técnica.',practice:'Concepção, análise, revisão, curadoria, validação e outras atividades podem ser relevantes; avalie os critérios do periódico ou instituição.'},
{label:'Colocar todos como programadores',hint:'Dar crédito, mas com uma função que não corresponde ao trabalho.',delta:[-4,-1,-2],result:'Dar crédito com função falsa também compromete a transparência.',practice:'O objetivo não é apenas “colocar o nome”, mas dizer corretamente quem fez o quê.'}
]},
{id:'agradecimento',cat:'Créditos',title:'Autoria ou agradecimento?',kicker:'PUBLICAÇÃO · AUTORIA x AGRADECIMENTO',icon:'assets/article.png',
scene:'Uma técnica ajudou a reservar laboratório, organizar materiais e resolver questões logísticas, mas não participou das decisões intelectuais, análise ou redação do artigo.',
stakes:'A ajuda foi importante e merece reconhecimento, mas autoria e agradecimento não são sinônimos.',
question:'Qual é a forma mais transparente de reconhecer essa ajuda?',principle:'Distinguir contribuição para autoria de apoio técnico, administrativo ou logístico.',
choices:[
{label:'Agradecer nominalmente, com consentimento, descrevendo a ajuda',hint:'Reconhecimento explícito sem transformar apoio logístico em autoria.',delta:[9,6,5],result:'Essa solução preserva tanto o reconhecimento quanto a precisão sobre o papel desempenhado.',practice:'Verifique a política do periódico e peça consentimento antes de identificar alguém nos agradecimentos.'},
{label:'Adicionar como autora apenas para “retribuir o favor”',hint:'Autoria honorária por cortesia.',delta:[-10,-5,-7],result:'Autoria por cortesia pode distorcer responsabilidade e contribuição.',practice:'Autoria deve seguir os critérios do veículo; apoio que não os atende pode ser reconhecido em agradecimentos ou declaração de contribuições.'},
{label:'Não mencionar ninguém porque “era obrigação do setor”',hint:'Apagar uma colaboração que foi relevante para o processo.',delta:[-4,-2,-3],result:'Nem toda ajuda precisa virar autoria, mas reconhecer apoio relevante aumenta a transparência.',practice:'Crie uma seção de agradecimentos consistente e proporcional ao apoio recebido.'}
]},
{id:'estudantes',cat:'Créditos',title:'Os estudantes ajudaram a construir',kicker:'PUBLICAÇÃO · PARTICIPAÇÃO DISCENTE',icon:'assets/knowledge.png',
scene:'Estudantes criaram protótipos, sugeriram mudanças de roteiro, testaram o jogo, identificaram problemas e algumas sugestões foram incorporadas ao produto e ao manuscrito.',
stakes:'Chamar tudo de “mera ajuda” sem avaliar o conteúdo da participação pode apagar contribuições reais.',
question:'O que fazer antes de fechar autores e créditos?',principle:'Avaliar contribuição individual, não status hierárquico.',
choices:[
{label:'Mapear o que cada estudante fez e aplicar os mesmos critérios de contribuição',hint:'Reconhecer autoria quando os critérios forem atendidos; caso contrário, registrar a colaboração adequadamente.',delta:[10,6,7],result:'Correto. Ser estudante não diminui nem aumenta automaticamente o direito a crédito.',practice:'Documente contribuições durante o projeto e discuta autoria antes da submissão, não apenas no final.'},
{label:'Não incluir estudantes porque autoria é só para docentes',hint:'Usar hierarquia institucional como critério de autoria.',delta:[-12,-5,-8],result:'Hierarquia não deve substituir critérios de contribuição e responsabilidade.',practice:'Aplique regras consistentes a todas as pessoas, independentemente do cargo.'},
{label:'Colocar todos os alunos como autores sem avaliar participação',hint:'Usar inclusão automática para evitar conflito.',delta:[-5,-3,-2],result:'Inclusão automática também pode tornar a lista de autores imprecisa.',practice:'Avalie contribuição individual e use agradecimentos ou outras formas de crédito quando apropriado.'}
]},
{id:'material',cat:'Créditos',title:'Quem criou o recurso visual?',kicker:'PUBLICAÇÃO · RECURSO VISUAL E MATERIAL EDUCATIVO',icon:'assets/article.png',
scene:'Uma publicação apresenta um infográfico e um recurso digital desenvolvidos durante um projeto. Uma pessoa concebeu a ideia visual, outra organizou o conteúdo científico, outra produziu a arte final e uma quarta realizou testes de usabilidade que levaram a mudanças importantes.',
stakes:'Usar apenas “elaboração própria” pode esconder a natureza colaborativa do recurso e impedir que o leitor saiba quem contribuiu em cada etapa.',
question:'Como registrar esse recurso de forma transparente e ética?',principle:'Rastreabilidade do material e reconhecimento fiel das contribuições que o originaram.',
choices:[
{label:'Identificar o projeto e descrever quem concebeu, produziu, revisou e testou',hint:'Separar claramente os papéis de cada participante.',delta:[10,7,7],result:'Essa escolha torna a cadeia de contribuição visível e evita que o trabalho coletivo seja atribuído de forma genérica.',practice:'Na declaração de contribuições, descreva funções como concepção, curadoria de conteúdo, design/visualização, desenvolvimento, validação e revisão conforme a política do veículo.'},
{label:'Usar somente “Fonte: elaboração própria”',hint:'Tratar uma expressão genérica como suficiente para representar todo o trabalho.',delta:[-8,-4,-6],result:'Uma indicação genérica pode ser insuficiente quando várias pessoas contribuíram de maneiras diferentes.',practice:'Quando houver trabalho colaborativo, complemente a fonte com créditos ou declaração de contribuições adequados.'},
{label:'Citar apenas quem finalizou a arte',hint:'Confundir acabamento visual com toda a criação intelectual do recurso.',delta:[-6,-3,-4],result:'Finalização gráfica é uma contribuição específica, mas não substitui concepção, conteúdo, testes ou revisão.',practice:'Reconheça cada papel de modo proporcional e verificável.'}
]},
{id:'ordem',cat:'Autoria',title:'Quem vem primeiro na lista?',kicker:'PUBLICAÇÃO · ORDEM DE AUTORES',icon:'assets/reputation.png',
scene:'Duas pessoas contribuíram intensamente, mas de maneiras diferentes. Surge uma discussão sobre quem deve aparecer primeiro.',
stakes:'A ordem de autoria pode ter significados diferentes entre áreas e periódicos.',
question:'Qual é a melhor conduta?',principle:'Combinar critérios antes da submissão e documentar a decisão.',
choices:[
{label:'Conversar sobre a regra da área/veículo e documentar o acordo',hint:'Relacionar ordem e declaração de contribuições.',delta:[8,6,5],result:'Boa prática. A transparência reduz conflitos e evita decisões baseadas apenas em poder hierárquico.',practice:'Defina autoria e ordem cedo, revise quando as contribuições mudarem e registre o acordo.'},
{label:'Colocar automaticamente a pessoa mais sênior primeiro',hint:'Usar hierarquia como critério único.',delta:[-8,-4,-6],result:'Senioridade, sozinha, não demonstra contribuição.',practice:'Use critérios explícitos e compatíveis com a disciplina e o periódico.'},
{label:'Decidir apenas no dia da submissão',hint:'Adiar toda conversa até o último momento.',delta:[-5,-2,-4],result:'Adiar a conversa aumenta risco de conflito e decisões apressadas.',practice:'Trate autoria como parte do planejamento do projeto.'}
]},
{id:'honoraria',cat:'Autoria',title:'“Coloque meu nome porque sou chefe”',kicker:'PUBLICAÇÃO · AUTORIA HONORÁRIA',icon:'assets/ethics.png',
scene:'Uma pessoa em posição de chefia pede para ser incluída como autora, embora não tenha participado do trabalho de forma compatível com os critérios do veículo.',
stakes:'A pressão hierárquica pode transformar autoria em moeda de poder.',
question:'Como agir?',principle:'Autoria não deve ser concedida apenas por cargo, prestígio ou favor.',
choices:[
{label:'Explicar os critérios e oferecer reconhecimento apenas se corresponder à contribuição real',hint:'Manter uma decisão documentada e profissional.',delta:[10,5,6],result:'Essa resposta protege a integridade da lista de autores.',practice:'Se houver conflito, use os canais institucionais adequados e preserve documentação das contribuições.'},
{label:'Adicionar para evitar problema com a chefia',hint:'Autoria por pressão ou conveniência.',delta:[-12,-4,-9],result:'Isso cria autoria honorária e pode distorcer responsabilidade e mérito.',practice:'A lista de autores deve ser defensável com base no trabalho realizado.'},
{label:'Adicionar, mas sem informar aos outros autores',hint:'Resolver discretamente sem consenso.',delta:[-11,-5,-8],result:'Além do problema de autoria, isso quebra a transparência dentro do próprio grupo.',practice:'Mudanças de autoria devem ser discutidas com as pessoas envolvidas e conforme as regras do periódico.'}
]},
{id:'fantasma',cat:'Autoria',title:'Quem escreveu desapareceu dos créditos',kicker:'PUBLICAÇÃO · AUTORIA FANTASMA',icon:'assets/folder.png',
scene:'Uma pessoa contribuiu substancialmente para análise e redação, mas o grupo considera retirar seu nome para evitar conflito político ou pessoal.',
stakes:'Omissão intencional de contribuição substancial pode produzir autoria fantasma.',
question:'Qual conduta é mais adequada?',principle:'Não apagar contribuições relevantes por conveniência.',
choices:[
{label:'Avaliar objetivamente a contribuição e manter o crédito compatível',hint:'Separar conflito pessoal de critérios acadêmicos.',delta:[10,6,7],result:'Boa escolha. Conflitos interpessoais não devem reescrever a história do trabalho.',practice:'Use registros de versões, reuniões e tarefas para apoiar a avaliação.'},
{label:'Retirar o nome porque o relacionamento ficou ruim',hint:'Transformar autoria em punição pessoal.',delta:[-12,-5,-9],result:'Isso mistura conflito relacional com atribuição acadêmica.',practice:'Se houver disputa, trate-a pelos canais adequados sem apagar evidências de contribuição.'},
{label:'Manter o texto da pessoa, mas retirar o nome',hint:'Aproveitar a contribuição sem reconhecer quem a realizou.',delta:[-13,-6,-10],result:'Essa é uma forma especialmente grave de apagar contribuição.',practice:'Não reutilize contribuição substancial como se fosse de outras pessoas.'}
]},
{id:'citacaoideia',cat:'Citação',title:'A ideia veio de outra pessoa',kicker:'PUBLICAÇÃO · CITAÇÃO DE IDEIAS',icon:'assets/knowledge.png',
scene:'Você reescreveu com suas próprias palavras uma ideia central encontrada em outro artigo.',
stakes:'Paráfrase muda a forma, mas não muda a origem intelectual da ideia.',
question:'É preciso citar?',principle:'Ideias, dados e argumentos de terceiros continuam exigindo atribuição mesmo quando parafraseados.',
choices:[
{label:'Sim. Parafrasear e citar a fonte',hint:'Manter a autoria intelectual rastreável.',delta:[9,7,5],result:'Correto. A citação não é exigida apenas para cópia literal.',practice:'Faça a referência de modo que o leitor consiga localizar a origem.'},
{label:'Não, porque as palavras agora são minhas',hint:'Confundir redação própria com ideia própria.',delta:[-10,-6,-7],result:'Reescrever não transforma a ideia em criação original.',practice:'Diferencie claramente seu argumento das ideias que sustentam ou antecedem o seu.'},
{label:'Citar apenas na bibliografia, sem relacionar ao trecho',hint:'Deixar a origem ambígua.',delta:[-4,-2,-3],result:'Uma bibliografia geral pode não indicar qual afirmação veio de qual fonte.',practice:'Use citação no ponto relevante do texto conforme o estilo adotado.'}
]},
{id:'figura',cat:'Citação',title:'Posso copiar uma figura?',kicker:'PUBLICAÇÃO · FIGURAS E LICENÇAS',icon:'assets/article.png',
scene:'Uma figura publicada explica perfeitamente seu tema. Você quer colocá-la no novo artigo.',
stakes:'Citar a fonte e ter permissão de reutilização são questões relacionadas, mas não idênticas.',
question:'Qual é a melhor conduta?',principle:'Atribuição e respeito às condições de reutilização.',
choices:[
{label:'Verificar licença/permissão e citar a fonte corretamente',hint:'Se adaptar, indicar a origem dos dados ou da ideia também.',delta:[9,7,5],result:'Correto. A citação preserva autoria; a licença define o que pode ser reutilizado.',practice:'Consulte a política do editor, a licença do artigo e as exigências do periódico de destino.'},
{label:'Copiar porque o artigo está na internet',hint:'Tratar acesso público como licença irrestrita.',delta:[-10,-5,-7],result:'Disponível online não significa automaticamente livre para qualquer reprodução.',practice:'Cheque as condições de uso antes de republicar imagens ou tabelas.'},
{label:'Trocar as cores da figura e não citar',hint:'Alterar o design e apagar a origem.',delta:[-9,-5,-6],result:'Mudança estética não elimina a origem intelectual ou dos dados.',practice:'Adaptações também devem reconhecer a fonte.'}
]},
{id:'reuso',cat:'Publicação',title:'É meu texto antigo. Posso repetir?',kicker:'PUBLICAÇÃO · REUTILIZAÇÃO DE TEXTO',icon:'assets/article.png',
scene:'Você está escrevendo um novo artigo e quer reutilizar longos trechos de uma publicação anterior sua sem informar a origem.',
stakes:'Ser autor do texto anterior não elimina deveres de transparência editorial e pode gerar publicação redundante ou reutilização inadequada.',
question:'Qual caminho é mais seguro?',principle:'Transparência sobre material previamente publicado.',
choices:[
{label:'Citar o trabalho anterior e seguir a política do periódico sobre reutilização',hint:'Reescrever quando necessário e deixar clara a relação entre os trabalhos.',delta:[9,6,5],result:'Boa escolha. O leitor e o editor conseguem entender o que é novo e o que já foi publicado.',practice:'Consulte as instruções do periódico para texto, métodos, figuras e dados previamente publicados.'},
{label:'Copiar porque o texto é meu',hint:'Omitir que o material já foi publicado.',delta:[-9,-4,-6],result:'A falta de transparência pode induzir o leitor a pensar que tudo é inédito.',practice:'Diferencie reutilização legítima, devidamente informada, de publicação redundante.'},
{label:'Mudar algumas palavras e não citar',hint:'Usar alteração superficial para esconder a origem.',delta:[-8,-4,-5],result:'Alterações superficiais não resolvem a falta de transparência.',practice:'Informe a relação com o trabalho anterior.'}
]},
{id:'ia',cat:'Publicação',title:'IA ajudou na redação',kicker:'PUBLICAÇÃO · IA GENERATIVA',icon:'assets/laptop.png',
scene:'O grupo usou IA generativa para revisar linguagem, explorar estrutura e depurar código, com revisão humana posterior.',
stakes:'A ferramenta pode participar do processo, mas não assume responsabilidade pelo conteúdo.',
question:'Como relatar o uso?',principle:'Transparência, supervisão humana e responsabilidade dos autores.',
choices:[
{label:'Seguir a política do periódico e declarar o uso quando exigido ou material',hint:'Explicar finalidade e revisão humana.',delta:[8,6,4],result:'Boa escolha. A transparência ajuda o leitor a entender o processo.',practice:'Nunca trate a ferramenta como responsável pelo conteúdo; os autores humanos devem verificar fatos, referências e resultados.'},
{label:'Esconder para o trabalho parecer totalmente manual',hint:'Omitir deliberadamente a ferramenta.',delta:[-8,-3,-5],result:'A ocultação pode contrariar políticas do veículo e reduzir rastreabilidade.',practice:'Consulte sempre as regras atuais do periódico ou instituição.'},
{label:'Aceitar referências geradas sem conferir',hint:'Presumir que toda saída da IA é correta.',delta:[-9,-7,-5],result:'Ferramentas podem inventar referências ou cometer erros.',practice:'Cheque fontes, dados, código e citações antes da submissão.'}
]},
{id:'conflito',cat:'Publicação',title:'Financiamento e conflito de interesse',kicker:'PUBLICAÇÃO · TRANSPARÊNCIA',icon:'assets/reputation.png',
scene:'Um parceiro financiou parte do projeto e também tem interesse no resultado, mas não participou da análise.',
stakes:'O leitor precisa conhecer relações que possam ser percebidas como influenciando o trabalho.',
question:'O que fazer na submissão?',principle:'Declarar financiamento e potenciais conflitos conforme as regras do veículo.',
choices:[
{label:'Declarar a fonte de financiamento e relações relevantes',hint:'Seguir os campos exigidos pelo periódico.',delta:[8,5,5],result:'Correto. Transparência não significa que houve viés; significa permitir que o leitor avalie o contexto.',practice:'Informe também, quando exigido, o papel do financiador no desenho, análise, redação ou decisão de publicar.'},
{label:'Omitir porque “não interferiram diretamente”',hint:'Decidir sozinho que a relação não importa.',delta:[-7,-3,-5],result:'O periódico pode exigir essa informação mesmo sem interferência direta.',practice:'Siga as definições e formulários do veículo de publicação.'},
{label:'Mencionar apenas depois que alguém perguntar',hint:'Tratar a declaração como opcional.',delta:[-5,-2,-4],result:'Transparência deve ocorrer no processo de submissão quando exigida.',practice:'Prepare essas informações antes de submeter o manuscrito.'}
]},
{id:'correcao',cat:'Publicação',title:'Descobriu um erro depois de publicar',kicker:'PUBLICAÇÃO · CORREÇÃO',icon:'assets/ethics.png',
scene:'Após a publicação, você percebe um erro que altera uma tabela, mas não necessariamente toda a conclusão.',
stakes:'Erros podem acontecer. O problema ético aumenta quando eles são escondidos.',
question:'Qual é a conduta responsável?',principle:'Corrigir o registro acadêmico quando um erro relevante é identificado.',
choices:[
{label:'Avaliar o impacto e comunicar o periódico rapidamente',hint:'Fornecer a correção e documentação necessária.',delta:[10,6,6],result:'Boa decisão. Corrigir o registro fortalece a confiabilidade da literatura.',practice:'O tipo de aviso — correção, retratação ou outro — depende da gravidade e da política editorial.'},
{label:'Ignorar porque ninguém percebeu',hint:'Evitar constrangimento.',delta:[-11,-4,-8],result:'Silenciar um erro relevante mantém informação incorreta no registro científico.',practice:'Trate correções como parte da responsabilidade pós-publicação.'},
{label:'Alterar apenas a versão pessoal do PDF',hint:'Mudar sua cópia sem informar o periódico.',delta:[-7,-3,-5],result:'Isso não corrige a versão oficial nem informa os leitores.',practice:'Use o processo editorial formal.'}
]},
{id:'dados',cat:'Integridade',title:'Os dados não confirmaram a hipótese',kicker:'PUBLICAÇÃO · INTEGRIDADE DOS DADOS',icon:'assets/ethics.png',
scene:'Os resultados não confirmam a hipótese. Alguém sugere remover observações válidas para a conclusão parecer mais convincente.',
stakes:'A expectativa do grupo não deve determinar quais dados “merecem existir”.',
question:'Qual decisão preserva a integridade?',principle:'Fidelidade aos dados e critérios analíticos justificáveis.',
choices:[
{label:'Relatar os resultados e discutir limitações',hint:'Preservar dados e explicar critérios de análise.',delta:[10,8,6],result:'Correto. Resultados inesperados também têm valor científico.',practice:'Documente critérios de inclusão/exclusão e mantenha rastreabilidade das decisões analíticas.'},
{label:'Excluir o que atrapalha a hipótese',hint:'Remover apenas porque o resultado ficou inconveniente.',delta:[-13,-7,-10],result:'Isso compromete a validade da análise e pode configurar manipulação.',practice:'Exclusões precisam de justificativa metodológica, não narrativa.'},
{label:'Escolher apenas o gráfico que parece favorável',hint:'Ocultar resultados importantes sem explicar.',delta:[-9,-5,-7],result:'Seleção parcial pode induzir o leitor a uma interpretação distorcida.',practice:'Relate resultados relevantes de forma equilibrada.'}
]},
{id:'disputa',cat:'Autoria',title:'Há uma disputa antes da submissão',kicker:'PUBLICAÇÃO · CONFLITO DE AUTORIA',icon:'assets/choice.png',
scene:'Duas pessoas discordam sobre autoria. A submissão está marcada para hoje e o grupo pensa em enviar mesmo sem consenso.',
stakes:'Submeter primeiro e “resolver depois” pode agravar o conflito e criar problemas editoriais.',
question:'Qual é a melhor decisão?',principle:'Resolver autoria de modo documentado antes da submissão sempre que possível.',
choices:[
{label:'Adiar a submissão e revisar contribuições, critérios e evidências',hint:'Buscar mediação institucional se necessário.',delta:[9,6,5],result:'Boa escolha. Um pequeno atraso pode evitar uma disputa maior depois.',practice:'Reúna registros de versões, tarefas e decisões; consulte políticas institucionais e do periódico.'},
{label:'Submeter com a lista que a pessoa mais poderosa escolher',hint:'Usar hierarquia para encerrar a discussão.',delta:[-11,-5,-8],result:'Poder hierárquico não substitui critérios de autoria.',practice:'Use processo transparente e, se preciso, mediação apropriada.'},
{label:'Enviar sem avisar uma das pessoas envolvidas',hint:'Criar fato consumado.',delta:[-12,-5,-9],result:'Isso reduz transparência e pode gerar contestação editorial.',practice:'A lista de autores deve ser conhecida e aceita conforme as regras do veículo.'}
]}
];

const clamp=n=>Math.max(0,Math.min(100,n));
const $=s=>document.querySelector(s);
const scene=$('#scene'),player=$('#player'),playerImg=$('#player img'),modal=$('#modal'),content=$('#modalContent');
const srLive=$('#srLive'),accessPanel=$('#accessPanel');

let state;
try{state=JSON.parse(localStorage.getItem('eticaGameStateV11')||'null')}catch(e){state=null}
if(!state) state={version:11,room:'campus',x:4,y:9,energy:80,knowledge:35,reputation:50,ethics:50,done:[],settings:{}};
state.room=rooms[state.room]?state.room:'classroom';
state.x=Number.isFinite(state.x)?state.x:4;
state.y=Number.isFinite(state.y)?state.y:9;
state.done=Array.isArray(state.done)?[...new Set(state.done.filter(id=>CASES.some(c=>c.id===id)))]:[];
state.settings=Object.assign({sound:true,volume:.70,tts:false,font:'normal',contrast:false,motion:false},state.settings||{});

const sfx={click:new Audio('assets/audio/click.wav'),success:new Audio('assets/audio/success.wav'),warning:new Audio('assets/audio/warning.wav'),mission:new Audio('assets/audio/mission.wav'),step:new Audio('assets/audio/step.wav')};
Object.values(sfx).forEach(a=>a.preload='auto');

let saveTimer=null,lastStepSound=0,lastEnergyPaint=0;
function persist(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>{try{localStorage.setItem('eticaGameStateV11',JSON.stringify(state))}catch(e){}},300)}
function playSound(name){if(!state.settings.sound||state.settings.volume<=0||!sfx[name])return;try{const a=sfx[name].cloneNode();a.volume=state.settings.volume;a.play().catch(()=>{})}catch(e){}}
function announce(t){if(!srLive)return;srLive.textContent='';setTimeout(()=>srLive.textContent=t,20)}
function speak(t,force=false){if(!('speechSynthesis'in window)||(!state.settings.tts&&!force))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(t).replace(/<[^>]*>/g,' '));u.lang='pt-BR';u.rate=.95;speechSynthesis.speak(u)}
function applySettings(){
 document.documentElement.dataset.font=state.settings.font==='normal'?'':state.settings.font;
 document.documentElement.dataset.contrast=state.settings.contrast?'high':'';
 document.documentElement.dataset.motion=state.settings.motion?'reduce':'';
 $('#contrastToggle')?.setAttribute('aria-pressed',String(state.settings.contrast));$('#motionToggle')?.setAttribute('aria-pressed',String(state.settings.motion));$('#ttsToggle')?.setAttribute('aria-pressed',String(state.settings.tts));$('#soundToggle')?.setAttribute('aria-pressed',String(state.settings.sound));$('#soundBtn')?.setAttribute('aria-pressed',String(state.settings.sound));
 if($('#soundBtn'))$('#soundBtn').textContent=state.settings.sound?'🔊':'🔇';if($('#volumeRange'))$('#volumeRange').value=Math.round(state.settings.volume*100);if($('#volumeValue'))$('#volumeValue').textContent=Math.round(state.settings.volume*100)+'%';
}

function applyDepthVisual(){
  // y=7 = frente; y=43 = fundo.
  const t=(state.y-7)/(43-7);
  const scale=1.14-(t*0.36);
  const z=Math.round(100-(t*60));
  player.style.transform=`scale(${scale})`;
  player.style.zIndex=String(z);
  player.dataset.depth=t<0.33?'frente':t>0.66?'fundo':'meio';
}

function paintStats(){$('#energy').textContent=Math.round(state.energy);$('#knowledge').textContent=Math.round(state.knowledge);$('#reputation').textContent=Math.round(state.reputation);$('#ethics').textContent=Math.round(state.ethics)}
function updateObjective(){const n=state.done.length,total=CASES.length,here=cluesHere().filter(c=>!state.done.includes(c.id)).length;$('#objective').textContent=n<total?`Exploração ética: ${n}/${total} pistas resolvidas · ${here} neste cenário. Caminhe e procure os ? brilhantes.`:`Todas as ${total} pistas resolvidas!`;}

function updateDepthIndicator(){
 let el=document.getElementById('depthIndicator');
 if(!el){
   el=document.createElement('div');
   el.id='depthIndicator';el.className='depthIndicator';
   scene.appendChild(el);
 }
 const zone=state.y<18?'FRENTE':state.y>32?'FUNDO':'MEIO';
 el.textContent=`Profundidade: ${zone}`;
}

function renderRoom(){scene.className='scene '+state.room;sizeWorldForDevice();player.style.left=state.x+'%';player.style.bottom=state.y+'%';applyDepthVisual();$('#mentor').style.display=state.room==='classroom'?'block':'none';document.querySelectorAll('.portal').forEach(p=>p.style.display=state.room==='classroom'?'block':'none');paintStats();updateObjective();applySettings();renderObstacles();renderClues();updateDepthIndicator();requestAnimationFrame(()=>centerCamera(false));persist()}


function sizeWorldForDevice(){
  const game=$('#game');
  if(!game||!scene)return;
  const vw=game.clientWidth||window.innerWidth;
  const vh=game.clientHeight||Math.max(320,window.innerHeight*0.65);
  const portrait=vw<760 && vw<vh;
  const compact=vw<760;
  // Keep a landscape playfield on narrow portrait phones instead of crushing the scene.
  const target=portrait?Math.max(vw,Math.round(vh*1.78),860):compact?Math.max(vw,760):vw;
  scene.style.width=target+'px';
  scene.style.minWidth=target+'px';
  scene.style.height='100%';
  requestAnimationFrame(()=>centerCamera(false));
}
function centerCamera(smooth=true){
  const game=$('#game');
  if(!game||!scene)return;
  const playerCenter=(state.x/100)*scene.scrollWidth + (player.offsetWidth/2);
  const max=Math.max(0,scene.scrollWidth-game.clientWidth);
  const desired=Math.max(0,Math.min(max,playerCenter-game.clientWidth*0.5));
  try{game.scrollTo({left:desired,behavior:(smooth&&!state.settings.motion)?'smooth':'auto'});}
  catch(e){game.scrollLeft=desired;}
}

let facing='right',walkFrame=0,walkClock=null;
function setFrame(dir,idx){playerImg.src=`assets/hero_frames/${dir}_${idx}.png`}
function startWalking(dir){facing=dir;if(state.settings.motion){setFrame(dir,0);return}if(!walkClock){setFrame(dir,0);walkClock=setInterval(()=>{walkFrame=(walkFrame+1)%4;setFrame(facing,walkFrame)},120)}}
function stopWalking(){if(walkClock){clearInterval(walkClock);walkClock=null}walkFrame=0;setFrame(facing,0)}
function moveDir(dir){
 let nx=state.x,ny=state.y;
 if(dir==='left')nx-=1.5;
 if(dir==='right')nx+=1.5;
 if(dir==='up')ny+=2.25;
 if(dir==='down')ny-=2.25;
 nx=Math.max(2,Math.min(86,nx));ny=Math.max(7,Math.min(43,ny));
 const face=dir==='up'?'back':dir==='down'?'front':dir;
 startWalking(face);
 if(dir==='up') announce('Andando para trás, em direção ao fundo do cenário.');
 if(dir==='down') announce('Andando para frente, em direção à frente do cenário.');
 if(!blocked(nx,ny)){state.x=nx;state.y=ny;player.style.left=state.x+'%';player.style.bottom=state.y+'%';applyDepthVisual();state.energy=clamp(state.energy-.035);}
 else{playSound('warning');announce('Há um obstáculo. Pule para atravessar.');}
 const now=performance.now();
 if(now-lastEnergyPaint>260){$('#energy').textContent=Math.round(state.energy);lastEnergyPaint=now}
 if(now-lastStepSound>340){playSound('step');lastStepSound=now}
 updateNearbyClue();updateDepthIndicator();centerCamera(false);persist();clearTimeout(moveDir._t);moveDir._t=setTimeout(stopWalking,170);
}

function open(html,immersive=false){content.innerHTML=html;modal.classList.remove('hidden');modal.classList.toggle('immersive',immersive);playSound('click');announce(content.innerText);setTimeout(()=>modal.querySelector('.panel')?.focus(),20);if(state.settings.tts)speak(content.innerText)}
function close(){modal.classList.add('hidden');modal.classList.remove('immersive');if('speechSynthesis'in window)speechSynthesis.cancel();announce('Janela fechada.')}
function statDelta(v){return `${v>=0?'+':''}${v}`}

function scoreLevel(v){
  if(v>=80)return ['Excelente','excellent'];
  if(v>=60)return ['Forte','good'];
  if(v>=40)return ['Em desenvolvimento','mid'];
  return ['Atenção','low'];
}
function scoreCard(label,value,icon){
  const [txt,cls]=scoreLevel(value);
  return `<div class="scoreTile ${cls}" data-score="${label.toLowerCase()}"><div class="scoreTop"><img src="${icon}" alt=""><span>${label}</span><b>${Math.round(value)}</b></div><div class="scoreTrack" aria-hidden="true"><span style="width:${Math.round(value)}%"></span></div><small>${txt}</small></div>`;
}
function currentScorePanel(){
  return `<section class="scorePanel"><div class="scorePanelHead"><div><div class="kicker">SEU DESEMPENHO</div><h3>Pontuação atual</h3></div><span class="scoreTotal">${Math.round((state.ethics+state.knowledge+state.reputation)/3)}</span></div>
  <div class="scoreGrid">
    ${scoreCard('Ética',state.ethics,'assets/ethics.png')}
    ${scoreCard('Conhecimento',state.knowledge,'assets/knowledge.png')}
    ${scoreCard('Reputação',state.reputation,'assets/reputation.png')}
  </div></section>`;
}
function flashHud(deltas){
  const ids=[['ethics',deltas[0]],['knowledge',deltas[1]],['reputation',deltas[2]]];
  ids.forEach(([id,v])=>{
    const el=document.getElementById(id);
    const card=el?.closest('.stat') || el?.parentElement;
    if(!card)return;
    card.classList.remove('scoreGain','scoreLoss');
    void card.offsetWidth;
    card.classList.add(v>=0?'scoreGain':'scoreLoss');
    setTimeout(()=>card.classList.remove('scoreGain','scoreLoss'),900);
  });
}
function getCase(id){return CASES.find(c=>c.id===id)}
function firstUndone(){return CASES.find(x=>!state.done.includes(x.id))||CASES[0]}
const CLUE_ROOMS=['campus','classroom','library','laboratory','computer_lab','cafeteria','bedroom'];const CLUE_X=[16,36,58,76,24,48,70,84,30,62,80,42];
function clueData(){return CASES.map((c,i)=>({id:c.id,room:CLUE_ROOMS[i%CLUE_ROOMS.length],x:CLUE_X[i%CLUE_X.length],y:[12,26,38,18,34,22,30,16,36,24,40,20,32,14,28][i%15],n:i+1}))}function cluesHere(){return clueData().filter(c=>c.room===state.room)}
function nearestClue(){const a=cluesHere().filter(c=>!state.done.includes(c.id));let b=null,d=999;for(const c of a){let x=Math.hypot(state.x-c.x,(state.y-c.y)*1.15);if(x<d){b=c;d=x}}return b&&d<=9?b:null}

const ROOM_OBSTACLES={
 campus:[{x:28,y:11,t:'📚'},{x:52,y:18,t:'🎒'},{x:73,y:28,t:'📦'}],
 classroom:[{x:30,y:15,t:'📚'},{x:56,y:27,t:'🪑'},{x:77,y:17,t:'🎒'}],
 library:[{x:25,y:22,t:'📚'},{x:50,y:34,t:'📦'},{x:74,y:16,t:'📚'}],
 laboratory:[{x:31,y:18,t:'🧰'},{x:59,y:30,t:'📦'},{x:76,y:14,t:'🧪'}],
 computer_lab:[{x:27,y:14,t:'🪑'},{x:53,y:28,t:'💻'},{x:75,y:19,t:'📦'}],
 cafeteria:[{x:32,y:16,t:'🪑'},{x:57,y:29,t:'📦'},{x:78,y:13,t:'🪑'}],
 bedroom:[{x:24,y:15,t:'🎒'},{x:48,y:28,t:'📚'},{x:72,y:18,t:'🧺'}],
 creators_room:[{x:36,y:18,t:'📚'},{x:68,y:27,t:'🏆'}]
};
let isJumping=false;
function obstaclesHere(){return ROOM_OBSTACLES[state.room]||[]}
function renderObstacles(){
 scene.querySelectorAll('.worldObstacle').forEach(e=>e.remove());
 obstaclesHere().forEach((o,i)=>{const d=document.createElement('div');d.className='worldObstacle';d.style.left=o.x+'%';d.style.bottom=o.y+'%';d.setAttribute('aria-hidden','true');d.innerHTML=`<span>${o.t}</span>`;scene.appendChild(d);});
}
function blocked(nx,ny){
 if(isJumping)return false;
 return obstaclesHere().some(o=>Math.hypot(nx-o.x,(ny-o.y)*1.1)<7.2);
}
function jump(){
 if(isJumping)return;
 isJumping=true;player.classList.add('jumping');playSound('click');announce('Personagem pulando.');
 setTimeout(()=>{isJumping=false;player.classList.remove('jumping')},620);
}

function renderClues(){scene.querySelectorAll('.worldClue').forEach(e=>e.remove());cluesHere().forEach(c=>{const done=state.done.includes(c.id),b=document.createElement('button');b.className='worldClue'+(done?' solved':'');b.style.left=c.x+'%';b.style.bottom=c.y+'%';b.dataset.case=c.id;b.innerHTML=`<span class="clueGlow"></span><span class="clueIcon">${done?'✓':'?'}</span><small>${done?'CONCLUÍDA':'PISTA '+c.n}</small>`;b.onclick=()=>Math.hypot(state.x-c.x,(state.y-c.y)*1.15)<=9?(done?openCase(c.id):revealClue(c.id)):(playSound('warning'),announce('Aproxime-se da pista.'));scene.appendChild(b)});updateNearbyClue()}
function updateNearbyClue(){const c=nearestClue(),b=$('#interactBtn');b.textContent=c?'🔎 INVESTIGAR PISTA':'INTERAGIR';b.classList.toggle('ready',!!c);scene.querySelectorAll('.worldClue').forEach(e=>e.classList.toggle('near',!!c&&e.dataset.case===c.id))}
window.revealClue=id=>{const m=getCase(id);if(!m)return;playSound('mission');open(`<section class="clueReveal"><div class="clueSeal">🔎</div><div class="kicker">PISTA DESCOBERTA</div><h2>${m.title}</h2><p class="clueLead">Você encontrou uma situação de ética acadêmica escondida neste ambiente.</p><div class="clueMiniScene"><b>${m.kicker}</b><p>${m.scene}</p></div><button class="choice primary" onclick="openCase('${id}')">REVELAR DESAFIO →</button><button class="choice" onclick="closeGameModal()">Continuar explorando</button></section>`,true)}

window.openCase=id=>{
 const m=getCase(id);if(!m)return;playSound('mission');const idx=CASES.indexOf(m),completed=state.done.includes(id);
 let html=`<div class="missionTop"><div class="missionIcon"><img src="${m.icon}" alt=""></div><div><div class="kicker">${m.kicker}</div><h2>${m.title}</h2><div class="missionProgress"><span style="width:${((idx+1)/CASES.length)*100}%"></span></div></div></div>
 ${completed?'<div class="caseCounter">✓ Você já respondeu este caso. Pode refazê-lo para revisar o conteúdo; a pontuação não será alterada novamente.</div>':''}
 <div class="storyGrid"><section class="storyCard"><h3>📍 Situação</h3><p>${m.scene}</p></section><section class="storyCard stakes"><h3>⚠ O que está em jogo</h3><p>${m.stakes}</p></section></div>
 <section class="questionCard"><div class="questionTag">SUA DECISÃO</div><h3>${m.question}</h3><div class="choices">`;
 m.choices.forEach((c,i)=>html+=`<button class="choice immersiveChoice" onclick="answerCase('${m.id}',${i})"><span class="choiceLetter">${String.fromCharCode(65+i)}</span><span><b>${c.label}</b><small>${c.hint}</small></span><span class="arrow">›</span></button>`);
 html+=`</div></section><div class="principleHint"><b>Princípio em foco:</b> ${m.principle}</div><button class="choice" onclick="openCaseLibrary()">← Voltar à biblioteca de casos</button>`;
 open(html,true);
};


function showFinalCongratulations(){
  playSound('success');
  const finalScore=Math.round((state.ethics+state.knowledge+state.reputation)/3);
  content.innerHTML=`<section class="finalCelebration" aria-labelledby="finalTitle">
    <div class="finalBadge">🏆 MISSÃO CONCLUÍDA</div>
    <h2 id="finalTitle">Parabéns!</h2>
    <p>Você concluiu todos os desafios de ética em publicação e reconhecimento de contribuições.</p>
    <video class="finalVideo" controls autoplay playsinline preload="metadata" aria-label="Vídeo de parabéns pela conclusão do jogo">
      <source src="assets/parabens-final.mp4" type="video/mp4">
      Seu navegador não conseguiu reproduzir o vídeo.
    </video>
    <div class="finalScoreBox"><span>Pontuação final</span><b>${finalScore}</b></div>
    ${currentScorePanel()}
    <div class="choices">
      <button class="choice primary" onclick="openCaseLibrary()">Revisar os casos</button>
      <button class="choice" onclick="closeGameModal()">Voltar ao campus</button>
    </div>
  </section>`;
  announce(`Parabéns! Você concluiu todos os desafios. Pontuação final ${finalScore}.`);
  if(state.settings.tts)speak(`Parabéns! Você concluiu todos os desafios de ética. Sua pontuação final é ${finalScore}.`);
  const v=content.querySelector('.finalVideo');
  if(v){v.volume=Math.max(0,Math.min(1,state.settings.volume));v.load();let p=v.play();if(p&&p.catch)p.catch(()=>{v.muted=true;v.play().catch(()=>{})});}
}

window.answerCase=(id,i)=>{
 const m=getCase(id);if(!m||!m.choices[i])return;const c=m.choices[i],[e,k,r]=c.delta,already=state.done.includes(id);
 if(!already){state.ethics=clamp(state.ethics+e);state.knowledge=clamp(state.knowledge+k);state.reputation=clamp(state.reputation+r);state.energy=clamp(state.energy-2);state.done.push(id);renderRoom();flashHud([e,k,r])}
 const positive=e>0;playSound(positive?'success':'warning');
 content.innerHTML=`<div class="resultHeader ${positive?'good':'warn'}"><img src="${positive?'assets/ethics.png':'assets/choice.png'}" alt=""><div><div class="kicker">${already?'REVISÃO DO CASO':'CONSEQUÊNCIA DA ESCOLHA'}</div><h2>${positive?'Decisão alinhada à integridade':'Decisão com risco ético'}</h2></div></div>
 ${already?'<div class="caseCounter">Pontuação preservada: este caso já havia sido concluído.</div>':`
 <section class="impactPanel">
   <div class="impactTitle"><div><div class="kicker">IMPACTO DA DECISÃO</div><h3>Sua pontuação mudou</h3></div><span class="impactPulse">${e+k+r>=0?'▲':'▼'}</span></div>
   <div class="impactGrid">
     <div class="impactItem"><span>Ética</span><b class="${e>=0?'plus':'minus'}">${statDelta(e)}</b><small>Agora: ${Math.round(state.ethics)}</small></div>
     <div class="impactItem"><span>Conhecimento</span><b class="${k>=0?'plus':'minus'}">${statDelta(k)}</b><small>Agora: ${Math.round(state.knowledge)}</small></div>
     <div class="impactItem"><span>Reputação</span><b class="${r>=0?'plus':'minus'}">${statDelta(r)}</b><small>Agora: ${Math.round(state.reputation)}</small></div>
   </div>
   ${currentScorePanel()}
 </section>`}
 <section class="explainCard"><h3>Por que?</h3><p>${c.result}</p></section><section class="explainCard practice"><h3>Na prática</h3><p>${c.practice}</p></section><div class="principleHint"><b>Princípio:</b> ${m.principle}</div>
 <div class="choices"><button class="choice primary" onclick="openCaseLibrary()">Ver outros casos →</button><button class="choice" onclick="closeGameModal()">Voltar ao cenário</button></div>`;
 announce(content.innerText);if(state.settings.tts)speak(content.innerText);
 if(!already && state.done.length===CASES.length){
   setTimeout(showFinalCongratulations,900);
 }
};
window.closeGameModal=close;

window.openCaseLibrary=(cat='Todos')=>{
 const cats=['Todos','Créditos','Autoria','Citação','Publicação','Integridade'];const list=cat==='Todos'?CASES:CASES.filter(c=>c.cat===cat);
 let html=`<div class="caseIntro"><img src="assets/ethics.png" alt=""><div><div class="kicker">BIBLIOTECA IMERSIVA</div><h2>Ética na publicação e no reconhecimento de quem ajudou</h2><p>Escolha qualquer caso. Você não precisa seguir uma ordem única.</p></div></div>
 ${currentScorePanel()}
 <div class="caseCounter"><b>${state.done.length}/${CASES.length}</b> casos concluídos. Casos já respondidos continuam disponíveis para revisão sem alterar a pontuação novamente.</div>
 <div class="caseFilters">${cats.map(c=>`<button class="${c===cat?'active':''}" onclick="openCaseLibrary('${c}')">${c}</button>`).join('')}</div><div class="caseLibrary">`;
 list.forEach(m=>{html+=`<button class="caseCard" onclick="openCase('${m.id}')">${state.done.includes(m.id)?'<span class="doneBadge">CONCLUÍDO</span>':''}<img src="${m.icon}" alt=""><span><span class="caseNum">${m.cat.toUpperCase()}</span><b>${m.title}</b><small>${m.scene.slice(0,112)}…</small></span></button>`});
 html+='</div>';open(html,true);
};

function mission(){const c=nearestClue();if(c)return revealClue(c.id);playSound('warning');announce('Caminhe e aproxime-se de uma pista brilhante.')}
function map(){open(`<h2>Mapa do campus</h2><p>Escolha um ambiente.</p><div class="mapgrid">${Object.keys(rooms).map(r=>`<button onclick="goRoom('${r}');closeGameModal()">${labels[r]}</button>`).join('')}</div>`)}
function menu(){open(`<h2>Menu</h2><div class="choices"><button class="choice primary" onclick="openCaseLibrary()">Casos de ética em publicação</button><button class="choice" onclick="map()">Mapa</button><button class="choice" onclick="openAccessibility()">♿ Acessibilidade</button><button class="choice" onclick="showCredits()">Créditos do jogo</button><button class="choice" onclick="resetGame()">Reiniciar progresso</button></div>`)}
window.goRoom=r=>{if(!rooms[r])return;state.room=r;state.x=4;state.y=9;renderRoom();playSound('click');announce(`Ambiente: ${labels[r]}`);if(state.settings.tts)speak(`Você entrou em ${labels[r]}.`)};
window.map=map;
window.showCredits=()=>open(`<h2>Créditos e autoria do próprio jogo</h2><p>Este espaço deve demonstrar, na prática, o princípio ensinado pelos casos.</p><div class="credits"><div class="creditCard"><b>Concepção e conteúdo acadêmico</b><br>Inserir os nomes de quem definiu a proposta, os dilemas e a fundamentação pedagógica.</div><div class="creditCard"><b>Programação e integração PWA</b><br>Inserir quem desenvolveu ou integrou o código e a lógica.</div><div class="creditCard"><b>Arte e assets</b><br>Registrar criação, seleção, adaptação e revisão das imagens.</div><div class="creditCard"><b>Testes, acessibilidade e revisão</b><br>Registrar estudantes e colaboradores conforme participação efetiva.</div><div class="creditCard"><b>Agradecimentos</b><br>Reconhecer apoio técnico, logístico ou institucional que não se enquadre como autoria, com descrição adequada.</div></div><p><small>Os nomes devem ser inseridos conforme a contribuição real e as regras do contexto em que o jogo for apresentado ou publicado.</small></p>`,true);

window.openAccessibility=()=>{modal.classList.add('hidden');accessPanel.classList.remove('hidden');applySettings();setTimeout(()=>$('#closeAccess')?.focus(),20);announce('Painel de acessibilidade aberto.')};
function closeAccessibility(){accessPanel.classList.add('hidden');announce('Painel de acessibilidade fechado.');$('#accessBtn')?.focus()}
function setFont(delta){const levels=['normal','large','xlarge'];let i=levels.indexOf(state.settings.font);i=Math.max(0,Math.min(levels.length-1,i+delta));state.settings.font=levels[i];applySettings();persist();playSound('click')}
$('#accessBtn').onclick=window.openAccessibility;$('#closeAccess').onclick=closeAccessibility;$('#fontDown').onclick=()=>setFont(-1);$('#fontUp').onclick=()=>setFont(1);
$('#contrastToggle').onclick=()=>{state.settings.contrast=!state.settings.contrast;applySettings();persist();playSound('click')};
$('#motionToggle').onclick=()=>{state.settings.motion=!state.settings.motion;applySettings();persist();playSound('click')};
$('#ttsToggle').onclick=()=>{state.settings.tts=!state.settings.tts;applySettings();persist();if(state.settings.tts)speak('Leitura por voz ativada.',true);else if('speechSynthesis'in window)speechSynthesis.cancel()};
$('#soundToggle').onclick=()=>{state.settings.sound=!state.settings.sound;applySettings();persist();if(state.settings.sound)playSound('success')};
$('#soundBtn').onclick=()=>$('#soundToggle').click();
$('#volumeRange').oninput=e=>{state.settings.volume=Number(e.target.value)/100;applySettings();persist()};$('#volumeRange').onchange=()=>playSound('click');

window.resetGame=()=>{if(confirm('Reiniciar pontuação e casos concluídos?')){localStorage.removeItem('eticaGameStateV11');location.reload()}};

$('#closeModal').onclick=close;$('#interactBtn').onclick=mission;$('#jumpBtn').onclick=jump;$('#actionBtn').onclick=()=>open(`<h2>Como jogar</h2><p>Use ▲ TRÁS e ▼ FRENTE no celular. No teclado, W/↑ leva o personagem para o fundo e S/↓ traz o personagem para a frente. Pule obstáculos com <b>PULAR</b> ou a barra de espaço e procure os <b>?</b> brilhantes. Ao chegar perto, toque em <b>Investigar pista</b>. Cada pista revela um card imersivo com um dilema de ética na publicação.</p><p>Use o Mapa para explorar os demais ambientes.</p>`);$('#mapBtn').onclick=map;$('#menuBtn').onclick=menu;

document.querySelectorAll('[data-move]').forEach(b=>{let timer=null;const dir=b.dataset.move;const start=e=>{e.preventDefault();moveDir(dir);timer=setInterval(()=>moveDir(dir),95)};const end=()=>{if(timer){clearInterval(timer);timer=null}stopWalking()};b.addEventListener('pointerdown',start);b.addEventListener('pointerup',end);b.addEventListener('pointercancel',end);b.addEventListener('pointerleave',end)});

const keys=new Set();let keyLoop=null;
document.addEventListener('keydown',e=>{
 if(e.key==='Escape'){if(!accessPanel.classList.contains('hidden'))closeAccessibility();else if(!modal.classList.contains('hidden'))close();return}
 if(e.key.toLowerCase()==='r'&&!e.ctrlKey&&!e.metaKey){e.preventDefault();speak(!modal.classList.contains('hidden')?content.innerText:`${labels[state.room]}. ${$('#objective').innerText}`,true);return}
 if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','a','d','w','s'].includes(e.key)){e.preventDefault();keys.add(e.key);if(!keyLoop)keyLoop=setInterval(()=>{if(keys.has('ArrowLeft')||keys.has('a'))moveDir('left');if(keys.has('ArrowRight')||keys.has('d'))moveDir('right');if(keys.has('ArrowUp')||keys.has('w'))moveDir('up');if(keys.has('ArrowDown')||keys.has('s'))moveDir('down')},85)}
 if(e.code==='Space'){e.preventDefault();jump()}
 if((e.key==='e'||e.key==='Enter')&&modal.classList.contains('hidden'))mission();
 if(e.key.toLowerCase()==='m'&&modal.classList.contains('hidden'))map();
 
});
document.addEventListener('keyup',e=>{keys.delete(e.key);if(!keys.size&&keyLoop){clearInterval(keyLoop);keyLoop=null;stopWalking()}});

document.querySelectorAll('.portal').forEach(p=>{p.setAttribute('role','button');p.setAttribute('tabindex','0');p.setAttribute('aria-label',`Ir para ${labels[p.dataset.room]}`);p.onclick=()=>goRoom(p.dataset.room);p.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();goRoom(p.dataset.room)}}});


let resizeTimer=null;
window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{sizeWorldForDevice();renderClues();centerCamera(false)},120)});
window.addEventListener('orientationchange',()=>setTimeout(()=>{sizeWorldForDevice();renderClues();centerCamera(false)},220));

if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
applySettings();setFrame('right',0);renderRoom();announce('Ética em Jogo carregado. Use Casos éticos para abrir a biblioteca completa de situações sobre publicação e reconhecimento de contribuições.');
