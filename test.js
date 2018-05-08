let i = 0;
function setInput(n, t) {
    let item = i;
    if (0 >= n) {
        i = 0;
        return console.log("program suskes, banyak item = ", item);
    } 

    $('.add__type').val('plus');
    $('.add__title').val('coba ' + (i+1));
    $('.add__quantity').val(Math.random() * 99999);
    $('.measure').val('kg');

    saveData();
    loadData();
    i++;
    n--;
    setTimeout(function() {
        setInput(n, t);
    }, t);
}

function deleteAll() {
    $.ajax({
        type: 'GET',
        url: 'server.php?p=deleteall',
        data: '',
        success: function() {
            loadData();
        }
    });
}