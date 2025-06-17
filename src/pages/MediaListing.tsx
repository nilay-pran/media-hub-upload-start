
import { useState } from "react";
import { Search, Filter, Plus, Download, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MediaItem from "@/components/MediaItem";

const MediaListing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Mock data - in a real app, this would come from an API
  const mediaItems = [
    {
      id: "1",
      title: "Introduction to React Hooks",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      visibility: "Public" as const,
      views: 15420,
      likes: 342,
      comments: 28,
      uploadDate: "2023-12-15",
      duration: "12:34",
      type: "video" as const
    },
    {
      id: "2",
      title: "Tech Talk Podcast Episode 5",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      visibility: "Public" as const,
      views: 8920,
      likes: 156,
      comments: 42,
      uploadDate: "2023-12-10",
      duration: "45:12",
      type: "podcast" as const
    },
    {
      id: "3",
      title: "The Matrix Reimagined",
      thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop",
      visibility: "Private" as const,
      views: 0,
      likes: 0,
      comments: 0,
      uploadDate: "2023-12-08",
      duration: "2:15:30",
      type: "movie" as const
    }
  ];

  const handleEdit = (id: string, type: string) => {
    navigate(`/${type}-edit/${id}`);
  };

  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === "all" || item.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-vh-100 bg-light">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h2 fw-bold">Content</h1>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <Download size={16} className="me-1" />
              Export
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/')}
            >
              <Upload size={16} className="me-1" />
              Upload Content
            </button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="card mb-4">
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <Search size={16} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search your content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select 
                  className="form-select"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Content</option>
                  <option value="video">Videos</option>
                  <option value="podcast">Podcasts</option>
                  <option value="movie">Movies</option>
                </select>
              </div>
              <div className="col-md-3">
                <button className="btn btn-outline-secondary w-100">
                  <Filter size={16} className="me-1" />
                  More Filters
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Table */}
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th className="border-0 fw-semibold">Content</th>
                    <th className="border-0 fw-semibold text-center">Views</th>
                    <th className="border-0 fw-semibold text-center">Likes</th>
                    <th className="border-0 fw-semibold text-center">Comments</th>
                    <th className="border-0 fw-semibold text-center">Date</th>
                    <th className="border-0 fw-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map(item => (
                    <MediaItem
                      key={item.id}
                      {...item}
                      onEdit={handleEdit}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MediaListing;
