"use client";
import { PickupContext } from "../../context/PickupContext";
import { DestinationContext } from "../../context/DestinationContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function Input({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const { Pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DestinationContext);

  useEffect(() => {
    type == "Pickup"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("Dropoff Location");
  }, []);
  const getLatAndLng = (place, type) => {
    if (place && place.value) {
      // Add null check
      const placeId = place.value.place_id;
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails({ placeId }, (place, status) => {
        if (status === "OK" && place.geometry && place.geometry.location) {
          console.log(place.geometry.location.lat());
          if (type === "Pickup") {
            setPickup({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place.formatted_address,
              label: place.name,
            });
          } else {
            setDestination({
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place.formatted_address,
              label: place.name,
            });
          }
        }
      });
    }
  };

  return (
    <div
      className="bg-slate-200 p-3 px-3 rounded-lg mt-6 
    flex items-center gap-4"
    >
      <Image
        src={type == "Pickup" ? "/search.png" : "/destination.png"}
        width={15}
        height={15}
      />

      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place) => {
            getLatAndLng(place, type);
            setValue(place);
          },
          placeholder: placeholder,
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: false,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              border: "none",
            }),
          },
        }}
      />
    </div>
  );
}

export default Input;
