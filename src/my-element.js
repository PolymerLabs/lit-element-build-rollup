import {myTemplate} from './myTemplate';
import {LitElement} from 'lit-element';

class MyElement extends LitElement {
  render() {
    return myTemplate;
  }
}

customElements.define('my-element', MyElement);
