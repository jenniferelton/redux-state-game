import { get, post } from './request';
import { config } from './firebase';

const URL = `https://${config.projectId}.firebaseio.com`;
const MATCHES_URL = `${URL}/matches.json`;

<<<<<<< HEAD
export const getAll =  () => get(MATCHES_URL);
=======
export const getAll = () => get(MATCHES_URL);
>>>>>>> f532b13a32e4179d4dd76c1a17c8c032b5850497

export const save = game => post(MATCHES_URL, game);