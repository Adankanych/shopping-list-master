$(function (){
    //listen for form submission
    $('#js-shopping-list-form').submit(function(event) {

        // prevent default form submission
        event.preventDefault();

        //get text value for the new item
        const listItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');

        $('.shopping-list').append(
            `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);

       
    });

    //listen for click events on delete buttons

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        //look for parent element and remove list item
        $(this).closest('li').remove();
    });

    //listen for click on checked button and toggle check off styling
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

    });

});