$(document).ready(function () { 
let emailForm = $("<form>");

emailForm.attr({
    action:"mailto:vince.favorito@gmail.com",
    method:"post",
    enctype:"text/plain"
});

let emailName = $("<input>");

emailName.attr({
    type:"text",
    id:"name"
});

let emailAddress = $("<input>");

emailAddress.attr({
    type:"text",
    id:"address"
});

let emailBody = $("<textarea>");

emailBody.attr({
    id:"body",
    class:"form-control"
});

let submitBtn = $("<input>");
submitBtn.attr({
    type:"submit",
    value:"send"
})

emailForm.append(emailName,emailAddress,emailBody,submitBtn);

$(".container").append(emailForm);

});