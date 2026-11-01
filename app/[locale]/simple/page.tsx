export default function SimpleTest() {
  return (
    <div className="min-h-screen bg-red-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">CSS简单测试页面</h1>
      
      <div className="mb-8">
        <p className="text-lg mb-2">测试1: 背景颜色</p>
        <div className="p-4 bg-blue-500 rounded-lg">
          这个div应该有蓝色背景 (bg-blue-500)
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-lg mb-2">测试2: 文字样式</p>
        <p className="text-2xl font-bold text-green-300">
          这个文字应该是绿色粗体 (text-green-300, text-2xl, font-bold)
        </p>
      </div>
      
      <div className="mb-8">
        <p className="text-lg mb-2">测试3: 布局和间距</p>
        <div className="flex gap-4">
          <div className="p-4 bg-purple-500 rounded">项目1</div>
          <div className="p-4 bg-yellow-500 rounded">项目2</div>
          <div className="p-4 bg-pink-500 rounded">项目3</div>
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-lg mb-2">测试4: 按钮样式</p>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
          悬停时变深的绿色按钮
        </button>
      </div>
      
      <div>
        <p className="text-lg mb-2">测试5: 网格布局</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-800 rounded">网格1</div>
          <div className="p-4 bg-gray-800 rounded">网格2</div>
          <div className="p-4 bg-gray-800 rounded">网格3</div>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-black/50 rounded">
        <p className="text-sm">
          如果以上所有元素都显示正确的样式，说明Tailwind CSS工作正常。<br/>
          如果都是默认样式，说明Tailwind CSS没有加载。
        </p>
      </div>
    </div>
  );
}