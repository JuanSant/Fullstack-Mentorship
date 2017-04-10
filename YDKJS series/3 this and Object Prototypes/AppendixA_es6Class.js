//Class
class Widget {
    constructor(width, height){
      this.width = width || 50;
      this.height = height || 50;
      this.$elem = null;
    }
    
    render($where){
      if(this.$elem){
          this.$elem.css({
              width: this.width + "px",
              height: this.height + "px"
          }).appendTo( $where );
      }
    }
}

class Button extends Widget{
    constructor(width, height, label){
        super( width, height );
        this.label = label || "Default";
        this.$elem = $( "<button>" ).text( this.label );
    }
    
    render($where){
        super.render( $where );
        this.$elem.click( this.onClick.bind(this) );
    }
    
    onClick(evt){
        console.log("Button" +  this.label + "clicked!")
    }
    
}

//Problems that ES6 solves
//1. There's no more references to .prototype cluttering the code.
//2. Button is declared directly to "inherit from" (aka extends) Widget, instead of needing to use
//Object.create(...) to replace a .prototype object that's linked, or having to set .__proto__ or Object.setPrototypeOf(...).
//3. super(...) gives a helpful relative polymorphism capability, so that any method in the chain, can refer relatively one
//level up to a method of the same name.
//4. "Class" literal syntax has affordance only for methods. It's expected that the vast majority of cases
//where a property (state) exists elsewhere but the end-chain "instances".
//5. "extends" lets you extend even built-in object (sub)types like Array, in a very natural way.

//--Class Gotchas--/
//Class is, mostly, just syntactic sugar on top of the existing [[Prototype]] (delegation) mechanism.
//If you change/replace a method on the parent "class", the child "class" and/or instances will still be "affected",
//in that they didn't get copies at declaration time, they are all still using the live-delegation model based on [[Prototype]]


//If you start assigning functions around to different objects, in various different ways, the "super" mechanism
//under the covers has to be re-bound each time.
