import Component from "/frontend/static/js/helper/component.js";

export default class extends Component {
    constructor() {
        super();
        this.setTitle("PC Builder");
    }

    async Render() {
        return `
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" class="nav__link" data-link>Нүүр хуудас</a></li>
                <li><a href="/builder" class="nav__link" data-link>PC Угсрах</a></li>
            </ul>
        </div>
        <build-table></build-table>
        `;
    }
}