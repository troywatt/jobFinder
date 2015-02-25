var express = require( 'express' );
var mongoose = require("mongoose");
var job = require( './models/Jobs' );

var app = express();

app.set( 'views', __dirname );
app.set( 'view engine', 'jade' );

app.use( express.static( __dirname + '/public' ) );


app.get( '/api/jobs', function( req, res ){
    
    mongoose.model( 'Job' ).find({}).exec(function( error, collection  ){
        res.send( collection );
    });   
    
})

// Catch all
// angular is handling our routes for this example app to keep it simple
app.get( '*', function( req, res ){
    res.render( 'index' );
} );

// mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://root:password@ds049161.mongolab.com:49161/jobfinder');

var conn = mongoose.connection;

conn.once( 'open', function(){
    console.log('mongoose connected successfully');
    job.seedJobs();
})

app.listen( process.env.PORT, process.env.IP );