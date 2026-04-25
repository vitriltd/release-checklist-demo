# Changelog

## 1.0.0 (2026-04-25)


### Features

* add supplier invoice webhook [release: add INVOICE_WEBHOOK_SECRET to prod env] ([70ef1a0](https://github.com/vitriltd/release-checklist-demo/commit/70ef1a055eea364bad526caab1bc0da782933c01))
* **api:** add health endpoint [release: smoke-test /healthz from prod after deploy] [release: notify on-call team before releasing - touches payment flow] ([e409469](https://github.com/vitriltd/release-checklist-demo/commit/e4094697d14eee12f54d6537e9794e4b2f5ec76a))
* new document store index [release: re-index docstore after deploy - see migration guide] ([98b0ca5](https://github.com/vitriltd/release-checklist-demo/commit/98b0ca55f96e4b1d69111f58976d3817ed4d1308))
* second migration for invoices [release: run db migrations before deploying] ([7fbf584](https://github.com/vitriltd/release-checklist-demo/commit/7fbf5846eb4a947ea9707985effcfc3acbbdbfd8))


### Bug Fixes

* swap redis cache driver [release: update CACHE_DRIVER=redis in all environment configs] ([3b1ea8c](https://github.com/vitriltd/release-checklist-demo/commit/3b1ea8c0e53e859bfe6e0cdad491647fbebb798a))
