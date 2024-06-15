import axios from 'axios';
import { IQuestion } from '../utils/question';

/**
 * see public folder => questions.json file
 * @returns An object of questions
 */
export const getQuestions = async (): Promise<Record<string, IQuestion>> => {
    return await axios.get('/questions.json').then(({ data }) => data);
};