import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Single Product");
    }

    async Render() {
        return this.html`
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/product" class="nav__link" data-link>Бүтээгдэхүүн</a></li>
                <li><a href="/single" class="nav__link" data-link>Бараа</a></li>
            </ul>
        </div>

        <div class="single-container single-product">
            <div class="row">
                <div class="box1">
                    <img src="/frontend/images/gallery-1.jpg" id="ProductImg" alt>
                    <div class="small-img-row">
                        <div class="small-img-col">
                            <img src="/frontend/images/gallery-1.jpg" width="100%" class="small-img" alt>
                        </div>
                        <div class="small-img-col">
                            <img src="/frontend/images/gallery-2.jpg" width="100%" class="small-img" alt>
                        </div>
                        <div class="small-img-col">
                            <img src="/frontend/images/gallery-3.jpg" width="100%" class="small-img" alt>
                        </div>
                        <div class="small-img-col">
                            <img src="/frontend/images/gallery-4.jpg" width="100%" class="small-img" alt>
                        </div>
                    </div>
                </div>
                <div class="box2">
                    <h1>Red Printd T-Shirt by HRX</h1>
                    <h2>$50.00</h2>
                    <select>
                        <option>Хэмжээ</option>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Large</option>
                        <option>Medium</option>
                        <option>Small</option>
                    </select>
                    <label for="">
                        <input type="number" value="1">
                    </label>
                    <a href="#" class="btn">Сагсанд нэмэх</a>
                    <h3>Барааны мэдээлэл <i class="fa fa-indent"></i></h3>
                    <br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora iste sunt soluta, possimus
                        maiores, assumenda pariatur ducimus voluptate, quo aperiam nam error corrupti unde maxime
                        provident explicabo rerum blanditiis eveniet?</p>
                </div>
            </div>

            <!------title------->
            <div class="small-title-container">
                <div class="row row-2">
                    <h2>Адилхан бараа</h2>
                    <p>Илүүг харах</p>
                </div>
            </div>
            <!------Products------->
            <div class="container-single">
                <div class="row">
                    <div class="colSingle">
                        <a href="#">
                            <img src="/frontend/images/product-5.jpg" alt="">
                            <h4>Red Printed T-Shirt</h4>
                        </a>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                    <div class="colSingle">
                        <a href="#">
                            <img src="/frontend/images/product-6.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                    <div class="colSingle">
                        <a href="#">
                            <img src="/frontend/images/product-7.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                    <div class="colSingle">
                        <a href="#">
                            <img src="/frontend/images/product-8.jpg" alt="">
                        </a>
                        <h4>Red Printed T-Shirt</h4>
                        <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        </div>
                        <p>$60.00</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
        