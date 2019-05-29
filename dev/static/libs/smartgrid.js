var smartgrid = require('smart-grid');

var settings = {
    outputStyle: 'sass',
    columns: 12,
    offset: '30px', //gutter
    //offset: '0.0263%', //gutter
    mobileFirst: true,
    container: {
        maxWidth: '1140px',
        fields: '20px'
    },
    breakPoints: {
        lg: {
            width: '1100px'
        },
        md: {
            width: '960px'
        },
        sm: {
            width: '780px',
            fields: '15px'
        },
        xs: {
            width: '560px'
        }

    }
};

smartgrid('../sass', settings);
