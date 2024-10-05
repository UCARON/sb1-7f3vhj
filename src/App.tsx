import React, { useState, useEffect } from 'react'
import { Trophy, Medal, Award } from 'lucide-react'
import RankingList from './components/RankingList'
import Header from './components/Header'

export interface Player {
  id: number
  name: string
  score: number
  rank: number
}

const initialPlayers: Player[] = [
  { id: 1, name: "田中太郎", score: 10000, rank: 1 },
  { id: 2, name: "佐藤花子", score: 9500, rank: 2 },
  { id: 3, name: "鈴木一郎", score: 9000, rank: 3 },
  { id: 4, name: "高橋美咲", score: 8500, rank: 4 },
  { id: 5, name: "伊藤健太", score: 8000, rank: 5 },
]

function App() {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    // LocalStorageからデータを読み込む
    const storedPlayers = localStorage.getItem('players')
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers))
    } else {
      // 初期データがない場合は、initialPlayersを使用
      setPlayers(initialPlayers)
      localStorage.setItem('players', JSON.stringify(initialPlayers))
    }
  }, [])

  // プレイヤーデータが更新されたときにLocalStorageに保存
  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  const addPlayer = () => {
    const newPlayer: Player = {
      id: players.length + 1,
      name: `Player ${players.length + 1}`,
      score: Math.floor(Math.random() * 10000),
      rank: players.length + 1
    }
    const updatedPlayers = [...players, newPlayer].sort((a, b) => b.score - a.score)
    const rankedPlayers = updatedPlayers.map((player, index) => ({
      ...player,
      rank: index + 1
    }))
    setPlayers(rankedPlayers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">ゲームランキング</h1>
        <RankingList players={players} />
        <button
          onClick={addPlayer}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          新しいプレイヤーを追加
        </button>
      </main>
    </div>
  )
}

export default App