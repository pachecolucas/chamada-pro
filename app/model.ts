type Dia = {
  data: string;
  estudantes: EstudanteId[];
};

type Estudante = {
  id: number;
  nome: string;
};

export const ESTUDANTES: Record<string, Estudante> = {
  joao_guilherme: { id: 1, nome: "João Guilherme" },
  joao_pedro: { id: 2, nome: "João Pedro" },
  maria_eduarda: { id: 3, nome: "Maria Eduarda" },
  ricardo_pereira: { id: 4, nome: "Ricardo Pereira" },
};

type EstudanteId = keyof typeof ESTUDANTES;

export const DIAS: Dia[] = [
  { data: "2026-03-02", estudantes: ["joao_guilherme", "maria_eduarda"] },
  { data: "2026-03-09", estudantes: ["maria_eduarda", "ricardo_pereira"] },
];

console.log(ESTUDANTES, DIAS);
