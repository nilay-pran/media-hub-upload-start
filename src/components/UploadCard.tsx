
import { LucideIcon } from "lucide-react";

interface UploadCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  hideButton?: boolean;
}

const UploadCard = ({ title, description, icon: Icon, onClick, hideButton = false }: UploadCardProps) => {
  return (
    <div 
      className="card h-100 shadow-sm border-0" 
      onClick={onClick}
      style={{ 
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <div className="card-body text-center d-flex flex-column justify-content-center p-4">
        <div className="mb-3 d-flex justify-content-center">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(13, 110, 253, 0.1)',
              transition: 'background-color 0.3s ease'
            }}
          >
            <Icon size={24} style={{ color: '#0d6efd' }} />
          </div>
        </div>
        <h6 className="card-title fw-semibold mb-2">{title}</h6>
        <p className="card-text text-muted small">{description}</p>
      </div>
    </div>
  );
};

export default UploadCard;
