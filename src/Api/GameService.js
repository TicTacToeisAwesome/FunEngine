import axios from 'axios';
import API_HOST from './config.js'

const saveGame = `${API_HOST}/game`
const getGameHistory = `${API_HOST}/games`

class GameService {
    getGameWinners() {
        let winners = []
        return axios.get(getGameHistory)
        .then(res => res.data)
        .then(arr => arr.forEach(element => {
            winners.push(element.winner)
        }))
        .then(() => winners)
        .catch(error => console.log(error))
    }

    async newGame(winner) {
        const gameHistory = await this.getGameWinners()
        return axios({
            method: "post",
            url: saveGame,
            data: {
                winner: winner,
                gameHistory: gameHistory || [""]        
            }
        })
    }
}
const gameService = new GameService();
export default gameService;
