Vue.component('site-blog-details', {
  data() {
    return {
      post: null,
    };
  },
  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      fetch(
        `https://public-api.wordpress.com/rest/v1.1/sites/shriyanfoundation.wordpress.com/posts/${id}`,
      )
        .then(res => res.json())
        .then(data => {
          this.post = {
            image: data.featured_image || 'assets/img/blog/default.jpg',
            title: data.title,
            content: data.content,
            date: new Date(data.date).toLocaleDateString(),
            tags: data.tags ? Object.keys(data.tags) : [],
          };
        })
        .catch(err => console.error('Error fetching post:', err));
    }
  },
  template: `
    <section class="blog-details-area pt-130 pb-75">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div v-if="post" class="blog-details">
              <div class="blog-details__thumb mb-30">
                <img :src="post.image" alt="" />
              </div>
              <div class="blog-details__content">
                <h2 class="blog-details-title mb-20">{{ post.title }}</h2>
                <ul class="blog-author mb-30">
                  <li><i class="far fa-calendar-alt"></i> {{ post.date }}</li>
                  <li v-for="tag in post.tags" :key="tag"><i class="fas fa-tag"></i> {{ tag }}</li>
                </ul>
                <div class="blog-details-text" v-html="post.content"></div>
              </div>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <!-- Sidebar can be added here if needed -->
          </div>
        </div>
      </div>
    </section>
  `,
});
