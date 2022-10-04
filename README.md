<<<<<<< HEAD
<h1><span style="color:#2d7eea">README - Your LookML Project</span></h1>

<h2><span style="color:#2d7eea">LookML Overview</span></h2>

LookML is a data modeling language for describing dimensions, fields, aggregates and relationships based on SQL.

LookML is powerful because it:

- **Is all about reusability**: Most data analysis requires the same work to be done over and over again. You extract
raw data, prepare it, deliver an analysis... and then are never able touse any of that work again. This is hugely
inefficient, since the next analysis often involves many of the same steps. With LookML, once you define a
dimension or a measure, you continue to build on it, rather than having to rewrite it again and again.
- **Empowers end users**:  The data model that data analysts and developers create in LookML condenses and
encapsulates the complexity of SQL, it and lets analysts get the knowledge about what their data means out of
their heads so others can use it. This enables non-technical users to do their jobs &mdash; building dashboards,
drilling to row-level detail, and accessing complex metrics &mdash; without having to worry about what’s behind the curtain.
- **Allows for data governance**: By defining business metrics in LookML, you can ensure that Looker is always a
credible single source of truth.

The Looker application uses a model written in LookML to construct SQL queries against a particular database that
business analysts can [Explore](https://docs.looker.com/r/exploring-data) on. For an overview on the basics of LookML, see [What is LookML?](https://docs.looker.com/r/what-is-lookml)

<h2><span style="color:#2d7eea">Learn to Speak Looker</span></h2>
R
A LookML project is a collection of LookML files that describes a set of related [views](https://docs.looker.com/r/terms/view-file), [models](https://docs.looker.com/r/terms/model-file), and [Explores](https://docs.looker.com/r/terms/explore).
- A [view](https://docs.looker.com/r/terms/view-file) (.view files) contains information about how to access or calculate information from each table (or
across multiple joined tables). Here you’ll typically define the view, its dimensions and measures, and its field sets.
- A [model](https://docs.looker.com/r/terms/model-file) (.model file) contains information about which tables to use and how they should be joined together.
Here you’ll typically define the model, its Explores, and its joins.
- An [Explore](https://docs.looker.com/r/terms/explore) is the starting point for business users to query data, and it is the end result of the LookML you are
writing. To see the Explores in this project, select an Explore from the Explore menu.

<h2><span style="color:#2d7eea">Exploring Data</span></h2>

Ad-hoc data discovery is one of Looker’s most powerful and unique features. As you evaluate use cases for your
trial, consider what business areas you would like to explore. Open the Explore menu in the main navigation to see
the Explores you are building.

<h2><span style="color:#2d7eea">The Development Workflow</span></h2>

To support a multi-developer environment, Looker is integrated with Git for version control. Follow [these directions](https://docs.looker.com/r/develop/git-setup)
to set up Git for your project. To edit LookML, expand the Develop drop-down and toggle on [Development Mode](https://docs.looker.com/r/terms/dev-mode). In
Development Mode, changes you make to the LookML model exist only in your account until you commit the
changes and push them to your production model.

<h2><span style="color:#2d7eea">Additional Resources</span></h2>

To learn more about LookML and how to develop visit:
- [Looker User Guide](https://looker.com/guide)
- [Looker Help Center](https://help.looker.com)
- [Looker University](https://training.looker.com/)
=======
# Looker Extension Loocker

Loocker is a Looker extension using React and TypeScript.

## Getting Started for Development

1. Install the dependencies with [Yarn](https://yarnpkg.com/).

    ```sh
    yarn install
    ```

2. Build the project

    ```sh
    yarn build
    ```

3. Start the development server

    ```sh
    yarn develop
    ```

    The development server is now running and serving the JavaScript at http://localhost:8080/bundle.js.

4. Now log in to Looker and create a new project.

    Depending on the version of Looker, a new project can be created under:

    - **Develop** => **Manage LookML Projects** => **New LookML Project**, or
    - **Develop** => **Projects** => **New LookML Project**

    Select "Blank Project" as the "Starting Point". This creates a new LookML project with no files.

5. Create a `manifest` file

   Either drag and upload the `manifest.lkml` file in this directory into your Looker project, or create a `manifest.lkml` with the same content. Change the `id`, `label`, or `url` as needed.

   ```
    project_name: "Loocker"
    application: Loocker {
        label: "Loocker React/TypeScript extension"
        url: "http://localhost:8080/bundle.js"
        entitlements: {
          core_api_methods: ["me"]
        }
    }
   ```

6. Create a `model` LookML file in your project.

   Typically, the model is named the same as the extension project. The model is used to control access to the extension.

   - [Configure the model you created](https://docs.looker.com/data-modeling/getting-started/create-projects#configuring_a_model) so that it has access to some connection (any connection).

7. Connect the new project to Git.

   - Create a new repository on GitHub or a similar service, and follow the instructions to [connect your project to Git](https://docs.looker.com/data-modeling/getting-started/setting-up-git-connection)

8. Commit the changes and deploy them to production through the Project UI.

9. Reload the page and click the `Browse` dropdown menu. You should see the extension label in the list.

   - The extension will load the JavaScript from the `url` you provided in the `application` definition. By default, this is `http://localhost:8080/bundle.js`. If you change the port your server runs on in the `package.json`, you will need to also update it in the `manifest.lkml`.
   - Reloading the extension page will bring in any new code changes from the extension template.

## Deploying the extension

To allow other people to use the extension, build the JavaScript bundle file and directly include it in the project.

1. Build the extension with `yarn build` in the extension project directory on your development machine.
2. Drag and drop the generated `dist/bundle.js` file into the Looker project interface
3. Modify your `manifest.lkml` to use `file` instead of `url`:

   ```
    project_name: "Loocker"
    application: Loocker {
        label: "A Looker React/TypeScript extension"
        file: "bundle.js"
        entitlements: {
          core_api_methods: ["me"]
        }
    }
   ```
>>>>>>> branch 'master' of https://github.com/Lucazz7/Loocker.git
