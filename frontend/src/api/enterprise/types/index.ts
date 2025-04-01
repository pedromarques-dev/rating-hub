type Sector = 'Fashion' | 'Technology' | 'Tools' | 'Automotive' |  'Foods' | 'Electronics' | 'Health'

export interface Enterprise {
    id: string;
    name: string;
    corporateName: string;
    description: string
    email: string;
    rating: string;
    cnpj: string;
    address: string;
    sector: Sector
  }

  export const enterprises: Enterprise[] = [
    {
      id: 'c9d4c3a1-b71a-4c94-a8e0-2f343ee202d6',
      name: 'TechSolutions Ltda',
      email: 'contato@techsolutions.com',
      cnpj: '12.345.678/0001-90',
      rating: "⭐⭐⭐⭐⭐",
      description: 'Soluções tecnológicas para empresas de diversos segmentos.',
      corporateName: 'TechSolutions Tecnologia Ltda.',
      address: 'Rua das Inovações, 123, São Paulo, SP, 01234-567',
      sector: 'Technology'
    },
    {
      id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e234f56789b',
      name: 'Global Industries S.A.',
      email: 'suporte@globalindustries.com',
      cnpj: '98.765.432/0001-01',
      rating: "⭐⭐⭐⭐",
      description: 'Indústria global especializada na fabricação de peças automotivas.',
      corporateName: 'Global Industries S.A.',
      address: 'Avenida Industrial, 456, Curitiba, PR, 98765-432',
      sector: 'Automotive'
    },
    {
      id: 'f6d5a4c3-b21a-4c12-9c1b-2d3a4b5c6d7e',
      name: 'InovaTech Group',
      email: 'info@inovatechgroup.com',
      cnpj: '23.456.789/0001-23',
      rating: "⭐⭐⭐⭐",
      description: 'Inovações tecnológicas para melhorar processos industriais.',
      corporateName: 'InovaTech Soluções Tecnológicas Ltda.',
      address: 'Rua do Progresso, 789, Rio de Janeiro, RJ, 23456-789',
      sector: 'Technology'
    },
    {
      id: 'e5d6c7a8-b2d3-4f1a-b7a1-2e4d5c6a7d8e',
      name: 'EcoSolutions Ltda',
      email: 'contato@ecosolutions.com',
      cnpj: '34.567.890/0001-34',
      rating: "⭐⭐⭐",
      description: 'Empresa especializada em soluções ecológicas e sustentáveis.',
      corporateName: 'EcoSolutions Sustentabilidade Ltda.',
      address: 'Rua Verde, 1010, Florianópolis, SC, 34567-890',
      sector: 'Tools'
    }
  ];
  

