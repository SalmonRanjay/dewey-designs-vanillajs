import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';

class MobileMenu{

    constructor(){
        this.logo = $('#logo');
        this.siteHeader = $('.dd-nav-wrapper');
        this.siteHeaderblue = $('.dd-nav-wrapper-blue');
        this.menuIcon = $('.dd-menu-icon');
        this.menuConent = $(".menu-content");
        this.events();
        this.swapLogoImage();
    }

    swapLogoImage(){
        console.log($(window).width())
        var windowWidth = $(window).width();
        if (windowWidth < 599){
            this.logo.attr('src','/dewey-designs-vanillajs/assets/images/deweydesignlabs_dark.png');
           console.log(true);
        }
    }

    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu(){
        this.menuConent.toggleClass("menu-content--is-visible");
        // this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("meunu-icon--close-x");
        this.siteHeaderblue.toggleClass('dd-nav_BG_white');
        
     }
}

export default MobileMenu;