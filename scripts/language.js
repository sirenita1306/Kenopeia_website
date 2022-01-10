loadLanguagePref();

function checkBrowserLanguage() {
    var lang = navigator.language;

    changeLanguage(lang);
}

function saveLanguagePref(langSelected) {
    localStorage.setItem('selectedLanguage', langSelected);
}

function loadLanguagePref() {

    if (localStorage.getItem('selectedLanguage')) {
        var langSaved = localStorage.getItem('selectedLanguage');

        changeLanguage(langSaved);
    }
    else {
        checkBrowserLanguage();
    }
}

function changeLanguage(langSelected) {

    console.log(langSelected);

    var lang = langSelected;

    var langTxt = document.getElementsByClassName('lang');
    var frTxt = document.getElementsByClassName('fr');

    for (var i = 0; i < langTxt.length; i++) {
        langTxt[i].style.display = 'none';
    }

    if (lang.includes('fr')) {
        lang = 'fr';
    }

    switch (lang) {
        case 'fr':
            for (var i = 0; i < frTxt.length; i++) {
                frTxt[i].style.display = 'block';
            }
            document.getElementById('lang-switch').value = 'fr';
        default:
            for (var i = 0; i < frTxt.length; i++) {
                frTxt[i].style.display = 'block';
            }
            document.getElementById('lang-switch').value = 'fr';
            break;
    }

    document.documentElement.lang = lang;

    saveLanguagePref(lang);
}