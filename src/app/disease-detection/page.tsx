"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Upload, X, Leaf, AlertCircle, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Prediction {
  disease: string;
  confidence: number;
  severity: string;
  recommendations: string[];
}

export default function DiseasePredictionPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      // Redirect user to the sign-in page if not signed in
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement> | File
  ) => {
    const file = "target" in event ? event.target.files?.[0] : event;
    if (file) {
      setSelectedFile(file);
      setSelectedImage(URL.createObjectURL(file));
      setPrediction(null);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const handlePrediction = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setPrediction({
        disease: "Leaf Blight",
        confidence: 95,
        severity: "Moderate",
        recommendations: [
          "Apply copper-based fungicide",
          "Improve air circulation",
          "Reduce overhead watering",
        ],
      });
    } catch (error) {
      console.error("Error during prediction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearImage = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
    setSelectedFile(null);
    setPrediction(null);
  };

  if (!isSignedIn) {
    return null; // Render nothing while redirecting
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-green-200 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-1/4 -left-1/4 w-64 h-64 bg-green-300 rounded-full opacity-10 animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <Leaf className="h-12 w-12 text-green-600 animate-bounce" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent">
            Plant Disease Detection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Harness the power of AI to identify plant diseases instantly. Upload
            a photo and get detailed analysis within seconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upload Card */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl">
            <div className="p-6">
              <div
                className={`relative h-80 border-2 rounded-xl transition-all duration-300 
                  ${
                    dragActive
                      ? "border-green-500 bg-green-50"
                      : "border-dashed border-gray-300"
                  }
                  ${selectedImage ? "border-solid border-green-500" : ""}`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                {!selectedImage ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <Upload className="h-16 w-16 text-green-600 mb-4 animate-bounce" />
                    <label className="cursor-pointer text-center">
                      <span className="px-4 py-2 rounded-full bg-green-100 text-green-800 font-medium hover:bg-green-200 transition-colors">
                        Choose a file
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                        accept="image/*"
                      />
                      <p className="mt-4 text-gray-500">
                        or drag and drop your image here
                      </p>
                    </label>
                  </div>
                ) : (
                  <div className="relative h-full">
                    <button
                      onClick={clearImage}
                      className="absolute -right-3 -top-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 shadow-lg z-10"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedImage}
                        alt="Selected plant"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>

              {selectedImage && (
                <button
                  onClick={handlePrediction}
                  disabled={isLoading}
                  className={`mt-6 w-full py-4 rounded-xl text-white font-medium text-lg
                    transition-all duration-300 transform hover:scale-105
                    ${
                      isLoading
                        ? "bg-gray-400"
                        : "bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900"
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2" />
                      Analyzing Image...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Get Prediction
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </div>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Results Card */}
          <div
            className={`bg-white/80 backdrop-blur-sm shadow-xl rounded-xl transition-all duration-500 
            ${
              prediction
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-10"
            }`}
          >
            <div className="p-6">
              {prediction ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Analysis Results
                    </h3>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2" />
                      <span className="text-green-600 font-medium">
                        Analysis Complete
                      </span>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-gray-600">
                        Detected Disease
                      </h4>
                      <p className="text-2xl font-bold text-green-800">
                        {prediction.disease}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-600">
                          Confidence Score
                        </h4>
                        <div className="relative pt-2">
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div
                              className="h-2 bg-green-500 rounded-full"
                              style={{ width: `${prediction.confidence}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-xl font-semibold text-green-800 ml-3">
                        {prediction.confidence}%
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-600">
                        Severity Level
                      </h4>
                      <p className="text-xl font-bold text-yellow-600">
                        {prediction.severity}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-gray-600">
                        Recommendations
                      </h4>
                      <ul className="space-y-2">
                        {prediction.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-green-600 mr-2" />
                            <span className="text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center">
                  Upload an image to get started with the analysis.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
