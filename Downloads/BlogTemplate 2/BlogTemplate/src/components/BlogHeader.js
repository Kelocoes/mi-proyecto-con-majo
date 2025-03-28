
class BlogHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header">
        <h1>Blog</h1>
        <p>Stay in the loop with the latest about our products</p>
      </header>
    `;
  }

}

customElements.define('blog-header', BlogHeader);
