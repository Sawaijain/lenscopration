
import Featured from "@/components/Featured";
import ServicesCard from "@/components/ServicesCard";


export default function Home() {
  return (
    <main>
      <Featured />
      <div className="flex flex-wrap justify-center">
        <ServicesCard title="Card 1" description="Academia-backed & In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection." index="1"/>
        <ServicesCard title="Card 2" description="Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business." index="2"/>
        <ServicesCard title="Card 3" description="Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience." index="3"/>
        <ServicesCard title="Card 4" description="We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video." index="4"/>
      </div>
    </main>
  );
}
