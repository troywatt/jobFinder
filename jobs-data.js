var mongoose = require( 'mongoose' );
var Promise = require( 'bluebird' );
var jobsModel = require( './models/Jobs' );

var Job = mongoose.model( 'Job' )

var findJobs = function( query ){
    return new Promise.cast( Job.find( query ).exec() );
};

var jobs = [
        { title: 'Cook', description: 'Cooks food for the emporeor' },
        { title: 'Kitchen Cleaner', description: 'Cleans up after hte cook' },
        { title: 'Entertainer', description: 'Entertains the geusts during dinner parties' },
        { title: 'Server', description: 'Servers food to all of the guests during dinner parties' }
    ];
    
var createJob = Promise.promisify( Job.create, Job );


exports.findJobs = findJobs;

exports.connectDB = Promise.promisify( mongoose.connect, mongoose );

// seed the jobs table if it does not already exist
exports.seedJobs = function(){
    
    return findJobs({}).then(function( collection ){
        if( 0 === collection.length ) {
            return Promise.map( jobs, function( job ){
                return createJob( job );
            } );    
        }
    });
    
}