import React from "react";
import "./ToggleButton.css";

export default function ToggleButton({ tab, setTab }) {
  return (
    <div className="workTabs" role="tablist" aria-label="Project type">
      <button
        type="button"
        role="tab"
        id="work-tab-development"
        aria-selected={tab === 1}
        aria-controls="work-panel-development"
        className={tab === 1 ? "workTab isActive" : "workTab"}
        onClick={() => setTab(1)}
      >
        Development
      </button>
      <button
        type="button"
        role="tab"
        id="work-tab-design"
        aria-selected={tab === 2}
        aria-controls="work-panel-design"
        className={tab === 2 ? "workTab isActive" : "workTab"}
        onClick={() => setTab(2)}
      >
        Design
      </button>
    </div>
  );
}
