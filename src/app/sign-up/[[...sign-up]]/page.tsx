import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Join Us Today
        </h2>
        <SignUp 
          path="/sign-up" 
          appearance={{
            variables: {
              colorPrimary: "#2563eb", // Consistent blue accent
              colorBackground: "#f9fafb", // Light minimal background
              colorText: "#111827", // Dark text
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

