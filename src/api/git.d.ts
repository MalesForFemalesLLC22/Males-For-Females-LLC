{
  "author": "polkadot.{js}",
  "description": "Manage your Polkadot accounts outside of dapps. Injects the accounts and allows signing transactions for a specific account.",
  "homepage_url": "https://github.com/polkadot-js/extension",
  "name": "polkadot{.js} extension",
  "short_name": "polkadot{.js}",
  "manifest_version": 2,
  "permissions": ["storage", "tabs"],
  "background": {
    "scripts": ["background.js"],
    "persistent": true
  },
  "browser_action": {
    "default_title": "polkadot{.js}",
    "default_popup": "index.html"
  },
  "content_scripts": [{
    "js": ["content.js"],
    "matches": ["http://*/*", "https://*/*"],
    "run_at": "document_start"
  }],
  "icons": {
    "16": "images/icon-16.png",
    "32": "images/icon-32.png",
    "48": "images/icon-48.png",
    "64": "images/icon-64.png",
    "128": "images/icon-128.png"
  },
  "web_accessible_resources": ["page.js"],
  "content_security_policy": "script-src 'self' blob: 'unsafe-eval' 'wasm-eval'; object-src 'self'"
}