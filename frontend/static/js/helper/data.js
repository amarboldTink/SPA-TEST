import {Products, getProducts} from './dataHelp.js';

const productUrl = "https://api.jsonbin.io/b/606728264e8bf4520cad87ff";

document.getElementById('app').addEventListener('mousedown', function(){
    document.getElementById('newPrd').addEventListener('click', clickNew);
})

function clickNew(){
    getProducts(productUrl, 
        (productList) =>{
            let returnHTML ="";
    
            productList.forEach(element =>{
                returnHTML += Products.Products(element.category, element.name, element.price).CreateHTML();
            });
            var parent = document.getElementById('thatOneRow');
            console.log(parent);
            parent.insertAdjacentHTML('afterbegin', returnHTML);
        }
    )
}