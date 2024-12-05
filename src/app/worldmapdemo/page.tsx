"use client";

import { WorldMap } from "@/components/ui/world-map";
import { motion } from "motion/react";

export default function WorldMapDemo() {
  return (
    <div className=" py-40 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <WorldMap

        dots={[
                /*

      Surat, India: Latitude: 21.1702° N, Longitude: 72.8311° E
Vadodara, India: Latitude: 22.3072° N, Longitude: 73.1812° E
Luton, UK: Latitude: 51.8787° N, Longitude: 0.4200° W
Dammam, Saudi Arabia: Latitude: 26.3927° N, Longitude: 49.9777° E
Khobar, Saudi Arabia: Latitude: 26.2172° N, Longitude: 50.1971° E
Bombay (Mumbai), India: Latitude: 19.0760° N, Longitude: 72.8777° E
26.4207° N, 50.0888° E

      */
          {
            start: { lat: 21.1702, lng: 72.8311 }, // Surat
            end: { lat: 26.4207, lng: 50.0888 }, // Dammam
          },   
          {
            start: { lat: 51.8787, lng: 0.4200 }, // Luton
            end: { lat: 22.3072, lng: 73.1812 }, // Vadodara
          },
          {
            start: { lat: 21.1702, lng: 72.8311 }, // Surat
            end: { lat: 19.0760, lng: 72.8777 }, // Bombay
          },
        ]}
      />
    </div>
  );
}
