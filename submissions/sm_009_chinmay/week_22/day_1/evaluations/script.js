$(document).ready(function() {
    // Appending dynamic cards with new random id's
    $("#add-card-button").click(function(){
        let randomId = Math.random()*1000;
        $("ul").append(`
            <div class="flex-card" id = ${randomId}>
                <img src="https://via.placeholder.com/300x220"/>
                <small>JANUARY 30, 2020  ADMIN</small>
                <p>Even the all-powerful Pointing has no control about the blind texts </p>
            </div>
        `);
    })

    // Deleting new cards on click
    $(".flex-container").on('click','.flex-card',function(){
        console.log("deleting the card with id: ", this.id);
        $(this).remove();
        alert("The clicked card was successfully deleted..!!");
       }); 
})