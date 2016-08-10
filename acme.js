var products = [];
var types = [];
var categories = [];



$(document).ready(function() {

    var loadCategories = function() {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "categories.json"
            }).done((data) => {
                resolve(data.categories);
            }).fail((xhr, status, error) => {
                reject(error);
            });
        })
    };

    var loadTypes = function(cb1) {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "types.json",
                data: cb1
            }).done((data) => {
                resolve(data.types);
            }).fail((xhr, status, error) => {
                reject(error);
            });
        })
    };

    var loadProducts = function(cb2) {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "products.json",
                data: cb2
            }).done((data) => {
                resolve(data.products);
            }).fail((xhr, status, error) => {
                reject(error);
            });
        })
    };

    loadCategories()
        .then((data1) => {
            categories = data1;
            displayCategories(categories);
            return loadTypes(data1);
        })
        .then((data2) => {
            types = data2;
            return loadProducts(data2);
        })
        .then((data3) => {
            products = data3;
        })


  var menu = $('#dropDown1');

    function displayCategories(data1) {
        data1.forEach(function(categories) {
            console.log("categories.name",categories.name);
            // menu = `<option value="${categories.id}" text="${categories.name}"></option>`
            $('<option />', {value: categories.id,
                             text: categories.name}).appendTo(menu);

        }) //append() to is different from appendTo()

    };
});
