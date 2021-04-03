import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Payment");
    }

    async Render() {
        return this.html`
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/cart" class="nav__link" data-link>Сагс</a></li>
                <li><a href="/payment" class="nav__link" data-link>Төлбөр</a></li>
            </ul>
        </div>

        <div class="chk-container">
            <div class="chk-row">
                <div class="chk-col1">
                    <div class="col1-items">
                        <a href="product-details.html">
                            <img src="/frontend/images/buy-1.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <p>$60.00</p>
                        <a href="#">Устгах</a>
                    </div>
                    <div class="col1-items">
                        <a href="product-details.html">
                            <img src="/frontend/images/buy-2.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <p>$60.00</p>
                        <a href="#">Устгах</a>
                    </div>
                    <div class="col1-items">
                        <a href="product-details.html">
                            <img src="/frontend/images/buy-3.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <p>$60.00</p>
                        <a href="#">Устгах</a>
                    </div>
                </div>
                <div class="chk-col2">
                    <h2>Cart
                        <span class="price" style="color:black">
                            <i class="fa fa-shopping-cart"></i>
                            <b>4</b>
                        </span>
                        </h3>
                        <p><a href="product-details.html">Бараа 1</a> <span class="price">$15</span></p>
                        <p><a href="product-details.html">Бараа 2</a> <span class="price">$5</span></p>
                        <p><a href="product-details.html">Бараа 3</a> <span class="price">$8</span></p>
                        <p><a href="product-details.html">Бараа 4</a> <span class="price">$2</span></p>
                        <hr>
                        <br>
                        <p>Total: <span id="total-price" style="color:black"><b>$30</b></span></p>
                        <h3>Төлбөр</h3>
                        <label for="fname">Хүлээж авах картууд</label>
                        <div class="chk-icon">
                            <button><i class="fa fa-cc-visa" style="color:navy;"></i></button>
                            <button><i class="fa fa-cc-amex" style="color:blue;"></i></button>
                            <button><i class="fa fa-cc-mastercard" style="color:red;"></i></button>
                            <button><i class="fa fa-cc-discover" style="color:orange;"></i></button>
                        </div>

                </div>
            </div>

        </div>
        </div>
        `;
    }
}
        