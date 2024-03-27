// import React, { useEffect, useState, useContext } from "react";
// import {
//   DirectionsRenderer,
//   GoogleMap,
//   Marker,
//   OverlayView,
//   useJsApiLoader,
// } from "@react-google-maps/api";
// import { PickupContext } from "../../context/PickupContext";
// import { DestinationContext } from "../../context/DestinationContext";

// function Map() {
//   const containerStyle = {
//     width: "100%",
//     height: window.innerHeight * 0.8,
//   };
//   const { Pickup } = useContext(PickupContext);
//   const { destination } = useContext(DestinationContext);

//   const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
//   const [map, setMap] = useState(null);
//   const [directionRoutePoints, setDirectionRoutePoints] = useState(null);

//   useEffect(() => {
//     if (Pickup.length !== 0 && map) {
//       map.panTo({ lat: Pickup.lat, lng: Pickup.lng });
//       setCenter({ lat: Pickup.lat, lng: Pickup.lng });
//     }
//     if (Pickup.length !== 0 && destination.length !== 0) {
//       directionRoute();
//     }
//   }, [Pickup]);

//   useEffect(() => {
//     if (destination.length !== 0 && map) {
//       setCenter({ lat: destination.lat, lng: destination.lng });
//     }
//     if (Pickup.length !== 0 && destination.length !== 0) {
//       directionRoute();
//     }
//   }, [destination]);

//   const directionRoute = () => {
//     const DirectionsService = new window.google.maps.DirectionsService();

//     DirectionsService.route(
//       {
//         origin: { lat: Pickup.lat, lng: Pickup.lng },
//         destination: { lat: destination.lat, lng: destination.lng },
//         travelMode: window.google.maps.TravelMode.DRIVING,
//       },
//       (result, status) => {
//         if (status === window.google.maps.DirectionsStatus.OK) {
//           setDirectionRoutePoints(result);
//         } else {
//           console.log("Directions request failed: ", status);
//         }
//       }
//     );
//   };

//   const onLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);
//     setMap(map);
//   };

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       options={{ mapId: "1d72f2997a87611b" }}
//     >
//       {Pickup.length !== 0 && (
//         <>
//           <Marker
//             position={{ lat: Pickup.lat, lng: Pickup.lng }}
//             icon={{
//               url: "/Pickup.png",
//               scaledSize: {
//                 width: 20,
//                 height: 20,
//               },
//             }}
//           />
//           <OverlayView
//             position={{ lat: Pickup.lat, lng: Pickup.lng }}
//             mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//           >
//             <div className="p-2">
//               <p className="text-black">{Pickup.label}</p>
//             </div>
//           </OverlayView>
//         </>
//       )}

//       {destination.length !== 0 && (
//         <>
//           <Marker
//             position={{ lat: destination.lat, lng: destination.lng }}
//             icon={{
//               url: "/dest.png",
//               scaledSize: {
//                 width: 20,
//                 height: 20,
//               },
//             }}
//           />
//           <OverlayView
//             position={{ lat: destination.lat, lng: destination.lng }}
//             mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//           >
//             <div className="p-2">
//               <p className="text-black">{destination.label}</p>
//             </div>
//           </OverlayView>
//         </>
//       )}

//       {directionRoutePoints && (
//         <DirectionsRenderer
//           directions={directionRoutePoints}
//           options={{
//             polylineOptions: {
//               strokeColor: "",
//               strokeWeight: "2",
//             },
//             suppressMarkers: true,
//           }}
//         />
//       )}
//     </GoogleMap>
//   );
// }
// export default Map;
import React from "react";

const Map = () => {
  return <div>Map</div>;
};

export default Map;
