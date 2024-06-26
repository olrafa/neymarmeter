import { NEWS_TIME, runTimes } from "../constants";

export const PAGE_TITLE = "Neymarmeter";
export const SUB_TITLE = "Buscando referências a Neymar na mídia brasileira";
export const INITIAL_DETAIL_CAPTION = "Explore o gráfico para ver detalhes";

export const EXPLAINER = {
  title: "Como funciona",
  robot: `Todos os dias, por volta de ${runTimes}, nosso
    robô abre a página inicial dos principais sites de notícias do Brasil.
    Se o robô encontra o termo "Neymar", cria uma entrada no banco de
    dados.`,
  chart: `O gráfico mostra em quantos sites encontramos "Neymar" na página
    principal. Quanto mais claro o verde, mais sites tinham o termo em sua
    página naquele momento. Aqui mostramos dados para os últimos 30 dias.`,
  clarifier: `Não contamos quantas menções existiam em cada site. A contagem 
  é se o site traz alguma menção ou não. Mesmo se existirem menções em editorias 
  diferentes (esportes e celebridades, por exemplo), cada site conta uma vez só.`,
  newsFeed: `Outro robô procura por "Neymar" no Google News todos os dias,
    por volta de ${NEWS_TIME}h, ou um pouco mais tarde. Ele filtra,
    entre os 10 primeiros resultados, os que foram publicados há menos de 24 horas. 
    Essas são as manchetes que mostramos.`,
};

export const STORIES = "Principais notícias ao final do dia ";
