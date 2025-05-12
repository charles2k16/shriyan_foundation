Vue.component('site-sidebar', {
  template: `
      <aside class="slide-bar">
        <div class="close-mobile-menu">
          <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
        </div>

        <!-- offset-sidebar start -->
        <div class="offset-sidebar">
          <div class="offset-widget offset-logo mb-30">
            <a href="index.html">
              <img src="assets/img/logo/weblogo.png" alt="" style="min-width: 300px" />
            </a>
          </div>
          <div class="offset-widget mb-40">
            <div class="info-widget">
              <h4 class="offset-title mb-20">About Us</h4>
              <p class="mb-30">
                Our mission is to empower children and youths by providing them with the
                essential resources they need to succeed, including school supplies,
                computers, sanitary pads, and other basic necessities.
              </p>
            </div>
          </div>
        </div>
        <!-- offset-sidebar end -->

        <!-- side-mobile-menu start -->
        <nav class="side-mobile-menu">
          <ul id="mobile-menu-active">
            <li class="has-dropdown">
              <a href="index.html">Home</a>
            </li>
            <li><a href="about.html">About Us</a></li>
            <li class="has-dropdown">
              <a href="index.html#">News and Blogs</a>
            </li>
            <li class="has-dropdown">
              <a href="index.html#">Get Involved</a>
            </li>

            <li><a href="contact.html">Contacts Us</a></li>
            <li><a href="contact.html">Support</a></li>
          </ul>
        </nav>
        <!-- side-mobile-menu end -->
      </aside>
  `,
});
