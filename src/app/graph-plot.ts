/**
 * Classe pour modéliser les coordonnées x,y d'un point sur un graphe
 */
export class GraphPlot {
  x: number;
  y: number;
}

export class GraphOHLCPlot {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  vwap: number;
  volume: number;
  count: number;
}