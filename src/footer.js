const getLodash = () => import(/* webpackPreload: true */ 'lodash-es');
import { red, blue } from './button-styles';

const top = document.createElement('div');
top.innerText = 'Top of Footer';
top.style = red;
const bottom = document.createElement('div');
bottom.innerText = 'Bottom of Footer';
bottom.style = blue;

const footer = document.createElement('footer');
footer.appendChild(top).appendChild(bottom);
export { footer };
