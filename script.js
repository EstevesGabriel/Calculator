class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }
    
    clear() {
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation){

    }

    compute() {

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand

    }
}


const numberButtons = ducument.querySelectorALL("[data-number")
const operationalButtons = ducument.querySelectorALL("[data-operation")
const equalButton = ducument.querySelectorALL("[data-equals")
const deleteButton = ducument.querySelectorALL("[data-equals")
const equalsButton = ducument.querySelectorALL("[data-equals")
const allClearButton = ducument.querySelectorALL("[data-equals")
const previousOperandButton = ducument.querySelectorALL("[data-previous-operand")
const currentOperandButton = ducument.querySelectorALL("[data-current-operand")

const calculator = new calculator(previousOperandTextElement, currentOperandButton)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})