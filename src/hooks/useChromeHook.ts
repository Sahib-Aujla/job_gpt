export const useChromeStorage = () => {
    return {
        setApiKey: async (apiKey: string) => {
            chrome.storage.local.set({ openAiApiKey: apiKey })
        },
        getApiKey: async () => {
            const key = await chrome.storage.local.get("openAiApiKey");
            return key.openAiApiKey;
        }
    }
}