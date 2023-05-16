import { JuegoDeCasino } from "./JuegoDeCasino";
export class Dados extends JuegoDeCasino {
    private premio: string;
  
    constructor(juego: string, fabricante: string, premio: string) {
      super(juego, fabricante);
      this.premio = premio;
    }
  
    comenzar(): void {
        console.log(`Vamos a lanzar los dados (${this.premio})...`);
    }
  }