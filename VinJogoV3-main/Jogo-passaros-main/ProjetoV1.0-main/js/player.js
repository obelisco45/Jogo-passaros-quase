class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      console.log("dentro de getCount")
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      console.log("dentro de inicio updateCount")
      database.ref('/').update({
        'playerCount': count
      });
      console.log("dentro de updateCount")
    }
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
    getBirdsAtEnd() {
      database.ref('birdsAtEnd').on("value",(data)=>{
        this.rank = data.val();
      })
    }
    static updateBirdsAtEnd(rank) {
      database.ref('/').update({
        birdsAtEnd:rank
      })
    }
  }