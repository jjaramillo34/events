// components/Map.js
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamphcmFtaWxsbzM0IiwiYSI6ImZiNjc3OWVmMDE3MTc1YjMxMzM1NzYyY2RlYmM3NjgzIn0.qaxSS4Q_tNwUlXHNZPq2zQ";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = -70.9;
  const lat = 42.35;
  const zoom = 9;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "400px" }}
      />
    </div>
  );
};

export default Map;
