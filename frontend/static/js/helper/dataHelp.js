export let Products = {
    Products: function(_category, _name, _price) {this.category = _category; this.name = _name; this.price = _price; return this;},

    CreateHTML: function()
    {
        let returnHTML="";

        return returnHTML += `
        <div class="col_4 ${this.category} show">
        <a href="/single" class="nav__link" data-link>
            <img src="/frontend/images/${this.name}.jpg" alt=""></img>
            <h4>${this.name}</h4>
        </a>
        <p>$${this.price}</p>
        </div>
        `
    },
}

export function getProducts(url, callMeBack)
{
    fetch(url)
    .then(res => res.json())
    .then(data =>
        {
            callMeBack(data.products);
        })
}
