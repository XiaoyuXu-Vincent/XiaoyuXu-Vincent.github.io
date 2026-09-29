# Xiaoyu Xu — Academic Homepage

This is the Jekyll source for [xiaoyuxu-vincent.github.io](https://xiaoyuxu-vincent.github.io/).

## Edit the page

- `_pages/about.md`: introduction, news, publications, education, and experience.
- `_config.yml`: site description and sidebar profile.
- `_data/navigation.yml`: section links.
- `_sass/_masthead.scss` and `_sass/_sidebar.scss`: navigation and responsive layout.

## Run the source locally

Ruby and Bundler 2.2.19 are required. On a machine with Ruby installed, run these commands from this folder:

```sh
gem install bundler -v 2.2.19 --user-install
bundle _2.2.19_ install
bundle _2.2.19_ exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Open <http://127.0.0.1:4000/>. Edits to page content and styles trigger a rebuild; changes to `_config.yml` require restarting the server.

The separately supplied `xiaoyu-homepage-preview` folder contains a built copy that can be served with Python without installing Ruby gems.
