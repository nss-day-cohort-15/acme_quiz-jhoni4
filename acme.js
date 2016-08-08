var products = [];
var types = [];
var categories = [];

$(document).ready(function() {

    var loadCategories = function() {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "categories.json"
            }).done(function(data) {
                resolve(data.categories);
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };

    var loadTypes = function(cb1) {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "types.json",
                data: cb1
            }).done(function(data) {
                resolve(data.types);
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };

    var loadProducts = function(cb2) {
        return new Promise((resolve, reject) => {
            $.ajax({ url: "products.json",
                data: cb2
            }).done(function(data) {
                resolve(data.products);
            }).fail(function(xhr, status, error) {
                reject(error);
            });
        })
    };

    loadCategories()
        .then(function(data1) {
            categories = data1;
            return loadTypes(data1);
        })
        .then(function(data2) {
            types = data2;
            return loadProducts(data2);
        })
        .then(function(data3) {
            products = data3;
        })

});

