import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <SignIn 
          path="/sign-in" 
          appearance={{
            variables: {
              colorPrimary: "#2563eb", // Blue accent color
              colorBackground: "#f9fafb", // Light minimal background
              colorText: "#111827", // Dark text for good readability
            },
            layout: {
              socialButtonsPlacement: "bottom",
            },
          }} 
        />
      </div>
    </div>
  );
}


