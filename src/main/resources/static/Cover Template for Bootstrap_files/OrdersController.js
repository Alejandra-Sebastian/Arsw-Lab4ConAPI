var orders = [{orderId:0,orderItems:[{Product:"PIZZA",Quantity:3,Price:10000},{Product:"HOTDOG",Quantity:1,Price:3000},{Product:"COKE",Quantity:4,Price:1300}]}];

function createOrder() {
	var order = document.createElement('order');
	order.setAttribute('id', 1);
	var tr = order.insertRow(-1);
	for (h = 0; h < orders.length; h++) {
		var th = document.createElement('th');
		th.innerHTML = orders[h];
		tr.appendChild(th);
	}
	for (c = 0; c <= orders.length - 1; c++) {
		tr = order.insertRow(-1);
		for (j = 0; j < orders.length; j++) {
			var td = document.createElement('td');
			td = tr.insertCell(-1);
			td.innerHTML = orders[c][j];
		}
	}
}

function addOrderItem(id,prod, q, pri) {
    orders[id].orderItems.push({Product:prod,Quantity:q,Price:pri});
}

function addOrder(id,orderItems) {
	if (orders.length >= id) {
		orders.push({orderId:id,orderItems:orderItems})
	}
}

function removeOrderById(id) {
	if (id >= orders.length) {
		
	}
}
