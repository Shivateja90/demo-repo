window.onload = function() {
    let welcome = "Do you want to continue?";
    let response = confirm(welcome); // confirm box (OK / Cancel)

    if (!response) {
        document.getElementById("pageContent").style.display = "none";
        alert("You canceled. The page content is hidden.");
    } else {
        console.log("User clicked OK, page continues...");
    }
};

 
 
 
 