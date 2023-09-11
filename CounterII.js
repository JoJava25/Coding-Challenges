var createCounter = function(init) {
    let obj = {
        increment = function(){
            return init++
        }

        decrement = function(){
            return init--
        }

        reset = function(){
            return init
        }
    }
};