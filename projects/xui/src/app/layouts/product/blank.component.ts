import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

  window: any;

  constructor() { }

  ngOnInit(): void { 
    // this.init();
  }

  init() {
    //TOP NAVIGATION
    function NavBar() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }


    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.width = "100%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "0%";
        document.getElementById("roll_back").style.display = "block";
      } else {
        document.getElementById("myTopnav").style.width = "80%";
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header").style.top = "2rem";
        document.getElementById("roll_back").style.display = "none";
      }
    }


    //SLIDE SHOW
    var myIndex = 0;
    carousel();
    function carousel() {
      var i;
      var x:any = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) { myIndex = 1 }
      x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 5000); // Change image every 2 seconds
    }














    //INTERNET SPEED DETECT
    var imageAddr = "images/slide_1.jpg";
    var downloadSize = 289059;
    function ShowProgressMessage(msg) {
      if (console) {
        if (typeof msg == "string") {
          console.log(msg);
        } else {
          for (var i = 0; i < msg.length; i++) {
            console.log(msg[i]);
          }
        }
      }
    }

    $(function () {
      var $clientslider = $('#clientlogo');
      var clients = $clientslider.children().length;
      var clientwidth = (clients * 220);
      $clientslider.css('width', clientwidth);
      var rotating = true;
      var clientspeed = 1800;
      var seeclients = setInterval(rotateClients, clientspeed);
      $(document).on({
        mouseenter: function () {
          rotating = false;
        },
        mouseleave: function () {
          rotating = true;
        }
      }, '#ourclients');
      function rotateClients() {
        if (rotating != false) {
          var $first = $('#clientlogo li:first');
          $first.animate({
            'margin-left': '-33%'
          }, 2000, function () {
            $first.remove().css({
              'margin-left': '0px'
            });
            $('#clientlogo li:last').after($first);
          });
        }
      }
    });
  }
}
