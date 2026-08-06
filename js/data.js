// Deployment site data — single source of truth for the map markers,
// coverage circles, layer groups, and the site cards below the map.
// Coordinates are city/institution-level only (no address-level or
// resident-identifying data).
const sensorTypes = {
  radar: {
    label: "mmWave Radar",
    color: "#7c3aed",
    icon: "bi-broadcast",
    description:
      "Non-contact millimeter-wave radar that tracks movement and breathing patterns without a camera.",
  },
  pir: {
    label: "PIR + Environment Sensor",
    color: "#f97316",
    icon: "bi-thermometer-half",
    description:
      "Passive infrared presence detection combined with temperature and humidity logging.",
  },
  door: {
    label: "Door Sensor",
    color: "#0ea5e9",
    icon: "bi-door-open",
    description:
      "Open/close contact sensor used to track entry, exit, and night bed-leaving events.",
  },
};

const sites = [
  {
    id: "nitech",
    name: "NITech / Otsuka Laboratory",
    city: "Nagoya, Aichi",
    lat: 35.1571,
    lng: 136.9265,
    sensorType: "radar",
    coverageRadiusMeters: 400,
    description:
      "Home base of the research project, where the mmWave radar watch-over system is designed, built, and tested.",
  },
  {
    id: "shinshiro",
    name: "Shinshiro City Pilot Site",
    city: "Shinshiro, Aichi",
    lat: 34.8989,
    lng: 137.4977,
    sensorType: "radar",
    coverageRadiusMeters: 600,
    description:
      "A real-world pilot deployment for elderly watch-over, monitoring movement and sleep-rhythm changes without cameras.",
  },
  {
    id: "higashiosaka",
    name: "Higashiosaka Community Hall",
    city: "Higashiosaka, Osaka",
    lat: 34.6794,
    lng: 135.601,
    sensorType: "pir",
    coverageRadiusMeters: 500,
    description:
      "A community hall deployment combining presence and environment sensors to support elderly residents nearby.",
  },
];
