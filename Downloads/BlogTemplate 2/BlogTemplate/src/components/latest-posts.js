class LatestPosts extends HTMLElement {
  constructor() {
    super();

   
    this.innerHTML = `
      <section class="latest-section">
        <h2 class="latest-title">Latest</h2>
        <div class="latest-container">
          ${this.renderPosts()}
        </div>
      </section>
    `;
  }

  renderPosts() {
    const posts = [
      {
        category: 'Engineering',
        title: 'The future of AI in software engineering',
        description: 'Artificial intelligence is revolutionizing software engineering. Explore how AI-driven tools are enhancing development processes and improving software...',
        author: 'Mepi Calculo',
        avatar: "./images/pp1.jpg",
        date: 'March 10, 2025'
      },
      {
        category: 'Product',
        title: 'Driving growth with user-centric product design',
        description: 'Our user-centric product design approach is driving significant growth. Learn about the strategies we employ to create products that resonate with users.',
        author: 'Kanye West',
        avatar: "./images/pp2.jpg",
        date: 'March 9, 2025'
      },
      {
        category: 'Design',
        title: 'Embracing minimalism in modern design',
        description: 'Minimalism is a key trend in modern design. Discover how our design team incorporates minimalist principles to create clean and impactful user...',
        author: 'Rayo McQueen',
        avatar: "./images/pp3.jpg",
        date: 'March 8, 2025'
      },
      {
        category: 'Company',
        title: 'Cultivating a culture of innovation',
        description: 'Innovation is at the heart of our company culture. Learn about the initiatives we have in place to foster creativity and drive groundbreaking solutions.',
        author: 'Miarulais',
        avatar: "./images/pp4.jpg",
        date: 'March 9, 2025'
      }
    ];

    return posts.map(post => `
      <div class="latest-post">
        <span class="post-category">${post.category}</span>
        <h3 class="post-title">${post.title}</h3>
        <p class="post-description">${post.description}</p>
        <div class="post-footer">
          <div class="author-info">
            <img src="${post.avatar}" alt="${post.author}" class="author-avatar">
            <span class="author-name">${post.author}</span>
          </div>
          <span class="post-date">${post.date}</span>
        </div>
      </div>
    `).join('');
  }
}

customElements.define('latest-posts', LatestPosts);
