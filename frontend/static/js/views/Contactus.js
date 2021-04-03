import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Contact Us");
    }

    async Render() {
        return this.html `
        <div class="breadcrumb">
            <ul>
                <li><a href="index.html" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/contactus" class="nav__link" data-link>Холбоо барих</a></li>
            </ul>
        </div>
        
        <div class="contact-container">
            <div class="contact-row">
                <div class="contactbox1">
                    <h2>Mail</h2>
                    <p>mail@mail.com</p>
                    <p>mail2@mail.com</p>
                </div>
                <div class="contactbox2">
                    <h2>Address</h2>
                    <p>Sukhbaatar district, 6th Khoroo, Baga Toiruu Street, 39th Apartment</p>
                </div>
                <div class="contactbox3">
                    <h2>Phone</h2>
                    <p>+976 99887766</p>
                    <p>+976 88776655</p>
                </div>
                <div id="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85610.01279185661!2d106.83183203860139!3d47.89162880463515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9692442297c949%3A0x71884efc4dce5cb2!2sSukhbaatar%20Square!5e0!3m2!1sen!2smn!4v1615982412121!5m2!1sen!2smn"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    `;
    }
}

