
import { Video, Music, Library, Megaphone, Layers, Film, Upload, Link } from "lucide-react";
import UploadCard from "@/components/UploadCard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleUploadClick = (type: string) => {
    toast({
      title: `${type} Upload`,
      description: `Starting ${type.toLowerCase()} upload process...`,
    });
    // Here you would typically navigate to the specific upload page or open a modal
  };

  const uploadOptions = [
    {
      title: "Video",
      description: "Upload video files for your content library",
      icon: Video,
      type: "Video"
    },
    {
      title: "Audio",
      description: "Upload audio files and podcasts",
      icon: Music,
      type: "Audio"
    },
    {
      title: "Library",
      description: "Manage your existing media library",
      icon: Library,
      type: "Library"
    },
    {
      title: "Campaign",
      description: "Create and upload campaign content",
      icon: Megaphone,
      type: "Campaign"
    },
    {
      title: "Slates",
      description: "Upload slate graphics and overlays",
      icon: Layers,
      type: "Slates"
    },
    {
      title: "Reel/Shorts",
      description: "Upload short-form vertical content",
      icon: Film,
      type: "Reel/Shorts"
    },
    {
      title: "Custom Uploads",
      description: "Upload custom file types and formats",
      icon: Upload,
      type: "Custom Uploads"
    },
    {
      title: "Embed",
      description: "Embed content from external sources",
      icon: Link,
      type: "Embed"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Video CMS Upload Center</h1>
          <p className="text-xl text-muted-foreground">
            Choose your upload type to get started
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {uploadOptions.map((option) => (
            <UploadCard
              key={option.type}
              title={option.title}
              description={option.description}
              icon={option.icon}
              onClick={() => handleUploadClick(option.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
