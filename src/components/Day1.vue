<template>
  <div class="container">
    <div class="row">
      <div>
        <span>December 1</span>
        <br />
        <span>Puzzle #1 Answer:{{ puzzle1Answer }}</span>
        <br />
        <span>Puzzle #2 Answer:{{ puzzle2Answer }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import caloriesFile from "../assets/puzzle-input/calories.txt";
export default {
  name: "Day1",
  components: {},
  data() {
    return {
      puzzle1Answer: null,
      puzzle2Answer: null,
    };
  },
  methods: {
    loadFile() {
      this.calorieFile = caloriesFile;
    },
    parseFile() {
      this.parsedFile = this.calorieFile.split(/\n/);
      this.groupedFile = [];
      var elfCaloriesTotal = 0;

      for (let index = 0; index < this.parsedFile.length; index++) {
        const calorieReading = this.parsedFile[index];
        if (calorieReading.length > 0) {
          elfCaloriesTotal += parseInt(calorieReading);
        } else {
          this.groupedFile.push(elfCaloriesTotal);
          elfCaloriesTotal = 0;
        }
      }

      var sortedFileAsc = this.groupedFile.sort(function (a, b) {
        return b - a;
      });

      this.puzzle1Answer = sortedFileAsc[0];
      this.puzzle2Answer = sortedFileAsc.slice(0, 3).reduce((a, b) => a + b, 0);
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
      