// Matches.jsx

import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const Matches = () => {
  const { token } = useAuth();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch matches when component mounts
    const fetchMatches = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/match", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, [token]);

  return (
    <div>
      <h1>Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>{/* Display match details here */}</li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
