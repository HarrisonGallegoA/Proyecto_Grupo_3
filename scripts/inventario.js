let inventory = [
    { code: "C001", name: 'Zapatos Deportivos', quantity: 15 },
    { code: "C002", name: 'Botas de Senderismo', quantity: 12 },
    { code: "C003", name: 'Sandalias de Verano', quantity: 25 },
    { code: "C004", name: 'Zapatillas de Casa', quantity: 30 },
    { code: "C005", name: 'Zapatos Formales', quantity: 18 },
    { code: "C006", name: 'Zapatos para Correr', quantity: 22 },
    { code: "C007", name: 'Chanclas Playeras', quantity: 28 },
    { code: "C008", name: 'Botines de Moda', quantity: 10 },
    { code: "C009", name: 'Alpargatas Estilizadas', quantity: 14 },
    { code: "C010", name: 'Mocasines Elegantes', quantity: 8 }
];

let currentUser = null;


function showMessage(message) {
    // document.getElementById('message').textContent = message;
    document.getElementById('message').innerHTML = message;
    document.getElementById('message').classList.remove('d-none');
    setTimeout(() => {
        document.getElementById('message').innerHTML = '';
        document.getElementById('message').classList.add('d-none');
        document.getElementById('message').style.color = '#0C356A';
    }, 5000);
}


function createInventoryTable() {
    const inventoryTable = document.createElement('div');
    inventoryTable.classList.add('table-responsive');
    inventoryTable.innerHTML = '<table class="table-striped table-hover tb_inventory" id="inventory-table"></table>';
    document.getElementById('inventory-section').appendChild(inventoryTable);
}

async function showInventory() {
    !document.getElementById('inventory-table') && await createInventoryTable();
    
    const table = document.getElementById('inventory-table');
    // Limpiar la tabla antes de agregar nuevos elementos
    table.innerHTML = '';
    // Crear encabezados de la tabla
    const t_head = document.createElement('thead');
    table.appendChild(t_head);


    const headerRow = t_head.insertRow(0);
    const headers = ['Código', 'Nombre', 'Cantidad', 'Acciones'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    // Llenar tbody de la tabla con datos del inventario
    const t_body = document.createElement('tbody');
    table.appendChild(t_body);

    inventory.forEach((product, index) => {
        // Crear fila para el producto
        const row = t_body.insertRow(index);
        row.classList.add('text-center');
        
        // Añadir celdas con la información del producto
        Object.values(product).forEach((value, columnIndex) => {
            const cell = row.insertCell(columnIndex);
            cell.textContent = value;
        });

        // Añadir botón de eliminar en la última columna
        const deleteCell = row.insertCell(Object.keys(product).length);
        const deleteButton = document.createElement('i');
        // bg-danger float-right p-1 rounded-circle ti ti-trash
        deleteButton.classList.add('ti', 'ti-trash', 'bg-danger', 'float-right', 'p-1', 'rounded-circle');
        deleteButton.addEventListener('click', () => deleteProduct(product.code));
        deleteCell.appendChild(deleteButton);

        // Añadir botón de editar en la última columna
        // const editCell = row.insertCell(Object.keys(product).length);
        // const editButton = document.createElement('i');
        // // bg-warning float-right p-1 rounded-circle ti ti-pencil
        // editButton.classList.add('ti', 'ti-pencil', 'bg-warning', 'float-right', 'p-1', 'rounded-circle');
        // editButton.addEventListener('click', () => editProduct(product.code));
        // editCell.appendChild(editButton);

    });
}



function showAddProductForm() {
}

function hideAddProductForm() {
    showMessage('');
}

function addProduct() {
    const codeProduct = document.getElementById('product-code').value;
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value, 10);

    if (productName && !isNaN(productQuantity) && productQuantity > 0 && codeProduct.length == 4) {
        inventory.push({code: codeProduct, name: productName, quantity: productQuantity });
        showInventory();
        hideAddProductForm();
        showMessage('Producto agregado al inventario.');
    } else {
        showMessage('Por favor, ingrese un nombre de producto válido y una cantidad válida.');
    }
}

function showDeleteProductForm() {
}

function deleteProduct(code) {
    const find_product = inventory.find(product => product.code === code);

    // confirm

    let val_conf = confirm(`¿Está seguro que desea eliminar el producto: \n ${find_product.name}?`);

    if (!val_conf) {
        return;
    }

    const index = inventory.findIndex(product => product.code === code);
    inventory.splice(index, 1);
    document.querySelector('#inventory-table tbody').removeChild(document.querySelector('#inventory-table tbody').childNodes[index]);
    document.getElementById('message').style.color = 'red';
    showMessage(`Producto: \n <br><b> ${find_product.name} </b><br>Eliminado del inventario.`);

    

}

showInventory();

