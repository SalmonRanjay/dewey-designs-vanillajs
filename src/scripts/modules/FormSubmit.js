import $ from 'jquery';

class FormSubmit {

    constructor() {

        // Get the form.
        this.form = $('#ajax-contact');
        this.submitBTN = $('#submitFormBTN');
        this.firstname = $('#firstname');
        this.lastname = $('#lastname');
        this.email = $("#email");
        this.verificationText = $('#formVerification');
        this.description = $("#description");

         this.firstname.val('');
         this.lastname.val('');
         this.description.val('');
         this.email.val('');
         this.verificationText.val('');


        // Get the messages div.
        // this.formMessages = $('#form-messages');

        this.formData = $(this.form).serialize();

        this.events();
    }

    events() {
        this.submitBTN.click(this.submitForm.bind(this));
    }

    submitForm(event) {
        var that = this;
        event.preventDefault();
        var formData = {
            "firstname": that.firstname.val(),
            "lastname": that.lastname.val(),
            "description": that.description.val(),
            "email": that.email.val()
        };
        console.log(formData);
        if (Number(that.verificationText.val()) === 4) {
            //submit form
            console.log(formData);
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
                that.lastname.val('');
                that.email.val('');
                that.verificationText.val('');
                that.description.val('');
                console.log("Success mail sent");
            })
            .fail(function(data) {
                // // Make sure that the formMessages div has the 'error' class.
                // $(formMessages).removeClass('success');
                // $(formMessages).addClass('error');
            
                // // Set the message text.
                // if (data.responseText !== '') {
                //     $(formMessages).text(data.responseText);
                // } else {
                //     $(formMessages).text('Oops! An error occured and your message could not be sent.');
                // }
                console.log(data);
                console.log("it failed");
                that.firstname.val('');
                that.lastname.val('');
                that.email.val('');
                that.verificationText.val('');
                that.description.val('');
            });
        } else {
            // reject form
            console.log("Issue with form");
        }


    }
};

export default FormSubmit;