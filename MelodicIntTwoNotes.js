function getInterval(note1, note2) {
    const val = note => ['C','D','E','F','G','A','B'].indexOf(note[0]) + 7 * +note[1]
    return Math.abs(val(note1) - val(note2)) + 1
  }