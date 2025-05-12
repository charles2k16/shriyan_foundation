Vue.component('site-footer', {
  template: `
        <footer
        class="footer-area black-bg pos-rel pt-80 pb-50"
        style="background-image: url(assets/img/bg/02.png.html)">
        <div class="container">
          <div class="row mb-20">
            <div
              class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".1s">
            
                <div class="footer-log mt-25">
                  <a href="index.html" class="footer-logo mb-30"
                    ><img src="assets/img/logo/weblogo.png" alt="" width="300px"
                  /></a>
                </div>
            
            </div>
            <div
              class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".1s">
              <div class="footer__widget mb-30">
                <h5 class="semi-02-title mb-25">About Shriyan Foundation</h5>
                <p>
                  Shriyan Foundation empowers children and youth by providing essential
                  resources like school supplies, computers, sanitary pads, and more.
                </p>
            
              </div>
            </div>
            <div
              class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".3s">
              <div class="footer__widget fot_abot mb-30 pl-40">
                <h5 class="semi-02-title mb-25">Quick Link</h5>
                <ul class="fot-list">
                  <li><a href="about.html">Our Organization</a></li>
                  <li><a href="volunteer.html">Become a Volunteer</a></li>
            

                  <li><a href="">Recent Events</a></li>
                </ul>
              </div>
            </div>
     
            <div
              class="col-xl-3 col-lg-3 col-md-6 wow fadeInUp2 animated"
              data-wow-delay=".7s">
              <div class="footer__widget fot__subscribe mb-30">
                  <div class="copyright text-center">
                  <p>Copyright © 2025, <span>Shriyan Foundation</span>.</p>
                </div>
              </div>
            </div>
          </div>
          <!--scroll-target-btn-->
          <!-- <a href="#top-menu" class="scroll-target"><i class="far fa-arrow-up"></i></a> -->
          <!--scroll-target-btn-->
        
        </div>
      </footer>
  `,
});
