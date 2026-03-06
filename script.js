let products = [];

function addProduct() {

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const category = document.getElementById("productCategory").value;
    const imageInput = document.getElementById("productImage");

    if(name === "" || price === "") {
        alert("Please fill all fields");
        return;
    }

    let imageURL = "";

    if(imageInput.files.length > 0){
        imageURL = URL.createObjectURL(imageInput.files[0]);
    }

    const product = {
        id: Date.now(),
        name: name,
        price: price,
        category: category,
        image: imageURL
    };

    products.push(product);

    displayProducts();

    document.getElementById("productName").value="";
    document.getElementById("productPrice").value="";
}

function displayProducts(){

    const container = document.getElementById("productList");

    container.innerHTML = "";

    products.forEach((product)=>{

        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" class="product-img"/>
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <span class="category">${product.category}</span>
            <button onclick="deleteProduct(${product.id})">Delete</button>
        `;

        container.appendChild(card);

    });

}

function deleteProduct(id){

    products = products.filter(product => product.id !== id);

    displayProducts();

}