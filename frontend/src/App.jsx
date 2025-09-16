import ChatWindow from "./component/ChatWindow";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-4 text-indigo-600">
          AI Chatbot Demo 🤖
        </h1>
        <ChatWindow />
      </div>
    </div>
  );
}

export default App;
