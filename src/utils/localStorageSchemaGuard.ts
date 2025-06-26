const CURRENT_SCHEMA_VERSION = "v2";
const STORAGE_KEY = "schema-version";

const storedVersion = localStorage.getItem(STORAGE_KEY);
if (storedVersion !== CURRENT_SCHEMA_VERSION) {
  console.warn(
    `Detected local storage schema change (was ${storedVersion}, now ${CURRENT_SCHEMA_VERSION}). Clearing local storage.`
  );
  localStorage.clear();
  localStorage.setItem(STORAGE_KEY, CURRENT_SCHEMA_VERSION);
}
