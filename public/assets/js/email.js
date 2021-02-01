$(document).ready(function () { 
let emailForm = $("<form>");

emailForm.attr({
    action:"mailto:vince.favorito@gmail.com",
    method:"post",
    enctype:"text/plain",
    id:"email-form",
    class: "col-lg-10"
});

let emailName = $("<input>");

emailName.attr({
    type:"text",
    id:"name",
    placeholder: "Name"
});

let emailAddress = $("<input>");

emailAddress.attr({
    type:"text",
    id:"address",
    placeholder: "Email Address"
});

let emailBody = $("<textarea>");

emailBody.attr({
    id:"body",
    class:"form-control",
    placeholder: "Message"
});

let submitBtn = $("<input>");
submitBtn.attr({
    type:"submit",
    value:"Send",
})

let col2=$("<div>");
col2.attr({
    class: "col-lg-2"
})

emailForm.append(emailName,emailAddress,emailBody,submitBtn);

$(".container").append(col2,emailForm,col2);

});