Package.describe({
  summary: "Ractive",
  version: "0.6.0",
  git:"https://github.com/parhelium/package-ractive"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('lib/ractive-0.6.0.js');
  api.export('Ractive', ['client', 'server']);
});

