# MallSphere deployment status

## Code and tests

The static MallSphere application, responsive stylesheet, product/architecture/test documentation, regression tests and GitHub Actions workflows are committed to the `main` branch.

- JavaScript syntax checks: passed
- Static regression smoke tests: passed
- Playwright/Chromium browser tests: 5 passed
- GitHub Actions compatibility checks: passed

## GitHub Pages

The Pages deployment workflow is present, but deployment is not yet confirmed. The workflow previously failed because the repository does not have a Pages site enabled and the workflow token cannot create/enable the site with its current permissions.

To enable deployment, open **Repository Settings → Pages**, choose **GitHub Actions** as the build and deployment source, and save. Then rerun the **Deploy MallSphere to GitHub Pages** workflow from the Actions tab. Confirm the deployment job succeeds before sharing the public URL.

Expected URL after a successful deployment: https://kandisaikishore.github.io/MallSphere/

## Runtime boundary

MallSphere is a static browser prototype using localStorage and fictional sample data. It is not connected to a backend, payment processor, live footfall sensors, parking hardware or tenant ERP.
