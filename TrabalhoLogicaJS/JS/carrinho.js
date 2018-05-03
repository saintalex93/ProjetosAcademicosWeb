var concat,
	TableProducts = document.querySelector('#TableProducts');	

var products = 
[
		{id: 1, name: "Café", price: 4.50},
		{id: 2, name: "Açúcar", price: 5.00},
		{id: 3, name: "Pão de Forma", price: 5.00},
		{id: 4, name: "Nescau", price: 8.00},
		{id: 5, name: "Leite", price: 3.50}, 
		{id: 6, name: "Manteiga", price: 6.00}, 
		{id: 7, name: "Geleia", price: 4.50}
],
	cartProductsId = [];

fillFields();

function fillFields(){

	for (i = 0; i < products.length; i++){


		TableProducts.innerHTML += "<tr> <td>"+products[i].id+"</td>"+
				  "<td>"+products[i].name+"</td>"+
				  "<td>"+"R$ "+products[i].price.toFixed(2).replace(".", ",")+"</td></tr>";

		var divProducts = document.getElementById('products');
		var product = document.createElement("input");
	    product.setAttribute('type', 'submit');
	    product.name = 'name';
	    product.value = products[i].name;
	    product.id = products[i].id;
	    divProducts.appendChild(product);

	    product.addEventListener('click', function(){
		    
		    this.disabled = true;
		    addToCart(this.id);

	    });

}

}

function addToCart(productId){

	cartProductsId.push(productId);
	purchase();
}

function purchase(){

	var itens = '';
	var total = 0;

	 for( var i = 0, len = cartProductsId.length; i < len; i++ )
	  {
	    var index = cartProductsId[i] - 1;
	    
	    itens = products[index].name+', ';
	    total += parseFloat( products[index].price );


	  	console.log(itens);  
	  }
	  
	document.getElementById('purchaseItens').innerHTML += itens;
	document.getElementById('totalPrice').innerHTML = "R$ "+  total.toFixed(2).replace(".",",");

}




