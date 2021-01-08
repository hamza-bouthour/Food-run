const ingredientsProductImages = {
    saltProductId: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt" },
    bonelessChickenProductId: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94,name: "Boneless Chicken" },
    blackPepperProductId: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper" },
    swissCheeseProductId: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84,name: "Swiss cheese" },
    cookedHamProductId: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97,name: "Cooked Ham" },
    breadCrumbsProductId: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00,name: "Bread crumbs" },
    salmonProductId: { img: 'https://i.postimg.cc/T153VhGR/salmon.jpg', price: 2.22,name: "Salmon", id: "salmonProductId" },
    mustardProductId: { img: 'https://i.postimg.cc/Jtw4Pm4j/mustard.jpg', price: 1.97,name: "Mustard", id: "mustardProductId" },
    butterProductId: { img: 'https://i.postimg.cc/xjBKWzX3/butter.jpg', price: 3.42,name: "Butter", id: "butterProductId" },
    eggsProductId: { img: 'https://i.postimg.cc/PxgmZjR7/eggs.jpg',price: 3.67, name: "Organic eggs", id: "eggsProductsId"},
    rosemaryProductId: { img: 'https://i.postimg.cc/tC283v95/rosemary.png',price: 0.99, name: "Rosemary", id: "rosemaryProductId"},
    lemonProductId: { img: 'https://i.postimg.cc/pXfz43mf/lemon.jpg', price: 2.99, name: "Lemon", id: "lemonProductId"}
}
const popularDishes = {
    chickenCordonBleu: {
        name: 'Cordon Bleu',
        cost: 7,
        time: 120,
        img: 'https://i.postimg.cc/hGcXxGs6/Italian-Chicken-Cordon-Bleu2.jpg',
        products: {
            bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94,name: "Boneless Chicken",id: 'bonelessChickenProductId'},
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt",id: 'saltProductId'},
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper" , id: 'blackPepperProductId'},
            swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84,name: "Swiss cheese",id: 'swissCheeseProductId'  },
            cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97,name: "Cooked Ham",id: 'cookedHamProductId'},
            breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00,name: "Bread crumbs",id: 'breadCrumbsProductId'}
        }
    },
    bakedSalmon: {
        name: 'Baked Salmon',
        cost: 7,
        time: 60,
        img: 'https://i.postimg.cc/s2HZrrPL/Webp-net-resizeimage.jpg',
        products: {
            mustard: { img: 'https://i.postimg.cc/Jtw4Pm4j/mustard.jpg', price: 1.97,name: "Mustard", id: "mustardProductId" },
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt",id: 'saltProductId'},
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper" , id: 'blackPepperProductId'},
            swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84,name: "Swiss cheese",id: 'swissCheeseProductId'  },
            salmon: { img: 'https://i.postimg.cc/T153VhGR/salmon.jpg', price: 2.22,name: "Salmon", id: "salmonProductId" },
            breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00,name: "Bread crumbs",id: 'breadCrumbsProductId'},
            butter: { img: 'https://i.postimg.cc/xjBKWzX3/butter.jpg', price: 3.42,name: "Butter", id: "butterProductId" },
            garlic: { img: 'https://i.postimg.cc/jdJFGqTD/garlic.png', price: 2.45, name: "Garlic", id: "garlicProductId"},
            spaghetti: { img: 'https://i.postimg.cc/prkzSFdw/spaghetti.jpg',price: 1.67, name: "Spaghetti", id: "spaghettiProductId"}
        }

    },
    spaghettiCarbonara: {
        name: 'Spaghetti Carbonara',
        cost: 6,
        time: 20,
        img: 'https://i.postimg.cc/zGcJDXMT/Espaguetis-carbonara.jpg',
        products: {
            eggs: { img: 'https://i.postimg.cc/PxgmZjR7/eggs.jpg',price: 3.67, name: "Organic eggs", id: "eggsProductId"},
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt",id: 'saltProductId'},
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper" , id: 'blackPepperProductId'},
            swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84,name: "Swiss cheese",id: 'swissCheeseProductId'  },
            garlic: { img: 'https://i.postimg.cc/jdJFGqTD/garlic.png', price: 2.45, name: "Garlic", id: "garlicProductId"},
            spaghetti: { img: 'https://i.postimg.cc/prkzSFdw/spaghetti.jpg',price: 1.67, name: "Spaghetti", id: "spaghettiProductId"},
            rosemary: { img: 'https://i.postimg.cc/tC283v95/rosemary.png',price: 0.99, name: "Rosemary", id: "rosemaryProductId"},
            lemon: { img: 'https://i.postimg.cc/pXfz43mf/lemon.jpg', price: 2.99, name: "Lemon", id: "lemonProductId"}
        }

    },
    garlicchicken: {
        name: 'Garlic Chicken',
        cost: 8,
        time: 110,
        img: 'https://i.postimg.cc/QMxt6y7d/garlic-chicekn.jpg',
        products: {
            garlic: { img: 'https://i.postimg.cc/jdJFGqTD/garlic.png', price: 2.45, name: "Garlic", id: "garlicProductId"},
            bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94,name: "Boneless Chicken",id: 'bonelessChickenProductId'},
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt",id: 'saltProductId'},
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper" , id: 'blackPepperProductId'},
            rosemary: { img: 'https://i.postimg.cc/tC283v95/rosemary.png',price: 0.99, name: "Rosemary", id: "rosemaryProductId"},
            lemon: { img: 'https://i.postimg.cc/pXfz43mf/lemon.jpg', price: 2.99, name: "Lemon", id: "lemonProductId"}
            
           
        }

    },
    // bakedchicken: {
    //     name: 'Baked Chicken',
    //     cost: 10,
    //     time: 25,
    //     img: 'https://i.postimg.cc/15hZ4vgn/bakedsalmon.jpg',
    //     products: {
    //         bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94,name: "Boneless Chicken" },
    //         salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87,name: "Salt"  },
    //         blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18,name: "Black pepper"  },
    //         swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84,name: "Swiss cheese"  },
    //         cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97,name: "Cooked Ham"  },
    //         breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00,name: "Bread crumbs"  }
    //     }

    // },
    // bakedfish: {
    //     name: 'Baked Chicken',
    //     cost: 10,
    //     time: 25,
    //     img: 'https://i.postimg.cc/15hZ4vgn/bakedsalmon.jpg',
    //     products: {
    //         salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87 },
    //         bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94 },
    //         blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18 },
    //         swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84 },
    //         cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97 },
    //         breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00 }
    //     }
    // },
    // bakedbeef: {
    //     name: 'Baked Chicken',
    //     cost: 10,
    //     time: 25,
    //     img: 'https://i.postimg.cc/15hZ4vgn/bakedsalmon.jpg',
    //     products: {
    //         salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87 },
    //         bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94 },
    //         blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18 },
    //         swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84 },
    //         cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97 },
    //         breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00 }
    //     }
    // },
}



