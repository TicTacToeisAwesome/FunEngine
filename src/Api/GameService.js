import axios from 'axios';
import API_HOST from './config.js'

const saveGame = `${API_HOST}/game`
const getGameHistory = `${API_HOST}/games`

class GameService {
    getGames() {
        let winners = []
        axios.get(getGameHistory)
        .then(res => res.data.forEach(response => {
            winners.push(response.winner)
        }))
        .then(() => {return winners})
        .catch(error => console.log(error))
    }

    newGame(winner) {
        return axios({
            method: "post",
            url: saveGame,
            data: {
                winner: winner,
                gameHistory: this.getGames() || [""]        
            }
        })
    }
}
const gameService = new GameService();
export default gameService;
