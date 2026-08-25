ÉTICA EM JOGO — VIDA ACADÊMICA

Como testar:
1. Extraia a pasta.
2. Para PWA/service worker, rode em servidor local. Exemplo:
   python -m http.server 8080
3. Abra http://localhost:8080/etica-academica-pwa/ se estiver servindo a pasta pai,
   ou http://localhost:8080/ se executar o comando dentro desta pasta.
4. No celular, publique em GitHub Pages, Netlify, Vercel ou outro host HTTPS.

Controles:
- Teclado: setas ou A/D; E/Enter interage; M abre mapa.
- Celular: botões na parte inferior.

O jogo salva progresso no localStorage.
Os créditos reais podem ser inseridos em app.js na função showCredits().

VERSÃO 4 — SOM E ACESSIBILIDADE
• efeitos sonoros offline: clique, missão, passos, acerto e alerta;
• botão de som e controle de volume;
• leitura por voz pt-BR via SpeechSynthesis;
• tecla R para leitura manual da tela;
• aumento/redução de texto;
• modo de alto contraste;
• redução de movimento;
• navegação por teclado, foco visível, aria-live e atalhos;
• controles e portais com rótulos acessíveis.

VERSÃO 5 — CORREÇÃO DO PERSONAGEM
• corrigidos os frames que continham dois personagens dentro da mesma imagem;
• agora cada frame contém somente um protagonista;
• caminhada esquerda/direita reconstruída com quatro poses individuais;
• mantidos som, leitura por voz e demais recursos de acessibilidade.

VERSÃO 6 — ÉTICA EM PUBLICAÇÃO + DESEMPENHO
• biblioteca com 14 casos independentes e acessíveis em qualquer ordem;
• foco em autoria, agradecimentos, participação discente, figuras, citação,
  autoria honorária, autoria fantasma, ordem de autores, IA, financiamento,
  reutilização de texto, correções, disputa de autoria e integridade dos dados;
• caso específico sobre reconhecer quem confeccionou/ajudou a produzir material;
• casos já concluídos podem ser revistos sem duplicar a pontuação;
• botão “Casos éticos” abre a biblioteca completa;
• correção de travamentos: o movimento não re-renderiza toda a tela nem grava
  localStorage dezenas de vezes por segundo;
• novo armazenamento V6 evita herdar progresso quebrado das versões anteriores;
• mantidos personagem único, som e recursos de acessibilidade.

VERSÃO 7 — EXEMPLO GENÉRICO + PONTUAÇÃO INTERATIVA
• removido o exemplo de maquete;
• substituído por um caso sobre infográfico e recurso digital colaborativo;
• painel de desempenho com barras para Ética, Conhecimento e Reputação;
• pontuação média destacada;
• após cada decisão, o jogo mostra ganho/perda por atributo e o valor atualizado;
• HUD superior recebe destaque visual positivo/negativo conforme a escolha;
• animações respeitam a preferência de redução de movimento.

VERSÃO 10 — RESPONSIVIDADE E CÂMERA
• cenário mantém proporção jogável em celulares em modo retrato;
• em telas estreitas o mapa vira um mundo horizontal navegável, em vez de ser espremido;
• câmera acompanha automaticamente o personagem;
• jogador inicia na borda esquerda e o cenário é revelado conforme caminha;
• interface compacta em celular e landscape;
• controles maiores para toque e suporte a safe areas/notch;
• adaptação automática em rotação de tela e redimensionamento;
• mantidos pistas, cards imersivos, acessibilidade, pontuação e vídeo final.

VERSÃO 11 — MOVIMENTO EM 4 DIREÇÕES E OBSTÁCULOS
• personagem anda para esquerda/direita, frente e trás;
• frames frontais e traseiros extraídos do sprite sheet original;
• controles por setas/WASD e D-pad completo no celular;
• botão PULAR e barra de espaço para saltar;
• obstáculos físicos distribuídos pelos ambientes;
• colisão impede atravessar obstáculos no chão; salto libera a passagem;
• pistas distribuídas também no quarto;
• jogador mantém exploração horizontal responsiva e câmera móvel.
