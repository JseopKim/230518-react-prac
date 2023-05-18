var dummyText = "아버지가방에들어가신다.";
var refineNounData = ["아버지", "방"];
var spacing = " ";
function spacingLetter(text, nounData, spacing) {
    var result = text;
    var value = [];
    if (result.includes(nounData[0])) {
        var str = result.indexOf(nounData[1]);
        value.push(result.substring(-1, str));
        value.push(result.substring(str));
    }
    console.log(value.join(spacing));
}
spacingLetter(dummyText, refineNounData, spacing);
