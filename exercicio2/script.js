let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();

/*if(nacionalidade === "brasileira"){
    console.log("a pessoa é do Brasil!");
} else if(nacionalidade === "argentina"){
    console.log("a pessoa é da Argentina!");
} else if(nacionalidade === "uruguaia"){
    console.log("a pessoa é do Uruguai!");
} else if(nacionalidade === "chilena"){
    console.log("a pessoa é do Chile!");
} else if(nacionalidade === "colombiana"){
    console.log("a pessoa é da Colômbia!");
} else{
    console.log("nacionalidade não encontrada")
}*/

switch (nacionalidade) {
  case "brasileira":
    console.log("Brasil");
    break;
  case "argentina":
    console.log("Argentina");
    break;
  case "uruguaia":
    console.log("Uruguai");
    break;
  case "chile":
    console.log("Chile");
    break;
  case "colombia":
    console.log("Colombia");
    break;
  default:
    console.log("nacionalidade não cadastrada");
}
