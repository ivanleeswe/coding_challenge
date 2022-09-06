const wordCount = (str) => {
  let wordCountResult = {};
  let currentIdx = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " " || char === "\n" || char === "\t" || i === str.length - 1) {
      let word = str.slice(currentIdx, i + 1).toLowerCase();

      let leftIdx = 0;
      let rightIdx = word.length - 1;

      while (leftIdx < rightIdx) {
        let charLeftCode = word[leftIdx].charCodeAt(0);
        
        while (leftIdx < rightIdx) {
          let charRightCode = word[rightIdx].charCodeAt(0);
          if ((charRightCode < 97 || charRightCode > 122) && (charRightCode < 48 || charRightCode > 57)) rightIdx--;
          else break;
        }

        if ((charLeftCode < 97 || charLeftCode > 122) && (charLeftCode < 48 || charLeftCode > 57)) leftIdx++;
        else break;
      }

      const updatedWord = word.slice(leftIdx, rightIdx + 1);

      if (updatedWord in wordCountResult) wordCountResult[updatedWord]++;
      else wordCountResult[updatedWord] = 1;
      
      currentIdx = i;
    }
  }

  return wordCountResult;
};

wordCount(`"That's the password: 'PASSWORD 123'!", cried the Special Agent.\tSo I fled.`)

