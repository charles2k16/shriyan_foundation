Vue.component('site-sidebar', {
  template: `
      <aside class="slide-bar">
        <div class="close-mobile-menu">
          <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
        </div>


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
            <li><a href="support.html">Support</a></li>
          </ul>
        </nav>
        <!-- side-mobile-menu end -->
      </aside>
  `,
});
