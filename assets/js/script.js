
 window.addEventListener("load", ()=>{
  const headers = document.getElementsByTagName("header");
  // setTimeout(()=>{
      //Header Render
      headers[0].classList.remove("d-none");
      headers[1].classList.add("d-none");
      //Banner Render
      document.getElementById("carouselBannerDesktop").classList.remove("d-none");
      document.getElementById("carouselBannerDesktopPlaceholder").classList.add("d-none");
      //Notícias Render
      const noticiasH3 = document.querySelectorAll("#noticias > h3");
      const noticiaCards = document.querySelectorAll("#noticias > .cards > .card");
      noticiasH3[0].classList.remove("d-none");
      noticiasH3[1].classList.add("d-none");
      for(let i = 0; i < noticiaCards.length; i++){
          if(i < 3){
              noticiaCards[i].classList.remove("d-none");
          }else{
              noticiaCards[i].classList.add("d-none");
          }
      }
      //Reviews Render
      const reviewsH3 = document.querySelectorAll("#reviews > h3");
      reviewsH3[0].classList.remove("d-none");
      reviewsH3[1].classList.add("d-none");
  // }, 2000);
 })
//Responsividade para boxes da section noticias
const cardBody = document.querySelectorAll("#noticias > .cards > .card > .card-body");
const reviewTitles = document.querySelectorAll(".carouselReviewsSlick .card-body > h5");
const reviewCard = document.querySelectorAll(".reviews .card-body > p > q");
  for (let i = 0; i < reviewTitles.length; i++) {
    let separador = reviewTitles[i].innerText.indexOf(":");
    reviewTitles[i].innerHTML = `${reviewTitles[i].innerText.slice(0,separador + 1)} <br> ${reviewTitles[i].innerText.slice(separador + 1)}`;
  }

if (window.innerWidth > 767 && window.innerWidth < 991) {
  cardBody[2].children[0].innerHTML = "The Boys: produção da 4ª temporada começa em <br>breve"
}else{
  cardBody[2].children[0].innerHTML = `The Boys: produção da 4ª temporada começa em breve`;
}

if (window.innerWidth > 991) {
  cardBody[2].children[1].innerHTML = `Eric Kripke, criador de The Boys, divulgou uma foto indicando que as
  gravações da quarta temporada começam em breve...`;

  cardBody[1].children[1].innerHTML = `Se tem uma coisa que os fãs concordam, é que a série Stranger Things tem um
  elenco bem grande. Entre as crianças de...`;

  reviewCard[1].innerHTML = `Depois de uma fraca terceira temporada
  com um antagonista raso, The Sinner volta à sua boa forma com uma trama mais
  instigante e personagens interessantes, ainda...`
  reviewCard[3].innerHTML = `Ainda que repletas de boas intenções e,
  em alguns casos, com olhares inéditos, gentis e intrigantes a velhos conhecidos,
  a Casa das Ideias falhou ao se esquecer que cada título...`
}else{
  cardBody[2].children[1].innerHTML = `Eric Kripke, criador de The Boys, divulgou uma foto indicando que as
  gravações da quarta temporada começam em breve, de...`;

  cardBody[1].children[1].innerHTML = `Se tem uma coisa que os fãs concordam, é que a série Stranger Things tem um
  elenco bem grande. Entre as crianças de Hawkins...`;

  reviewCard[1].innerHTML = `Depois de uma fraca terceira temporada
  com um antagonista raso, The Sinner volta à sua boa forma com uma trama mais
  instigante e personagens interessantes...`
  reviewCard[3].innerHTML = `Ainda que repletas de boas intenções e,
  em alguns casos, com olhares inéditos, gentis e intrigantes a velhos conhecidos,
  a Casa das Ideias falhou ao se esquecer...`
}



window.addEventListener("resize", () => {
  if(window.innerWidth > 767){
    for (let i = 0; i < reviewTitles.length; i++) {
      let separador = reviewTitles[i].innerText.indexOf(":");
      reviewTitles[i].innerHTML = `${reviewTitles[i].innerText.slice(0,separador + 1)} <br> ${reviewTitles[i].innerText.slice(separador + 1)}`;
    }
  }
  
  if (window.innerWidth > 767 && window.innerWidth < 991) {
    cardBody[2].children[0].innerHTML = "The Boys: produção da 4ª temporada começa em <br>breve"
  }else{
    cardBody[2].children[0].innerHTML = `The Boys: produção da 4ª temporada começa em breve`;
  }
  
  if (window.innerWidth > 991) {
    cardBody[2].children[1].innerHTML = `Eric Kripke, criador de The Boys, divulgou uma foto indicando que as
    gravações da quarta temporada começam em breve...`;
  
    cardBody[1].children[1].innerHTML = `Se tem uma coisa que os fãs concordam, é que a série Stranger Things tem um
    elenco bem grande. Entre as crianças de...`;

    reviewCard[1].innerHTML = `Depois de uma fraca terceira temporada
    com um antagonista raso, The Sinner volta à sua boa forma com uma trama mais
    instigante e personagens interessantes, ainda...`
    reviewCard[3].innerHTML = `Ainda que repletas de boas intenções e,
    em alguns casos, com olhares inéditos, gentis e intrigantes a velhos conhecidos,
    a Casa das Ideias falhou ao se esquecer que cada título...`
  }else{
    cardBody[2].children[1].innerHTML = `Eric Kripke, criador de The Boys, divulgou uma foto indicando que as
    gravações da quarta temporada começam em breve, de...`;
  
    cardBody[1].children[1].innerHTML = `Se tem uma coisa que os fãs concordam, é que a série Stranger Things tem um
    elenco bem grande. Entre as crianças de Hawkins...`;

    reviewCard[1].innerHTML = `Depois de uma fraca terceira temporada
    com um antagonista raso, The Sinner volta à sua boa forma com uma trama mais
    instigante e personagens interessantes...`
    reviewCard[3].innerHTML = `Ainda que repletas de boas intenções e,
    em alguns casos, com olhares inéditos, gentis e intrigantes a velhos conhecidos,
    a Casa das Ideias falhou ao se esquecer...`
  }
});

