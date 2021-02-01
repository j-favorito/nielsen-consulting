$(document).ready(function () {
    let container = $(".container");
    let aboutBox = $("<div>");
    aboutBox.attr({
        class: "about-box row"
    });
    let aboutHead = $("<h3>");
    aboutHead.attr({
        class: "about-head col-lg-12"
    });
    aboutHead.text("Lorem Ipsum");
    let textBox = $("<div>");
    textBox.attr({
        class: "text-box row"
    });
    let textContent = $("<p>");
    textContent.attr({
        class: "text-content col-lg-12"
    })
    textContent.text("Magna sint esse ex qui tempor esse aute ex sit aliqua sint exercitation commodo. Officia labore esse proident et ex Lorem voluptate culpa tempor. Aliquip elit amet ullamco do adipisicing irure. Esse culpa tempor deserunt sunt nisi. Ea dolore sint laborum ad do ex. Adipisicing officia labore officia excepteur. Pariatur ipsum nostrud id ea magna.")
    aboutHead.append(textContent);
    aboutBox.append(aboutHead);
    container.append(aboutBox);
})
