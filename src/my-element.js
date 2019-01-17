import {myTemplate} from './myTemplate';
import {html, LitElement, property} from 'lit-element';

class MyElement extends LitElement {
  @property({type: String}) myProp = 'stuff';
  render() {
    return html`${myTemplate} <br/> ${this.stuff}`;
  }
}

customElements.define('my-element', MyElement);
