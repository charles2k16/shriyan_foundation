Vue.component('site-blog', {
  data() {
    return {
      blogs: [], // will be filled with WordPress posts
    };
  },
  created() {
    // Fetch WordPress posts
    fetch(
      'https://public-api.wordpress.com/rest/v1.1/sites/shriyanfoundation.wordpress.com/posts',
    )
      .then(res => res.json())
      .then(data => {
        // Map WP response into the format we need
        this.blogs = data.posts.map(post => ({
          id: post.ID,
          image: post.featured_image || 'assets/img/blog/default.jpg', // fallback image
          title: post.title,
          link: 'blog-details.html?id=' + post.ID,
          excerpt: post.excerpt.replace(/<[^>]+>/g, ''), // remove HTML tags
          date: new Date(post.date).toLocaleDateString(),
          tag: post.tags ? Object.keys(post.tags)[0] : 'Blog',
        }));
      })
      .catch(err => console.error('Error fetching posts:', err));
  },
  template: `
    <section class="blog-area pt-130 pb-75">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3">
            <div class="section-title text-center mb-85">
              <h6><span><i class="fas fa-heart"></i></span> Our Blog</h6>
              <h2>Latest Posts from Shriyan Foundation</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(blog, index) in blogs" :key="index" class="col-xl-4 col-lg-4 col-md-6">
            <div class="blog blog-03 mb-30">
              <div class="blog__thumb mb-20">
                <img :src="blog.image" alt="" />
              </div>
              <div class="blog__content">
                <h3 class="blog-title mb-15">
                  <a :href="blog.link">{{ blog.title }}</a>
                </h3>
                <p class="mb-15">{{ blog.excerpt }}</p>
                <ul class="blog-author">
                  <li><i class="far fa-calendar-alt"></i> {{ blog.date }}</li>
                  <li><i class="fas fa-tag"></i> {{ blog.tag }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});
