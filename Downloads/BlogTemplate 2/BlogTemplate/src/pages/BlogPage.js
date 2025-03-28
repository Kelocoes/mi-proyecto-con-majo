import "../components/BlogHeader.js";
import "../components/BlogMain.js";
import "../components/BlogFooter.js";

class BlogPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <blog-header></blog-header>
      <blog-main></blog-main>
      <blog-footer></blog-footer>
    `;
  }
}

customElements.define('blog-page', BlogPage);
