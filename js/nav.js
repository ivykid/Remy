$(document).ready(function() {
  // var mybodyid = $('body').attr('id');
  var mybodyid = $('.this_should_be_the_body').attr('id');
  var mynavid = '#nav' + mybodyid;
  // var mynavid = mybodyid;
  /* e.g. for 3.shtml:
      mybodyid is 'part3'

      mynavid  is '#navpart3'
   */
   console.log(mybodyid);
  $(mynavid).attr('id','iamhere');
});
