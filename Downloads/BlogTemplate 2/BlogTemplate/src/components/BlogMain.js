class BlogMain extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="main">
        <article class="post">
          <h2>Post</h2>
          <p>Post content goes here...</p>
        </article>
      </main>
    `;
  }
}

customElements.define('blog-main', BlogMain);
