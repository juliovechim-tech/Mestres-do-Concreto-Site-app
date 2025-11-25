export interface Course {
  id: number;
  title: string;
  description: string;
  level: "iniciante" | "intermediário" | "avançado";
  durationHours: number;
  price: number;
  thumbnailUrl: string;
  isPublished: boolean;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "UHPC na Prática – Do Laboratório à Obra",
    description:
      "Curso completo sobre concretos de ultra-alta performance: materiais, dosagem, mistura, fibras, cura e aplicações em peças arquitetônicas e estruturais.",
    level: "avançado",
    durationHours: 12,
    price: 1297,
    thumbnailUrl: "https://via.placeholder.com/600x400?text=UHPC+na+Pratica",
    isPublished: true,
  },
  {
    id: 2,
    title: "Concreto Arquitetônico para Marceneiros e Makers",
    description:
      "Do zero ao produto final: bancadas, cubas, mesas e revestimentos em concreto arquitetônico, com foco em quem já trabalha com madeira e marcenaria.",
    level: "intermediário",
    durationHours: 8,
    price: 897,
    thumbnailUrl: "https://via.placeholder.com/600x400?text=Concreto+Arquitetonico",
    isPublished: true,
  },
  {
    id: 3,
    title: "Microtopping e Cimento Queimado de Alto Desempenho",
    description:
      "Tecnologia e prática em microconcretos e revestimentos poliméricos: base, preparo, aplicação, patologias e recuperação de sistemas cimentícios.",
    level: "intermediário",
    durationHours: 6,
    price: 697,
    thumbnailUrl: "https://via.placeholder.com/600x400?text=Microconcretos",
    isPublished: true,
  },
];