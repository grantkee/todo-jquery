$(function () {
    let $submitButton = $('#submitButton');
    let $listOfItemsID = $('#listOfItemsID');

    $submitButton.on('click', function(e) {
        e.preventDefault();
        let $userInput = $('#userInput').val();
        $(`<li>${$userInput}</li>`).appendTo($listOfItemsID);
        $('#userInput').val('');
    });

    $listOfItemsID.on('click', 'li', function(){
        let $this = $(this);
        $this.remove();
    });
});