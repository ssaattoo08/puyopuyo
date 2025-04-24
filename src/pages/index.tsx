import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">ぷよぷよ</h1>
      <div className="text-center">
        <p className="mb-4">ゲームを開始するには、下のボタンをクリックしてください。</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          ゲーム開始
        </button>
      </div>
    </div>
  );
};

export default Home; 