function renderPopularList() {
    Object.keys(popularDishes).forEach(function(key) {
        let idModal = key + "Modal"
        var productsNumber = Object.keys(popularDishes[key].products).length;
        console.log(productsNumber);

        // append dish list

        $("div#popular-dishes-container").append(
            `   <div class="col-12 col-md-4">
                    <div class="card mb-3 card-dish-background " style="border-radius: 5px">
                        <a href=""><img src="${popularDishes[key].img}" alt="" class="card-img-top img-thumbnail" ></a>
                        <div class="card-body ">
                            <h2 class="card-title dish-name-card">${popularDishes[key].name}</h2>                           
                            <p class="card-text-margin"><small>Cooking: </small><span class="text-success"><b>${popularDishes[key].time}min </b><i class="far fa-clock"></i></span></p>
                            <p class="card-text-margin"><small>Cost: </small><span class="text-success"><b>${popularDishes[key].cost}</b><i class="fas fa-dollar-sign"></i></span></p>                           
                        </div>
                        <button role="button" class="btn active-button" data-toggle="modal" data-target="#${key}">Products</button>
                    </div>
                </div>             
            ` 
            )
            // append modal product container

            $("#modalsContainer").append(
                `
                <div class="modal fade" id="${key}" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content" id="${idModal}">
                            <div class="modal-header active-button">
                                <div class="container">
                                    <div class="row">
                                        <h5 class=" col-3 col-md-7 my-auto mr-2 mr-md-0">Products</h5>
                                        <div class="btn-group" role="group col-5" aria-label="Basic example">
                                            <button type="button" class="select-button text-white  listDisplayLink" data-dismiss="modal">View list</button>
                                            <button type="button" class="select-button text-white" id="selectall-button">Select all</button>
                                            <button type="button" class="select-button text-white">Selected:</button>
                                            <span id="selected-display" class="display-list-number-items my-auto"></span>
                                            <span id="selected-all-display" class="display-list-number-items my-auto d-none">${productsNumber}</span>                                         
                                        </div>                                                                              
                                        <button type="button" class="close my-auto text-white" data-dismiss="modal">&times;</button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `              
            )
            //  append product card       

            Object.keys(popularDishes[key].products).map(function(item) {
                    $("#" + idModal).children("div.modal-body").children('div.row').append(`
                        <div class="col-6 col-md-4 col-lg-3 ">
                            <div class="card mb-3 product-card  card-body-background">
                                <img src="${popularDishes[key].products[item].img}" alt="" class="card-img-top zoom">
                                <div class="card-body">
                                    <h5 class="card-title card-text-margin"><span class="card-text">${popularDishes[key].products[item].name}</span></h5>
                                    <strong class="card-text card-text-margin">${popularDishes[key].products[item].price} <i class="fas fa-dollar-sign"></i></strong>
                                </div>
                                <span class="checked-icon mr-2 d-none"><i class="fas fa-3x fa-check"></i></span>
                                <button role="button" id="${popularDishes[key].products[item].id}" class="btn add-list-btn active-button">Add to List</button>
                                <button role="dismiss" class="btn btn-warning remove-button d-none text-white">Remove</button>
                            </div>
                        </div>
                    `)                  
               })   
    })
}

