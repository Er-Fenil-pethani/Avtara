import { useState } from "react";

function AIStylistPage() {
  const [prompt, setPrompt] =
    useState("");

  const [result, setResult] =
    useState("");

  const generateSuggestion =
    () => {
      setResult(
        `Recommended outfit for "${prompt}":
         
Oversized black tee
Cargo pants
White sneakers`
      );
    };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>AI Stylist</h1>

      <input
        value={prompt}
        onChange={(e) =>
          setPrompt(
            e.target.value
          )
        }
        placeholder="College outfit"
      />

      <button
        onClick={
          generateSuggestion
        }
      >
        Generate
      </button>

      <pre>
        {result}
      </pre>
    </div>
  );
}

export default AIStylistPage;