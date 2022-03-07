# Django Alpinejs cookiecutter

A [cookiecutter](https://github.com/audreyr/cookiecutter) for Django with Alpinejs, Htmx and Tailwindcss

- **Alpinejs and Htmx** configured and ready to use
- **Tailwindcss** configured with autoreload
- **Typescript** option for the Alpinejs store

## Install

   ```bash
   cookiecutter https://github.com/synw/cookiecutter-djangoalpinejs.git
   ```

Once the project created cd in the directory and install:

```bash
make install
```

## Run

```bash
make run
```

To watch autoreload the css use this command in another terminal:

```bash
make watchtw
```

## Frontend options

### Javascript

An Alpine js store is available in `static/alpine/store.js` and initialized in the index template. 

You can use directly this file and write javascript. 

### Typescript

Or you can use typescript to write your store with the
preconfigured app in the `alpine` folder. 
If you want to use typescript run the watch autocompile command:

```bash
make watchts
```

This will rebuild the typescript file to js and autoreload

### Build options

A rollup configuration is available to build a bundle. It will build to `static/alpine/index.js` and expose
a global `$alpine` variable to use in the templates. Check the [default template](%7B%7Bcookiecutter.project_name%7D%7D/%7B%7Bcookiecutter.project_name%7D%7D/templates/%7B%7Bcookiecutter.project_name%7D%7D/index.html) for an example
