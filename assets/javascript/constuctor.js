import answers from './answer.js';


class Question {
    constructor(content, text, src, alt, answers = [{}]) {
        this.content = content;
        this.text = text;
        this.src = src;
        this.alt = alt;
        this.answers = answers;
    }
}


const twoPlusTwo = new Question('Math', "What is two plus two?", 'assets/images/antoine-dautry-05A-kdOH6Hw-unsplash.jpg', 'image of mathmatical text', answers[0])

const whoThatDog = new Question("Animals", "There was a farmer had a dog, and _____ was his name-o?", 'assets/images/dan-cook-MCauAnBJeig-unsplash.jpg', 'image of a donkey smiling', answers[1]);

export const questions = [whoThatDog, twoPlusTwo];

export default questions;