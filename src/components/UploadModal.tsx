
import { useState, useRef } from "react";
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
      case 'completed': return 'bg-success';
      case 'error': return 'bg-danger';
      default: return 'bg-primary';
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal-backdrop fade show"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={onClose}
      ></div>
      
      <div 
        className="modal fade show d-block"
        tabIndex={-1}
        style={{ zIndex: 1050 }}
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Upload Center</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body">
              <div className="mb-5">
                <h6 className="fw-semibold mb-4">Select Upload Type</h6>
                <div className="row g-3">
                  {uploadOptions.map((option) => (
                    <div key={option.type} className="col-6 col-md-3">
                      <div
                        className="border rounded p-3 text-center"
                        onClick={() => handleCardClick(option)}
                        style={{ 
                          cursor: 'pointer',
                          transition: 'background-color 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#f8f9fa';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '';
                        }}
                      >
                        <div className="mb-2 d-flex justify-content-center">
                          <div 
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: '40px',
                              height: '40px',
                              backgroundColor: 'rgba(13, 110, 253, 0.1)'
                            }}
                          >
                            <option.icon size={20} style={{ color: '#0d6efd' }} />
                          </div>
                        </div>
                        <h6 className="small fw-medium mb-0">{option.title}</h6>
                      </div>
                      <input
                        type="file"
                        ref={el => fileInputRefs.current[option.type] = el}
                        onChange={(e) => handleFileSelect(e.target.files, option.type)}
                        accept={option.accept}
                        multiple
                        className="d-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {uploadFiles.length > 0 && (
                <div>
                  <h6 className="fw-semibold mb-4">Upload Progress</h6>
                  <div className="vstack gap-3">
                    {uploadFiles.map((uploadFile) => (
                      <div key={uploadFile.id} className="border rounded p-3">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <Upload size={16} className="text-muted me-3" />
                            <div>
                              <p className="small fw-medium mb-0">{uploadFile.file.name}</p>
                              <p className="text-muted small mb-0">
                                {uploadFile.type} • {(uploadFile.file.size / 1024 / 1024).toFixed(1)} MB
                              </p>
                            </div>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => cancelUpload(uploadFile.id)}
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                        <div>
                          <div className="d-flex justify-content-between small mb-1">
                            <span className="text-capitalize">{uploadFile.status}</span>
                            <span>{Math.round(uploadFile.progress)}%</span>
                          </div>
                          <div className="progress" style={{ height: '8px' }}>
                            <div
                              className={`progress-bar ${getStatusColor(uploadFile.status)}`}
                              role="progressbar"
                              style={{ width: `${uploadFile.progress}%` }}
                              aria-valuenow={uploadFile.progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
