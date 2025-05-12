Vue.component('site-news', {
  data() {
    return {
      blogs: [
        {
          image: 'assets/img/blog/08.png',
          title: 'Experts Global Digital Accessibility Developments',
          link: 'blog-details.html',
          excerpt: 'But I must explain to you how all this mistaken idea...',
          date: '25 Dec 2020',
          tag: null,
        },
        {
          image: 'assets/img/blog/09.png',
          title: 'Standardizing & Beyonds Past Present Future',
          link: 'blog-details.html',
          excerpt: 'Sed perspiciatis unde omnis iste natus error...',
          date: '25 Dec 2020',
          tag: 'refugee',
        },
        {
          image: 'assets/img/blog/10.png',
          title: 'Creating To Continuous Integration Test Work',
          link: 'blog-details.html',
          excerpt: '',
          date: '25 Dec 2020',
          tag: 'funding',
        },
      ],
    };
  },
  template: `
    <section class="blog-area pt-130 pb-75">
      <div class="container">
        <div class="row">
          <div class="col-xl-6 offset-xl-3">
            <div class="section-title text-center mb-85">
              <h6><span><i class="fas fa-heart"></i></span> Latest News</h6>
              <h2>Get Our Shriyan Foundation News & Events</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-12" v-if="blogs[0]">
            <div class="blog blog-03 mb-30">
              <div class="blog__thumb mb-20">
                <img :src="blogs[0].image" alt="" />
              </div>
              <div class="blog__content">
                <h3 class="blog-title mb-15">
                  <a :href="blogs[0].link">{{ blogs[0].title }}</a>
                </h3>
                <p class="mb-15">{{ blogs[0].excerpt }}</p>
                <ul class="blog-author">
                  <li><i class="far fa-calendar-alt"></i> {{ blogs[0].date }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-12">
            <div class="row">
              <div
                class="col-xl-12 col-lg-6 col-md-6"
                v-for="(blog, index) in blogs.slice(1)"
                :key="index"
              >
                <div class="row blog blog-03 align-items-center mb-30">
                  <div class="col-xl-6">
                    <div class="blog__thumb pos-rel">
                      <div class="blog__thumb--img">
                        <img :src="blog.image" alt="" />
                      </div>
                      <a class="tag" v-if="blog.tag" :href="blog.link">{{ blog.tag }}</a>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="blog__content">
                      <h3 class="blog-title mb-15">
                        <a :href="blog.link">{{ blog.title }}</a>
                      </h3>
                      <p class="mb-15">{{ blog.excerpt }}</p>
                      <ul class="blog-author">
                        <li><i class="far fa-calendar-alt"></i> {{ blog.date }}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});
