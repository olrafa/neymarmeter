import { unsplashCredits } from "./constants";
import { initialize } from "./functions/start";
import "./style.css";

const [author, site] = unsplashCredits;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="content">
<h1>Neymarmeter</h1>
<h3>Buscando referências a Neymar na mídia brasileira</h3>
<div id="chart"></div>
<div id="detail">Explore o gráfico para ver detalhes</div>
<div id="site-list"></div>
<div id="info">
  <h3>Como funciona</h3>
  <p>
    Todos os dias, por volta das 3h, 9h, 15h e 21h (de Brasília), nosso
    robô abre a página inicial dos principais sites de notícias do Brasil.
    Se o robô encontra o termo "Neymar", cria uma entrada no banco de
    dados.<br /><br />
    O gráfico mostra em quantos sites encontramos "Neymar" na página
    principal. Quanto mais claro o verde, mais sites tinham o termo em sua
    página naquele momento. Sendo assim, também não contamos o número de
    menções em cada página, apenas se havia alguma menção ou não.
  </p>
  <p>
    O código está disponível no
    <a
      href="https://github.com/olrafa/neymarmeter"
      target="_blank"
      rel="noopener noreferrer"
      >Github</a
    >.
  </p>
</div>
</div>

<div id="unsplash-credit">
Photo by
<a
  href="${author.href}"
  >${author.text}</a
>
on
<a
  href="${site.href}"
  >${site.text}</a
>
</div>
`;

initialize();
