function checkDOMChange(){
         
  // Notification box means something went wrong with adding the item
  // to the cart. Dismiss the box, and try to add the item to the 
  // cart again.
  if (document.getElementById("pdp_addToCartButton").style.display === "inline-block"){
    document.getElementById("addToCartLink").click();
  }

  // Check every 200ms for a DOM change
  var timer = setTimeout(checkDOMChange, 200);

  if (document.getElementsByClassName("item_count_value")[0].innerText !== "0"){
    clearInterval(timer);
  }
  
}

function addToCart(size){
  sizeList = document.getElementById("pdp_sizes").getElementsByTagName("a");
  
  i = 0;

  if (sizeList){
    while(i < sizeList.length){
 
      if (sizeList[i].text === size){
        sizeList[i].click();
        break;
      } 
      else {
        i++;
      }
    }  
    document.getElementById("addToCartLink").click();
    checkDOMChange();
  }
  setTimeout(addToCart, 100); 
}

chrome.storage.sync.get('eastbaySize', 
  function(obj){
    addToCart(obj['eastbaySize']);
  }
);