//Array de Objetos para os modais
const reviewModais = [
  {
    review: "Rick and Morty: 5ª temporada",
    titulo:
      "Final da quinta temporada de Rick and Morty é redenção após um quarto ano morno",
    subtitulo: "Família Smith ganha mais protagonismo ao lado da dupla",
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `A quinta temporada de Rick and Morty chegou ao final no último domingo (6), após apostar
            em episódios ainda mais emotivos e discutir com mais profundidade a relação entre o
            homem mais inteligente do universo e sua família.`,

      `Após uma quarta temporada considerada instável e mal recebida por parte dos fãs, Rick e
            Morty voltou menos focado nas aventuras em dupla e com mais espaço para experiências
            coletivas da família - um dos poucos pontos fortes que a produção mantém da temporada
            anterior. Já no primeiro episódio, “Mort Dinner Rick Andre”, temos uma Summer guerreira
            subaquática, um Morty quase independente e o casal Beth e Jerry mais sexualmente
            liberais. Esses personagens, que até a terceira temporada só faziam volume na série,
            estão ganhando cada vez mais espaço, em uma ramificação que abriu as portas para novas
            aventuras e possibilidades dentro da série.`,

      `Summer tem mais participação que Morty em alguns episódios e também se aventura em mais
            “rolês com o vovô”, e até com o irmão caçula. A personagem consegue contribuir muito
            graças à sua mentalidade, que é uma mescla de adolescente do colegial e mulher madura
            que já lutou em guerras multiversais. Essa característica fica muito expressiva se
            comparada a personalidade atrapalhada e insegura de Morty e promove um ritmo diferente
            na temporada, como nos episódios três e sete.`,

      `Entretanto, a principal marca dessa mudança de rota da temporada são os vários rachas na
            relação entre Morty e Rick. Desde o primeiro episódio, os dois quase não fazem missões
            juntos, e quando iniciam uma aventura, algum outro elemento os separa. Essa fragilidade
            na relação abusiva entre avô e neto faz a roda da temporada girar até o alucinante
            final, em que Rick reconhece que ficar perto de Morty é prejudicial para ambos. As
            autocríticas de Rick aparecem com frequência na série, indicando uma possível mudança de
            ares para os próximos anos. O cientista transformado em um ser altamente niilista pelo
            próprio conhecimento agora parece se preocupar com a atual versão de sua família.`,

      `Mesmo com as mudanças na narrativa, a quinta temporada mantém o estilo da série e conta
            com momentos desconfortáveis, como o bebê incestuoso de Summer e Morty, e os momentos de
            puro arrependimento de Rick, que aparecem sempre como fantasmas para atormentar o
            cientista que gosta de fingir que não se importa com nada.`,

      `Após uma quarta temporada mediana, a série entra no ano cinco tateando um novo formato.
            Nos primeiros cinco episódios, as linhas ainda não se encaixam tão bem e a fórmula do
            ano anterior parece estar se repetindo. Porém, o desgaste entre os protagonistas serve
            como trampolim para levar os episódios finais ao topo das expectativas, mostrando que a
            trama clássica pode estar voltando - o que Rick chama de “aventuras simples” no décimo
            episódio.`,

      `Ao resolver seus problemas de uma maneira nada saudável, os personagens reiniciam a trama
            de uma maneira nostálgica. A dupla é levada de volta para a cidadela dos Ricks, onde as
            batalhas mais alucinantes foram travadas entre as milhares de versões do vovô Sanchez.
            Assim como o finale da temporada quatro ditou o ritmo do quinto ano da série, o episódio
            “Rickmurai Jack” nos sugere o caminho que Rick e Morty vão seguir agora. O retorno do
            possível maior vilão da trama aumenta muito as expectativas para o futuro, e o final
            ajuda a série a se redimir após uma quarta temporada morna e um início de quinta que não
            surpreendeu.`,
    ],
    imagens: [
      "assets/img/banner1-modal1.jpeg",
      "assets/img/banner2-modal1.jpeg",
      "assets/img/banner3-modal1.jpeg",
    ],
    imgSubtitulos: ["Adult Swim/Divulgação", "Adult Swim/Divulgação"],
    nota: 4.0,
  },
  {
    review: "The Sinner: 4ª temporada",
    titulo:
      "Depois de uma fraca terceira temporada com um antagonista raso, The Sinner volta à sua boa forma",
    subtitulo:
      "Com uma trama mais instigante e personagens interessantes, ainda que o arco do detetive Ambrose não tenha muito a dizer sobre o protagonista.",
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `Na trama, Harry Ambrose (Bill Pullman) está aposentado e vai passar férias em uma ilha
            junto com sua nova namorada. Lá ele conhece a jovem Percy (Alice Kremelberg), com quem
            desenvolve uma amizade. Quando Percy desaparece, supostamente tendo cometido suicídio,
            Ambrose se envolve na investigação e começa a desencavar segredos ocultos da pequena cidade.`,

      `A trama já se diferencia das outras temporadas ao começar com um suicídio ao invés de 
            assassinato. Isso permite explorar outras facetas de culpa, conforme a investigação de
            Harry aponta para Percy guardando um segredo que tornou impossível de suportar. A culpa
            é algo que corrói a jovem por dentro e entender de onde vem um sentimento tão poderoso, tão
            insuportável que a impele ao suicídio, é a principal força que move a temporada.`,

      `Alice Kremelberg aparece relativamente pouco considerando a centralidade de Percy para 
            a trama, mas faz valer cada cena ao construir Percy com um desespero silencioso. Uma pessoa
            que mesmo quando parece serena ou estoica, demonstra um olhar cansado e uma expressão de que
            carrega consigo um peso muito maior do que seria capaz de suportar.`,

      `Por outro lado, o arco de Harry é o clichê do detetive que se envolve demais com o caso e
            sacrifica a própria sanidade mental. Claro, Bill Pullman continua ótimo em apresentar a
            natureza arguta e obstinada de Ambrose e aqui ele tem uma motivação mais crível para sua fixação
            em desvendar Percy do que por Jamie na temporada anterior, no entanto não afasta a impressão que
            já vimos histórias demais sobre detetives que se envolvem demais com suas investigações.`,

      `Além dessa dupla principal, a temporada é permeada por indivíduos ambíguos que sempre parecem
            ter segundas intenções em sua cooperação com Harry. Um exemplo é o delegado da cidade, cuja
            falha em perceber eventos suspeitos que ocorrem sob sua vigilância nos deixam em dúvida se
            estamos diante de um policial interiorano limitado lidando com algo além de sua capacidade
            ou se ele é um sujeito corrupto envolvido em tudo que ocorre na ilha e deixa Harry se
            aproximar para mantê-lo sob controle. A avó de Percy, Meg (Frances Fisher), é outra figura
            que mobiliza nossa curiosidade, transitando entre a fragilidade de uma senhora devastada pela
            perda da neta e uma figura implacável que controla a cidade, seus habitantes e seus segredos,
            com mão de ferro. Durante boa parte da trama não sabemos o que realmente move Meg e isso
            confere certa imprevisibilidade à sua conduta, transitando entre vítima e algoz.`,

      `Eventualmente a investigação de Harry o leva por caminhos que falam sobre colonialismo,
            exploração econômica e desigualdades sociais, pintando uma comunidade na qual apenas os
            ricos ganham e o dinheiro te torna intocável. Tudo isso leva às revelações finais nas quais
            vemos como a realização disso tudo pesou sobre Percy depois que ela sai ilesa de uma tragédia
            fruto dos negócios escusos de sua família. Como em outras temporadas, o evento é carregado de
            ambiguidade, já que por mais que suas ações não tenham sido movidas por malícia ou crueldade,
            ela é indubitavelmente culpada e é a ausência de consequência para a culpa que sente que a arruína.`,

      `Ainda que o detetive Ambrose continue repetindo as mesmas batidas de temporadas anteriores, a
            quarta temporada de The Sinner ao menos consegue criar um mistério envolvente que explora de
            modo consistente seus temas sobre culpa e trauma.`,
    ],
    imagens: [
      "assets/img/banner1-modal2.jpeg",
      "assets/img/banner2-modal2.jpeg",
      "assets/img/banner3-modal2.jpeg",
    ],
    imgSubtitulos: ["Netflix/Divulgação", "Netflix/Divulgação"],
    nota: 4.0,
  },
  {
    review: "The Walking Dead: 11ª temporada",
    titulo:
      "Walking Dead encerra primeira parte da 11ª temporada com gancho frustrante",
    subtitulo: "Final interrompeu ação no meio; série volta em 20 de fevereiro",
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `The Walking Dead pôs fim à primeira parte de sua 11ª e última temporada no
          último domingo (10). Contrariando a boa leva de episódios que o antecederam,
          no entanto, o final acabou por deixar uma ponta de frustração com os
          ganchos que deixou para a segunda parte -- que já teve sua estreia anunciada
          para o dia 20 de fevereiro.`,

      `“Por Sangue”, o oitavo episódio da temporada, se dividiu em duas frentes.
          Na primeira, em Meridian, o público acompanhou a situação de Daryl
          (Norman Reedus) com os Ceifadores, enquanto Maggie (Lauren Cohan) liderava
          uma operação para conseguir comida no local; a outra frente, por sua vez,
          estava em Alexandria, onde os sobreviventes lidavam com uma forte tempestade
          e os danos causados por ela.`,

      `Em Meridian, os problemas começaram cedo, quando os Ceifadores notaram a horda
          de Maggie -- que adotou a técnica dos Sussurradores de usar máscaras feitas
          com a pele dos zumbis -- se aproximando. Pope (Ritchie Coster) enviou seu
          soldado Paul Wells (Robert Hayes) para afastá-los. Paul, no entanto, acabou
          morto por Maggie.`,

      `Isso intensificou a tensão entre Pope e Leah (Lynn Collins), que não ficou
          feliz em saber que o líder já suspeitava que sua rival pudesse estar do lado
          de fora. Mais tarde, isso culminou no maior acontecimento do episódio: Leah
          matou Pope quando ele, já sabendo que Maggie e seus aliados haviam entrado na
          base, ordenou que fosse usada a hwacha, uma espécie de arma medieval usada
          para disparar flechas com fogo -- sem se importar com quantos Ceifadores
          morreriam no ato.`,

      `Daryl, que havia desenvolvido um relacionamento com Leah, viu isso como a
          oportunidade de os dois fugirem juntos para construírem uma vida em
          Alexandria. Mas as coisas não são tão simples assim; afinal, os Ceifadores
          se tornaram a família de Leah, da mesma forma que Daryl também criou uma
          família para chamar de sua. Ela, então, traiu Daryl, dizendo aos colegas que
          ele foi o responsável pela morte de Pope e comandando o uso da hwacha, depois
          de orientar seus colegas a recuarem.`,

      `Em Alexandria, as medidas para conter os efeitos da tempestade fizeram com que o
          grupo se dividisse. Mas acompanhamos, principalmente, os sobreviventes
          abrigados em uma casa, onde estão todas as crianças. A ação, por lá, foi pausada
          por pequenos momentos dedicados a Judith (Cailey Fleming) e à saudade que ela
          sente da mãe, Michonne (Danai Gurira). Em uma cena delicada, Virgil (Kevin Carroll)
          falou sobre como Michonne está presente em Judith, do modo que ela segura a espada
          à forma como ela mantém as outras crianças se sentindo seguras.`,

      `Esse momento é imprescindível para o destino de Judith no episódio: enquanto a casa
          era atacada por zumbis que conseguiram se infiltrar pelo muro de Alexandria,
          Judith saiu em busca de Gracie (Anabelle Holloway), que estava no porão em busca
          de uma arma que pudesse usar, tal qual a amiga. Judith quebrou um cabo de vassoura
          para ela, mas quando ambas voltaram, descobriram que os zumbis já estavam na sala
          de casa. As duas então retornaram para o porão… mas quanto tempo a porta vai
          aguentar, é um mistério.`,

      `Embora “Por Sangue”, como um todo, seja um bom episódio e traga desenvolvimentos
          muito interessantes para Daryl e Judith, os dois ganchos deixados por ele não
          deixam de ser um pouco frustrantes. A sensação, ao fim, é que o episódio foi
          interrompido sem que suas sequências de ação conseguissem, propriamente, decolar.
          Tanto a guerra contra os Ceifadores quanto o destino de Judith em Alexandria
          terão de esperar até fevereiro, quando a série retorna para a segunda parte
          da temporada.`
    ],
    imagens: [
      "assets/img/banner1-modal3.jpeg",
      "assets/img/banner2-modal3.webp",
      "assets/img/banner3-modal3.jpeg",
    ],
    imgSubtitulos: ["AMC/Divulgação", "AMC/Divulgação"],
    nota: 3.5,
  },
  {
    review: "Ms. Marvel: 1ª temporada",
    titulo:
      "Ms. Marvel devolve o encanto às já saturadas histórias de herói",
    subtitulo: `Depois de tanto privilegiar seu cronograma em detrimento de todo o resto, Marvel
                quebra seu ciclo vicioso e deixa que sua protagonista tome o holofote`,
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `De um jeito ou de outro, as séries do Marvel Studios encontraram suas razões de existir
            no tão reverenciado cronograma de lançamentos do MCU. O luto intenso de Wanda
            (Elizabeth Olsen), rico e interessante enquanto desenvolvimento de personagem, se
            provou apenas um pretexto para colocá-la como vilã em Doutor Estranho no Multiverso
            da Loucura. A jornada de autodescoberta de Loki (Tom Hiddleston), encarando a si
            mesmo de modo tão literal, foi reduzida à apresentação do tal grande antagonista
            da vez, o Kang (Jonathan Majors), em um monólogo de poucas sutilezas. A dinâmica
            de buddy cop entre Bucky (Sebastian Stan) e Sam Wilson (Anthony Mackie) em Falcão
            e o Soldado Invernal, por sua vez, foi uma longa caminhada para não deixar dúvidas
            de que o Capitão América agora é outro com a vinda de um quarto filme da franquia.`,

      `Ainda que repletas de boas intenções e, em alguns casos, com olhares inéditos, gentis
            e intrigantes a velhos conhecidos, a Casa das Ideias falhou ao se esquecer que cada
            título deve, também, funcionar em si mesmo. Assim, em vez de exaltar seus heróis no
            panteão que, em teoria, eles já ocupam na cultura pop, a Marvel preferiu diminuí-los
            em nome do hype.`,

      `É um alívio, portanto, ver que esse ciclo vicioso foi quebrado na adorável Ms. Marvel.
            Sem se preocupar com a promessa no horizonte de colocá-la ao lado de Carol Danvers
            (Brie Larson) em The Marvels, o criador Bisha K. Ali fez o que, convenhamos, é
            básico: focou na jornada da sua protagonista e a explorou em toda a sua complexidade.
            O chamariz da série, portanto, não está na vilã da vez ou na ameaça interdimensional
            que põe em risco a humanidade — muito menos na antecipação de qualquer que seja a
            história do filme que sai só em 2023. Está, na verdade, no entusiasmo, inocência e
            inexperiência da sua Kamala Khan, e as revelações e as conexões com o restante do
            universo compartilhado vêm como consequência disso.`,

      `Não dá para negar que Ms. Marvel largou com vantagem já com a escalação de Iman Vellani
            como a protagonista. Afinal, atriz e personagem compartilham a empolgação genuína
            de ser uma super-heroína e, mesmo sem saber todos os meandros que o posto pressupõe,
            ambas compensam qualquer eventual falta de aptidão com muito carisma. Esse é,
            sem dúvida, um dos grandes trunfos da produção, considerando que a série não escapa
            do ritmo inconstante que, infelizmente, também se tornou marca registrada das
            produções do Marvel Studios. No entanto, graças a presença encantadora de Vellani,
            até o mais arrastado dos episódios — sim, estou me referindo ao penúltimo, intitulado
            “Mais Uma Vez” — ou as cenas de ação mais ou menos ficam pequenos se comparados à
            experiência geral que a série proporciona.`,

      `No entanto, o diferencial de Ms. Marvel está mesmo na maneira como a série representou
            com sensibilidade, bom humor e, por vezes, firmeza o fato de Kamala ser parte da
            chamada segunda geração de imigrantes. É claro que se tratando de parte considerável
            da identidade da personagem, a Marvel não poderia escapar de retratar a dualidade de
            nascer e crescer nos Estados Unidos, enquanto mantém tradições paquistanesas. Mas é
            surpreendente como o estúdio a abraçou por inteiro, em todas as suas formas, e a
            tornou parte integral da sua trama, seja com um número de dança à la Bollywood,
            abrindo as portas de uma mesquita para o público mainstream ou literalmente
            questionando a versão para inglês ver de como transcorreu a Partição. É uma abordagem,
            em muitos sentidos, educativa, mas não de modo pedante ou documental. É, na realidade,
            a materialização de como esse tipo de retrato é raro nas produções ocidentais de
            grande alcance, e como pode ser também enriquecedor, inclusive do ponto de vista estético.`,

      `Com Kamala livre para aprender por conta própria — e, portanto, sem estar à sombra de ninguém
            como certo Peter Parker (Tom Holland) —, ao mesmo tempo que tem crushes e descobre o mundo
            longe do conforto do colo dos pais, Ms. Marvel funciona, de fato, como a introdução da
            heroína ao universo cinematográfico e aquece organicamente para sua volta num futuro próximo.
            O seriado é perfeito? Não, longe disso. Mas, por mais que seu conflito central funcione mais
            enquanto conceito do que propriamente na sua construção, a série lembra o espectador que ser
            super, embora tão lugar-comum hoje em dia, ainda pode ser divertido. Basta ser original e
            priorizar o que a Marvel já fez tão bem: focar no lado humano dos seus ídolos.`
    ],
    imagens: [
      "assets/img/banner1-modal4.jpeg",
      "assets/img/banner2-modal4.jpeg",
      "assets/img/banner3-modal4.jpeg",
    ],
    imgSubtitulos: ["Disney+/Divulgação", "Disney+/Divulgação"],
    nota: 2.5,
  },
  {
    review: "Legado de Júpiter: 1ª temporada",
    titulo:
      "O Legado de Júpiter entrega entretenimento esquecível e sem dinamismo das HQs",
    subtitulo:
      "Presa em trama inchada e cansativa, primeira temporada da adaptação do quadrinho de Mark Millar esquece de se aprofundar no debate geracional que propõe",
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `Lançada originalmente em 2013, a HQ O Legado de Júpiter, de Mark Millar e Frank Quitely,
            retomava uma pertinente discussão geracional iniciada em 1996 por Mark Waid e Alex Ross
            em Reino do Amanhã. Assim como sua predecessora, a revista do Millarworld questionava a
            mudança das histórias de super-heróis, antes baseadas em inspiração e esperança e agora
            ditadas por tendências apelativas de quadros hiperviolentos e sexualizados. Adotando
            justamente a linguagem que criticava para provar sua tese, Millar entregou com o título
            um contraponto ao movimento que ajudou a criar com Kick-Ass e Os Supremos, provando que
            os grandes heróis são indissociáveis do simbolismo iluminado que os cercam.
            Infelizmente, a versão da Netflix de O Legado de Júpiter apenas ensaia recuperar esse
            debate, com resultados decepcionantes.`,

      `Por mais que traga elementos-chave o bastante para ser classificada como uma adaptação, a
            série funciona, na verdade, mais como uma introdução a Legado de Júpiter e seu prelúdio,
            O Círculo de Júpiter (que contou com artes de Wilfredo Torres e Davide Gianfelice).
            Sendo assim, o espectador é apresentado a pequenos indícios de atrito entre os membros
            originais da União da Justiça, super-heróis que adquiriram seus poderes ao explorar uma
            misteriosa ilha, e seus descendentes, que nasceram poderosos e cresceram exibindo seus
            dons para a humanidade. Enquanto os livros de Millar expunham de cara as maneiras
            opostas como essas diferentes gerações lutavam contra forças que ameaçavam a humanidade,
            a produção da Netflix sacrifica toda chance de dinamismo ao citar essas diferenças em
            linhas de diálogo rasas e passageiras. A falta de profundidade e excesso de antecipação
            por um conflito que nunca acontece torna frustrante a experiência de assistir o primeiro
            ano de O Legado de Júpiter.`,

      `As poucas cenas minimamente empolgantes da temporada também acabam se tornando maçantes,
            não só pelo exagero de câmeras lentas, mas pelos efeitos visuais decepcionantes, que
            parecem pertencer a telefilmes dos anos 1990. Não ajuda também o fato de que toda dose
            de adrenalina proporcionada pela série é seguida quase imediatamente de um sermão
            monótono proferido pelo Utópico (Josh Duhamel), o Superman do mundo de O Legado de
            Júpiter. Repetitiva, a fórmula dos episódios cria uma barriga impossível de ser ignorada
            na primeira temporada e faz com que a trama praticamente não saia do lugar mesmo depois
            de quase oito horas.`,

      `Embora não tenha um texto bom com o qual trabalhar, o elenco se esforça o bastante para
            entregar o entretenimento prometido pelos trailers. Enquanto é inegável que Duhamel,
            Leslie Bibb e Ben Daniels transmitem a grandiosidade característica dos heróis da Era de
            Ouro dos quadrinhos, Elena Kampouris, Ian Quinlan, Anna Akana e Tenika Davis também
            entregam performances convincentes, apesar do roteiro embolado. Dentro do elenco, talvez
            Andrew Horton seja o único realmente prejudicado pelo script, já que ele tem pouco mais
            a fazer do que olhar para o horizonte com um semblante triste.`,

      `O uso moderado do gore também é elogiável. Diferentemente da chuva de sangue presente em
            The Boys ou Kick-Ass, a violência de O Legado de Júpiter faz parte da narrativa e serve
            de agente catalisador para ações dos personagens e não como um simples escape para
            qualquer sentimento sanguinolento que o espectador tenha guardado.`,

      `Por mais que se proponha a recriar a discussão dos gibis, a primeira temporada de O
            Legado de Júpiter nunca traz a discussão à tona por tempo o bastante para que ela tome
            corpo. No final, os primeiros oito episódios da série servem mais como uma introdução
            vazia aos trabalhos de Millar do que como uma história própria. Com potencial para ser a
            grande propriedade de heróis da Netflix, a produção entrega apenas tédio para novos
            espectadores e decepção para fãs das HQs originais.`,
    ],
    imagens: [
      "assets/img/banner1-modal5.jpeg",
      "assets/img/banner2-modal5.webp",
      "assets/img/banner3-modal5.jpeg",
    ],
    imgSubtitulos: ["Netflix/Divulgação", "Netflix/Divulgação"],
    nota: 2.0,
  },
  {
    review: "Cavaleiro da Lua: 1ª temporada",
    titulo:
          `Contando com 6 episódios e com a sempre digna atuação de Oscar Isaac, a série do avatar
            de Khonshu consegue explorar nuances muito interessantes da psiquê do personagem`,
    subtitulo: `Além de criar e estabelecer relações e vínculos de forma competente, mesmo pecando
                nas cenas com mais cara de Marvel da produção`,
    autor: "Eduardo Cassano",
    data: new Date(2022, 2, 10, 10, 45),
    atualizacao: new Date(2022, 3, 22, 20, 22),
    conteudo: [
      `Cavaleiro da Lua acompanha Steven Grant, um gentil e educado funcionário de uma loja de
            souvenir, que é atormentado com apagões e memórias de outra vida. Steven descobre
            que tem transtorno dissociativo de personalidade e divide o corpo com o mercenário
            Marc Spector. À medida que os inimigos de Steven/Marc se voltam para eles, ambos
            devem navegar em suas complexas identidades enquanto mergulham em um mistério mortal
            entre os poderosos deuses do Egito.
      `,

      `A série é um claro exemplo de uma obra de personagem, onde praticamente todos os
            acontecimentos da produção são focados no desenvolvimento do protagonista e nas suas
            relações (que aqui é com ele próprio), mas que, por outro lado, relega alguns elementos
            da trama para um segundo ou até terceiro patamar. Cavaleiro da Lua começa em seus
            primeiros episódios com uma narrativa diferente, explorando o transtorno de
            personalidade múltipla de Marc/Steven. `,

      `A série é dirigida por 3 diretores diferentes (Mohamed Diab, Justin Benson e Aaron Moorhead)
            e a roteirização ficou a cargo de uma equipe com nada menos que 9 nomes. Ainda assim,
            Cavaleiro da Lua utiliza-se de alguns clichês do gênero, como a conversa das personalidades
            através de espelhos, o corpo que não obedece, entre alguns outros. A trama, apesar de
            avançar bem nas questões sobre Steven/Marc, fica muito vaga com relação a todo o restante
            de elementos e personagens que orbitam o protagonista. Chega em um ponto em que parece que
            a série se esquece de desenvolver a história de pano de fundo que movimenta os acontecimentos
            para se focar nas questões mais “psiquiátricas” do protagonista. Entretanto, a principal
            virtude da direção foi conseguir passear entre o divertido e o sombrio na série, principalmente
            nos 3 primeiros episódios, além de nos brindar com o que podemos classificar como o “melhor
            episódio de uma série Marvel“, no episódio 5, que entrega luz, sombra, reflexão e drama. Com
            certeza será um episódio candidatíssimo a ganhar as premiações da temporada em Hollywood..`,

      `Ao longo dos episódios vamos entendendo a relação de Marc com Khonshu, porém, a partir do episódio
            4, mergulhamos dentro da mente de Spector. A série explora sua psiquê dentro de uma ala
            psiquiátrica, com direito a momentos tensos e confusos, mas sem deixar de provocar o espectador
            a entender todas as referências e alegorias ali contidas. E o clímax acontece justamente no
            episódio 5, com a revelação da origem do seu trauma e o que acontece a partir dali. Entramos em
            uma sequência pesada de maus tratos infantis, sofrimento e culpabilização. Foi muito interessante
            como a série abordou tal assunto e ainda mais impressionante a curva dramática aonde as duas
            personalidades conflitantes, Marc/Steven, se entendem e se reconhecem como partes de um todo.
            Foi de soltar suspiros.`,

      `Oscar Isaac faz um trabalho muito digno em seu papel. Esbanjando carisma, quesito que gerava certa
            dúvida, já que seria a primeira grande produção completamente centrada nele. E, claro, o ator
            guatemalteco esbanja toda a sua versatilidade criando dois personagens distintos, com seus
            próprios magnetismos. O restante do elenco de apoio faz um trabalho competente nas atuações,
            porém seus arcos são pouco desenvolvidos, aparentando que o roteiro os relegou ao trivial
            (como dito anteriormente). May Calamawy dá vida a Layla, que, se por um lado também faz um bom
            papel com seu carisma, por outro a personagem carece de mais profundidade e background, até
            para entendermos o seu amor pelo Marc. Ela é colocada como a primeira heroína egípcia da Marvel,
            mas em nenhum momento sabemos o porquê do grande interesse dos deuses egípcios em torná-la sua
            avatar..`,

      `Falando em deuses egípcios, causou estranhamento o tamanho da irrelevância do restante do panteão
            mitológico. Os outros deuses que formam uma espécie de conselho das pirâmides, foram capazes
            de aprisionar Khonshu e outras divindades, porém mostraram, além de pouca sabedoria para entender
            qual era o plano de Arthur Harrow (Ethan Hawke), uma diminuição de força abrupta para deter o
            vilão no episódio final. Ethan Hawke faz um vilão sombrio e penitente, que lidera uma seita de
            adoradores de Ammit. Tem uma ideologia que lembra os precogs de Minority Report, fazer a justiça
            acontecer antes da injustiça, com a balança moral da sua deusa. Uma visão torta de justiça e
            equilíbrio, chegando até a lembrar Thanos. Porém, aqui, fica um tanto incômodo não só sua motivação
            que tem relação com sua antiga e pouco explorada parceria com o próprio Khonshu, mas também como
            conseguiu estender sua seita pelo mundo inteiro – em um momento passa a impressão que todas as
            pessoas do planeta fazem parte da seita.`,

      `As cenas de ação são bem genéricas. Os momentos em que o Cavaleiro da Lua entra em cena com seu manto
            são bem pontuais, em ambientes escuros, com um CGI bastante duvidoso. Monstros um tanto
            incompreensíveis que são liberados por Harrow com o poder do bastão de Ammit. Geralmente aqui é a
            parte que a Marvel sempre brilha, mas não pareceu do mesmo nível de qualidade de outras obras.
            Cavaleiro da Lua parece ser a produção da Marvel menos Marvel possível, tanto para o bem quanto para
            o mal. Fica claro que o roteiro e produção focaram mais no que a série tinha no que mostrar de
            diferente, que na parte que geralmente é o mais do mesmo da Marvel (ação, coreografia, efeitos
            especiais). E quando chegamos no episódio final (6) concluímos que a própria trama como um todo fica
            aquém comparado com o desenvolvimento do protagonista.`,

      `Entre pontos positivos e negativos, Cavaleiro da Lua fecha sua história de forma positiva. Apresentando
            e construindo um personagem denso, complexo e carismático. Na luta final descobrimos algo novo em Marc,
            através de um apagão (novamente). A confirmação da novidade vem nas cenas pós-credito, deixando muitos
            fãs dos quadrinhos animados não só com a revelação, mas também com a possibilidade de uma segunda
            temporada. Ou pelo menos o Cavaleiro da Lua reapareça em alguma outra produção. Até o momento não há
            confirmações. Porém, já nesta primeira temporada, mesmo com seus próprios problemas secundários,
            Cavaleiro da Lua se estabelece como a melhor série da Marvel pela Disney + até aqui.`
    ],
    imagens: [
      "assets/img/banner1-modal6.jpeg",
      "assets/img/banner2-modal6.jpeg",
      "assets/img/banner3-modal6.jpeg",
    ],
    imgSubtitulos: ["Disney+/Divulgação", "Disney+/Divulgação"],
    nota: 3.5,
  },
];


