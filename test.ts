let dummyText = "아버지가방에들어가신다.";

let refineNounData = ["아버지", "방"];

let spacing = " ";

function spacingLetter(text: string, nounData: any[], spacing: string) {
  let result = text;
  let value = [];
  if(result.includes(nounData[0])) {
    let str = result.indexOf(nounData[1]);
    value.push(result.substring(-1, str));
    value.push(result.substring(str));
  }

  console.log(value.join(spacing));
}

spacingLetter(dummyText, refineNounData, spacing);