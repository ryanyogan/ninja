module.exports = {
  index: {
    handler: function(request, reply) {
      reply.view('index', {
        title: 'This be a homepage'
      });
    },
    id: 'index'
  },

  about: {
    handler: function(request, reply) {
      reply.view('about', {
        title: 'About page'
      });
    },
    id: 'about'
  },

  missing: {
    handler: function(request, reply) {
      reply.view('404', {
        title: 'You just 404d'
      }).code(404);
    },
    id: '404'
  }
}
