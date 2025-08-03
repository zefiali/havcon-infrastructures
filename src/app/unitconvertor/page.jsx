"use client";

import { useState } from "react";
import { ArrowLeft, Zap } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { conversionRates } from "@/data/convertionRate";
import { unitTypes } from "@/data/unitTypes";

export default function SpeedDistancePage() {
  //Find Length
  const [lengthValue, setLengthValue] = useState("");
  const [fromLengthUnit, setFromLengthUnit] = useState("m");
  const [toLengthUnit, setToLengthUnit] = useState("m");

  //Find Area
  const [areaValue, setAreaValue] = useState("");
  const [fromAreaUnit, setFromAreaUnit] = useState("m2");
  const [toAreaUnit, setToAreaUnit] = useState("m2");

  //Find Volume
  const [volValue, setVolValue] = useState("");
  const [fromVolUnit, setFromVolUnit] = useState("m3");
  const [toVolUnit, setToVolUnit] = useState("m3");

    const convertLength = (value, fromUnit, toUnit) => {
        const conversions = conversionRates.length;
        return (value * conversions[fromUnit]) / conversions[toUnit];
    };

    const convertArea = (value, fromUnit, toUnit) => {
        const conversions = conversionRates.area;
        return (value * conversions[fromUnit]) / conversions[toUnit];
    };

    const convertVolume = (value, fromUnit, toUnit) => {
        const conversions = conversionRates.volume;
        return (value * conversions[fromUnit]) / conversions[toUnit];
    };

  const calculateLength = () => {
    const enteredVal = Number.parseFloat(lengthValue);
    if(fromLengthUnit === "" || toLengthUnit === "" || isNaN(enteredVal))
        return 0;
    return convertLength(enteredVal, fromLengthUnit, toLengthUnit);
  };

  const calculateArea = () => {
    const enteredVal = Number.parseFloat(areaValue);
    if(fromAreaUnit === "" || toAreaUnit === "" || isNaN(enteredVal))
        return 0;
    return convertArea(enteredVal, fromAreaUnit, toAreaUnit);
  };

  const calculateVolume = () => {
    const enteredVal = Number.parseFloat(volValue);
    if(fromVolUnit === "" || toVolUnit === "" || isNaN(enteredVal))
        return 0;
    return convertVolume(enteredVal, fromVolUnit, toVolUnit);
  };

  const lengthResult = calculateLength();
  const areaResult = calculateArea();
  const volResult = calculateVolume();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="area" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-full">
            <TabsTrigger value="area" className="py-2">
              Area
            </TabsTrigger>
            <TabsTrigger value="length" className="py-2">
              Length
            </TabsTrigger>
            <TabsTrigger value="time" className="py-2">
              Volume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="area" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Convert Area</CardTitle>
                  <CardDescription>Formula = {"( "} Entered Value × From Unit {" )"} / To Unit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                     <Label htmlFor="distance-speed-unit">Unit From</Label>
                      <Select
                        value={fromAreaUnit}
                        onValueChange={setFromAreaUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            unitTypes.area.map((unit)=>{
                              return <SelectItem value={unit.value}>{unit.label}</SelectItem>
                            })
                        }
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="distance-speed-unit">Unit To</Label>
                      <Select
                        value={toAreaUnit}
                        onValueChange={setToAreaUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {
                            unitTypes.area.map((unit)=>{
                              return <SelectItem value={unit.value}>{unit.label}</SelectItem>
                            })
                            }
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="areaVal">Enter Value</Label>
                      <Input
                        id="areaVal"
                        type="number"
                        maxLength={18}
                        placeholder="Enter Area"
                        value={areaValue}
                        onChange={(e) => setAreaValue(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Area Convertion Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 p-6 rounded-lg text-center">
                    <div className="lg:text-3xl sm:text-2xl font-bold text-amber-600 mb-2">
                      {areaResult.toFixed(3)}
                    </div>
                    <div className="lg:text-lg sm:text-2xl text-amber-700 mb-4">
                      {toAreaUnit}
                    </div>
                    <div className="text-sm text-amber-600">
                      Formula = ({areaValue === "" ? 'Entered Value' : areaValue} ×{" "}
                      {fromAreaUnit}) /{" "} {toAreaUnit}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div>Also equals:</div>
                    <div>
                      • {((areaValue * conversionRates.area[fromAreaUnit]) / conversionRates.area["m2"]).toFixed(3)} m²
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="length" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Convert Length</CardTitle>
                  <CardDescription>Formula = {"( "} Entered Value × From Unit {" )"} / To Unit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                     <Label htmlFor="distance-speed-unit">Unit From</Label>
                      <Select
                        value={fromLengthUnit}
                        onValueChange={setFromLengthUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            unitTypes.lengthUnits.map((unit)=>{
                              return <SelectItem value={unit.slice(unit.indexOf('(')+1, unit.indexOf(')'))}>{unit}</SelectItem>
                            })
                        }
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="distance-speed-unit">Unit To</Label>
                      <Select
                        value={toLengthUnit}
                        onValueChange={setToLengthUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {
                            unitTypes.lengthUnits.map((unit)=>{
                              return <SelectItem value={unit.slice(unit.indexOf('(')+1, unit.indexOf(')'))}>{unit}</SelectItem>
                            })
                            }
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="lengthVal">Enter Value</Label>
                      <Input
                        id="lengthVal"
                        type="number"
                        maxLength={18}
                        placeholder="Enter Length"
                        value={lengthValue}
                        onChange={(e) => setLengthValue(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Length Convertion Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 p-6 rounded-lg text-center">
                    <div className="lg:text-3xl sm:text-2xl font-bold text-amber-600 mb-2">
                      {lengthResult.toFixed(3)}
                    </div>
                    <div className="lg:text-lg sm:text-2xl text-amber-700 mb-4">
                      {toLengthUnit}
                    </div>
                    <div className="text-sm text-amber-600">
                      Formula = ({lengthValue === "" ? 'Entered Value' : lengthValue} ×{" "}
                      {fromLengthUnit}) /{" "} {toLengthUnit}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div>Also equals:</div>
                    <div>
                      • {((lengthValue * conversionRates.length[fromLengthUnit]) / conversionRates.length.m).toFixed(3)} meters
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="time" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Convert Volume</CardTitle>
                  <CardDescription>Formula = {"( "} Entered Value × From Unit {" )"} / To Unit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-2">
                     <Label htmlFor="distance-speed-unit">Unit From</Label>
                      <Select
                        value={fromVolUnit}
                        onValueChange={setFromVolUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {
                            unitTypes.volume.map((unit)=>{
                              return <SelectItem value={unit.value}>{unit.label}</SelectItem>
                            })
                        }
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="distance-speed-unit">Unit To</Label>
                      <Select
                        value={toVolUnit}
                        onValueChange={setToVolUnit}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {
                            unitTypes.volume.map((unit)=>{
                              return <SelectItem value={unit.value}>{unit.label}</SelectItem>
                            })
                            }
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="volumeVal">Enter Value</Label>
                      <Input
                        id="volumeVal"
                        type="number"
                        maxLength={18}
                        placeholder="Enter Volume"
                        value={volValue}
                        onChange={(e) => setVolValue(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Volume Convertion Result</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-amber-50 p-6 rounded-lg text-center">
                    <div className="lg:text-3xl sm:text-2xl font-bold text-amber-600 mb-2">
                      {volResult.toFixed(3)}
                    </div>
                    <div className="lg:text-lg sm:text-2xl text-amber-700 mb-4">
                      {toVolUnit}
                    </div>
                    <div className="text-sm text-amber-600">
                      Formula = ({volValue === "" ? 'Entered Value' : volValue} ×{" "}
                      {fromVolUnit}) /{" "} {toVolUnit}
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div>Also equals:</div>
                    <div>
                      • {((volValue * conversionRates.volume[fromVolUnit]) / conversionRates.volume["m3"]).toFixed(3)} m³
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}