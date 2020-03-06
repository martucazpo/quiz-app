class Answer {
    constructor(text, correct, isTrue) {
        this.text = text;
        this.correct = correct;
        this.isTrue = isTrue;
    }
}

const four = new Answer(4, 'correct', true);
const twentyTwo = new Answer(22, 'wrong', false);
const six = new Answer(6, 'wrong', false);
const eight = new Answer(8, 'wrong', false);

const mathAnsw1 = [four, twentyTwo, six, eight];

const jeff = new Answer('Jeff', 'wrong', false);
const gringo = new Answer('Gringo', 'wrong', false);
const bingo = new Answer('Bingo', 'correct', true);
const ringo = new Answer('Ringo', 'wrong', false);

const animalAnswer1 = [jeff, gringo, bingo, ringo];

export const answers = [mathAnsw1, animalAnswer1]

export default answers