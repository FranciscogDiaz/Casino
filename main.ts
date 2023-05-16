import { Ruleta } from "./ruleta";
import { Dados } from "./dados";
import { Casino } from "./casino";

  const Ruleta1: Ruleta = new Ruleta("Ruleta1", "Fabricante1", "$5000");
  const Ruleta2: Ruleta = new Ruleta("Ruleta2", "Fabricante2", "$2500");
  const Dados1: Dados = new Dados("Craps1", "Fabricante1", "$8000");
  const Dados2: Dados = new Dados("Craps2", "Fabricante2", "$10000");
  
  const elCasino: Casino = new Casino("Benito Juarez", "Rivadavia y Belgrano", 1234, [Ruleta1, Ruleta2], [Dados1, Dados2]);
  
  console.log(elCasino);
