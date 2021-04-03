import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Sign In | Log In");
    }

    async Render() {
        return this.html`
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/signin" class="nav__link" data-link>Нэвтрэх</a></li>
            </ul>
        </div>

        <div class="account-page">
            <div class="container">
                <div class="row">
                    <div class="col_2">
                        <div class="form-container">
                            <div class="form-btn">
                                <span id="logSpan">Нэвтрэх</span>
                                <span id="signSpan">Бүртгүүлэх</span>
                                <hr id="Indicator">
                            </div>

                            <form id="LoginForm">
                                <input type="text" placeholder="Username">
                                <input type="password" placeholder="Password">
                                <button type="submit" class="btn">Нэвтрэх</button>
                                <a href="#">Нууц үгээ мартсан?</a>
                            </form>

                            <form id="RegForm">
                                <input type="text" placeholder="Username">
                                <input type="email" placeholder="Email">
                                <input type="password" placeholder="Password">
                                <button type="submit" class="btn">Бүртгүүлэх</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
        