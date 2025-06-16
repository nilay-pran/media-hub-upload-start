
import { Video, Music, Library, Megaphone, Layers, Film, Upload, Link } from "lucide-react";
import UploadCard from "@/components/UploadCard";
import UploadModal from "@/components/UploadModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uploadOptions = [
    {
      title: "Video",
      description: "Upload video files for your content library",
      icon: Video,
      type: "Video",
      accept: "video/*"
    },
    {
      title: "Audio",
      description: "Upload audio files and podcasts",
      icon: Music,
      type: "Audio",
      accept: "audio/*"
    },
    {
      title: "Library",
      description: "Manage your existing media library",
      icon: Library,
      type: "Library",
      accept: "*/*"
    },
    {
      title: "Campaign",
      description: "Create and upload campaign content",
      icon: Megaphone,
      type: "Campaign",
      accept: "*/*"
    },
    {
      title: "Slates",
      description: "Upload slate graphics and overlays",
      icon: Layers,
      type: "Slates",
      accept: "image/*"
    },
    {
      title: "Reel/Shorts",
      description: "Upload short-form vertical content",
      icon: Film,
      type: "Reel/Shorts",
      accept: "video/*"
    },
    {
      title: "Custom Uploads",
      description: "Upload custom file types and formats",
      icon: Upload,
      type: "Custom Uploads",
      accept: "*/*"
    },
    {
      title: "Embed",
      description: "Embed content from external sources",
      icon: Link,
      type: "Embed",
      accept: "*/*"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Video CMS Upload Center</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Choose your upload type to get started
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="mb-8"
          >
            Start Upload Process
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {uploadOptions.map((option) => (
            <UploadCard
              key={option.type}
              title={option.title}
              description={option.description}
              icon={option.icon}
              onClick={() => {}}
              hideButton={true}
            />
          ))}
        </div>
      </div>

      <UploadModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        uploadOptions={uploadOptions}
      />
    </div>
  );
};

export default Index;
