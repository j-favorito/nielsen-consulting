$(document).ready(function () { 
    let bootNav=$("<nav>")
    bootNav.attr({
        class: "navbar navbar-expand-lg navbar-light bg-light"
    });
    let brandElement=$("<a>");
    brandElement.attr({
        class: "navbar-brand",
        href:"index.html"});
    let brandImage=$("<img>")
    brandImage.attr({
            class: "brand-logo",
            src: "../../images/logo.png"
    })
    brandElement.append(brandImage);
    let dropdownBttn=$("<button>");
    dropdownBttn.attr({
        class: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarNavAltMarkup",
        "aria-controls": "navbarNavAltMarkup",
        "aria-expanded":"false",
        "aria-label":"Toggle navigation"
    })
    let dropdownIcon=$("<span>");
    dropdownIcon.attr({
        class:"navbar-toggler-icon"
    });
    dropdownBttn.append(dropdownIcon);
    let navCollapse=$("<div>");
    navCollapse.attr({
        class: "collapse navbar-collapse",
        id: "navbarNavAltMarkup"
    })
    let navItems=$("<div>");
    navItems.attr({
        class:"navbar-nav"
    });
    let navAbout = $("<a>");
    navAbout.attr({
        class: "nav-item nav-link nav-text",
        href: "about.html",
    })
    navAbout.text("About")
    let navContact = $("<a>");
    navContact.attr({
        class: "nav-item nav-link nav-text",
        href: "#",
    })
    navContact.text("Contact");
    navItems.append(navAbout,navContact);
    navCollapse.append(navItems);
    bootNav.append(brandElement,dropdownBttn,navCollapse);
    $(".boot-nav").append(bootNav);
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