//Criação da classe Modal
const reviews = document.querySelectorAll(".btn-review");
const texto = document.querySelectorAll(".modal-body > main > article > p");
const images = document.querySelectorAll(".modal-article-img > img");
const subtitles = document.querySelectorAll(".modal-article-img > p");
const nota = document.querySelector(".stars > span");
const notaEscrita = document.querySelector(".stars > p");

class Modal {
  constructor(review,titulo,subtitulo,autor,data,atualizacao,conteudo,imagens,imgSubtitulos,nota) {
    this.review = review;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
    this.autor = autor;
    this.data = data;
    this.atualizacao = atualizacao;
    this.conteudo = conteudo;
    this.imagens = imagens;
    this.imgSubtitulos = imgSubtitulos;
    this.nota = nota;
  }

  montarConteudo() {
    //Montando Títulos e Banner
    document.querySelector(".modal-header > h5").innerHTML = this.review;
    document.querySelector(".modal-banner > img").src = this.imagens[0];
    document.querySelector(".modal-body > main > h1").innerHTML = this.titulo;
    document.querySelector(".modal-body > main > h3").innerHTML = this.subtitulo;
    let dataFormatada = `${this.data.getDate()}.${this.data.getMonth()}.${this.data.getFullYear()}, às ${this.data.getHours()}h${this.data.getMinutes()}`;
    let atualizacaoFormatada = `Atualizada em ${this.atualizacao.getDate()}.${this.atualizacao.getMonth()}.${this.atualizacao.getFullYear()}, às ${this.atualizacao.getHours()}h${this.atualizacao.getMinutes()}`;
    document.querySelector(".modal-body > main > .info > .info-by").innerHTML = this.autor
    document.querySelector(".modal-body > main > .info > .info-date").innerHTML = dataFormatada;
    document.querySelector(".modal-body > main > .info > .info-update").innerHTML = atualizacaoFormatada;
    
    //Montando conteúdo dos parágrafos
    texto.forEach((elemento, i) => {
      elemento.innerHTML = this.conteudo[i];
    });
    if (this.conteudo.length > texto.length - 1) {
      for (let i = this.conteudo.length - 1;i >= texto.length;i--) {
        let pExtra = document.createElement("p");
        pExtra.innerHTML = this.conteudo[i];
        texto[texto.length - 1].insertAdjacentElement("afterend", pExtra);
      }
    }

    //Setando imagens e seus subtitulos dentro do artigo
      images.forEach((elemento, i) => {
        elemento.src = this.imagens[i + 1];
      });
      subtitles.forEach((elemento, i) => {
        elemento.innerHTML = this.imgSubtitulos[i];
      });
    
  }

