import {robots } from './robots.js';
import { getRobotById ,
rendercards } from './funciones.js';


console.log(getRobotById("013"));


rendercards(robots, "robotsrow")

console.log(robots [0]);

console.log(robots [0].id);
console.log(robots [0].name);
console.log(robots [0].series);

//const { id , name , series } = robots[0];

//console.log(id);
//console.log(name);
//console.log(series);

//const getRobotById = (id)=> {
 //   return robots.find( function(robot){
//        return robot.id === id;
//    });
//}

//console.log(getRobotById("013"))

//const getRobotByIdSeries = (series=2) =>{
//    return robots.filter((robot)=>{
//        return robot.series === series;
//    })
//}
//console.log(getRobotById("013"))

//const { id , name , series } = getRobotById("013");

//console.log(id);
//console.log(name);
//console.log(series);


