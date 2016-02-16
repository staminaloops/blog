// Don't force https when serving the website locally
if (!(window.location.host.startsWith("localhost")) && (window.location.protocol != "https:")) {
  window.location.protocol = "https";
}
    

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document.links).filter(function() {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');

  }); // end of document ready
})(jQuery); // end of jQuery name space
