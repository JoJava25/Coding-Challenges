function isValidChess960(pieces) {
    pieces = pieces.split("");

    const checkB =
        ((pieces.indexOf("B") + 1) % 2 === 0) !==
        ((pieces.lastIndexOf("B") + 1) % 2 === 0);

    const indexOfK = pieces.indexOf("K");
    const checkK =
        pieces.indexOf("R") < indexOfK && pieces.lastIndexOf("R") > indexOfK;

    return checkB && checkK;
}