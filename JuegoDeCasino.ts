export class JuegoDeCasino {
    protected juego: string;
    protected fabricante: string;
  
    constructor(juego: string, fabricante: string) {
      this.juego = juego;
      this.fabricante = fabricante;
    }
  
    getInfo(): void {
      console.log(`Juego de Casino:
        ID: ${this.juego}
        Fabricante: ${this.fabricante}
      `);
    }
  }