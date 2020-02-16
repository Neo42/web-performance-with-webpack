// import * as GSAP from 'gsap'
const getGSAP = () => import('gsap');
const getLodash = () => import('lodash-es/uniq');
import makeButton from './button';
// import footer from './footer'
const getFooter = () => import(/* webpackChunkName: 'footer' */ './footer');
import { makeColorStyle } from './button-styles';
import imageUrl from './icon.jpg';
import makeImage from './image';
import Foo from './foo.ts';
import './button.css';
import './footer.css';

if (process.env.NODE_ENV === 'development') {
  const setButtonStyle = color =>
    import(/* webpackMode:'lazy-once' */ `./button-styles/${color}`);
} else {
  const setButtonStyle = color => import(`./button-styles/${color}`);
}

const button = makeButton('Wat?');
button.style = makeColorStyle('cyan');
const image = makeImage(imageUrl);
const foo = new Foo();
foo.blah();

document.body.appendChild(button);
document.body.appendChild(image);

button.addEventListener('click', e => {
  getFooter().then(footerModule =>
    document.body.appendChild(footerModule.footer)
  );
  getGSAP().then(gsap => console.log(gsap));
  setButtonStyle('red').then(styleStr => {
    button.style = styleStr.default;
  });
});
