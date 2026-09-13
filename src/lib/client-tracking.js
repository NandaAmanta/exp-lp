/**
 * Client-Side Tracking Utilities for Meta Ads & GTM Integration
 */

/**
 * Read cookie value by name from document.cookie
 * @param {string} name
 * @returns {string|null}
 */
export function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
  return match ? decodeURIComponent(match[3]) : null;
}

/**
 * Extracts Meta cookies (_fbp, _fbc) and fallback fbclid parameter
 * @returns {{ fbp: string|null, fbc: string|null, fbclid: string|null }}
 */
export function getMetaTrackingData() {
  if (typeof window === "undefined") {
    return { fbp: null, fbc: null, fbclid: null };
  }

  const fbp = getCookie("_fbp");
  let fbc = getCookie("_fbc");

  // Check URL query parameters for fbclid
  let fbclid = null;
  try {
    const urlParams = new URLSearchParams(window.location.search);
    fbclid = urlParams.get("fbclid");
  } catch (err) {
    // Non-blocking
  }

  // If _fbc cookie isn't set yet but user landed with fbclid from an ad, format standard fbc
  if (!fbc && fbclid) {
    const creationTime = Date.now();
    fbc = `fb.1.${creationTime}.${fbclid}`;
  }

  return { fbp, fbc, fbclid };
}

/**
 * Retrieves the event_id populated by GTM in the hidden input,
 * or falls back to a generated unique ID if GTM was blocked by an ad-blocker.
 * @returns {string} Unique event ID for Meta deduplication
 */
export function getOrResolveEventId() {
  if (typeof document === "undefined") {
    return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  const eventIdInput =
    document.getElementById("event_id") ||
    document.querySelector('input[name="event_id"]');

  let eventId = eventIdInput?.value?.trim();

  // Also check if GTM placed it in window object
  if (!eventId && (window.event_id || window.eventID)) {
    eventId = String(window.event_id || window.eventID).trim();
  }

  // Fallback: If GTM was blocked or hasn't filled the input, generate a safe unique ID
  if (!eventId) {
    eventId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  // Ensure DOM element reflects the final eventId
  if (eventIdInput && !eventIdInput.value) {
    eventIdInput.value = eventId;
  }

  return eventId;
}
