function deleteItem(e){

}

function getPriceByProduct(j){
    var deleteButtons = document.getElementsByClassName("deleteButtons");
  for (j=0;j<deleteButtons.length;j++){
   document.getElementsByClassName("partial-price")[j].innerHTML = "$" + document.getElementsByClassName("price")[j].value * document.getElementsByTagName("input")[j].value + ".00";
  }
  
}

function updatePriceByProduct(productPrice, index){


}

function getTotalPrice() {





}

function createQuantityInput(){

}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById("calculatePriceButton");
  //var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName("deleteButtons");

  calculatePriceButton.onclick = getPriceByProduct;


  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
