import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useChromeStorage } from "./hooks/useChromeHook";

const App = () => {
  const [apiKey, setApikey] = useState("");
  const { setApiKey } = useChromeStorage();
  return (
    <div className="bg-gray-900 w-[350px] h-[250px] flex items-center justify-center  shadow-lg">
      <div className="bg-gray-800 w-[340px] h-[240px] rounded-lg p-6">
        <h1 className="text-2xl text-center text-white font-semibold mb-4">
          JOB GPT
        </h1>
        <h3 className="text-center text-gray-400 mb-6">
          Your personal job assistant
        </h3>
        <div className="flex gap-2">
          <Input
            placeholder="Enter Open API key"
            type="text"
            className="flex-grow text-sm px-4 py-2 rounded-md bg-gray-700 text-gray-200 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setApikey(e.target.value)}
            value={apiKey}
          />
          <Button
            className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all"
            onClick={async () => {
              if (!apiKey) return;
              setApiKey(apiKey);

              setApikey("");
            }}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
