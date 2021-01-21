$(document).ready(function () { 
    let missionBox=$("<main>");
    missionBox.attr({
        class: "mission-box"
    })
    let nestedRow=$("<div>")
    nestedRow.attr({
        class: "row"
    })
    let mission1=$("<div>")
    mission1.attr({
        class: "row mission"
    })
    let mission1Img=$("<img>");
    mission1Img.attr({
        class: "col-lg-12 mission-img",
        src: "../../images/computer-bw.png"
    });
    let mission1Text=$("<div>");
    mission1Text.attr({
        class: "col-lg-12"
    })
    let mission1Head=$("<h3>");
    mission1Head.text("Lorem Ipsum");
    let mission1Para=$("<p>");
    mission1Para.attr({
        class: "mission-para"
    })
    mission1Para.text("In Lorem est cillum sunt incididunt ipsum irure velit ullamco. Voluptate pariatur esse dolor ea aute ullamco dolore anim enim eiulgod velit laborum commodo. Et ullamco duis aliqua duis incididunt velit. Aute non excepteur do nisi minim non.");
    mission1Text.append(mission1Head,mission1Para)
    mission1.append(mission1Img, nestedRow, mission1Text);
    let mission2=$("<div>")
    mission2.attr({
        class: "row mission"
    })
    let mission2Img=$("<img>");
    mission2Img.attr({
        class: "col-lg-12 mission-img",
        src: "../../images/hands-bw.png"
    });
    let mission2Text=$("<div>");
    mission2Text.attr({
        class: "col-lg-12"
    })
    let mission2Head=$("<h3>");
    mission2Head.text("Lorem Ipsum");
    let mission2Para=$("<p>");
    mission2Para.attr({
        class: "mission-para"
    })
    mission2Para.text("In Lorem est cillum sunt incididunt ipsum irure velit ullamco. Voluptate pariatur esse dolor ea aute ullamco dolore anim enim eiulgod velit laborum commodo. Et ullamco duis aliqua duis incididunt velit. Aute non excepteur do nisi minim non.");
    mission2Text.append(mission2Head,mission2Para)
    mission2.append(mission2Img, nestedRow, mission2Text);
    let mission3=$("<div>")
    mission3.attr({
        class: "row mission"
    })
    let mission3Img=$("<img>");
    mission3Img.attr({
        class: "col-lg-12 mission-img",
        src: "../../images/mail-bw.png"
    });
    let mission3Text=$("<div>");
    mission3Text.attr({
        class: "col-lg-12"
    })
    let mission3Head=$("<h3>");
    mission3Head.text("Lorem Ipsum");
    let mission3Para=$("<p>");
    mission3Para.attr({
        class: "mission-para"
    })
    mission3Para.text("In Lorem est cillum sunt incididunt ipsum irure velit ullamco. Voluptate pariatur esse dolor ea aute ullamco dolore anim enim eiulgod velit laborum commodo. Et ullamco duis aliqua duis incididunt velit. Aute non excepteur do nisi minim non.");
    mission3Text.append(mission3Head, nestedRow, mission3Para)
    mission3.append(mission3Img, mission3Text);
    missionBox.append(mission1,mission2,mission3);
    $(".container").append(missionBox);
})