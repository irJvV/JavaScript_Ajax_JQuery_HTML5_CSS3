function validateUserId() {
   ajaxFunction();
   // Here processRequest() is the callback function.
   ajaxRequest.onreadystatechange = processRequest;
   if (!target) target = document.getElementById("userid");
   var url = "validate?id=" + escape(target.value);
   ajaxRequest.open("GET", url, true);
   ajaxRequest.send(null);
}