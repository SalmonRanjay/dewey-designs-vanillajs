import $ from 'jquery';

class FormSubmit {

    constructor() {

        // Get the form.
        this.form = $('#ajax-contact');
        this.submitBTN = $('#submitFormBTN');
        this.firstname = $('#firstname');
        this.company = $('#company');
        this.email = $("#email");
        this.phone = $("#phone");
        this.verificationText = $('#formVerification');
        this.description = $("#description");

        this.firstname.val('');
        this.company.val('');
        this.description.val('');
        this.email.val('');
        this.verificationText.val('');
        this.phone.val('');


        // Get the messages div.
        // this.formMessages = $('#form-messages');

        this.formData = $(this.form).serialize();

        this.events();
    }

    events() {
        this.submitBTN.click(this.submitForm.bind(this));
    }

    ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    }

    validatePhone(phone) {
        var error = "";
        var stripped = phone.replace(/[\(\)\.\-\ ]/g, '');

        if (stripped == "") {
            error = "You didn't enter a phone number.";
            alert(error);
            return false;
        } else if (isNaN(parseInt(stripped))) {
            phone = "";
            error = "The phone number contains illegal characters.";
            alert( error);
            return false;

        } else if (!(stripped.length == 10)) {
            phone = "";
            error = "The phone number is the wrong length. Make sure you included an area code.\n";
            alert(error);
            return false;
        }
    }

    submitForm(event) {
        var that = this;
        event.preventDefault();
        var formData = {
            "firstname": that.firstname.val(),
            "company": that.company.val(),
            "description": that.description.val(),
            "email": that.email.val(),
            "phone": that.phone.val()
        };
        console.log(formData);
        if (Number(that.verificationText.val()) === 4) {
            //submit form
            console.log(formData);
            // http://localhost:3000/api/mail
            // https://dewey-design-server.herokuapp.com/api/mail

            if(!that.ValidateEmail(that.email.val())){
                //alert('Invalid email');
                return
            }

            if(!that.validatePhone(that.phone.val())){
                
                return ;
            }

            $.ajax({
                type: 'POST',
                url: 'https://dewey-design-server.herokuapp.com/api/mail',
                data: formData
            }).done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                // $(formMessages).removeClass('error');
                // $(formMessages).addClass('success');

                // // Set the message text.
                // $(formMessages).text(response);

                // Clear the form.
                that.firstname.val('');
                that.company.val('');
                that.email.val('');
                that.verificationText.val('');
                that.description.val('');
                that.phone.val('');
                console.log("Success mail sent");
            })
                .fail(function (data) {

                    console.log("it failed");
                    that.firstname.val('');
                    that.company.val('');
                    that.email.val('');
                    that.verificationText.val('');
                    that.phone.val('');
                    that.description.val('');
                });
        } else {
            // reject form
            console.log("Issue with form");
        }


    }
};

export default FormSubmit;