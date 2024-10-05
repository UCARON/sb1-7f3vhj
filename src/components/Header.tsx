import React from 'react'
import { Trophy } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Trophy className="mr-2" size={24} />
          <span className="text-xl font-bold">ゲームランキング</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-blue-200">ホーム</a></li>
            <li><a href="#" className="hover:text-blue-200">ゲーム一覧</a></li>
            <li><a href="#" className="hover:text-blue-200">ランキング</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header