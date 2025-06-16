
import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, Upload, Trash2 } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface UploadOption {
  title: string;
  description: string;
  icon: LucideIcon;
  type: string;
  accept: string;
}

interface UploadFile {
  id: string;
  file: File;
  type: string;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  uploadOptions: UploadOption[];
}

const UploadModal = ({ isOpen, onClose, uploadOptions }: UploadModalProps) => {
  const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([]);
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleCardClick = (option: UploadOption) => {
    const fileInput = fileInputRefs.current[option.type];
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleFileSelect = (files: FileList | null, type: string) => {
    if (!files) return;

    const newFiles: UploadFile[] = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      type,
      progress: 0,
      status: 'uploading' as const
    }));

    setUploadFiles(prev => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach(uploadFile => {
      simulateUpload(uploadFile.id);
    });
  };

  const simulateUpload = (fileId: string) => {
    const interval = setInterval(() => {
      setUploadFiles(prev => 
        prev.map(file => {
          if (file.id === fileId && file.status === 'uploading') {
            const newProgress = file.progress + Math.random() * 15;
            if (newProgress >= 100) {
              clearInterval(interval);
              return { ...file, progress: 100, status: 'completed' as const };
            }
            return { ...file, progress: newProgress };
          }
          return file;
        })
      );
    }, 200);
  };

  const cancelUpload = (fileId: string) => {
    setUploadFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-primary';
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Upload Center
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-6 w-6"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Upload Options Grid */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Select Upload Type</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {uploadOptions.map((option) => (
                  <div key={option.type}>
                    <div
                      className="border rounded-lg p-4 hover:bg-accent cursor-pointer transition-colors text-center"
                      onClick={() => handleCardClick(option)}
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <option.icon className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-sm font-medium">{option.title}</h4>
                    </div>
                    <input
                      type="file"
                      ref={el => fileInputRefs.current[option.type] = el}
                      onChange={(e) => handleFileSelect(e.target.files, option.type)}
                      accept={option.accept}
                      multiple
                      className="hidden"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Progress */}
            {uploadFiles.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Upload Progress</h3>
                <div className="space-y-3">
                  {uploadFiles.map((uploadFile) => (
                    <div key={uploadFile.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <div>
                            <p className="text-sm font-medium">{uploadFile.file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {uploadFile.type} • {(uploadFile.file.size / 1024 / 1024).toFixed(1)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => cancelUpload(uploadFile.id)}
                          className="h-6 w-6"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="capitalize">{uploadFile.status}</span>
                          <span>{Math.round(uploadFile.progress)}%</span>
                        </div>
                        <Progress 
                          value={uploadFile.progress} 
                          className="h-2"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UploadModal;
