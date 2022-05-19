let númeroMes: number = Number(
  prompt("Indique el número de mes que le interesa saber")
);

let arregloMes: string[] = new Array(12);
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "Octubre";
arregloMes[10] = "Noviembre";
arregloMes[11] = "Diciembre";

let índice = númeroMes - 1;

console.log("El mes es: " + arregloMes[índice]);

/*
let arregloMes: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
 "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
*/
