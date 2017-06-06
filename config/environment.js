module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',

    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyAdQphLBmB6BHwkk_0J8mpW358-6WWs5kM",
      authDomain: "super-rentals-6bfd5.firebaseapp.com",
      databaseURL: "https://super-rentals-6bfd5.firebaseio.com",
      storageBucket: "super-rentals-6bfd5.appspot.com",
    },

    APP: {

    }
  }
}
