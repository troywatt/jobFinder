var express = require( 'express' );
var jobsData = require( './jobs-data' );

var app = express();

app.set( 'views', __dirname );
app.set( 'view engine', 'jade' );

app.use( express.static( __dirname + '/public' ) );


app.get( '/api/jobs', function( req, res ){
    
    jobsData.findJobs( {} ).then(function( collection ){
        res.send( collection );
    });   
    
});

// Catch all
// angular is handling our routes for this example app to keep it simple
app.get( '*', function( req, res ){
    res.render( 'index' );
} );

// mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://root:password@ds049161.mongolab.com:49161/jobfinder')
    .then(function(){
        console.log('mongoose connected successfully');
        jobsData.seedJobs();    
    });


app.listen( process.env.PORT, process.env.IP );