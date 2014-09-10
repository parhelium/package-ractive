Package.describe({
  summary: "Ractive",
  version: "0.5.6"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('ractive.min.js');
  api.export('Ractive', ['client', 'server']);
});

