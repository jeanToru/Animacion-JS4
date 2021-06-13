import Particle from './Particle.js';
import { randomInt, getContext } from './util.js';

let nParticles = 100;
const particles = [];
const ctx = getContext();

let canvas = document.querySelector('canvas');

canvas.style.background = '#000';
canvas.width = window.innerWidth;
canvas.height = innerHeight;


for (let i = 0; i < nParticles; i++) {
    let radio = 1;
    let x = randomInt(radio * 2, canvas.width - radio * 2);
    let y = randomInt(radio * 2, canvas.height - radio * 2);
    particles.push(new Particle(x, y, radio));
}


function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update(particles));
}

animation();