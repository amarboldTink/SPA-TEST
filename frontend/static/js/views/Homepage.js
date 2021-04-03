import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Home Page");
    }

    async Render() {
        return `
            <!-- Showcase -->
            <header class="showcase">
                <h2>Сүүлд нэмэгдсэн</h2>
                <p>
                    Бараанууд ирлээ.
                </p>
                <a href="#" class="btn">
                    Shop <i class="fas fa-chevron-right"></i>
                </a>
            </header>



            <!-- Recommended -->
            <div class="middleWord">
                <h2>Санал болгох</h2>
            </div>

            <section class="cards">
                <div>
                    <img src="/frontend/images/office.jpg" alt="">
                    <h3>Оффис компьютер</h3>
                    <p>
                        Таны өдөр тутмын, оффисын хэрэглээг хамгийн хямдаар!
                    </p>
                    <a href="#">Дэлгэрэнгүй <i class="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <img src="/frontend/images/gaming.png" alt="">
                    <h3>Gaming компьютер</h3>
                    <p>
                        For the GAMERS. By the GAMERS.
                    </p>
                    <a href="#">Дэлгэрэнгүй <i class="fas fa-chevron-right"></i></a>
                </div>
                <div>
                    <img src="/frontend/images/multimedia.webp" alt="">
                    <h3>Мултимедиа компьютер</h3>
                    <p>
                        Таны төсөөлөл - танаар л хязгаарлагдана!
                    </p>
                    <a href="#">Дэлгэрэнгүй <i class="fas fa-chevron-right"></i></a>
                </div>
            </section>


            <!-- Brands -->
            <div class="middleWord">
                <h2>Санал болгож буй брендүүд</h2>
            </div>

            <section class="brands">
                <div class="small-container">
                    <div class="row">
                        <div class="col">
                            <img src="/frontend/images/rsz_1zotac-logo.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/rsz_asus_2.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/corsair.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/msi.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/Acer-2.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/intel.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/7m.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/1m.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/3m.png" alt="">
                        </div>
                        <div class="col">
                            <img src="/frontend/images/4m.png" alt="">
                        </div>
                    </div>
                </div>
            </section>


            <!-- Follow -->
            <section class="follow">
                <p>Бид нарыг дагаарай</p>
                <a href="www.facebook.com">
                    <img src="/frontend/img/social-fb.png" alt="Facebook">
                </a>
                <a href="www.facebook.com">
                    <img src="/frontend/img/social-twitter.png" alt="Twitter">
                </a>
                <a href="www.facebook.com">
                    <img src="/frontend/img/social-linkedin.png" alt="LinkedIn">
                </a>
            </section>
        `;
    }
    
}