import React from 'react'
import { Trophy, Medal, Award } from 'lucide-react'
import { Player } from '../App'

interface RankingListProps {
  players: Player[]
}

const RankingList: React.FC<RankingListProps> = ({ players }) => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="text-yellow-400" size={24} />
      case 2:
        return <Medal className="text-gray-400" size={24} />
      case 3:
        return <Award className="text-orange-400" size={24} />
      default:
        return null
    }
  }

  return (
    <ul className="space-y-4">
      {players.map((player) => (
        <li
          key={player.id}
          className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between transition-transform hover:scale-105"
        >
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-4 w-8 text-center">
              {getRankIcon(player.rank) || player.rank}
            </span>
            <span className="text-xl">{player.name}</span>
          </div>
          <span className="text-xl font-semibold">{player.score.toLocaleString()} pts</span>
        </li>
      ))}
    </ul>
  )
}

export default RankingList