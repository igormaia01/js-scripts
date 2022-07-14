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

csvString = [
    ['taxId'],  
    ...data.map(item => [
        item.taxId,
    ].join('\n')).join('\t'),
    ['status'],
    ...data.map(item => [
        item.status,
    ].join('\n')).join('\t'),
    ['type'],
    ...data.map(item => [
        item.type,
    ].join('\n')).join('\t'),
];

const { format } = require('@fast-csv/format');

const csvStream = format({ headers: true, quoteColumns: true });

csvStream.pipe(process.stdout).on('end', () => process.exit());

csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.write({ header1: 'value1a', header2: 'value2a' });
csvStream.end();

let csvContent = "data:text/csv;charset=utf-8,"
    + csvStream

var encodedUri = encodeURI(csvContent);

var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "my_data.csv");
document.body.appendChild(link); 
link.click();
