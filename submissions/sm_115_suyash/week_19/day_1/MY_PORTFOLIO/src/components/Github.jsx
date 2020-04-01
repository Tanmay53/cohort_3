import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="text-center pt-5 pt-5 pb-4">
      <h3 className="text-muted nothingCall pb-3">Github</h3>
      <GitHubCalendar username="suyashmishra-dev" blockSize={16} />
      <img src="git_contribution.jpeg" alt="" width="70%" />
    </div>
  );
}
