const XLSX = require("xlsx");
const workbook = XLSX.readFile("./dd.xlsx");
const sheetName = "Julho.2024";
const worksheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(worksheet);

const arr = [];

function getPerfil() {
  data.forEach((obj) => {
    let perfil = {};
    perfil.ID = obj["1"];
    perfil.canal = obj["2"];
    perfil.respostaPeloConjuntoLojasDeRede =
      obj["6"].toLowerCase().slice(0, 3) == "sim" ? true : false;
    perfil.qtdLojasRede = obj["4"] > 0 ? obj["4"] : 0;

    arr.push(perfil);
  });
}


getPerfil();
console.log(arr);
