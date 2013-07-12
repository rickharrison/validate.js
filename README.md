# validate.js

validate.js is a lightweight JavaScript form validation library inspired by CodeIgniter.

## Features

- Validate form fields from over a dozen rules
- No dependencies
- Customizable Messages
- Supply your own validation callbacks for custom rules
- Chainable customization methods for ease of declaration
- Works in all major browsers, (even IE6!)
- Modeled off the CodeIgniter form validation API
- Support multipule language.(now for chinese, chinese_zh, english)

## Installation

   `<script type="text/javascript" src="validate.min.js"></script>`

or
   
   `<script type="text/javascript" src="validate.js"></script>`

## How to use

    var validator = new FormValidator('example_form', [{
        name: 'req',
        display: 'required',    
        rules: 'required'
    }, {
        name: 'alphanumeric',
        rules: 'alpha_numeric'
    }, {
        name: 'password',
        rules: 'required'
    }, {
        name: 'password_confirm',
        display: 'password confirmation',
        rules: 'required|matches[password]'
    }, {
        name: 'email',
        rules: 'valid_email'
    }, {
        name: 'minlength',
        display: 'min length',
        rules: 'min_length[8]'
    }], 'english', function(errors) {
        if (errors.length > 0) {
            // Show the errors
        }
    });

## Documentation

You can view everything at http://rickharrison.github.com/validate.js

## Plugins

jQuery: https://github.com/magizh/validate_helper

## Multi-Language Support

jnhwkim's fork added multi-language support viewable at https://github.com/jnhwkim/validate.js

## Chinese Version

https://github.com/chilijung/validate.js

