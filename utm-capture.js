/**
 * UTM Parameter Capture and Storage
 * Captures UTM parameters from URL and stores them for form submissions
 */

(function() {
  'use strict';

  // UTM parameters to track
  const UTM_PARAMS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid', // Google Click ID
    'fbclid', // Facebook Click ID
    'msclkid' // Microsoft Click ID
  ];

  // Storage key
  const STORAGE_KEY = 'harp_lessons_utm_data';
  const STORAGE_EXPIRY_DAYS = 30;

  /**
   * Get URL parameter by name
   */
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

  /**
   * Get stored UTM data
   */
  function getStoredUtmData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;

      const data = JSON.parse(stored);
      const now = new Date().getTime();

      // Check if data has expired
      if (data.expiry && now > data.expiry) {
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }

      return data.utm;
    } catch (e) {
      console.error('Error reading UTM data:', e);
      return null;
    }
  }

  /**
   * Store UTM data
   */
  function storeUtmData(utmData) {
    try {
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + STORAGE_EXPIRY_DAYS);

      const data = {
        utm: utmData,
        expiry: expiry.getTime(),
        captured: new Date().toISOString()
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error storing UTM data:', e);
    }
  }

  /**
   * Capture UTM parameters from URL
   */
  function captureUtmParameters() {
    const utmData = {};
    let hasNewData = false;

    // Check URL for UTM parameters
    UTM_PARAMS.forEach(function(param) {
      const value = getUrlParameter(param);
      if (value) {
        utmData[param] = value;
        hasNewData = true;
      }
    });

    // If we found new UTM data, store it
    if (hasNewData) {
      // Merge with existing data (new data takes precedence)
      const existingData = getStoredUtmData() || {};
      const mergedData = Object.assign({}, existingData, utmData);
      storeUtmData(mergedData);
      return mergedData;
    }

    // Otherwise return stored data
    return getStoredUtmData() || {};
  }

  /**
   * Add hidden fields to form
   */
  function addUtmFieldsToForm(form) {
    const utmData = getStoredUtmData() || {};

    // Remove any existing UTM hidden fields
    const existingFields = form.querySelectorAll('input[data-utm-field="true"]');
    existingFields.forEach(function(field) {
      field.remove();
    });

    // Add new hidden fields for each UTM parameter
    Object.keys(utmData).forEach(function(key) {
      if (utmData[key]) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = utmData[key];
        input.setAttribute('data-utm-field', 'true');
        form.appendChild(input);
      }
    });
  }

  /**
   * Initialize UTM tracking
   */
  function init() {
    // Capture UTM parameters on page load
    const utmData = captureUtmParameters();

    // Log captured data (remove in production if desired)
    if (Object.keys(utmData).length > 0) {
      console.log('UTM Data captured:', utmData);
    }

    // Add UTM fields to all forms on the page
    document.addEventListener('DOMContentLoaded', function() {
      const forms = document.querySelectorAll('form');
      forms.forEach(function(form) {
        // Add fields initially
        addUtmFieldsToForm(form);

        // Re-add fields just before submission to ensure they're fresh
        form.addEventListener('submit', function() {
          addUtmFieldsToForm(form);
        });
      });
    });

    // Make UTM data available globally
    window.getUtmData = getStoredUtmData;
  }

  // Initialize
  init();
})();
