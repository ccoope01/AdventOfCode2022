<template>
  <div class="container">
    <div class="row">
      <div>
        <span>December 2</span>
        <br />
        <span>Puzzle #1 Answer:{{ puzzle1Answer }}</span>
        <br />
        <span>Puzzle #2 Answer:{{ puzzle2Answer }}</span>
      </div>
    </div>
  </div>
</template>
  <script>
import rpsFile from "../assets/puzzle-input/rockpaperscissors.txt";
export default {
  name: "Day2",
  components: {},
  data() {
    return {
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
      this.totalScore = 0;
      this.totalScore2 = 0;

      for (let index = 0; index < this.parsedFile.length; index++) {
        var player1 = this.parsedFile[index].charAt(0);
        var player2 = this.parsedFile[index].charAt(2);
        var score = 0;
        var score2 = 0;

        switch (player1) {
          case "A":
            //Player 1 Rock 1
            switch (player2) {
              case "Y":
                score = 8;
                score2 = 4;
                break;
              case "X":
                score = 4;
                score2 = 3;
                break;
              case "Z":
                score = 3;
                score2 = 8;
                break;
            }
            break;
          case "B":
            //Player 1 Paper 2
            switch (player2) {
              case "Y":
                score = 5;
                score2 = 5;
                break;
              case "X":
                score = 1;
                score2 = 1;
                break;
              case "Z":
                score = 9;
                score2 = 9;
                break;
            }
            break;
          case "C":
            //Player 1 Scissors 3
            switch (player2) {
              case "Y":
                score = 2;
                score2 = 6;
                break;
              case "X":
                score = 7;
                score2 = 2;
                break;
              case "Z":
                score = 6;
                score2 = 7;
                break;
            }
            break;
        }

        this.totalScore += score;
        this.totalScore2 += score2;
      }

      this.puzzle1Answer = this.totalScore;
      this.puzzle2Answer = this.totalScore2;
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
        