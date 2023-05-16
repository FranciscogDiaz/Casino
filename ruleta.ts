import { JuegoDeCasino } from "./JuegoDeCasino";
export class Ruleta extends JuegoDeCasino {
    private premio: string;
  
    constructor(juego: string, fabricante: string, premio: string) {
      super(juego, fabricante);
      this.premio = premio;
    }
  
    comenzar(): void {
      console.log(`La ruleta empezo a moverse ${this.juego}`);
    }
  }