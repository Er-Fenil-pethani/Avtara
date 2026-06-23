import {
  useState,
} from "react";

import {
  generateOutfit,
} from "../../services/ai.service";

import OutfitCard
  from "../../components/OutfitCard/OutfitCard";

function AIStylist() {
  const [occasion,
    setOccasion] =
    useState("");

  const [budget,
    setBudget] =
    useState("");

  const [outfit,
    setOutfit] =
    useState([]);

  const [loading,
    setLoading] =
    useState(false);

  const handleGenerate =
    async () => {
      try {
        setLoading(true);

        const response =
          await generateOutfit({
            occasion,
            budget,
          });

        setOutfit(
          response.data
            .outfit || []
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div>
      <h1>
        AI Stylist
      </h1>

      <input
        placeholder="Occasion"
        value={occasion}
        onChange={(e) =>
          setOccasion(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        placeholder="Budget"
        value={budget}
        onChange={(e) =>
          setBudget(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={
          handleGenerate
        }
      >
        Generate Outfit
      </button>

      {loading && (
        <h3>
          Generating...
        </h3>
      )}

      {!!outfit.length && (
        <OutfitCard
          products={
            outfit
          }
        />
      )}
    </div>
  );
}

export default AIStylist;