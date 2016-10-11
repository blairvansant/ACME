// You are going to be creating several JSON files that will be describing all of the explosive products that you sell. You need to use Promises to handle the order of the asynchronous operations needed to load the data.

// User interface

// Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.

// Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.
"use strict";

$(document).ready(function() {
  var contentEl = $("#fireworks-output"); 
  var categories = [];

  function getCategories() {
      return new Promise((resolve, reject) => {
          $.ajax({
              url: "../categories.json"
          }).done(function(data) {
              resolve(data);
          }).fail(function(xhr, status, error) {
              reject(error);
          });
      });
  }
  getCategories().then(function(dataPass) {
      console.log("dataPass", dataPass);

      var categoryData = "";
      var currentCategory;
      dataPass.categories.forEach(function(catData){
          categories.push(catData);
      });

      for (var i = 0; i < categories.length; i++) {
          currentCategory = categories[i];

          categoryData += `<h1>${currentCategory.name}</h1>`;
      }

      console.log("categoryData", categoryData);
      contentEl.html(categoryData);
  });

});





