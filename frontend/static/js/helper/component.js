import { html } from "./utils.js"

export default class Component {
    constructor() {
        this.html = html;
    }

    setTitle(title) {
        document.title = title;
    }
}