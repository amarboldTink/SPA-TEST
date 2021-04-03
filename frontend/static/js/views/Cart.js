import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Cart");
    }

    async Render() {
        return this.html`
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/cart" class="nav__link" data-link>Сагс</a></li>
            </ul>
        </div>

        <div class="cart-container cart-page">
            <table>
                <tr>
                    <th>Бараа</th>
                    <th>Тоо</th>
                    <th>Нийт</th>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="/frontend/images/buy-1.jpg" alt="">
                            <div>
                                <p>Red Printed T-Shirt</p>
                                <small>Price: 500$.00</small>
                                <br>
                                <a href="#">Устгах</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label for="">
                            <input type="number" value="1">
                        </label>
                    </td>
                    <td>$500.00</td>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="/frontend/images/buy-2.jpg" alt="">
                            <div>
                                <p>Black pants</p>
                                <small>Price: 50$.00</small>
                                <br>
                                <a href="#">Устгах</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label for="">
                            <input type="number" value="1">
                        </label>
                    </td>
                    <td>$500.00</td>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="/frontend/images/buy-3.jpg" alt="">
                            <div>
                                <p>Black Cool Shoes</p>
                                <small>Price: 59$.00</small>
                                <br>
                                <a href="#">Устгах</a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label for="">
                            <input type="number" value="1">
                        </label>
                    </td>
                    <td>$500.00</td>
                </tr>
            </table>

            <div class="total-price">
                <table>
                    <tr>
                        <td>НӨАТ-гүй дүн</td>
                        <td>$609.00</td>
                    </tr>
                    <tr>
                        <td>НӨАТ</td>
                        <td>$30.00</td>
                    </tr>
                    <tr>
                        <td>Нийт</td>
                        <td>$639.00</td>
                    </tr>
                </table>
            </div>
            <div class="total-price">
                    <button class="btn"><a href="/payment" class="nav__link" data-link>ТӨЛӨХ</a></button>
            </div>
        </div>
        `;
    }
}
        