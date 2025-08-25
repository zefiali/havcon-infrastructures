"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constructionMachinery, labEquipment } from "@/data/equipments";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
} from "lucide-react";

export default function EquipmentTable() {
    const [query, setQuery] = useState("");

    const filtered = constructionMachinery.filter((r) => {
        const q = query.toLowerCase();
        return (
            r.name.toLowerCase().includes(q) ||
            r.make.toLowerCase().includes(q) ||
            r.yearCondition.toLowerCase().includes(q) ||
            r.ownership.toLowerCase().includes(q)
        );
    });

    const labEquipmentFiltered = labEquipment.filter((r) => {
        const q = query.toLowerCase();
        return (
            r.items.some(item => item.name.toLowerCase().includes(q))
        );
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            <motion.section className="relative py-10 lg:py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div className="mx-auto px-4 md:px-20">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-600 to-black opacity-90"></div>
                        <div className="absolute inset-0 bg-[url('/banner_3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
                        <motion.div className="relative space-y-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}>
                            <div className="space-y-4 text-white">
                                <Badge className="bg-red-600 hover:bg-red-800">Equipment</Badge>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    Where Quality Equipment Meets Quality Testing
                                </h1>
                                <br />
                                <p className="text-xl font-bold max-w-3xl mx-auto">
                                    High-quality instruments delivering accuracy, durability, and unmatched engineering confidence
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <motion.section className="py-20 lg:py-20 bg-gradient-to-br from-gray-50 to-slate-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div className="px-4 md:px-20">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Tabs defaultValue="area" className="w-full">
                            <TabsList className="flex items-center justify-center w-full rounded-lg bg-white/50 p-1 text-muted-foreground">
                                <TabsTrigger value="area" className="py-2">
                                    Construction Machinery
                                </TabsTrigger>
                                <TabsTrigger value="length" className="py-2">
                                    Lab Testing Equipment
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="area">
                                <motion.div className="p-6" initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <h1 className="text-xl font-semibold tracking-tight"></h1>
                                        <input
                                            type="text"
                                            placeholder="Search…"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="pl-3 pr-3 py-2 rounded-xl border w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
                                        <div className="overflow-auto">
                                            <table className="w-full border-collapse text-sm">
                                                <thead className="sticky top-0 z-10 bg-muted/70 backdrop-blur supports-[backdrop-filter]:bg-muted/60">
                                                    <tr className="text-left bg-red-600 text-white">
                                                        <th className="px-4 py-3 font-semibold">Sr. No.</th>
                                                        <th className="px-4 py-3 font-semibold">Equipment Name</th>
                                                        <th className="px-4 py-3 font-semibold">Total Units</th>
                                                        <th className="px-4 py-3 font-semibold">Manufacturer</th>
                                                        <th className="px-4 py-3 font-semibold ">Capacity</th>
                                                        <th className="px-4 py-3 font-semibold">Year of Manufacturing</th>
                                                        <th className="px-4 py-3 font-semibold">Owned</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filtered.map((row, idx) => (
                                                        <tr key={row.id} className={idx % 2 === 0 ? "bg-background text-red-600" : "bg-muted/30 text-red-600"}>
                                                            <td className="px-4 py-3">{row.srNo}</td>
                                                            <td className="px-4 py-3 font-medium">{row.name}</td>
                                                            <td className="px-4 py-3">{row.units}</td>
                                                            <td className="px-4 py-3">{row.make}</td>
                                                            <td className="px-4 py-3">{row.capacity}</td>
                                                            <td className="px-4 py-3">{row.yearCondition}</td>
                                                            <td className="px-4 py-3">{row.ownership}</td>
                                                        </tr>
                                                    ))}
                                                    {filtered.length === 0 && (
                                                        <tr>
                                                            <td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">
                                                                No results found.
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                            <TabsContent value="length">
                                <motion.div className="p-6"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}>
                                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <h1 className="text-xl font-semibold tracking-tight"></h1>
                                        <input
                                            type="text"
                                            placeholder="Search…"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            className="pl-3 pr-3 py-2 rounded-xl border w-64 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                                        />
                                    </div>

                                    <div className="overflow-hidden rounded-2xl border bg-background shadow-sm">
                                        <div className="overflow-x-auto">
                                            <table className="w-full border border-gray-300">
                                                <thead className="bg-red-600 text-white">
                                                    <tr>
                                                        <th className="p-2 border border-gray-300 w-20">Sr. No.</th>
                                                        <th className="p-2 border border-gray-300">Name of Testing Equipment</th>
                                                        <th className="p-2 border border-gray-300 w-40">Equipment on Hand</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {labEquipmentFiltered.map((group, idx) => (
                                                        <>
                                                            <tr key={`cat-${idx}`} className="text-red-600">
                                                                <td rowSpan={group.items.length + 1} className="border border-gray-300 text-center font-semibold">
                                                                    {group.srNo}
                                                                </td>
                                                                <td className="border border-gray-300 font-semibold">{group.category}</td>
                                                                <td className="border border-gray-300"></td>
                                                            </tr>
                                                            {group.items.map((item, i) => (
                                                                <tr key={`${group.srNo}-${i}`} className="text-red-600">
                                                                    <td className="border border-gray-300 p-2">{item.name}</td>
                                                                    <td className="border border-gray-300 p-2">{item.qty}</td>
                                                                </tr>
                                                            ))}
                                                        </>
                                                    ))}
                                                    {labEquipmentFiltered.length === 0 && (
                                                        <tr>
                                                            <td colSpan={7} className="px-4 py-10 text-center text-muted-foreground">
                                                                No results found.
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </motion.section>
            {/* CTA Section */}
            <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-red-500 to-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}>
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-8 text-white">
                        <motion.div className="text-center space-y-8 text-white"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                                Ready to Work Together?
                            </h2>
                            <p className="text-xl opacity-90 max-w-3xl mx-auto">
                                Let&apos;s discuss your project and see how our team can help
                                bring your vision to life.
                            </p>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
                            >
                                <Link href="/contact" className="flex items-center">
                                    Get In Touch
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
