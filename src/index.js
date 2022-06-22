module.exports = function toReadable(number) {
    let hundredsInt = Math.floor(number / 100);
    let tensInt = Math.floor((number % 100) / 10);
    let onesInt = (number % 100) % 10;
    let result = "";

    const getHundedsString = (hundredsInt) => {
        let HundedsString = "";
        if (hundredsInt == 0) HundedsString = "";
        else if (hundredsInt === 1) HundedsString = "one hundred";
        else if (hundredsInt === 2) HundedsString = "two hundred";
        else if (hundredsInt === 3) HundedsString = "three hundred";
        else if (hundredsInt === 4) HundedsString = "four hundred";
        else if (hundredsInt === 5) HundedsString = "five hundred";
        else if (hundredsInt === 6) HundedsString = "six hundred";
        else if (hundredsInt === 7) HundedsString = "seven hundred";
        else if (hundredsInt === 8) HundedsString = "eight hundred";
        else if (hundredsInt === 9) HundedsString = "nine hundred";
        return HundedsString;
    };

    const getTensString = (tenssInt) => {
        let TensString = "";
        if (tensInt == 0) TensString = "";
        else if (tensInt === 1) TensString = "ten";
        else if (tensInt === 2) TensString = "twenty";
        else if (tensInt === 3) TensString = "thirty";
        else if (tensInt === 4) TensString = "forty";
        else if (tensInt === 5) TensString = "fifty";
        else if (tensInt === 6) TensString = "sixty";
        else if (tensInt === 7) TensString = "seventy";
        else if (tensInt === 8) TensString = "eighty";
        else if (tensInt === 9) TensString = "ninety";
        return TensString;
    };

    const getOnesString = (onesInt) => {
        let OnesString = "";
        if (onesInt == 0) OnesString = "";
        else if (onesInt === 1) OnesString = "one";
        else if (onesInt === 2) OnesString = "two";
        else if (onesInt === 3) OnesString = "three";
        else if (onesInt === 4) OnesString = "four";
        else if (onesInt === 5) OnesString = "five";
        else if (onesInt === 6) OnesString = "six";
        else if (onesInt === 7) OnesString = "seven";
        else if (onesInt === 8) OnesString = "eight";
        else if (onesInt === 9) OnesString = "nine";
        return OnesString;
    };
    result =
        getHundedsString(hundredsInt) +
        " " +
        getTensString(tensInt) +
        " " +
        getOnesString(onesInt);
    return result.trim();
};
