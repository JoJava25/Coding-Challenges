function isJojo(name){
    name=name.toLowerCase().split(" ");      // splits it into array of words and changes to lowercase
    if(name.length<2) return false;          // must have two or more names names
    let [first,last] = [name[0],name.pop()]; // sets the first element in name to first and last to the last
    if(first.slice(0,2)=='jo'){              // first name stats with jo
      if(last.slice(0,2)=='jo') return true; // last name starts with jo
      if(last.slice(-2)=='jo') return true;  // last name ends with jo 
    }
    if(first.slice(0,3)=='gio'){              // first name stats with gio
      if(last.slice(0,3)=='gio') return true; // last name starts with gio
    }
    return false; //returns false if it wasn't a match
  }