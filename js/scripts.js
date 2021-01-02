const popularDishes = {
    chickenCordonBleu: {
        name: 'Chicken Cordon Bleu',
        cost: 7,
        time: 120,
        img: 'https://i.postimg.cc/gc3TtmJj/chicken.png',
        products: {
            bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94 },
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87 },
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18 },
            swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84 },
            cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97 },
            breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00 }
        }


    },
    bakedSalmon: {
        name: 'Baked Salmon',
        cost: 10,
        time: 25,
        img: 'https://i.postimg.cc/15hZ4vgn/bakedsalmon.jpg',
        products: {
            salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87 },
            bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94 },
            blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18 },
            swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84 },
            cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97 },
            breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00 }
        }
    },
    // bakedchicken: {
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
    // bakedchicken: {
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
    // bakeddik: {
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

const ingredientsProductImages = {
    salt: { img: 'https://i.postimg.cc/mr41T347/salt.png', price: 3.87 },
    bonelessChicken: { img: 'https://i.postimg.cc/jdJDN3dz/chicken.jpg', price: 5.94 },
    blackPepper: { img: 'https://i.postimg.cc/Z5tCLPCX/pepper.jpg', price: 3.18 },
    swissCheese: { img: 'https://i.postimg.cc/W1GtYDZz/cheese.jpg', price: 1.84 },
    cookedHam: { img: 'https://i.postimg.cc/FKhzM9bZ/ham.png', price: 3.97 },
    breadCrumbs: { img: 'https://i.postimg.cc/YS80kJbw/bread-crumbs.jpg', price: 8.00 },
    salmon: { img: 'https://i.postimg.cc/T153VhGR/salmon.jpg', price: 2.22 },
    mustard: { img: 'https://i.postimg.cc/Jtw4Pm4j/mustard.jpg', price: 1.97 },
    butter: { img: 'https://i.postimg.cc/xjBKWzX3/butter.jpg', price: 3.42 }
}

function renderPopularList() {
    Object.keys(popularDishes).forEach(function(key) {
        // popularDishes[key].map(function(i) {
        //     console.log(i)
        // })
        // let idDish = key;
        let idModal = key + "Modal"
        
        $("div#popular-dishes-container").append(
            `   <div class="col-6 col-md-4 col-lg-3">
                    <div class="card mb-3">
                        <a href=""><img src="${popularDishes[key].img}" alt="" class="card-img-top zoom"></a>
                        <div class="card-body">
                            <h5 class="card-title">${popularDishes[key].name}<span class="card-text offset-4">1.99$</span></h5>
                            <p class="card-text">Hello dfsadfsafdsafsadfsfasfasfas<span class="offset-1 card-text"></span></p>
                        </div>
                        <button role="button" class="btn products-button text-white" data-toggle="modal" data-target="#${key}">Products</button>
                    </div>
                </div>    
          
            ` 
            )
            $("#modalsContainer").append(
                `
                <div class="modal fade" id="${key}" role="dialog">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content" id="${idModal}">
                            <div class="modal-header bg-info text-white">
                                    <h3 class="modal-title">Products</h3>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
               
            )
            
        
                
            Object.keys(popularDishes[key].products).map(function(item) {
                    $('#chickenCordonBleuModal').children("div.modal-body").children('div.row').append(`
                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card mb-3">
                                <a href=""><img src="${popularDishes[key].products[item].img}" alt="" class="card-img-top zoom"></a>
                                <div class="card-body">
                                    <h5 class="card-title"><span class="card-text offset-4">1.99$</span></h5>
                                    <p class="card-text">Hello dfsadfsafdsafsadfsfasfasfas<span class="offset-1 card-text"></span></p>
                                </div>
                                <button role="button" class="btn btn-info" data-toggle="modal" data-target="#${key}">Products</button>
                            </div>
                        </div>
                    `)
          
                    // console.log(popularDishes[key].products[item].img)
               })   
        

    })
}

// function renderModal() {
//     Object.keys(popularDishes).forEach(function(key) {

//     })
// }
      // $(idModal).addClass("d-none");
                // $(idModal).css("background-color", "red");
        
           
            // alert('dfs')
                // console.log(idModal)
                    
// const displayDishes = (dishesList) => {
//     let dishes = Object.keys(dishesList);
//     dishes.forEach(function(item, index, array) {
//         let zeb = dishesList.item;
//         console.log(dishesList.dishes)
//     })

//     asba = dishes[0]
//     console.log(asba)
// }


// displayDishes(popularDishes);
renderPopularList();