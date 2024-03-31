import React, { useContext, useEffect, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import { PickupContext } from "../../context/PickupContext";
import { DestinationContext } from "../../context/DestinationContext";
function Map() {
  const containerStyle = {
    width: "100%",
    height: window.innerWidth * 0.45,
  };

  const { Pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523,
  });
  const [map, setMap] = React.useState(null);
  const [directionRoutePoints, setDirectionRoutePoints] = useState([]);
  useEffect(() => {
    if (Pickup?.length != [] && map) {
      map.panTo({
        lat: Pickup.lat,
        lng: Pickup.lng,
      });
      setCenter({
        lat: Pickup.lat,
        lng: Pickup.lng,
      });
    }
    if (Pickup.length != [] && destination.length != []) {
      console.log("DIE");
      directionRoute();
    }
  }, [Pickup]);

  /**
   * Used when Destination Value Available
   */
  useEffect(() => {
    if (destination?.length != [] && map) {
      setCenter({
        lat: destination.lat,
        lng: destination.lng,
      });
    }
    if (Pickup.length != [] && destination.length != []) {
      console.log("DIE");
      directionRoute();
    }
  }, [destination]);
  /**
   * Used to Get Direction Router Points
   */
  const directionRoute = () => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: { lat: Pickup.lat, lng: Pickup.lng },
        destination: { lat: destination.lat, lng: destination.lng },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          setDirectionRoutePoints(result);
        } else {
          console.error("Error");
        }
      }
    );
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={(map) => setMap(map)}
      options={{ mapId: "40171e4d48413639" }}
    >
      {Pickup.length != [] ? (
        <MarkerF position={{ lat: Pickup.lat, lng: Pickup.lng }}>
          <OverlayViewF
            position={{ lat: Pickup.lat, lng: Pickup.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-green-100 font-bold inline-block">
              <p className="text-green-700 bg-green-100 text-[18px]">
                {Pickup.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      ) : null}

      {destination.length != [] ? (
        <MarkerF position={{ lat: destination.lat, lng: destination.lng }}>
          <OverlayViewF
            position={{ lat: destination.lat, lng: destination.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="p-2 bg-green-100 font-bold inline-block">
              <p className="text-green-700 bg-green-100 text-[18px]">
                {destination.label}
              </p>
            </div>
          </OverlayViewF>
        </MarkerF>
      ) : null}

      <DirectionsRenderer
        directions={directionRoutePoints}
        options={{
          polylineOptions: {
            strokeColor: "#1d4d0f",
            strokeWeight: 5,
          },
          suppressMarkers: true,
        }}
      />
    </GoogleMap>
  );
}

export default Map;
