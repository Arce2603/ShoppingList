function watchForm() {
    let add = $('#add');
    $(add).on('click', function (e) {
        e.preventDefault();
        let item = $('#item').val();
        if (item !== '') {
            addItem(item);
        }
    });
}

function watchButtons() {
    $('#list').on("click", "button", function (e) {
        if ($(this).attr('class') === 'checkButton' ) {
            let selItem = $(this).parent().find('.item');
            let classState = $(selItem).attr('class');
            if (classState === 'item')
                $(selItem).attr('class', 'strike item');
            else
                $(selItem).attr('class', 'item');
        }
        else if ($(this).attr('class') === 'deleteButton') {
            let selItem = $(this).parent();
            $(selItem).remove();
        }
    });  
}

function addItem(newI){
    let list = $('#list');
    $(list).append(`
       <li class="shoppingItem">
       <div class="item">${newI}</div>
       <button class="checkButton">check</button>
       <button class="deleteButton">delete</button>
       </li>
    `);
    let item = $('#item').val('');
}

function init() {
    watchForm();
    watchButtons();
}

init();
