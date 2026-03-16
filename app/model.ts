type Dia = {
  data: string;
  estudantes: Estudante[];
};

type Estudante = {
  nome: string;
};

export const E: Record<string, Estudante> = {
  joao_guilherme: { nome: "João Guilherme" },
  jose_lorenzo: { nome: "José Lorenzo" },
  edson_hagmayer: { nome: "Edson Hagmayer" },
  fabrizio_astrada: { nome: "Fabrizio Astrada" },
  pedro_ferreira_nunes_neto: { nome: "Pedro Ferreira Nunes Neto" },
  kleberson_dos_santos: { nome: "Kleberson dos Santos" },
  joao_vitor_marcolino_veiga: { nome: "João Vítor Marcolino Veiga" },
  leandro_bugalho: { nome: "Leandro Bugalho" },
  clarissa_flor: { nome: "Clarissa Flor" },
  amanda_dos_santos_daros: { nome: "Amanda dos Santos Daros" },
  jhon_vitor_medeiros: { nome: "Jhon Vítor Medeiros" },
  elias_caleb: { nome: "Elias Caleb" },
  diogo_maia: { nome: "Diogo Maia" },
  eduardo_ribeiro: { nome: "Eduardo Ribeiro" },
  tiago_bugalho: { nome: "Tiago Bugalho" },
  isabelly_marques: { nome: "Isabelly Marques" },
  mateus_collet_lacerda_machado: { nome: "Mateus Collet Lacerda Machado" },
  joao_pedro_mello: { nome: "João Pedro Mello" },
  igor_da_silva_dias: { nome: "Igor da Silva Dias" },
  sabrina_da_silva_sobral: { nome: "Sabrina da Silva Sobral" },
  railson_de_oliveira_silva: { nome: "Railson de Oliveira Silva" },
  rafa_verde: { nome: "Rafa Verde" },
};

export const DIAS: Dia[] = [
  {
    data: "2026-02-23",
    estudantes: [
      E.joao_guilherme,
      E.jose_lorenzo,
      E.edson_hagmayer,
      E.fabrizio_astrada,
      E.pedro_ferreira_nunes_neto,
      E.kleberson_dos_santos,
      E.joao_vitor_marcolino_veiga,
      E.leandro_bugalho,
      E.clarissa_flor,
      E.amanda_dos_santos_daros,
      E.jhon_vitor_medeiros,
      E.elias_caleb,
      E.diogo_maia,
      E.eduardo_ribeiro,
      E.tiago_bugalho,
      E.isabelly_marques,
      E.mateus_collet_lacerda_machado,
    ],
  },
  {
    data: "2026-03-02",
    estudantes: [
      E.pedro_ferreira_nunes_neto,
      E.joao_pedro_mello,
      E.igor_da_silva_dias,
      E.joao_vitor_marcolino_veiga,
      E.sabrina_da_silva_sobral,
      E.amanda_dos_santos_daros,
      E.railson_de_oliveira_silva,
      E.edson_hagmayer,
      E.isabelly_marques,
      E.joao_guilherme,
      E.mateus_collet_lacerda_machado,
      E.leandro_bugalho,
      E.tiago_bugalho,
      E.kleberson_dos_santos,
      E.elias_caleb,
      E.jose_lorenzo,
      E.rafa_verde,
      E.fabrizio_astrada,
    ],
  },
  {
    data: "2026-03-09",
    estudantes: [
      E.railson_de_oliveira_silva,
      E.edson_hagmayer,
      E.mateus_collet_lacerda_machado,
      E.amanda_dos_santos_daros,
      E.sabrina_da_silva_sobral,
      E.joao_pedro_mello,
      E.elias_caleb,
      E.kleberson_dos_santos,
      E.jhon_vitor_medeiros,
      E.igor_da_silva_dias,
      E.joao_vitor_marcolino_veiga,
      E.rafa_verde,
      E.tiago_bugalho,
      E.clarissa_flor,
      E.fabrizio_astrada,
    ],
  },
  {
    data: "2026-03-16",
    estudantes: [
      E.railson_de_oliveira_silva,
      E.joao_guilherme,
      E.edson_hagmayer,
      E.amanda_dos_santos_daros,
      E.jhon_vitor_medeiros,
      E.sabrina_da_silva_sobral,
      E.joao_vitor_marcolino_veiga,
      E.tiago_bugalho,
      E.isabelly_marques,
      E.rafa_verde,
      E.elias_caleb,
      E.mateus_collet_lacerda_machado,
      E.pedro_ferreira_nunes_neto,
      E.kleberson_dos_santos,
      E.fabrizio_astrada,
      E.leandro_bugalho,
    ],
  },
];

console.log(DIAS);
