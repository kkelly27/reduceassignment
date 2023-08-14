function extractValue(arr,key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;

    },[]);
}
describe("#extractValue", function() {
    it("returns a new array with the value of each key in an array objects", function() {
      var arr = [
        { name: "Elie" },
        { name: "Tim" },
        { name: "Matt" },
        { name: "Colt" }
      ];
      expect(extractValue(arr, "name")).toEqual(["Elie", "Tim", "Matt", "Colt"]);
    });
  });




function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCase = next.toLowerCase()
        if(vowels.indexOf(lowerCase) !== -1){
            if(acc[lowerCase]){
                acc[lowerCase]++;
            } else {
                acc[lowerCase] = 1;
            }
        }
        return acc;
    }, {});
}

  
describe("#vowelCount", function() {
    it("returns an object with the keys as vowels and the values as the count", function() {
      expect(vowelCount("elie")).toEqual({ e: 2, i: 1 });
      expect(vowelCount("tim")).toEqual({ i: 1 });
      expect(vowelCount("matt")).toEqual({ a: 1 });
      expect(vowelCount("hmmm")).toEqual({});
      expect(vowelCount("i am awesome and so are you")).toEqual({
        i: 1,
        a: 4,
        e: 3,
        o: 3,
        u: 1
      });
    });
  });
  
  
  
    function addKeyAndValue(arr, key, value){
        return arr.reduce(function(acc,next,index){
            acc[index][key] = value;
            return acc;
        }, arr);
    }
  
    describe("#addKeyAndValue", function() {
        var arr = [
          { name: "Elie" },
          { name: "Tim" },
          { name: "Matt" },
          { name: "Colt" }
        ];
        var updated = [
          { title: "Instructor", name: "Elie" },
          { title: "Instructor", name: "Tim" },
          { title: "Instructor", name: "Matt" },
          { title: "Instructor", name: "Colt" }
        ];
        it("adds a key and value to each object in an array of objects", function() {
          expect(addKeyAndValue(arr, "title", "Instructor")).toEqual(updated);
        });
      });
  
      
    function partition(arr, cback){
        return arr.reduce(function(acc,next){
            if(cback(next)){
                acc[0].push(next);
            } else {
                acc[1].push(next);
            }
            return acc;
        }, [[],[]]);
    }




   
    
      
      
      describe("#partition", function() {
        function isEven(val) {
          return val % 2 === 0;
        }
        function isLongerThanThreeCharacters(val) {
          return val.length > 3;
        }
        var arr = [1, 2, 3, 4, 5, 6, 7, 8];
        var names = ["Elie", "Colt", "Tim", "Matt"];
        it("returns an array of arrays with the first subarray as values returning true from the callback", function() {
          expect(partition(arr, isEven)).toEqual([[2, 4, 6, 8], [1, 3, 5, 7]]);
          expect(partition(names, isLongerThanThreeCharacters)).toEqual([
            ["Elie", "Colt", "Matt"],
            ["Tim"]
          ]);
        });
      });
