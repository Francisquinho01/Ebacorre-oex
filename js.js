$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        infinite: true
    });
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $.validator.addMethod("texto", function(value, element) {
        return $.trim(value).length > 0;
    }, "Por favor, preencha este campo");

 
    $.validator.addMethod("cpfBR", function(value, element) {
        
        return this.optional(element) || /^(?:\d{3}\.\d{3}\.\d{3}-\d{2})$/.test(value);
    }, "Por favor, informe um CPF válido");

    $.validator.addMethod("cep", function(value, element) {
        return this.optional(element) || /^\d{5}-\d{3}$/.test(value);
    }, "Por favor, informe um CEP válido");
    $('#form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: {
                required: true,
                texto: true
            },
            cep: {
                required: true,
                cep: true 
            }
        },
        messages: {
            nome: "Por favor, informe seu nome completo",
            email: "Por favor, informe um endereço de e-mail válido",
            telefone: "Por favor, informe seu telefone",
            cpf: "Por favor, informe um CPF válido",
            endereco: "Por favor, informe seu endereço completo",
            cep: "Por favor, informe um CEP válido"
        },
        submitHandler: function (form) {
            var isValid = true;

            $(form).find('input, select, textarea').each(function() {
                if (!$(this).valid()) {
                    isValid = false;
                }
            });

            if (isValid) {
                alert("Cadastro feito com sucesso!");
                form.submit(); 
            } else {
            
                alert("Por favor, corrija os campos marcados antes de enviar.");
            }
        },
        invalidHandler: function (event, validator) {
            alert("Por favor, corrija os campos marcados antes de enviar.");
        }
    });
});
