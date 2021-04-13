const cypress = require('cypress')

cypress
    .run({
        browser: 'chrome',
        config: {
            // baseUrl: '',
            video: false,
        },
        // the path is relative to the current working directory
        spec: './cypress/integration/sample.spec.js',
    })
    .then((results) => {
        // console.log(results)
    })
    .catch((err) => {
        console.error(err)
    })