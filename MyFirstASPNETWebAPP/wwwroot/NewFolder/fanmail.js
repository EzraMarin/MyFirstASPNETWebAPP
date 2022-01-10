document.getElementById("btnSend").addEventListener("click", function () {
    alert("from: " + document.getElementById("txtfrom").value +
        ", subject: " + document.getElementById("txtsubject").value +
        ", message: " + document.getElementById("txtmessage").value);
})