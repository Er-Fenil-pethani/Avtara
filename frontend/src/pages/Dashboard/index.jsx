import {
  useEffect,
  useState,
} from "react";

import {
  getAnalytics,
} from "../../services/analytics.service";

import StatCard
  from "../../components/StatCard/StatCard";

function Dashboard() {
  const [stats,
    setStats] =
    useState(null);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats =
    async () => {
      try {
        const response =
          await getAnalytics();

        setStats(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  if (!stats)
    return <h2>Loading...</h2>;

  return (
    <div
      style={{
        padding:
          "30px",
      }}
    >
      <h1>
        Dashboard
      </h1>

      <div
        style={{
          display:
            "grid",
          gridTemplateColumns:
            "repeat(4,1fr)",
          gap:
            "20px",
        }}
      >
        <StatCard
          title="Products"
          value={
            stats.products
          }
        />

        <StatCard
          title="Orders"
          value={
            stats.orders
          }
        />

        <StatCard
          title="Inventory"
          value={
            stats.inventory
          }
        />

        <StatCard
          title="Reels"
          value={
            stats.reels
          }
        />
      </div>
    </div>
  );
}

export default Dashboard;