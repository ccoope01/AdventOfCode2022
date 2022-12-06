<template>
  <div class="container">
    <div class="row">
      <div>
        <span>December 4</span>
        <br />
        <span>Puzzle #1 Answer:{{ puzzle1Answer }}</span>
        <br />
        <span>Puzzle #2 Answer:{{ puzzle2Answer }}</span>
      </div>
    </div>
  </div>
</template>
      <script>
import cleaningFile from "../assets/puzzle-input/cleaningassignments.txt";
export default {
  name: "Day4",
  components: {},
  data() {
    return {
      puzzle1Answer: null,
      puzzle2Answer: null,
    };
  },
  methods: {
    loadFile() {
      this.cleaningFile = cleaningFile;
    },
    parseFile() {
      this.parsedFile = this.cleaningFile.split(/\n/);
      this.elf1 = [];
      this.elf2 = [];
      this.overlaps = 0;
      this.anyOverlap = 0;

      for (let index = 0; index < this.parsedFile.length; index++) {
        var elfTasks = this.parsedFile[index].split(/,/);

        var elf1Range = elfTasks[0].split(/-/).map((el) => {
          return Number(el);
        });
        var elf2Range = elfTasks[1].split(/-/).map((el) => {
          return Number(el);
        });

        var oneInTwo =
          elf1Range[0] >= elf2Range[0] && elf1Range[1] <= elf2Range[1];
        var twoInOne =
          elf2Range[0] >= elf1Range[0] && elf2Range[1] <= elf1Range[1];

        if (oneInTwo || twoInOne) {
          this.overlaps++;
        }

        var anyOverlap =
          (elf1Range[1] >= elf2Range[0] && elf1Range[1] <= elf2Range[1]) ||
          (elf1Range[0] <= elf2Range[1] && elf1Range[1] >= elf2Range[1]);

        if (anyOverlap) {
          this.anyOverlap++;
        }
      }

      this.puzzle1Answer = this.overlaps;
      this.puzzle2Answer = this.anyOverlap;
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
            
