var orders = {"orderAmountsMap":{"PIZZA":3,"HOTDOG":1,"COKE":4},"tableNumber":1}
//{"orderAmountsMap":{"PIZZA":3,"HOTDOG":1,"COKE":4},"tableNumber":1}
function createOrder(order) {
    var header = new Array();
    header.push("Product");
    header.push("Quantity");
    console.log(order);
    var orderTable = document.createElement("TABLE");
    orderTable.border = "1";
    orderTable.setAttribute("id","Table"+order[tableNumber]);
 
        
    var row = orderTable.insertRow(-1);
    var th = document.createElement("TH");
    th.setAttribute("colspan","3");
    th.innerHTML = "Table "+order[tableNumber];
    row.appendChild(th);

    var row = orderTable.insertRow(-1);
    for (var i = 0; i < 2; i++) {
        var thCell = document.createElement("TH");
        thCell.innerHTML = header[i];
        row.appendChild(thCell);
    }
 
    for (var i in order.orderAmountsMap) {
        row = orderTable.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = i;
        var cell = row.insertCell(-1);
        cell.innerHTML = order.orderAmountsMap[i];
        
//        var cell = row.insertCell(-1);
//        cell.innerHTML = order.products[i].price;
    }
 
    var dvTable = document.getElementById("tables");
    dvTable.appendChild(document.createElement("BR"));
    dvTable.appendChild(orderTable);
}

function addOrderItem(id,prod) {
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

function loadOrdersList(){
    axios.get("/orders/1")
    .then(function (response) {
        var ordenes = response.data;
        createOrder(ordenes);
            
    })
    .catch(function (error) {
      console.log(error);
    });
    
    axios.get("/orders/3")
    .then(function (response) {
        var ordenes = response.data;
        createOrder(ordenes);
            
    })
    .catch(function (error) {
      console.log(error);
    });
    //createOrder(orders);
}
