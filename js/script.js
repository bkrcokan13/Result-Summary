

function summaryColors() {
    var summaryBoxs = document.querySelectorAll(".summary-box");

    var summaryBoxsIcon = document.querySelectorAll(".summary-icon");
    
    let summaryIconArray = [
        "assets/images/icon-reaction.svg",
        "assets/images/icon-memory.svg",
        "assets/images/icon-verbal.svg",
        "assets/images/icon-visual.svg",
    ];
    let colorArray = [
        "hsla(0, 100%, 67%, 0.14)",
        "hsla(39, 100%, 56%,0.14)",
        "hsla(166, 100%, 37%, 0.14)",
        "hsla(234, 85%, 45%,0.14)"
    ];
    
    summaryBoxs.forEach((box, index) => {
        box.style.backgroundColor = colorArray[index];
    });
    summaryBoxsIcon.forEach((iconBox, index) =>{

        
        iconBox.style.backgroundImage = `url('${summaryIconArray[index]}')`; 
    });
    
    

}


summaryColors()