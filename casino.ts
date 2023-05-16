import { Ruleta } from "./ruleta";
import { Dados } from "./dados";
export class Casino {
    protected ruleta: Ruleta[];
    protected dados: Dados[];
    protected nombre: string;
    protected ubicacion: string;
    protected numeroid: number;
  
    constructor(
        nombre: string,
        ubicacion: string,
        numeroid: number,
        ruleta: Ruleta[],
        dados: Dados[]
      ) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.numeroid = numeroid;
        this.ruleta = ruleta;
        this.dados = dados;
      }
    
      getInfo(): Casino {
        return this;
      }
    }