  montarNota(){
    nota.innerHTML = "";
    for (let i = 1; i <= Math.floor(this.nota); i++) {
        nota.innerHTML += `<i class="bi bi-star-fill"></i>`;
    }
        
    if (this.nota != Math.floor(this.nota)) {
        nota.innerHTML += `<i class="bi bi-star-half"></i>`;
    }
        
    for (let j = 1; j <= 5 - Math.ceil(this.nota); j++) {
        nota.innerHTML += `<i class="bi bi-star"></i>`;
    }
        
    if (this.nota <= 1) {
        notaEscrita.innerHTML = "Péssimo";
    } else if (this.nota > 1 && this.nota < 2){
        notaEscrita.innerHTML = "Ruim";
    } else if (this.nota >= 2 && this.nota < 3){
        notaEscrita.innerHTML = "Regular";
    } else if (this.nota >= 3 && this.nota < 4){
        notaEscrita.innerHTML = "Bom";
    } else if (this.nota >= 4 && this.nota < 4.5){
        notaEscrita.innerHTML = "Ótimo";
    } else if (this.nota >= 4.5 && this.nota < 5){
        notaEscrita.innerHTML = "Excelente";
    } else {
        notaEscrita.innerHTML = "Perfeito";
    }
  }
}


//Intâncias da classe Modal no click
reviews.forEach((element, index) =>{
    reviews[index].addEventListener("click", ()=>{
      const spinner = document.querySelector(".position-fixed");
      const modalOpen = document.querySelector("#modal");
      const modalBackdrop = document.querySelector(".modal-backdrop");
      
      spinner.classList.remove("d-none");
      modalOpen.classList.add("d-none");
      modalBackdrop.classList.add("d-none");

      function promise(){
        return new Promise((resolve, reject)=>{
            let modal = new Modal(reviewModais[index].review, reviewModais[index].titulo, reviewModais[index].subtitulo, reviewModais[index].autor,
              reviewModais[index].data ,reviewModais[index].atualizacao, reviewModais[index].conteudo, reviewModais[index].imagens,
              reviewModais[index].imgSubtitulos, reviewModais[index].nota);
              modal.montarConteudo();
              modal.montarNota();
              resolve(modal);
              reject("Erro ao carregar review!");
        })
        }

      promise().then((response)=>{
        response.montarConteudo();
        response.montarNota();
      }).then(()=>{
        document.querySelector(".modal-banner > img").onload = function(){
          spinner.classList.add("d-none");
          modalOpen.classList.remove("d-none");
          modalBackdrop.classList.remove("d-none");
        }
      }).catch((rej)=>{
        alert(rej);
      });
    })
})

