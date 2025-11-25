export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  application: string;
  priceFrom?: number;
  imageUrl: string;
  isAvailable: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Kit UHPC Mestres do Concreto",
    description:
      "Sistema completo para produção de UHPC em pequena escala: traço-base, instruções de mistura, cura, fibras e recomendações de materiais.",
    category: "UHPC",
    application: "Peças arquitetônicas, mobiliário, elementos delgados de alto desempenho.",
    priceFrom: 1497,
    imageUrl: "https://via.placeholder.com/600x400?text=Kit+UHPC",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Kit Microtopping Polimérico",
    description:
      "Sistema de revestimento cimentício polimérico para pisos e paredes, com alta aderência, baixa espessura e acabamento arquitetônico.",
    category: "Revestimentos",
    application: "Ambientes internos e externos, residenciais e comerciais.",
    priceFrom: 897,
    imageUrl: "https://via.placeholder.com/600x400?text=Kit+Microtopping",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Kit Cuba & Bancada em Concreto",
    description:
      "Kit técnico para produção de cubas e bancadas: recomendações de traço, moldes, armaduras, cura e acabamento.",
    category: "Mobiliário",
    application: "Banheiros, cozinhas, áreas gourmets e mobiliário autoral.",
    priceFrom: 1197,
    imageUrl: "https://via.placeholder.com/600x400?text=Kit+Cuba+Bancada",
    isAvailable: true,
  },
];