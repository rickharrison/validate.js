var validator = new FormValidator(
    'test_form',
    [
        {
            name: 'title',
            display: 'Titolo',
            rules: 'required|min_length[8]|max_length[64]|callback_no_contacts'
        },
        {
            name: 'body',
            display: 'Descrizione',
            rules: 'required|callback_no_contacts|callback_no_keywords'
        },
        {
            name: 'attr_price',
            display: 'Prezzo',
            rules: 'required'
        },
        {
            name: 'name',
            display: 'Nome',
            rules: 'min_length[2]|max_length[50]|callback_no_contacts'
        },
        {
            name: 'website',
            display: 'Sito Web',
            rules: 'valid_url'
        },
        {
            name: 'attr_category',
            display: 'Categoria',
            rules: 'required|callback_premium_limit'
        }
    ],
    function (errors, event) {
        if (errors.length > 0) {
            var errorString = '';

            for (var i = 0, errorLength = errors.length; i < errorLength; i++) {
                errorString += errors[i].message + '<br />';
            }

            document.getElementById('errors').innerHTML = errorString;
        }
    }
);

validator.registerCallback('no_contacts', function(value) {

    var pattern = /[0-9\ ]{8,13}|([a-zA-Z0-9\-\_\.]+\.[a-zA-Z]{2,3})/;

    if (!pattern.test(value)) {
        return true;
    }

    return false;

}).setMessage('no_contacts', 'The %s field non deve essere un numero di telefono, una mail o un indirizzo web.');

validator.registerCallback('no_keywords', function(value) {

    var taboo = [
        'bacinelle, contenitori , self service, tavole fredde',
        'arredamenti, raviolificio, raviolifici, discoteca',
        'Kicker, Audison, Zapco, Soundstream, Orion, Nakamichi, Alpine, Pioneer',
        'gabbana ralph lauren Armani Gucci'
    ];

    for (var i = 0; i < taboo.length; i++) {
        if (value.indexOf(taboo[i]) != -1) {
            return false
        }
    }

    return true;

}).setMessage('no_keywords', 'Il campo %s contiene alcune parole sospette.');

validator.registerCallback('premium_limit', function(value) {

    var limited_category = [123666321, 987654321];

    for (var i = 0; i < limited_category.length; i++) {
        if (value == limited_category[i]) {
            return false
        }
    }

    return true;

}).setMessage('premium_limit', 'Hai raggiunto il limite massimo di annunci in questa categoria per il tuo account premium.');

document.getElementById('body').onblur = function() {
    validator.validateField('body');
};