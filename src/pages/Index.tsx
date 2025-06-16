
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
    <div className="min-vh-100 bg-light p-4">
      <div className="container-fluid" style={{ maxWidth: '1200px' }}>
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4">Video CMS Upload Center</h1>
          <p className="lead text-muted mb-4">
            Choose your upload type to get started
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary btn-lg mb-5"
          >
            Start Upload Process
          </button>
        </div>
        
        <div className="row g-4 justify-content-center">
          {uploadOptions.map((option) => (
            <div key={option.type} className="col-6 col-md-3">
              <UploadCard
                title={option.title}
                description={option.description}
                icon={option.icon}
                onClick={() => {}}
                hideButton={true}
              />
            </div>
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
