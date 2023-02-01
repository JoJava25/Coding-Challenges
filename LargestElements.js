function largest(n, array) {
    let result = []
      let order = array.sort((a,b) => a - b)
      for(let i = 0; i <= n - 1; i++){
        result.push(order[(order.length - 1) - i])
      }
      return result.reverse()
    }