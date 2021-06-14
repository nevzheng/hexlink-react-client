# Hexlink React Client

## OpenAPI Definition
+ The API is specified in the git repository [1]
The repo is configured as a git submodule.
+ prism-cli is used to spin up a mock backend server: [2]

### Steps
1. `git submodule sync` will pull the schema, for now just use main/head
2. `yarn install` will pull prism-cli
3. `yarn run server` will run the hexlink mock backend
4. You should now be able to make http requests
5. Enjoy front end development

### References:
[1] Hexlink Schema: https://github.com/nevzheng/hexlink-schema
[2] Prism: https://github.com/stoplightio/prism#readme