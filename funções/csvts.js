
const data = [
    {
        taxId: '12345678901',
        status: 'bloqueado',
        type: 'pessoa fisica'
    },
    {
        taxId: '12345678901',
        status: 'ativado',
        type: 'pessoa juridica'
    }
];


console.log([['taxId', 'status', 'type'], ...data.map((item) => [item.taxId, item.status, item.type])]);