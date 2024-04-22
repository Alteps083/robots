import {robots } from './robots.js';

export const getRobotById = (id="009")=> {
    return robots.find( function(robot){
        return robot.id === id;
    });
};

export const getRobotByIdSeries = (series=2) =>{
    return robots.filter( (robot) => {
        return robot.series === series;
    })
};

export const createcard = (data) => {
    const card = `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card">
        <img src="${data.avatar}" class=" card-img-top" alt="${data.name}">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">weapon/type: ${data.weapon}</p>
        </div>
    </div>
</div>
    `;
    return card;
};


export const rendercards = (data, containerid) => {
    const container = document.getElementById(containerid);
        data.forEach(item => {
            container.innerHTML += createcard(item)
        });
    };