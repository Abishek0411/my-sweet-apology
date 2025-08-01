import React, { useCallback, useEffect, useRef, useState } from "react";

const useSmartDodge = (
  isUnlocked: boolean,
  setPosition: (pos: { x: number; y: number }) => void
) => {
  const prevMouse = useRef({ x: 0, y: 0 });

  const dodgeIfNeeded = useCallback(
    (e: MouseEvent) => {
      if (isUnlocked) return;
      const button = document.getElementById("surprise-button");
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const prev = prevMouse.current;
      const movementX = e.clientX - prev.x;
      const movementY = e.clientY - prev.y;

      // Only dodge if mouse is moving toward the button
      const dotProduct = dx * movementX + dy * movementY;
      const approaching = dotProduct < 0;

      // Trigger dodge if close and approaching
      if (approaching && distance < 120) {
        // Move button away from cursor vector
        const norm = Math.sqrt(movementX ** 2 + movementY ** 2) || 1;
        const vx = (movementX / norm) * 30; // escape vector
        const vy = (movementY / norm) * 30;

        // Current button center in %
        const currX = (centerX / window.innerWidth) * 100;
        const currY = (centerY / window.innerHeight) * 100;

        const newX = Math.min(Math.max(currX + vx, 10), 90);
        const newY = Math.min(Math.max(currY + vy, 10), 90);

        setPosition({ x: newX, y: newY });

        // Optional: shake effect
        document.body.classList.add("shake");
        setTimeout(() => document.body.classList.remove("shake"), 200);
      }

      // Update previous mouse position
      prevMouse.current = { x: e.clientX, y: e.clientY };
    },
    [isUnlocked, setPosition]
  );

  useEffect(() => {
    window.addEventListener("mousemove", dodgeIfNeeded);
    return () => {
      window.removeEventListener("mousemove", dodgeIfNeeded);
    };
  }, [dodgeIfNeeded]);
};
