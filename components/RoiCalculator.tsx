"use client";

import { useState } from "react";
import { CalculatorIcon, CheckIcon, WalletIcon } from "./Icons";

export function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(20);
  const [dailySalary, setDailySalary] = useState(800);
  const [leakagePercent, setLeakagePercent] = useState(6);

  const monthlyPayroll = teamSize * dailySalary * 26;
  const monthlySavings = Math.round(monthlyPayroll * (leakagePercent / 100));
  const yearlySavings = monthlySavings * 12;
  const hoursSaved = Math.round(teamSize * 0.8 + 8);
  const hardwareSaved = teamSize > 30 ? 35000 : 15000;

  return (
    <div className="roi-calculator-card">
      <div className="calc-head">
        <span className="calc-badge">
          <CalculatorIcon className="icon-xs" /> Savings Estimator
        </span>
        <h2>Calculate how much presence saves your business</h2>
        <p className="lede">
          Manual registers, proxy clock-ins, and inaccurate overtime math cost small businesses 5–10% of their total payroll every single month.
        </p>
      </div>

      <div className="calc-grid">
        <div className="calc-inputs">
          <div className="input-group">
            <div className="input-label-row">
              <label htmlFor="team-size">Number of Employees</label>
              <span className="input-val">{teamSize} staff</span>
            </div>
            <input
              id="team-size"
              type="range"
              min={5}
              max={100}
              step={1}
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>5 employees</span>
              <span>100 employees</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-label-row">
              <label htmlFor="daily-salary">Average Daily Salary (₹)</label>
              <span className="input-val">₹{dailySalary.toLocaleString("en-IN")} / day</span>
            </div>
            <input
              id="daily-salary"
              type="range"
              min={300}
              max={2500}
              step={50}
              value={dailySalary}
              onChange={(e) => setDailySalary(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>₹300</span>
              <span>₹2,500</span>
            </div>
          </div>

          <div className="input-group">
            <div className="input-label-row">
              <label htmlFor="leakage-percent">Est. Time Theft &amp; Register Error</label>
              <span className="input-val">{leakagePercent}% of payroll</span>
            </div>
            <input
              id="leakage-percent"
              type="range"
              min={3}
              max={15}
              step={1}
              value={leakagePercent}
              onChange={(e) => setLeakagePercent(Number(e.target.value))}
              className="range-slider"
            />
            <div className="range-labels">
              <span>3% (Strict)</span>
              <span>15% (Frequent Buddy Punching)</span>
            </div>
          </div>
        </div>

        <div className="calc-results">
          <div className="result-card primary-result">
            <p className="res-kicker">Estimated Monthly Savings</p>
            <p className="res-amount">₹{monthlySavings.toLocaleString("en-IN")}</p>
            <p className="res-sub">Or <strong>₹{yearlySavings.toLocaleString("en-IN")}</strong> saved per year</p>
          </div>

          <div className="secondary-results-grid">
            <div className="res-box">
              <span className="res-icon icon-indigo">
                <WalletIcon className="icon-sm" />
              </span>
              <div>
                <strong>₹{hardwareSaved.toLocaleString("en-IN")} saved</strong>
                <small>Zero biometric hardware or card readers required</small>
              </div>
            </div>

            <div className="res-box">
              <span className="res-icon icon-emerald">
                <CheckIcon className="icon-sm" />
              </span>
              <div>
                <strong>~{hoursSaved} hours saved / mo</strong>
                <small>One-click owner locked payroll processing</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
