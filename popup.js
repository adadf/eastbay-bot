function setSize(){
  var size = document.getElementById("size").value;

  if (!size) {
    alert("You must specify a size!");
    return;
  }

  chrome.storage.sync.set({'eastbaySize': size}, function() {

    alert("Saved size as: " + size);

  });

}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("save").addEventListener('click', setSize);
  chrome.storage.sync.get('eastbaySize', 
    function(obj){
      if (!obj['eastbaySize']){
        document.getElementById("size").value = "";
      }
      else {
        document.getElementById("size").value = obj['eastbaySize'];
      }
    });
});
