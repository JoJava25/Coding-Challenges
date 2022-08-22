class Quark{
    constructor(color,flavor){
      this.color = color
      this.flavor = flavor
      this.baryon_number = (1 / 3)
      
      this.interact = function(q2){
        let c1 = this.color
        let c2 = q2.color
        this.color = c2
        q2.color = c1
      }
    }
  }