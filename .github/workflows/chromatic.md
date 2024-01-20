# .github/workflows/chromatic.yml

name: "Chromatic Storybook Deploy"

on: 
  pull_request:
    branches:
      - develop

jobs:
  storybook_deploy:
    runs-on: ubuntu-latest
    outputs:
      status: ${{ job.status }}
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Install dependencies
        run: npm ci

      - name: Publish to Chromatic
        uses: chromaui/action@latest
        with:
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
      
     - name: Comment PR
        if: success()
        uses: thollander/actions-comment-pull-request@v2
        with:
          message: "🎨 storybook-deploy"