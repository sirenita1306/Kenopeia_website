CreateCloudCategories();

function CreateCloudCategories() {
    // M�ditation
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

    // Rituels
    let liRituels = document.createElement('li');
    liRituels.id = 'rituelsLI';
    document.getElementById('listCloudCategory').appendChild(liRituels);

    let linkRituels = document.createElement('a');
    linkRituels.href = 'blog/rituels.html';
    linkRituels.innerHTML = 'Rituels';
    document.getElementById('rituelsLI').appendChild(linkRituels);

    // Cuisine
    let liCuisine = document.createElement('li');
    liCuisine.id = 'cuisineLI';
    document.getElementById('listCloudCategory').appendChild(liCuisine);

    let linkCuisine = document.createElement('a');
    linkCuisine.href = 'blog/cuisine.html';
    linkCuisine.innerHTML = 'Cuisine';
    document.getElementById('cuisineLI').appendChild(linkCuisine);

    // Synth�se des �nergies
    let liEnergies = document.createElement('li');
    liEnergies.id = 'energiesLI';
    document.getElementById('listCloudCategory').appendChild(liEnergies);

    let linkEnergies = document.createElement('a');
    linkEnergies.href = 'blog/syntheses_energies.html';
    linkEnergies.innerHTML = 'Synth\350se des \351nergies';
    document.getElementById('energiesLI').appendChild(linkEnergies);

    // Podcasts
    let liPodcasts = document.createElement('li');
    liPodcasts.id = 'podcastsLI';
    document.getElementById('listCloudCategory').appendChild(liPodcasts);

    let linkPodcasts = document.createElement('a');
    linkPodcasts.href = 'podcasts.html';
    linkPodcasts.innerHTML = 'Podcasts';
    document.getElementById('podcastsLI').appendChild(linkPodcasts);

    // Cr�ations au crochet
    let liCrochet = document.createElement('li');
    liCrochet.id = 'crochetLI';
    document.getElementById('listCloudCategory').appendChild(liCrochet);

    let linkCrochet = document.createElement('a');
    linkCrochet.href = 'crochet.html';
    linkCrochet.innerHTML = 'Crations au crochet';
    document.getElementById('crochetLI').appendChild(linkCrochet);

    // Mes publications
    let liPublications = document.createElement('li');
    liPublications.id = 'publicationsLI';
    document.getElementById('listCloudCategory').appendChild(liPublications);

    let linkPublications = document.createElement('a');
    linkPublications.href = 'publications.html';
    linkPublications.innerHTML = 'Mes publications';
    document.getElementById('publicationsLI').appendChild(linkPublications);

    // Partenaires
    let liPartners = document.createElement('li');
    liPartners.id = 'partnersLI';
    document.getElementById('listCloudCategory').appendChild(liPartners);

    let linkPartners = document.createElement('a');
    linkPartners.href = 'partners.html';
    linkPartners.innerHTML = 'Partenaires';
    document.getElementById('partnersLI').appendChild(linkPartners);

    // Auteurs ind�pendants
    let liIndie = document.createElement('li');
    liIndie.id = 'indieLI';
    document.getElementById('listCloudCategory').appendChild(liIndie);

    let linkIndie = document.createElement('a');
    linkIndie.href = 'blog/auteurs_independants.html';
    linkIndie.innerHTML = 'Auteurs ind\351pendants';
    document.getElementById('indieLI').appendChild(linkIndie);
}