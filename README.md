# Architizer Design Kit

## About

Architizer Design Kit is a system of styles and interface elements based on [Foundation 6](http://foundation.zurb.com/docs).

## Development

### Get Started

Install [Gulp](http://gulpjs.com/) globally, install dependencies, then run the start script.

```bash
npm install -g gulp
npm install
npm start
```

### Local Development
You can access `adk.css` locally from http://localhost:8080/css/adk.css

### Documentation

Edit [docs.md](docs.md) to update the documentation site.

While `npm start` is running, you can access the static documentation site at [http://localhost:8080](http://localhost:8080).

## Usage

See [usage instructions](USAGE.md).

### Starter Template

Here's a starter template:

```html
<!doctype html>
<html class="adk no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Architizer Design Kit Starter Template</title>
    <!-- Architizer Design Kit CSS -->
    <link rel="stylesheet" href="https://design-kit.arc.ht/css/adk.css" />
  </head>
  <body>
    <!-- Page content begins here -->
    <h1>Hello, world!</h1>
    <!-- Page content ends here -->
    <!-- JavaScript dependencies -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/what-input/2.1.1/what-input.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
```

## Builds

See [gulpfile.js](gulpfile.js), [circle.yml](.circleci/config.yml), and [deploy.sh](deploy.sh) for detailed build configuration.

### Master
When changes are merged to the master branch, the styles and documentation page are rebuilt by CircleCI and pushed to http://design-kit.arc.ht.

After the deployment is finished and succeeded, you need to create an [invalidation](https://console.aws.amazon.com/cloudfront/home#distribution-settings:E1FEN8SK3LOS5R) for `css/adk.css` in CloudFront `design-kit.arc.ht` CNAME, the reason for that is to force the CDN to pull a fresh version of the file instead of the old one in the cache.

### Development Builds
When changes are pushed to feature branches, the styles are built by CircleCI and pushed to http://design-kit.arc.ht/css/dev/abcd123.css where `abcd123` is the abbreviated hash of the built commit from the feature branch.

To test a development CSS build on our Angular app, add `?adk=abcd123` to the end of the URL of the page you want to test.

Be aware that other assets such as fonts are only deployed to S3 when the branch gets merged to master.
