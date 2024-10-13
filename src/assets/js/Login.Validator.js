Login.Validator.js

class LoginValidator {
    constructor(emailInputId, senhaInputId, errorMessageId, submitButtonClass) {
        this.emailInput = document.getElementById(emailInputId);
        this.senhaInput = document.getElementById(senhaInputId);
        this.errorMessage = document.getElementById(errorMessageId);
        this.submitButton = document.querySelector(submitButtonClass);

        // Adiciona o evento de clique ao botão de login
        this.submitButton.addEventListener('click', (event) => this.handleSubmit(event));
    }

    validarEmail() {
        const email = this.emailInput.value.trim();
        if (!email || email === "") {
            throw new Error("E-mail não inserido. Por favor, insira seu e-mail.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Formato de e-mail inválido.");
        }
    }

    validarSenha() {
        const senha = this.senhaInput.value.trim();
        if (!senha || senha === "") {
            throw new Error("Senha não inserida. Por favor, insira sua senha.");
        }
    }

    validarCampos() {
        try {
            this.validarEmail();
            this.validarSenha();
            return true;
        } catch (error) {
            this.mostrarErro(error.message);
            return false;
        }
    }

    mostrarErro(mensagem) {
        this.errorMessage.textContent = mensagem;
        this.errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.validarCampos()) {
            // Se a validação for bem-sucedida, redireciona
            window.location.href = 'obrigado.html';
        }
    }
}

// Instancia a classe LoginValidator
document.addEventListener('DOMContentLoaded', function () {
    new LoginValidator('email', 'senha', 'error-message', '.btn-enter');
});