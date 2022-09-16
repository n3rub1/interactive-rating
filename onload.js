window.onload = function inputRatingFromLocalStorage() {
    document.getElementById("ratingNumber").innerText = `You selected ${localStorage.rating} out of 5`
  
  } 