//Carrossel dinâmico
const carouselImagesGroup = [
  "bannerDesktop1.jpeg",
  "bannerDesktop2.webp",
  "bannerDesktop3.jpeg",
  "bannerMobile1.jpeg",
  "bannerMobile2.jpeg",
  "bannerMobile3.png"
]

const carouselImages = document.querySelectorAll("#carouselBannerDesktop .carousel-item > a > img");

if(window.innerWidth < 560){
  carouselImages.forEach((element, index)=>{
    element.src = `assets/img/${carouselImagesGroup[(index + 3)]}`;
  })
}else{
  carouselImages.forEach((element, index)=>{
    element.src = `assets/img/${carouselImagesGroup[(index)]}`;
  })
}

window.addEventListener("resize", ()=>{
  if(window.innerWidth < 560){
    carouselImages.forEach((element, index)=>{

      element.src = `assets/img/${carouselImagesGroup[(index + 3)]}`;
    })
  }else{
    carouselImages.forEach((element, index)=>{

      element.src = `assets/img/${carouselImagesGroup[(index)]}`;
    })
  }
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

$('#carouselBannerDesktop').on('touchstart', function(event){
  const xClick = event.originalEvent.touches[0].pageX;
  $(this).one('touchmove', function(event){
      const xMove = event.originalEvent.touches[0].pageX;
      const sensitivityInPx = 2;

      if( Math.floor(xClick - xMove) > sensitivityInPx ){
          $(this).carousel('next');
      }
      else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
          $(this).carousel('prev');
      }
  });
  $(this).on('touchend', function(){
      $(this).off('touchmove');
  });
});

$(document).ready(()=>{
  $('.carouselReviewsSlick').slick({
      infinte: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      draggable: true,
      responsive:[
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 580,
              settings:{
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false
              }
          },
          {
              breakpoint: 513,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
              }
          }
      ]
  })
})