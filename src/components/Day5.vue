<template>
  <div class="container">
    <div class="row">
      <div>
        <span>December 5</span>
        <br />
        <span>Puzzle #1 Answer:{{ puzzle1Answer }}</span>
        <br />
        <span>Puzzle #2 Answer:{{ puzzle2Answer }}</span>
      </div>
    </div>
  </div>
</template>
        <script>
import inputFile from "../assets/puzzle-input/cargocrates.txt";
export default {
  name: "Day4",
  components: {},
  data() {
    return {
      puzzle1Answer: null,
      puzzle2Answer: null,
      matrix: [
        ["N", "W", "F", "R", "Z", "S", "M", "D"],
        [null, null, null, "S", "G", "Q", "P", "W"],
        ["C", "J", "N", "F", "Q", "V", "R", "W"],
        [null, "L", "D", "G", "C", "P", "Z", "F"],
        [null, null, null, null, null, "S", "P", "T"],
        [null, null, "L", "R", "W", "F", "D", "H"],
        [null, null, null, null, "C", "D", "N", "Z"],
        ["Q", "J", "S", "V", "F", "R", "N", "W"],
        [null, "V", "W", "Z", "G", "S", "M", "R"],
      ],
      matrixTopDown: [
        ["N", "W", "F", "R", "Z", "S", "M", "D"],
        ["S", "G", "Q", "P", "W", null, null, null],
        ["C", "J", "N", "F", "Q", "V", "R", "W"],
        ["L", "D", "G", "C", "P", "Z", "F", null],
        ["S", "P", "T", null, null, null, null, null],
        ["L", "R", "W", "F", "D", "H", null, null],
        ["C", "D", "N", "Z", null, null, null, null],
        ["Q", "J", "S", "V", "F", "R", "N", "W"],
        ["V", "W", "Z", "G", "S", "M", "R", null],
      ],
      arrangedMatrix: [[], [], [], [], [], [], [], [], []],
    };
  },
  methods: {
    loadFile() {
      this.inputFile = inputFile;
    },
    parseFile() {
      this.parsedFile = this.inputFile.split(/\n/);

      let puzzle1Matrix = JSON.parse(JSON.stringify(this.matrixTopDown));
      console.log(puzzle1Matrix);

      for (let index = 0; index < this.parsedFile.length; index++) {
        let directions = this.parsedFile[index].split(/ /);
        let itemsToMove = puzzle1Matrix[parseInt(directions[3]) - 1].splice(
          0,
          parseInt(directions[1])
        );

        let reverseItems = itemsToMove.reverse();
        puzzle1Matrix[parseInt(directions[5]) - 1].unshift(...reverseItems);
      }

      let puzzle2Matrix = JSON.parse(JSON.stringify(this.matrixTopDown));
      console.log(puzzle2Matrix);

      for (let index = 0; index < this.parsedFile.length; index++) {
        let directions = this.parsedFile[index].split(/ /);
        let itemsToMove = puzzle2Matrix[parseInt(directions[3]) - 1].splice(
          0,
          parseInt(directions[1])
        );

        puzzle2Matrix[parseInt(directions[5]) - 1].unshift(...itemsToMove);
      }

      this.puzzle1Answer =
        puzzle1Matrix[0][0] +
        puzzle1Matrix[1][0] +
        puzzle1Matrix[2][0] +
        puzzle1Matrix[3][0] +
        puzzle1Matrix[4][0] +
        puzzle1Matrix[5][0] +
        puzzle1Matrix[6][0] +
        puzzle1Matrix[7][0] +
        puzzle1Matrix[8][0];

      this.puzzle2Answer =
        puzzle2Matrix[0][0] +
        puzzle2Matrix[1][0] +
        puzzle2Matrix[2][0] +
        puzzle2Matrix[3][0] +
        puzzle2Matrix[4][0] +
        puzzle2Matrix[5][0] +
        puzzle2Matrix[6][0] +
        puzzle2Matrix[7][0] +
        puzzle2Matrix[8][0];
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
              
  