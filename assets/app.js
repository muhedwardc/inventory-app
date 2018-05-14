loadData();
let allItem = new Object();    

function itemClicked() {
    if (event.target.className == 'delete-btn') {
        let parentDiv = event.target.parentNode.parentNode.parentNode.parentNode;
        let nama = parentDiv.childNodes[0].textContent;
        deleteItem(nama);
    };
}

function loadData() {
    $.ajax({
        type: 'GET',
        url: 'server.php?p=get',
        data: '',
        success: function (result) {
            let resultObj = JSON.parse(result);
            allItem = resultObj;
            let list = $('.list');
            let listItem = '';

            $.each(resultObj, function (key, val) {
                let newItem = '<div class="item clearfix" onclick="itemClicked()"><div class="item__title">' + val.nama + '</div><div class="right clearfix"><div class="item__value">' + val.kuantitas + ' ' + val.satuan + '</div><div class="item__delete"><button class="item__delete--btn" title="hapus"><img class="delete-btn" src="assets/icons/delete.png" style="width: 25px; height: 25px;"></button></div></div></div>';
                listItem += newItem;
            });

            list.html(listItem);
        }
    })
}

function saveData() {
    loadData();
    let type = $('.add__type').val();
    let title = $('.add__title').val().toLowerCase();
    let quantity = Number($('.add__quantity').val());
    let measure = $('.measure').val();
    
    let validatedInput = validateInput(type, title, quantity, measure);
    validatedInput ? checkExistency(type, title, quantity, measure) : null;
}

function validateInput(type, title, quantity, measure) {
    if (type && title.length !== 0 && quantity > 0 && measure) {
        return true;
    } else {
        alert("Input salah");
        return false;
    }
}

function checkExistency(type, title, quantity, measure) {
    let exist = false;
    let sameValue = false;
    allItem.forEach(item => {
        if (item["nama"] == title) {
            if (item["satuan"] != measure) {
                alert("satuan yang dimasukkan tidak sama");
                exist = true;
            } else if (type === "min" && quantity > Number(item["kuantitas"])) {
                alert("Kuantitas barang tidak mencukupi");
                exist = true;
            } else if (type === "min" && quantity === Number(item["kuantitas"])) {
                exist = true;
                sameValue = true;
            } else if (type === "min" && quantity <= Number(item["kuantitas"])) {
                updateItem(type, title, Number(item["kuantitas"]), measure, quantity);
                exist = true;
            } else if (type === "plus") {
                updateItem(type, title, Number(item["kuantitas"]), measure, quantity);
                exist = true;
            }
        }
    });

    if (!exist && type == "plus") addItem(title, quantity, measure);
    else if (!exist && type == "min") alert("anda tidak bisa mengurangi barang yang belum ada");
    else if (exist && sameValue && type == "min") {
        deleteItem(title);
        alert("barang habis");
    }
}

function addItem(title, quantity, measure) {
    $.ajax({
        type: 'POST',
        url: 'server.php?p=add',
        data: 't=' + title + '&q=' + quantity + '&m=' + measure,
        success: function () {
            loadData();
        }
    })
}

function updateItem(type, title, currquantity, measure, newquantity) {
    if (type == "min") currquantity -= newquantity;
    else currquantity += newquantity;
    $.ajax({
        type: 'POST',
        url: 'server.php?p=update',
        data: 't=' + title + '&q=' + currquantity + '&m=' + measure,
        success: function () {
            loadData();
        }
    })
}

function deleteItem(nama) {
    $.ajax({
        type: 'GET',
        url: 'server.php?p=delete',
        data: 'n=' + nama,
        success: function() {
            loadData();
        }
    });
}