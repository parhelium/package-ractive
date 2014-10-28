Package.describe({
  summary: "Ractive",
  version: "0.6.1",
  git: "https://github.com/parhelium/package-ractive"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3');
  api.addFiles('lib/ractive-0.6.1.js');
  api.export('Ractive', ['client', 'server']);
});

