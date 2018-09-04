$(document).ready(function(){
$('.slider1inside').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  centerMode: true,
  variableWidth: false,
  centerMode: false,
});
});

$(document).ready(function(){
  var mainApp = angular.module('mainApp', []);
  mainApp.controller('studentController', function($scope){
    $scope.feature1 = {
      features1: [
        {web: 'google.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'google.com.vn', dayleft: '16 days left', price: '$32,500'},
        {web: 'asdfasdfsdafsa.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'gdsafasdfasdfase.com', dayleft: '6 days left', price: '$42,5050'},
        {web: 'dasfasfasdfasdfsadogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'gooasfasdfasle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'godafasdfsadogle.com', dayleft: '6 days left', price: '$2,5000'},      
        {web: 'asfasdfagoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dafasdgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'asdfasdfgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$22,500'},
        {web: 'dfgoogle.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '5 days left', price: '$2,500'},
      ],
      features2: [
        {web: 'dafasdgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'asdfasdfgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$22,500'},
        {web: 'dfgoogle.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '5 days left', price: '$2,500'},
        {web: 'google.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'google.com.vn', dayleft: '16 days left', price: '$32,500'},
        {web: 'asdfasdfsdafsa.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'gdsafasdfasdfase.com', dayleft: '6 days left', price: '$42,5050'},
        {web: 'dasfasfasdfasdfsadogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'gooasfasdfasle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'godafasdfsadogle.com', dayleft: '6 days left', price: '$2,5000'},      
        {web: 'asfasdfagoogle.com', dayleft: '6 days left', price: '$2,500'},
      ],
      features3: [
        {web: 'asdfasdfase.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'google.com.vn', dayleft: '16 days left', price: '$32,500'},
        {web: 'asdfasdfsdafsa.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'gdsafasdfasdfase.com', dayleft: '6 days left', price: '$42,5050'},
        {web: 'dasfasfasdfasdfsadogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dfgoogle.com', dayleft: '6 days left', price: '$12,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '5 days left', price: '$2,500'},
        {web: 'gooasfasdfasle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'godafasdfsadogle.com', dayleft: '6 days left', price: '$2,5000'},      
        {web: 'asfasdfagoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dafasdgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'asdfasdfgoogle.com', dayleft: '6 days left', price: '$2,500'},
        {web: 'dgoogle.com', dayleft: '6 days left', price: '$22,500'},
      ],
    }
  });
});
