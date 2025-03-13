"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Filter,
  MoreHorizontal,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UserInterface() {
  const [activeTab, setActiveTab] = useState("new");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-sm font-medium">RFQ-124/237</h1>
        <div className="w-5" />
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Material Image Card */}
          <Card className="bg-gray-900 border-0 overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="/steel.png"
                alt="Steel rebar materials"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Submissions Card */}
          <Card className="bg-zinc-900 border-0">
            <CardContent className="p-6 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-1">Submissions</h2>
              <p className="text-sm text-gray-400 mb-4">January - June 2024</p>
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute w-full h-full bg-gray-700"></div>
                  <div
                    className="absolute w-full h-full bg-gray-500 origin-center"
                    style={{
                      transform: "rotate(0deg) skew(0deg)",
                      clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
                    }}
                  ></div>
                  <div
                    className="absolute w-full h-full bg-gray-300 origin-center"
                    style={{
                      transform: "rotate(0deg)",
                      clipPath: "polygon(0 0, 50% 0, 50% 50%, 0 50%)",
                    }}
                  ></div>
                </div>
              </div>

              <p className="text-sm text-gray-400">
                Shortlisting up by 5.2% this month
              </p>
            </CardContent>
          </Card>

          {/* Material Details Card */}
          <Card className="bg-zinc-900 border-0">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-400">Material Name</p>
                  <p className="font-medium">Concrete C40</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Category</p>
                  <p className="font-medium">ready mix concrete</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Quantity</p>
                  <p className="font-medium">500 bag</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Max Budget</p>
                  <p className="font-medium">60k</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Valid Till</p>
                  <p className="font-medium">28-02-2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Created</p>
                  <p className="font-medium">21-02-25</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-red-500 font-medium">Expired</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Brand</p>
                  <p className="font-medium">Concrete C40 S3</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs and Filters */}
        <div className="flex justify-between items-center">
          <Tabs
            defaultValue="new"
            className="w-auto"
            onValueChange={setActiveTab}
          >
            <TabsList className="bg-zinc-900">
              <TabsTrigger
                value="new"
                className="data-[state=active]:bg-gray-800"
              >
                New Responses(2)
              </TabsTrigger>
              <TabsTrigger
                value="shortlisted"
                className="data-[state=active]:bg-gray-800"
              >
                Shortlisted(1)
              </TabsTrigger>
              <TabsTrigger
                value="rejected"
                className="data-[state=active]:bg-gray-800"
              >
                Rejected(1)
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-zinc-900 border-gray-700"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="mx-1 text-sm">Previous</span>
              <Button
                variant="outline"
                size="sm"
                className="h-8 w-8 bg-zinc-900 border-gray-700"
              >
                1
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1 text-sm">Next</span>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quote Details Card */}
        <Card className="bg-zinc-900 border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-5 ">
            {/* Left Section */}
            <div className="border-r border-gray-800 p-6 flex flex-col items-center justify-between">
              <Avatar className="h-20 w-20 bg-gray-100 text-black flex items-center justify-center">
                <div className="font-bold text-2xl">T</div>
              </Avatar>
              <Button
                variant="outline"
                className="mt-6 w-full border-white text-white"
              >
                View RFQ submission
              </Button>
            </div>

            {/* Right Section */}
            <div className="p-4  ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-50">
                <div>
                  <div className="ml-5">
                    <div className="flex flex-col">
                      <h2 className=" text-xl font-bold">RFQ-124/237</h2>
                      <p className="text-sm text-gray-400 mb-3">
                        Forge Steel LLC
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <h3 className="text-md text-gray-400 mb-1 mt-3">
                        QUOTED AMOUNT
                      </h3>
                      <Badge className="bg-green-900 text-green-400 hover:bg-green-900">
                        +20%
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold">AED 200,000.00</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Two Hundred Thousands Dirhams Only
                    </p>
                  </div>
                </div>

                <div className="space-y-4 ml-30">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Supplier Name</h3>
                      <p className="text-sm text-gray-400">FORGE STEEL LLC</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Mobile Number</h3>
                      <p className="text-sm text-gray-400">+9754356252</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-gray-400">
                        AL KEWANEE, DUBAI, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex justify-between items-center border-t border-gray-800 p-4 ">
            <div className="grid grid-cols-2 gap-15 pl-5">
              <div>
                <p className="text-xs text-gray-400">Quote submitted on</p>
                <p className="text-sm">10-Feb-2025, 11:23 PM</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Shortlisted on</p>
                <p className="text-sm">10-Feb-2025, 11:23 PM</p>
              </div>
            </div>
            <p className="text-sm pl-150">5 out of 10 documents submitted</p>
            <div className="flex gap-2">
              <Button className="bg-white text-black hover:bg-gray-200 w-50">
                Download Documents
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-white w-10 h-10 rounded-full flex items-center justify-center"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
