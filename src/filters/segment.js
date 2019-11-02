import Vue from "vue";

const segmentMap = {
  1: "Controle",
  2: "Pós-pago",
  3: "Pré-pago",
  4: "Express",
  5: "Família",
  6: "Empresa"
};

const segmentFormatFilter = Vue.filter("segmentFilter", segmentId => {
  if (!segmentId) return "Perfil inválido";

  return segmentMap[segmentId];
});

export default { segmentFormatFilter };
