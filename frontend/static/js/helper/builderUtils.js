const template = document.createElement('template');
template.innerHTML = `
<style>
    table.greyGridTable {
        border-collapse: collapse;
        border: 2px solid #FFFFFF;
        width: 100%;
        text-align: left;
        border-collapse: collapse;
      }
    table.greyGridTable td, table.greyGridTable th {
        padding: 3px 4px;
    }
    table.greyGridTable tbody td {
        font-size: 15px;    
    }
    table.greyGridTable thead {
        background: #FFFFFF;
        border-bottom: 4px solid #333333;
    }
    table.greyGridTable thead th {
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        text-align: left;
    }
    table.greyGridTable tfoot td {
    font-size: 14px;
    }
    table thead tr th.last{
        text-align: right;
    }
    .last{
        text-align: right;
    }
    .btn {
        cursor: pointer;
        display: inline-block;
        border: 0;
        font-weight: bold;
        padding: 10px 20px;
        background: #262626;
        color: white;
        font-size: 15px;
    }
    .btn:hover {
        opacity: 0.9;
    }
    @media(max-width: 473px) {
    table.greyGridTable {
        width: 50%;
        }
    }
</style>
<div style="overflow-x:auto;">
    <table class="greyGridTable">
        <thead>
            <tr>
                <th>Эд анги</th>
                <th>Бүтээгдэхүүн</th>
                <th>Хүргэлт</th>
                <th class='last'>Нийт дүн</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>CPU</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>1,159,000</td>
            </tr>
            <tr>
                <td>GPU</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>3,349,000</td>
            </tr>
            <tr>
                <td>Эх хавтан</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>549,000</td>
            </tr>
            <tr>
                <td>Санах ой</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>279,000</td>
            </tr>
            <tr>
                <td>Storage</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>1,159,000</td>
            </tr>
            <tr>
                <td>Тэжээллийн блок</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>3,349,000</td>
            </tr>
            <tr>
                <td>Хөргөөгч</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>549,000</td>
            </tr>
            <tr>
                <td>Кэйс</td>
                <td><a href="/products" class="nav__link" data-link=""><button class='btn'>Сонгох +</button></a></td>
                <td></td>
                <td class='last'>279,000</td>
            </tr>
        </tbody>
    </table>
</div>
`;

class Builder extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h3').innerText = this.shadowRoot.querySelector('.user-table').getAttribute('name');
    }
}

window.customElements.define('build-table', Builder);