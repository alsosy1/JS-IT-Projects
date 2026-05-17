const table = document.createElement('table');
table.className = 'data-table';

table.style.borderCollapse = 'collapse';
table.style.width = '100%';

const headers = ['ID', 'Name', 'Role', 'Status'];
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    
    th.style.padding = '12px';
    th.style.border = '1px solid #334155';
    
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

function addRow(rowData) {
    const row = document.createElement('tr');
    
    rowData.forEach((text, index) => {
        const cell = document.createElement('td');
        cell.textContent = text;
        
        cell.style.padding = '12px';
        cell.style.border = '1px solid #334155';
        
        if (index === 3) {
            if (text === 'Active') {
                cell.className = 'status-active';
            } else if (text === 'Pending') {
                cell.className = 'status-pending';
            } else if (text === 'Inactive') {
                cell.className = 'status-inactive';
            }
        }
        
        row.appendChild(cell);
    });
    
    tbody.appendChild(row);
}

const data = [
    ['1', 'John Doe', 'Developer', 'Active'],
    ['2', 'Jane Smith', 'Designer', 'Pending'],
    ['3', 'Bob Johnson', 'Manager', 'Active'],
    ['4', 'Alice Brown', 'QA Engineer', 'Inactive']
];

data.forEach(rowData => addRow(rowData));

const previewContainer = document.getElementById('tablePreviewContainer');
previewContainer.appendChild(table);