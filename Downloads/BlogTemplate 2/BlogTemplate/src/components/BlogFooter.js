class BlogFooter extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <footer class="footer">
        <div class="footer-top">
           <img src="../public/images/logo.png" alt="Logo Sitemark" class="footer-logo"/>
          <div class="newsletter">
            <h3>Join the chisme</h3>
            <p>Subscribe for weekly updates. No spams ever!</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe bitch</button>
          </div>
        </div>
        <div class="footer-links">
          <div class="product">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Testimonials</li>
              <li>Highlights</li>
              <li>Pricing</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div class="company">
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div class="legal">
            <h4>Legal</h4>
            <ul>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </footer>
    `;
    this.appendChild(template.content.cloneNode(true));

  }
}

customElements.define('blog-footer', BlogFooter);
