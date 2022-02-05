CreateCloudCategories();

function CreateCloudCategories() {
    // Méditation
    let liMeditation = document.createElement('li');
    liMeditation.id = 'meditationLI';
    document.getElementById('listCloudCategory').appendChild(liMeditation);

    let linkMeditation = document.createElement('a');
    linkMeditation.href = 'blog/meditations.html';
    linkMeditation.innerHTML = 'M\351ditations';
    document.getElementById('meditationLI').appendChild(linkMeditation);

    // Projections de consciences
    let liProjConsc = document.createElement('li');
    liProjConsc.id = 'projConscLI';
    document.getElementById('listCloudCategory').appendChild(liProjConsc);

    let linkProjConsc = document.createElement('a');
    linkProjConsc.href = 'blog/projections_conscience.html';
    linkProjConsc.innerHTML = 'Mes projections de conscience';
    document.getElementById('projConscLI').appendChild(linkProjConsc);

    // Outils
    let liOutils = document.createElement('li');
    liOutils.id = 'outilsLI';
    document.getElementById('listCloudCategory').appendChild(liOutils);

    let linkOutils = document.createElement('a');
    linkOutils.href = 'blog/outils.html';
    linkOutils.innerHTML = 'Outils';
    document.getElementById('outilsLI').appendChild(linkOutils);

    // Prise de conscience
    let liPriseConsc = document.createElement('li');
    liPriseConsc.id = 'priseConscLI';
    document.getElementById('listCloudCategory').appendChild(liPriseConsc);

    let linkPriseConsc = document.createElement('a');
    linkPriseConsc.href = 'blog/prise_conscience.html';
    linkPriseConsc.innerHTML = 'Prise de conscience';
    document.getElementById('priseConscLI').appendChild(linkPriseConsc);

    // Cuisine
    let liCuisine = document.createElement('li');
    liCuisine.id = 'cuisineLI';
    document.getElementById('listCloudCategory').appendChild(liCuisine);

    let linkCuisine = document.createElement('a');
    linkCuisine.href = 'blog/cuisine.html';
    linkCuisine.innerHTML = 'Cuisine';
    document.getElementById('cuisineLI').appendChild(linkCuisine);

    // Podcasts
    let liPodcasts = document.createElement('li');
    liPodcasts.id = 'podcastsLI';
    document.getElementById('listCloudCategory').appendChild(liPodcasts);

    let linkPodcasts = document.createElement('a');
    linkPodcasts.href = 'podcasts.html';
    linkPodcasts.innerHTML = 'Podcasts';
    document.getElementById('podcastsLI').appendChild(linkPodcasts);

    // Créations au crochet
    let liCrochet = document.createElement('li');
    liCrochet.id = 'crochetLI';
    document.getElementById('listCloudCategory').appendChild(liCrochet);

    let linkCrochet = document.createElement('a');
    linkCrochet.href = 'crochet.html';
    linkCrochet.innerHTML = 'Crochet';
    document.getElementById('crochetLI').appendChild(linkCrochet);

    // Partenaires
    let liPartners = document.createElement('li');
    liPartners.id = 'partnersLI';
    document.getElementById('listCloudCategory').appendChild(liPartners);

    let linkPartners = document.createElement('a');
    linkPartners.href = 'partners.html';
    linkPartners.innerHTML = 'Partenaires';
    document.getElementById('partnersLI').appendChild(linkPartners);

    // Auteurs indépendants
    let liIndie = document.createElement('li');
    liIndie.id = 'indieLI';
    document.getElementById('listCloudCategory').appendChild(liIndie);

    let linkIndie = document.createElement('a');
    linkIndie.href = 'blog/auteurs_independants.html';
    linkIndie.innerHTML = 'Auteurs ind\351pendants';
    document.getElementById('indieLI').appendChild(linkIndie);
}