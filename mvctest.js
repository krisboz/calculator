class Model {
    constructor() {}

    //Trenutni broj, "prosli" broj, operator, rezultat

}

class View {
    constructor() {
        this.display = this.getElement(".display")
        this.buttons = this.getAllElements(".calc-btn")
    }
    
    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    getAllElements(selector) {
        const elements = document.querySelectorAll(selector)
        return elements
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }
}

const app = new Controller(new Model(), new View())