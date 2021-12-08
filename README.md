# Metazy

Welcome to Metazy. This is a small project to maintain my skills in Angular, and where I can implement some good practices to use as a reference in future projects.

## Good practices

In this chapter I will comment on some good practices in Angular.

### Custom scripts

Custom scripts allow you to execute commands by shortcuts. In the package.json a section is declared called "scripts". In this section you can declare custom scripts. You can simply execute any script by calling `npm run <name_of_script>`. One of the scripts I added is the "server" script, which you can call by executing `npm run server` in the terminal. This script starts an instance of the json-server with the flag `--watch` that populates the database with the movies-db.json file. For a more advanced feature of scripts you can check out Lifecycle Scripts.
