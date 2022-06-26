function stat(strg) {
    if (!strg) return '';
    let array = strg.split(", ");
    let timeInSeconds = array.map(element => {
      let subArr = element.split("|");
      let hour = parseInt(subArr[0]);
      let min = parseInt(subArr[1]);
      let sec = parseInt(subArr[2]);
      let result = (hour * 3600) + (min * 60) + sec
      return result;
    });
    timeInSeconds.sort((a, b) => a - b);
    let range = timeInSeconds[timeInSeconds.length - 1] - timeInSeconds[0];
    let average = Math.floor(timeInSeconds.reduce((acc, ele) => acc + ele, 0) / timeInSeconds.length);
    let median;
    if (timeInSeconds.length % 2 !== 0) {
      median = timeInSeconds[Math.floor(timeInSeconds.length / 2)];
    } else {
      median = Math.floor((timeInSeconds[(timeInSeconds.length / 2)- 1] + timeInSeconds[timeInSeconds.length / 2] ) / 2);
    }
    return `Range: ${convert(range)} Average: ${convert(average)} Median: ${convert(median)}`;
  }
  
  function convert(seconds) {
    let remainder = seconds % 3600;
    let hour = Math.floor(seconds / 3600);
    let min = Math.floor(remainder / 60);
    remainder = remainder % 60;
    let sec = remainder;
    hour = hour.toString().length === 1 ? "0" + hour : hour;
    min = min.toString().length === 1 ? "0" + min : min;
    sec = sec.toString().length === 1 ? "0" + sec : sec;
    return `${hour}|${min}|${sec}`
  }