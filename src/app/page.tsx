import ToggleMode from "@/components/ToggleMode";

export default function Home() {
  return (
    <div>
      {/* just for testing configuration */}
      <div className="h-screen p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="font-mona font-bold text-5xl">
              Klarheit
            </h1>
            <p className="font-mona font-normal text-lg">
              Welcome to KlarheitValuers
            </p>
          </div>
          <ToggleMode/>
        </div>
      </div>
    </div>
  );
}
