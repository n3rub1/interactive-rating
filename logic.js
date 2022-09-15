function selectFeedback(clickId) {
    console.log(clickId)
  switch (clickId) {
    case "1": {
      makeSelected(1, "hsl(25, 97%, 53%)", "white");
      makeDeselected(1, "hsl(216, 12%, 8%)", "hsl(217, 12%, 63%)");
    }break;
    case "2": {
      makeSelected(2, "hsl(25, 97%, 53%)", "white");
      makeDeselected(2, "hsl(216, 12%, 8%)", "hsl(217, 12%, 63%)");
    }break;
    case "3": {
      makeSelected(3, "hsl(25, 97%, 53%)", "white");
      makeDeselected(3, "hsl(216, 12%, 8%)", "hsl(217, 12%, 63%)");
    }break;
    case "4": {
      makeSelected(4, "hsl(25, 97%, 53%)", "white");
      makeDeselected(4, "hsl(216, 12%, 8%)", "hsl(217, 12%, 63%)");
    }break;
    case "5": {
      makeSelected(5, "hsl(25, 97%, 53%)", "white");
      makeDeselected(5, "hsl(216, 12%, 8%)", "hsl(217, 12%, 63%)");
    }break;
  }
}

function makeSelected(id, backgroundColour, fontColour) {
  document.getElementById(id).style.backgroundColor = backgroundColour;
  document.getElementById(id).style.color = fontColour;
}

function makeDeselected(idToExclude, backgroundColour, fontColour) {

    for(let i=1; i<=5; i++){
        if(i  != idToExclude){
            console.log(i)
            document.getElementById(i).style.backgroundColor = backgroundColour;
            document.getElementById(i).style.color = fontColour;
        }
    

}
}
