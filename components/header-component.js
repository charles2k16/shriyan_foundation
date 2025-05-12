Vue.component('site-header', {
  template: `
      <header id="top-menu" class="transparent-head pt-20 pb-20">
        <div class="main-header-area main-head-02 sticky-02">
          <div class="container custom-container">
            <div class="row align-items-center justify-content-between">
              <div class="col-xl-2 col-lg-2 col-md-6 col-6">
                <div class="logo">
                  <a class="logo-img" href="index.html"
                    ><img
                      src="assets/img/logo/weblogo.png"
                      alt=""
                      style="min-width: 300px"
                  /></a>
                  <a class="logo-img-02 d-none" href="index.html"
                    ><img
                      src="assets/img/logo/weblogo.png"
                      alt=""
                      style="min-width: 300px"
                  /></a>
                </div>
              </div>
              <div class="col-xl-7 col-lg-8 d-none d-lg-block text-right">
                <div class="main-menu main-menu-02 pr-50 d-none d-lg-block">
                  <nav>
                    <ul>
                      <li>
                        <a class="active" href="index.html#">Home </a>
                      </li>
                      <li><a href="about.html">About</a></li>
                      <li>
                        <a href="index.html#"
                          >News and Events <i class="far fa-chevron-down"></i
                        ></a>
                      </li>
                      <li>
                        <a href="index.html#">Get Involved </a>
                      </li>
                    
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div
                class="col-xl-3 col-lg-1 col-md-6 col-6 d-flex align-items-center justify-content-end">
                <div class="hamburger-menu mr-20 d-md-block d-lg-none">
                  <a href="javascript:void(0);">
                    <i class="far fa-bars"></i>
                  </a>
                </div>

                <div class="quote-btn d-none d-xl-inline-block">
                  <a href="support.html" class="theme_btn theme_btn_bg"
                    >Support <span><i class="fas fa-heart"></i></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  `,
});
