
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Eye, Share, Settings, Upload, Calendar } from "lucide-react";

const VideoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [videoData, setVideoData] = useState({
    title: "Introduction to React Hooks",
    description: "Learn the fundamentals of React Hooks in this comprehensive tutorial. We'll cover useState, useEffect, and custom hooks with practical examples.",
    visibility: "public",
    category: "education",
    tags: ["react", "hooks", "javascript", "tutorial"],
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
    scheduledDate: "",
    monetization: false,
    commentsEnabled: true,
    ratingsEnabled: true,
    language: "en",
    captions: false,
    endScreen: true,
    cards: []
  });

  const handleInputChange = (field: string, value: any) => {
    setVideoData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving video data:", videoData);
    // API call would go here
  };

  return (
    <div className="min-vh-100 bg-light">
      <div className="container-fluid py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-outline-secondary me-3"
              onClick={() => navigate('/media')}
            >
              <ArrowLeft size={16} />
            </button>
            <h1 className="h2 fw-bold mb-0">Edit Video</h1>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">
              <Eye size={16} className="me-1" />
              Preview
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              <Save size={16} className="me-1" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="row">
          {/* Main Content */}
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Video Details</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Title *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={videoData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    maxLength={100}
                  />
                  <div className="form-text">{videoData.title.length}/100</div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows={6}
                    value={videoData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    maxLength={5000}
                  />
                  <div className="form-text">{videoData.description.length}/5000</div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    value={videoData.tags.join(', ')}
                    onChange={(e) => handleInputChange('tags', e.target.value.split(', '))}
                    placeholder="Separate tags with commas"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Category</label>
                    <select 
                      className="form-select"
                      value={videoData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                      <option value="education">Education</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="music">Music</option>
                      <option value="sports">Sports</option>
                      <option value="gaming">Gaming</option>
                      <option value="news">News & Politics</option>
                      <option value="technology">Science & Technology</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Language</label>
                    <select 
                      className="form-select"
                      value={videoData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="it">Italian</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Thumbnail</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img 
                      src={videoData.thumbnail} 
                      alt="Current thumbnail"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-8">
                    <p className="text-muted">Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.</p>
                    <button className="btn btn-outline-primary">
                      <Upload size={16} className="me-1" />
                      Upload Thumbnail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Visibility */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Visibility</h5>
              </div>
              <div className="card-body">
                <div className="form-check mb-2">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="visibility" 
                    value="public"
                    checked={videoData.visibility === 'public'}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  />
                  <label className="form-check-label">
                    <strong>Public</strong>
                    <div className="text-muted small">Anyone can search for and view</div>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="visibility" 
                    value="unlisted"
                    checked={videoData.visibility === 'unlisted'}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  />
                  <label className="form-check-label">
                    <strong>Unlisted</strong>
                    <div className="text-muted small">Anyone with the link can view</div>
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="visibility" 
                    value="private"
                    checked={videoData.visibility === 'private'}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  />
                  <label className="form-check-label">
                    <strong>Private</strong>
                    <div className="text-muted small">Only you can view</div>
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label">Schedule</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={videoData.scheduledDate}
                    onChange={(e) => handleInputChange('scheduledDate', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Monetization & Features */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">More Options</h5>
              </div>
              <div className="card-body">
                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={videoData.commentsEnabled}
                    onChange={(e) => handleInputChange('commentsEnabled', e.target.checked)}
                  />
                  <label className="form-check-label">Allow comments</label>
                </div>

                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={videoData.ratingsEnabled}
                    onChange={(e) => handleInputChange('ratingsEnabled', e.target.checked)}
                  />
                  <label className="form-check-label">Show likes/dislikes</label>
                </div>

                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={videoData.monetization}
                    onChange={(e) => handleInputChange('monetization', e.target.checked)}
                  />
                  <label className="form-check-label">Monetization</label>
                </div>

                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={videoData.captions}
                    onChange={(e) => handleInputChange('captions', e.target.checked)}
                  />
                  <label className="form-check-label">Auto-generate captions</label>
                </div>

                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={videoData.endScreen}
                    onChange={(e) => handleInputChange('endScreen', e.target.checked)}
                  />
                  <label className="form-check-label">Add end screen</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEdit;
