function pooRoulette(p) {
    return  /~,~,~,B|B,~,~,~/.test(p) ? 'You disgust me!' :
            /~(.+)~\1~\1B/.test(p) ? 'Get the wipes!' : 
            'Calm before the storm';
  }