# [0.2.0](https://github.com/XYY-huijiwiki/r-drive/compare/v0.1.4...v0.2.0) (2025-03-07)

- feat(auth)!: update GitHub OAuth URL ([5db234f](https://github.com/XYY-huijiwiki/r-drive/commit/5db234f360e44a9678dfd76897a7b45daf02b022))

### BREAKING CHANGES

- The GitHub OAuth URL has been changed, rendering old versions incompatible.

## [0.1.4](https://github.com/XYY-huijiwiki/r-drive/compare/v0.1.3...v0.1.4) (2025-03-06)

### Bug Fixes

- **ci:** correct arguments for `gh release create` in `release.yaml` ([843bfb6](https://github.com/XYY-huijiwiki/r-drive/commit/843bfb68d860c15c12638a4fa53e20ee1bd6782e))
- **ci:** prevent multiple version bump commits ([8ad111a](https://github.com/XYY-huijiwiki/r-drive/commit/8ad111a54f2e3daa6d5f4b321bfa17a61879bae5))
- **renderer:** remove unused 'props' to fix TypeScript type check error ([259eb9b](https://github.com/XYY-huijiwiki/r-drive/commit/259eb9b37eb5e429644bcf52f6c3502d234933a0))
- resolve issue where loading more items refreshed total item count ([044c736](https://github.com/XYY-huijiwiki/r-drive/commit/044c736284236362128742fc32967a9f38d6e6ed))

### Features

- add preview for Wikitext input ([464d511](https://github.com/XYY-huijiwiki/r-drive/commit/464d511a3ff78bfe7a3c997e221c48655f839269))
- **ci:** add Linux version building to GitHub Actions workflow ([f8f4844](https://github.com/XYY-huijiwiki/r-drive/commit/f8f48446b02e90aef96e472833b210b7221a6c69))
- **i18n:** introduce [i18n Ally](https://github.com/lokalise/i18n-ally) for improved localisation workflow ([6bfdd65](https://github.com/XYY-huijiwiki/r-drive/commit/6bfdd65d49a24c9b96ce1e529e339857f5cf6c42))
- update `getWhatLinksHere()` to parse HTML instead of using query API ([2d3cca5](https://github.com/XYY-huijiwiki/r-drive/commit/2d3cca5d8e2e38d8bb3f6afbbf4b592208896ed6))

### Performance Improvements

- optimise start-up data fetching ([51137a6](https://github.com/XYY-huijiwiki/r-drive/commit/51137a6ffc0393c6b71b3520794dddc6ccf560c0))

## [0.1.3](https://github.com/XYY-huijiwiki/r-drive/compare/v0.1.2...v0.1.3) (2025-03-04)

### Bug Fixes

- **ci:** detect manual PATCH version increment in GitHub Actions ([9cd68fe](https://github.com/XYY-huijiwiki/r-drive/commit/9cd68fefbaa532b07298335bb0fab5b6fd0d7234))
- **ci:** ensure manual version increment triggers GitHub Actions auto-release ([192ed47](https://github.com/XYY-huijiwiki/r-drive/commit/192ed47719d14ed916c939065c09adaef37aa754))
- ensure <code-block /> displays correct language name based on input props ([54dae50](https://github.com/XYY-huijiwiki/r-drive/commit/54dae50d782457ce01e828af3afa03c9219d588e))
- **rename:** ensure spaces are replaced with underscores ([23de04b](https://github.com/XYY-huijiwiki/r-drive/commit/23de04bcabd1f01b6b987d1f6b0b1e8df68901a9))
- **search:** replace spaces with underscores in search text ([eddfccb](https://github.com/XYY-huijiwiki/r-drive/commit/eddfccb7de436110d96ab0b78abef9b1b603a8aa))
- **ui:** disable buttons in search bar and filter pane while loading ([a8fbeb6](https://github.com/XYY-huijiwiki/r-drive/commit/a8fbeb67c2af004cd960d8701957d085ffcb644c))

### Features

- **ui:** add fullscreen toggle button in top-right corner ([a3f7888](https://github.com/XYY-huijiwiki/r-drive/commit/a3f7888a8a02a07327999b074ed553f48ea5df6b))
- **ui:** update code block styling and add copy button ([a9559d1](https://github.com/XYY-huijiwiki/r-drive/commit/a9559d117418b869b2b5c5634c431be286db2bed))
- **upload:** trim filenames before upload ([d23a029](https://github.com/XYY-huijiwiki/r-drive/commit/d23a029a4bccc8359adb9e7fb11cb227a5c7f697))

## [0.1.2](https://github.com/XYY-huijiwiki/r-drive/compare/v0.1.1...v0.1.2) (2025-03-03)

### Bug Fixes

- **search:** close preview pane and prevent another search during searching ([2c5d4bf](https://github.com/XYY-huijiwiki/r-drive/commit/2c5d4bfd7ebe2285255a1f1486b9f5a292bd4e8a))

### Features

- add Vue DevTools ([7bb8060](https://github.com/XYY-huijiwiki/r-drive/commit/7bb8060859184c476d9bb6109e115dfb6272f0c5))
- **download:** improve file naming and save location options ([563daf4](https://github.com/XYY-huijiwiki/r-drive/commit/563daf4c5df3bd405b4091fb69139d21fedce089))
- enable ESM for main and preload processes ([b68f962](https://github.com/XYY-huijiwiki/r-drive/commit/b68f962ed190197373967b1dcb1fc18d691b2613))
- improve file list filter and sort experience ([d57d8e9](https://github.com/XYY-huijiwiki/r-drive/commit/d57d8e9d76136fe6154ee88b6c7695288663007d))
- improve file list filter experience ([81b0b9d](https://github.com/XYY-huijiwiki/r-drive/commit/81b0b9d519753400d868580436a4d92dd5aeb609))
- **navigation:** hide forward/backward buttons when unavailable ([ab645ff](https://github.com/XYY-huijiwiki/r-drive/commit/ab645ffa01ca5ee0b0a0dbb95326cabeda5e8d89))
- remove `mica-electron` dependency as Electron natively supports mica on Windows ([159f15f](https://github.com/XYY-huijiwiki/r-drive/commit/159f15f7dfdf79fc35076d149b0ce4b4645dcc32))
- **ui:** add space replacement warning to file rename dialog ([c5cf4b1](https://github.com/XYY-huijiwiki/r-drive/commit/c5cf4b148cafb38821c1b0ea7cc34bd8e9b185fb))
- **ui:** refine UI with Tailwind and cleaner structure ([e167b89](https://github.com/XYY-huijiwiki/r-drive/commit/e167b898ba0bce9f7c785ba733c4d3e5e84a1342))

## [0.1.1](https://github.com/XYY-huijiwiki/r-drive/compare/v0.1.0...v0.1.1) (2025-03-01)

### Bug Fixes

- remove fullscreen function due to incompatibility ([d288e39](https://github.com/XYY-huijiwiki/r-drive/commit/d288e39098224a27202c8a86c2b50ffafd7146c6))
- **search:** show cancel button only when search is performed ([dbc63c5](https://github.com/XYY-huijiwiki/r-drive/commit/dbc63c5d95591ef5f21097d96098861b0395d73c))
- update total file count when filter is changed ([7f51154](https://github.com/XYY-huijiwiki/r-drive/commit/7f511545f1ea69205aaf2d5ce5ed9c55c4e3f680))

### Features

- allow users to edit file source and file licence ([d693b4f](https://github.com/XYY-huijiwiki/r-drive/commit/d693b4f4f471021b70fbd00c1562f75eed903593))
- **file-details:** add link back to XYY Wiki ([8406684](https://github.com/XYY-huijiwiki/r-drive/commit/8406684ea7ba55b0a701af787a306df53e937b02))
- replace Material Symbols icons with Fluent Icons ([10a79f7](https://github.com/XYY-huijiwiki/r-drive/commit/10a79f7c9f3006510899faf3500c1fea56e623f7))
- **upload:** replace spaces with underscores in file names ([a8c2994](https://github.com/XYY-huijiwiki/r-drive/commit/a8c2994d3757ce7c78253251ebe0d1b0647f1337))

## 0.1.0 (2025-02-28)

First release :)
