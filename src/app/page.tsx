"use client";

import { AppShell, Center, Loader, Space } from "@mantine/core";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import fetchData from "./components/functions/fetchData";
import TableDisplayer from "./components/TableDisplayer";
import { Element, OverpassData } from "./components/types/types";

const MapDisplayer = dynamic(() => import("./components/MapDisplayer"), {
  ssr: false,
});

const Home = () => {
  const height = 60;

  const center = [46.0649489, 11.1233195] as LatLngExpression; // Trento
  const [userPosition, setUserPosition] = useState<LatLngExpression | null>(
    null
  ); //My position
  const [data, setData] = useState<Element[] | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserPosition([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error getting user position:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    }
  }, []);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const apiData: OverpassData = await fetchData(
          userPosition ? userPosition : center,
          150
        );
        setData(apiData.elements);
        //console.log("Data fetched correctly: ", apiData); //DEBUG
      } catch (error) {
        console.error("Error fetching data:", error); //DEBUG
      }
    };

    if (userPosition) {
      fetchDataAsync();
    }
  }, [userPosition]);

  return (
    <AppShell header={{ height: height }} padding={"md"}>
      <AppShell.Header>
        <Center h={height} bg={"green"}>
          <h1>NearBites</h1>
        </Center>
      </AppShell.Header>

      <AppShell.Main>
        {data ? (
          <>
            <MapDisplayer
              data={data}
              height={"50vh"}
              userPosition={userPosition ? userPosition : center}
            />
            <Space h={"md"} />
            <TableDisplayer data={data} height={"35vh"} />
          </>
        ) : (
          <Center>
            <Loader color={"green"} />
          </Center>
        )}
      </AppShell.Main>
    </AppShell>
  );
};
export default Home;
