$(document).ready(function () {
    let bootNav = $("<nav>")
    bootNav.attr({
        class: "navbar fixed-top navbar-expand-lg navbar-light"
    });
    let brandElement = $("<a>");
    brandElement.attr({
        class: "navbar-brand",
        href: "index.html"
    });
    let brandImage = $("<img>")
    brandImage.attr({
        class: "brand-logo",
        src: "../../images/logo.png"
    })
    brandElement.append(brandImage);
    let dropdownBttn = $("<button>");
    dropdownBttn.attr({
        class: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarNavAltMarkup",
        "aria-controls": "navbarNavAltMarkup",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    })
    let dropdownIcon = $("<span>");
    dropdownIcon.attr({
        class: "navbar-toggler-icon"
    });
    dropdownBttn.append(dropdownIcon);
    let navCollapse = $("<div>");
    navCollapse.attr({
        class: "collapse navbar-collapse",
        id: "navbarNavAltMarkup"
    })
    let navItems = $("<div>");
    navItems.attr({
        class: "navbar-nav"
    });
    let navAbout = $("<a>");
    navAbout.attr({
        class: "nav-item nav-link nav-text",
        href: "about.html"
    })
    navAbout.text("About")
    let navContact = $("<a>");
    navContact.attr({
        class: "nav-item nav-link nav-text",
        href: "email.html",
    })
    navContact.text("Contact");
    navItems.append(navAbout, navContact);
    navCollapse.append(navItems);
    bootNav.append(brandElement, dropdownBttn, navCollapse);
    $(".boot-nav").append(bootNav);
    // When the user scrolls the page, execute myFunction
    window.onscroll = function () { myFunction() };

    // Get the navbar
    var navbar = $(".boot-nav");

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
})





{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav> */}