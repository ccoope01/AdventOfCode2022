<template>
  <div class="container">
    <div class="row">
      <div>
        <span>December 3</span>
        <br />
        <span>Puzzle #1 Answer:{{ puzzle1Answer }}</span>
        <br />
        <span>Puzzle #2 Answer:{{ puzzle2Answer }}</span>
      </div>
    </div>
  </div>
</template>
    <script>
import rpsFile from "../assets/puzzle-input/rucksacks.txt";
export default {
  name: "Day2",
  components: {},
  data() {
    return {
      priority: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      puzzle1Answer: null,
      puzzle2Answer: null,
    };
  },
  methods: {
    loadFile() {
      this.rpsFile = rpsFile;
    },
    parseFile() {
      this.parsedFile = this.rpsFile.split(/\n/);
      this.commonItems = [];
      this.common2Items = [];

      for (let index = 0; index < this.parsedFile.length; index++) {
        var ruckSackLength = this.parsedFile[index].length;
        var compartment1 = this.parsedFile[index].slice(0, ruckSackLength / 2);
        var compartment2 = this.parsedFile[index].slice(ruckSackLength / 2);

        for (let cindex = 0; cindex < compartment1.length; cindex++) {
          var commonMatch = compartment2.indexOf(compartment1[cindex]);
          if (commonMatch >= 0) {
            this.commonItems.push(
              this.priority.indexOf(compartment1[cindex]) + 1
            );
            break;
          }
        }
      }
      const arrSum = this.commonItems.reduce((a, b) => a + b, 0);

      for (let index = 0; index < this.parsedFile.length; index++) {
        var sack1 = this.parsedFile[index];

        for (let cindex = 0; cindex < sack1.length; cindex++) {
          var match2 = this.parsedFile[index + 1].indexOf(sack1[cindex]);
          var match3 = this.parsedFile[index + 2].indexOf(sack1[cindex]);
          if (match2 >= 0 && match3 >= 0) {
            this.common2Items.push(this.priority.indexOf(sack1[cindex]) + 1);
            break;
          }
        }

        index = index + 2;
      }

      const arr2Sum = this.common2Items.reduce((a, b) => a + b, 0);

      this.puzzle1Answer = arrSum;
      this.puzzle2Answer = arr2Sum;
    },
  },
  mounted() {
    this.loadFile();
    this.parseFile();
  },
};
</script>
        <style>
.container {
  font-family: "Bookmania";
  font-size: 4em;
  color: red;
}
</style>  
          