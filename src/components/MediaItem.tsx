
import { MoreVertical, Eye, ThumbsUp, MessageSquare, Calendar } from "lucide-react";

interface MediaItemProps {
  id: string;
  title: string;
  thumbnail: string;
  visibility: 'Public' | 'Unlisted' | 'Private';
  views: number;
  likes: number;
  comments: number;
  uploadDate: string;
  duration: string;
  type: 'video' | 'podcast' | 'movie';
  onEdit: (id: string, type: string) => void;
}

const MediaItem = ({ 
  id, 
  title, 
  thumbnail, 
  visibility, 
  views, 
  likes, 
  comments, 
  uploadDate, 
  duration,
  type,
  onEdit 
}: MediaItemProps) => {
  const getVisibilityBadge = (visibility: string) => {
    const badgeClass = visibility === 'Public' ? 'bg-success' : 
                      visibility === 'Unlisted' ? 'bg-warning' : 'bg-secondary';
    return `badge ${badgeClass}`;
  };

  return (
    <tr>
      <td>
        <div className="d-flex align-items-center">
          <input type="checkbox" className="form-check-input me-3" />
          <div className="position-relative">
            <img 
              src={thumbnail} 
              alt={title}
              className="rounded"
              style={{ width: '120px', height: '68px', objectFit: 'cover' }}
            />
            <span 
              className="badge bg-dark position-absolute"
              style={{ bottom: '4px', right: '4px', fontSize: '10px' }}
            >
              {duration}
            </span>
          </div>
          <div className="ms-3 flex-grow-1">
            <h6 className="mb-1 fw-semibold">{title}</h6>
            <div className="d-flex align-items-center text-muted small">
              <span className={getVisibilityBadge(visibility)}>{visibility}</span>
              <span className="ms-2 text-capitalize">{type}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <Eye size={16} className="me-1" />
          <span>{views.toLocaleString()}</span>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <ThumbsUp size={16} className="me-1" />
          <span>{likes.toLocaleString()}</span>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <MessageSquare size={16} className="me-1" />
          <span>{comments.toLocaleString()}</span>
        </div>
      </td>
      <td className="text-center">
        <div className="d-flex align-items-center justify-content-center">
          <Calendar size={16} className="me-1" />
          <span>{uploadDate}</span>
        </div>
      </td>
      <td className="text-center">
        <div className="dropdown">
          <button 
            className="btn btn-link p-0 border-0"
            data-bs-toggle="dropdown"
          >
            <MoreVertical size={16} />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button 
                className="dropdown-item"
                onClick={() => onEdit(id, type)}
              >
                Edit
              </button>
            </li>
            <li><button className="dropdown-item">Download</button></li>
            <li><button className="dropdown-item">Duplicate</button></li>
            <li><hr className="dropdown-divider" /></li>
            <li><button className="dropdown-item text-danger">Delete</button></li>
          </ul>
        </div>
      </td>
    </tr>
  );
};

export default MediaItem;
