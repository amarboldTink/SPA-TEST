import Component from "/frontend/static/js/helper/component.js";


export default class extends Component {
    constructor() {
        super();
        this.setTitle("Products");
    }

    async Render() {
        return `
        <div class="breadcrumb">
            <ul>
                <li><a href="/frontend" data-link>Нүүр хуудас</a></li>
                <li><a href="/products" data-link>Бүтээгдэхүүн</a></li>
            </ul>
        </div>

        
        

        <div id="BtnContainer">
            <button class="btn-filter active" onclick="filterSelection('all')"> Бүгд</button>
            <button class="btn-filter" onclick="filterSelection('cpu')"> CPU</button>
            <button class="btn-filter" onclick="filterSelection('motherboard')"> Motherboard</button>
            <button class="btn-filter" onclick="filterSelection('gpu')"> GPU</button>
            <button class="btn-filter" onclick="filterSelection('memory')"> Memory</button>
        </div>
        <br>
        <button id="newPrd" class="btn-filter""> Шинэ</button>
        
        <div class="container-filter">
            <div id="thatOneRow" class="row">
            </div>
        </div>
        `;
    }
}