angular.module( 'app', [] );

angular.module( 'app' ).controller( 'testCtrl', function( $scope ){
    var jobs = [
            { title: "Job1", description: "A simple job description that describes this job that needs a description on how to tdo th e job."},
            { title: "Job12", description: "This job that needs a description on how to tdo th e job, A simple job description that describes"},
            { title: "Job3", description: "A description on how to tdo th e job, a simple job description that describes this job that needs."}
        ];
    
    $scope.jobs = jobs;
})