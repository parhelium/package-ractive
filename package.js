Package.describe({
  summary: "Ractive",
  version: "0.5.7",
  git:"https://github.com/parhelium/package-ractive"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('lib/ractive.min.js');
  api.export('Ractive', ['client', 'server']);
});

