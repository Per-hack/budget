// has the job of bundling the files
const path = require('path');  //path comes with node js it reads the path of the files
// the path module provides utility for working with file and directory paths
// it can be assesed using: const path = require('path'); 

module.exports = {  // exporting an object
    entry: './src/playground/redux-101.js',  // entry point, where it bundles app.js
    output: {  // produces an output 
        path: path.join(__dirname, 'public'), // path of where the file is
        filename: 'bundle.js'  // name of the bundle
    }, 
    module: {   // specifies the rules
        rules: [{
            loader: 'babel-loader',  // converts the code into what the browser can understand
            test: /\.js$/, // rule that tells babel loader to convert only js files
            exclude: /node_modules/  // tells babel not to run node modules
        },{
            test: /\.s?css$/,  // the ? tells the system to use either scss or css, the ? stands for or, scss another framework
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',  // 
    devServer:{  // running server .... creates a server and then checks the contents
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};