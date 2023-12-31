const table = document.getElementById('productsTable')

const socket = io() 

socket.on('updatedProducts', data => {
    table.innerHTML = 
        `<tr>
            <td><strong>Foto</strong></td>
            <td><strong>Producto</strong></td>
            <td><strong>Descripción</strong></td>
            <td><strong>Precio</strong></td>
            <td><strong>Código</strong></td>
            <td><strong>Stock</strong></td>
            <td><strong>Categoría</strong></td>
        </tr>`;
        for (product of data) {
            let tr = document.createElement('tr')
            tr.innerHTML=
                        `   <td>${product.photo}</td>
                            <td>${product.title}</td>
                            <td>${product.type}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            <td>${product.code}</td>
                            <td>${product.stock}</td>
                            <td>${product.category}</td>
                        `;
            table.getElementsByTagName('tbody')[0].appendChild(tr);
        }
           
} )