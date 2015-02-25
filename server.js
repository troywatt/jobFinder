var express = require( 'express' );

var app = express();

app.set( 'views', __dirname );
app.set( 'view engine', 'jade' );

app.use( express.static( __dirname + '/public' ) );

// angular is handling our routes for this example app to keep it simple
app.get( '*', function( req, res ){
    res.render( 'index' );
} );



app.listen( process.env.PORT, process.env.IP );