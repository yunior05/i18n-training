const express = require('express'),
    app = express(),
    i18n = require('i18n');

const port = 3000;

i18n.configure({
    locales: ['en', 'es'],
    directory: `${__dirname}/locales`,
    queryParameter: 'lang'
})

app.use(i18n.init);

app.get('/', (req, res) => {
    const flags = "<a href='#'> <span class='flag-icon flag-icon-es'> </span> </a>" +
    "<a href='#'> <span class='flag-icon flag-icon-en'> </span> </a>" + req.__('helloWorld');

    res.render(flags);
}) 

app.get('/api/customers', (req, res) => {
    res.send([1, 2, 3])
})

app.listen(port, () => console.log(`Listen port ${port}`));