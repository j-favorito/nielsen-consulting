$(document).ready(function () {
    let container = $(".container");
    let logo = $("<img>")
    let logoRow = $("<div>")
    logoRow.attr({
        class: "about-row row"
    })
    logo.attr({
        class: "about-logo col-lg-12",
        src: "../../images/logo.png"
    })
    logoRow.append(logo);
    let aboutBox = $("<div>");
    aboutBox.attr({
        class: "about-box row"
    });
    let aboutHead = $("<h3>");
    aboutHead.attr({
        class: "about-head col-lg-12"
    });
    aboutHead.text("About Nielsen");
    let textBox = $("<div>");
    textBox.attr({
        class: "text-box row"
    });
    let textContent = $("<p>");
    textContent.attr({
        class: "text-content col-lg-12"
    })
    textContent.text("Magna sint esse ex qui tempor esse aute ex sit aliqua sint exercitation commodo. Officia labore esse proident et ex Lorem voluptate culpa tempor. Aliquip elit amet ullamco do adipisicing irure. Esse culpa tempor deserunt sunt nisi. Ea dolore sint laborum ad do ex. Adipisicing officia labore officia excepteur. Pariatur ipsum nostrud id ea magna.")
    let profRow = $("<div>")
    profRow.attr({
        class: "prof-row row"
    })
    let profPic = $("<img>");
    profPic.attr({
        class: "prof-pic col-lg-12",
        src: "../../images/shelb-jake.jpg"
    })
    profRow.append(profPic);
    let shelbRow = $("<div>");
    shelbRow.attr({
        class: "about-box row"
    })
    let shelbHead = $("<h3>");
    shelbHead.attr({
        class: "about-head"
    })
    shelbHead.text("Meet Shelby");
    let shelbText = $("<div>");
    shelbText.attr({
        class: "text-box row"
    });
    let shelbContent = $("<p>");
    shelbContent.attr({
        class: "text-content col-lg-12"
    })
    shelbContent.text("Magna sint esse ex qui tempor esse aute ex sit aliqua sint exercitation commodo. Officia labore esse proident et ex Lorem voluptate culpa tempor. Aliquip elit amet ullamco do adipisicing irure. Esse culpa tempor deserunt sunt nisi. Ea dolore sint laborum ad do ex. Adipisicing officia labore officia excepteur. Pariatur ipsum nostrud id ea magna.")
    shelbText.append(shelbContent);
    shelbHead.append(shelbText);
    shelbRow.append(shelbHead);
    aboutHead.append(textContent);
    aboutBox.append(aboutHead);
    container.append(logoRow, aboutBox, profRow, shelbRow);
})