function displayListInModal(numbers) {
    let spanList = $("span#selected-display")
  
    $(spanList).text(numbers);
}
function removeMe() {
    $(this).addClass("d-none");
    
}
function displayList(id) {
    $("#listContainer").append(
        `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card mb-3 card-dish-background">
                <a href=""><img src="${ingredientsProductImages[id].img}" alt="" class="card-img-top zoom"></a>
                <div class="card-body">
                    <h5 class="card-title"><span class="card-text">${ingredientsProductImages[id].name}</span></h5>
                    <strong class="card-text">${ingredientsProductImages[id].price} <i class="fas fa-dollar-sign"></i></strong>
                </div>
                <button role="dismiss" id="${id}" class="remove-product-list btn btn-warning text-white">Remove</button>
                
            </div>
        </div>
        `
    )
}

let ListArr = [];
$(document).ready(function() {
    let number = 0
    $(".add-list-btn").click(function(e) {
        e.preventDefault();
        $("span#selected-all-display").addClass("d-none");
        $("span#selected-display").removeClass("d-none"); 
        $(this).parent().addClass("checked-div");
        $(this).siblings().removeClass("d-none");
        $(this).addClass("d-none");
        // $(this).parent().parent().clone().attr({'id': number}).appendTo("#listContainer");
        var addId = $(this).attr('id');
        ListArr.push($(this).attr('id')); 
        number++;
        displayListInModal(number);
        displayList(addId);
        console.log(ListArr);

    });
 
    $(".remove-button").click(function(e) {
        e.preventDefault();
        $(this).parent().removeClass("checked-div");
        $(this).siblings().removeClass("d-none");
        $(this).addClass("d-none");
        $(this).siblings('span').addClass("d-none");
        number--;
        displayListInModal(number);
        
    });

    // $("#gg").click(function() {
    //     $(this).addClass("d-none");
    //     alert('df');
    // });
    
    $(document).on('click', '.remove-product-list ', function(){
       $(this).parent().parent().remove();
       console.log(ListArr.indexOf($(this).attr('id')));
       ListArr.splice($(this).attr('id'), 1);
       console.log(ListArr);
      });

    $("div.display-cart-in-modal").click(function() {
        $("div#dish-container").addClass("d-none");
        $("div#listContainer").removeClass("d-none");
    });

    $(".listDisplayLink").click(function() {
        $("div#dish-container").addClass("d-none");
        $("div#listContainer").removeClass("d-none");
    });

    $("button#selectall-button").click(function() {
       $("span#selected-display").addClass("d-none");
       $("span#selected-all-display").removeClass("d-none");
       $("div.product-card").addClass("checked-div"); 
    })

});
renderPopularList();
displayListInModal();