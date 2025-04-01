export interface Feedback {
    id: string;
    title: string;
    content: string;
    category: Category;
    rating: number;
    client_id: string | null;
    enterprise_id: string;
    createdAt: Date;
    answers: Answer[] | null
}

export interface Answer {
    id: string
    content: string
    feedback_id: string
    user_id: string
    createdAt: Date
}

export type Category = 'Service' | 'Product_Quality' | 'Delivery Time' | 'Cost Benefit'

export const feedbacks: Feedback[] = [
    {
        id: 'fb1',
        title: 'Excelente produto, super recomendo!',
        content: 'O produto superou minhas expectativas, a qualidade é excelente!',
        category: 'Product_Quality',
        rating: 5,
        client_id: 'client1',
        enterprise_id: 'c9d4c3a1-b71a-4c94-a8e0-2f343ee202d6',
        createdAt: new Date('2025-03-15T10:00:00Z'),
        answers: [
            {
                id: 'ans1',
                content: 'Ficamos felizes que tenha gostado! Agradecemos o feedback!',
                feedback_id: 'fb1',
                user_id: 'user1',
                createdAt: new Date('2025-03-16T12:00:00Z')
            }
        ]
    },
    {
        id: 'fb2',
        title: 'Não gostei da entrega, muito demorada',
        content: 'A entrega demorou muito mais do que o esperado, isso me deixou frustrado.',
        category: 'Delivery Time',
        rating: 2,
        client_id: 'client2',
        enterprise_id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e234f56789b',
        createdAt: new Date('2025-03-10T14:30:00Z'),
        answers: null
    },
    {
        id: 'fb3',
        title: 'Ótimo atendimento',
        content: 'A equipe de atendimento foi muito atenciosa e solucionou meu problema rapidamente.',
        category: 'Service',
        rating: 5,
        client_id: 'client3',
        enterprise_id: 'f6d5a4c3-b21a-4c12-9c1b-2d3a4b5c6d7e',
        createdAt: new Date('2025-03-12T09:00:00Z'),
        answers: [
            {
                id: 'ans2',
                content: 'Agradecemos pelo feedback positivo, estamos sempre à disposição!',
                feedback_id: 'fb3',
                user_id: 'user2',
                createdAt: new Date('2025-03-13T11:00:00Z')
            }
        ]
    },
    {
        id: 'fb4',
        title: 'Produto com defeito',
        content: 'Recebi o produto com defeito, não funcionou como esperado.',
        category: 'Product_Quality',
        rating: 1,
        client_id: 'client4',
        enterprise_id: 'c9d4c3a1-b71a-4c94-a8e0-2f343ee202d6',
        createdAt: new Date('2025-03-11T16:20:00Z'),
        answers: [
            {
                id: 'ans3',
                content: 'Lamentamos pelo ocorrido, estamos processando a troca o mais rápido possível.',
                feedback_id: 'fb4',
                user_id: 'user3',
                createdAt: new Date('2025-03-12T13:45:00Z')
            }
        ]
    },
    {
        id: 'fb5',
        title: 'Custo-benefício excelente',
        content: 'O produto é barato e de boa qualidade, ótimo custo-benefício.',
        category: 'Cost Benefit',
        rating: 4,
        client_id: 'client5',
        enterprise_id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e234f56789b',
        createdAt: new Date('2025-03-14T15:00:00Z'),
        answers: null
    },
    {
        id: 'fb6',
        title: 'Reclamação de atraso na entrega',
        content: 'A entrega atrasou mais do que o prometido e eu não fui informado sobre o atraso.',
        category: 'Delivery Time',
        rating: 2,
        client_id: null, // Feedback anônimo
        enterprise_id: 'f6d5a4c3-b21a-4c12-9c1b-2d3a4b5c6d7e',
        createdAt: new Date('2025-03-13T18:30:00Z'),
        answers: [
            {
                id: 'ans4',
                content: 'Pedimos desculpas pelo atraso. Estamos trabalhando para melhorar a comunicação.',
                feedback_id: 'fb6',
                user_id: 'user4',
                createdAt: new Date('2025-03-14T10:00:00Z')
            }
        ]
    },
    {
        id: 'fb7',
        title: 'Produto bom, mas veio com embalagem danificada',
        content: 'O produto é bom, mas a embalagem chegou danificada. Isso não comprometeu o funcionamento, mas é algo a melhorar.',
        category: 'Product_Quality',
        rating: 4,
        client_id: 'client6',
        enterprise_id: 'c9d4c3a1-b71a-4c94-a8e0-2f343ee202d6',
        createdAt: new Date('2025-03-10T12:00:00Z'),
        answers: null
    },
    {
        id: 'fb8',
        title: 'Excelente experiência de compra',
        content: 'Fui bem atendido, o produto chegou rápido e em perfeito estado.',
        category: 'Service',
        rating: 5,
        client_id: 'client7',
        enterprise_id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e234f56789b',
        createdAt: new Date('2025-03-16T17:00:00Z'),
        answers: [
            {
                id: 'ans5',
                content: 'Agradecemos muito pelo seu feedback positivo!',
                feedback_id: 'fb8',
                user_id: 'user5',
                createdAt: new Date('2025-03-17T09:00:00Z')
            }
        ]
    },
    {
        id: 'fb9',
        title: 'Atraso na entrega novamente',
        content: 'Já é a segunda vez que recebo um atraso. Preciso de uma solução.',
        category: 'Delivery Time',
        rating: 2,
        client_id: 'client8',
        enterprise_id: 'f6d5a4c3-b21a-4c12-9c1b-2d3a4b5c6d7e',
        createdAt: new Date('2025-03-14T11:00:00Z'),
        answers: null
    },
    {
        id: 'fb10',
        title: 'Ótimo custo-benefício',
        content: 'O produto atendeu às minhas expectativas, considerando o preço.',
        category: 'Cost Benefit',
        rating: 4,
        client_id: null, // Feedback anônimo
        enterprise_id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e234f56789b',
        createdAt: new Date('2025-03-15T08:45:00Z'),
        answers: [
            {
                id: 'ans6',
                content: 'Agradecemos pelo seu feedback, estamos trabalhando para melhorar cada vez mais.',
                feedback_id: 'fb10',
                user_id: 'user6',
                createdAt: new Date('2025-03-16T10:15:00Z')
            }
        ]
    },
    // Feedbacks adicionais anônimos
    {
        id: 'fb11',
        title: 'Falha no produto, não consegui utilizar',
        content: 'O produto não funcionou corretamente desde o início, não consegui utilizar.',
        category: 'Product_Quality',
        rating: 1,
        client_id: null, // Feedback anônimo
        enterprise_id: 'c9d4c3a1-b71a-4c94-a8e0-2f343ee202d6',
        createdAt: new Date('2025-03-16T20:00:00Z'),
        answers: null
    },
    {
        id: 'fb12',
        title: 'Muito bom, recomendo para todos',
        content: 'Excelente experiência de compra e produto. A qualidade é incrível.',
        category: 'Product_Quality',
        rating: 5,
        client_id: null, // Feedback anônimo
        enterprise_id: 'f6d5a4c3-b21a-4c12-9c1b-2d3a4b5c6d7e',
        createdAt: new Date('2025-03-17T10:30:00Z'),
        answers: [
            {
                id: 'ans7',
                content: 'Agradecemos muito pelo seu feedback positivo! Estamos felizes que tenha gostado.',
                feedback_id: 'fb12',
                user_id: 'user7',
                createdAt: new Date('2025-03-17T11:45:00Z')
            }
        ]
    }
];
