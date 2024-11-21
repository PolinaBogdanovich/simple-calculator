
## Task
Implement simple calculator according to these requirements - [link](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)

## How to run the app
1. Clone the repo
   ```sh
   git clone https://github.com/PolinaBogdanovich/simple-calculator.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Bundle the app with webpack
   ```sh
   npx webpack
   ```
5. Navigate to "dist" folder and run "index.html" in any browser

## App structure
    .
    ├── dist                                # Bundled files
    │   ├── index.html
    │   └── main.js      
    ├── src                                 # Source files
    │   ├── css                             # Styles
    │   │   └── style.css               
    │   ├── js                              # JS Files
    │   │   ├── operations.js               # Calculator logic
    │   │   ├── operationType.js            # Enum with operation types that calculator can perform
    │   │   └── themeSelector.js            # Callbacks for handling theme selecting
    │   ├── index.html                      # HTML for Calculator UI
    │   └── index.js                        # Main JS file
    ├── package-lock.json
    ├── package.json
    ├── webpack.config.cjs
    └── README.md