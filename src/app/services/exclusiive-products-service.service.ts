import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExclusiiveProductsServiceService {

  constructor() { }

  productDetails = [
    {
      id:1,
      productName:"Diamond Stud Earrings",
      productDetails:"These classic earrings are perfect for any occasion, adding just the right amount of sparkle to your outfit.",
      productPrice:200,
      productImg:"assets/img/p1.png"
    },
    {
      id:2,
      productName:"Silver Charm Bracelet",
      productDetails:"This beautiful bracelet is perfect for showcasing your personal style.",
      productPrice:200,
      productImg:"assets/img/p2.png"
    },
    {
      id:3,
      productName:"Gold Pendant Necklace",
      productDetails:"This stunning necklace features a delicate chain and a beautiful gold pendant, perfect for adding a touch of elegance to any outfit.",
      productPrice:200,
      productImg:"assets/img/p3.png"
    },
    {
      id:4,
      productName:"Pearl Drop Earrings",
      productDetails:"These elegant earrings feature lustrous pearls suspended from delicate hooks.",
      productPrice:200,
      productImg:"assets/img/p4.png"
    },
    {
      id:5,
      productName:"Gold Wrap Bracelet",
      productDetails:"Made with soft, high-quality leather and available in a variety of colors, it can be wrapped around your wrist multiple times for a layered look.",
      productPrice:105,
      productImg:"assets/img/p5.png"
    },
    {
      id:6,
      productName:"Beaded Anklet",
      productDetails:"This playful anklet is perfect for adding a pop of color and fun to any summer outfit.",
      productPrice:219,
      productImg:"assets/img/p6.png"
    }
  ]
}
