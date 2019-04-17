
/*If you remember the exercise last time when we modified the item categories to give each product category 
a different color, do it again now, this time into scripts.js*/

$('.product-name[data-type="vitamin"]').css('background', '#94baff')
$('.product-name[data-type="mineralwater"]').css('background', '#43d16994')
$('.product-name[data-type="proteinbar"]').css('background', 'yellow')

//Change the cursor to hand symbol when hovering over product items//
$('.product-list').css('cursor','pointer')

//Add scrolling animation when user click on Navigation bar//
$('.navbar a[href*="#"]').on('click', function (event) {
    event.preventDefault();
  
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });
  
//Generate a clone of the #history element and give the clone the id history-clone.//
var x = $('#history').clone().prop({'id' : 'history-clone'})
$('#history').after(x)

$('#history-clone p').text('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus mus mauris vitae. Ut consequat semper viverra nam libero justo. Congue eu consequat ac felis donec et odio pellentesque diam. Quis vel eros donec ac odio tempor orci dapibus ultrices. Netus et malesuada fames ac. Amet mauris commodo quis imperdiet massa tincidunt. Purus sit amet luctus venenatis lectus magna fringilla urna. Pharetra convallis posuere morbi leo. Placerat orci nulla pellentesque dignissim enim sit. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Nec feugiat in fermentum posuere urna.Congue eu consequat ac felis donec et odio pellentesque diam. Molestie a iaculis at erat pellentesque adipiscing commodo. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Nullam non nisi est sit amet facilisis magna etiam tempor. Blandit turpis cursus in hac habitasse platea dictumst. Sodales ut etiam sit amet nisl purus in mollis. Placerat orci nulla pellentesque dignissim enim. Tortor posuere ac ut consequat. Pretium lectus quam id leo in vitae turpis massa. Condimentum id venenatis a condimentum vitae sapien pellentesque. In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Pharetra magna ac placerat vestibulum. Senectus et netus et malesuada fames ac turpis egestas. Luctus accumsan tortor posuere ac ut. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Mattis molestie a iaculis at erat pellentesque. Eget sit amet tellus cras adipiscing enim eu. Viverra vitae congue eu consequat ac felis donec et. Adipiscing bibendum est ultricies integer quis auctor elit sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Faucibus interdum posuere lorem ipsum dolor sit. Sodales ut etiam sit amet. Et netus et malesuada fames ac turpis egestas integer. Velit scelerisque in dictum non consectetur. Massa vitae tortor condimentum lacinia quis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Suspendisse sed nisi lacus sed viverra. Quisque non tellus orci ac auctor. Convallis posuere morbi leo urna molestie at elementum. Auctor neque vitae tempus quam pellentesque nec nam aliquam')
   
$('#history-clone').css('background','#9e9e9e')

