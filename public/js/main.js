//
// layzyload image
//
function lazyLoadImage(e) {
  e.currentTarget.parentNode.classList.remove("loading");
}

function lazyLoadImageError(e) {
  let parent = e.currentTarget.parentNode;

  parent.classList.remove("loading");
  parent.classList.add("error");
}

function AddEventLazyLoadImage(id) {
  if ("loading" in HTMLImageElement.prototype) {
    let imgs = null;

    if (id == null) {
      imgs = document.querySelectorAll(".js-lazyload img");
    } else {
      imgs = document.getElementById(id).querySelectorAll(".js-lazyload img");
    }

    if (imgs) {
      imgs.forEach((v) => {
        if (!v.complete) {
          v.parentNode.classList.add("loading");
          v.addEventListener("load", lazyLoadImage);
          v.addEventListener("error", lazyLoadImageError);
        }
      });
    }
  }
}

AddEventLazyLoadImage();
