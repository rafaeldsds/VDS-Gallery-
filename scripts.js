alert("Hello everyone this is VD Gallery, if you need to give us a prompt or help, tell us in the social contacts!!")

function resizeImg (img)
      {
        var resize = 150; // resize amount in percentage
        var origH  = 61;  // original image height
        var origW  = 250; // original image width
        var mouseX = event.x;
        var mouseY = event.y;
        var newH   = origH * (resize / 100);
        var newW   = origW * (resize / 100);

        // Set the new width and height
        img.style.height = newH;
        img.style.width  = newW;

        var c = img.parentNode;

        // Work out the new center
        c.scrollLeft = (mouseX * (resize / 100)) - (newW / 2) / 2;
        c.scrollTop  = (mouseY * (resize / 100)) - (newH / 2) / 2;
      }

