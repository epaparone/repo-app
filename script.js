'use strict;'

// need to authenticate if I get a 401 error
// curl -u "epaparone" https://api.github.com;



function formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
    return queryItems.join('&');
}

function getRepos() {
    const params = {
        type: 'owner',
        sort: 'created',
        direction: 'desc',
    };

    const apiKey = 'epaparone';
    const baseURL = `https://api.github.com/users/:${$('.username').val()}/repos`;

    const queryString = formatQueryParams(params);
    const url = baseURL + '?' + queryString;

    console.log(url);

    const headers = {
       'User-Agent': apiKey, 
    };

    fetch(url, headers)
        .then(response => response.json)
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('An erorr occurred.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
}

function watchForm() {
    $('.submit').click(event => {
        event.preventDefault();
        getRepos();
    })
}

$(function() {
    console.log('App loaded');
    watchForm();
})

