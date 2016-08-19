'use strict';

var categories = [];
var types = [];
var products = [];



$(document).ready(function() {
  $.getJSON('categories.json' )
    .then((data1) => {
      console.log('data1', data1)
      categories = data1.categories;
      // return categories
      // displayCategories(data1);
      return displayCategories(categories);

    })

      $.getJSON('types.json')
      .then((data2) => {
         types = data2.types;
         // $("select").change(function (event) {
          return displayProduct(types);
      })

      $.getJSON('products.json')
      .then((data3) => {
         products = data3.products;
           return displayProduct(products);
        // console.log('data3', products)
      })



  var menu = $('#dropDown1');

    function displayCategories(data1) {
        categories.forEach(function(categories) {
            $('<option />', {value: categories.id,
                             text: categories.name}).appendTo(menu);
        }) //append() to is different from appendTo()
    };
    //     // console.log("this", $("option:selected").text())

$("select").on("change", function(event) {
        var currentChoice = this.value;
        displayProduct(currentChoice);

    })
    function displayProduct(picked) {
        // console.log("change happened")
        $("#output").empty();
            products.forEach(function (products) {
              var currentTypeId = products.type;
              var currentCategoryId = types[currentTypeId].category;
              if(currentCategoryId == picked){
                var myProduct =
                        ` <tr>
                            <th scope="row">${"."}</th>
                            <td>${products.name}</td>
                            <td>${types[products.type].name}</td>
                            <td>${products.description} <a href="#">Read more</a> </td>
                          </
                        `;
                  $("#output").append(myProduct);
              }

            })

    };
});
