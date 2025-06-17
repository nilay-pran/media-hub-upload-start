
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Eye, Share, Upload, Mic, Music } from "lucide-react";

const PodcastEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [podcastData, setPodcastData] = useState({
    title: "Tech Talk Podcast Episode 5",
    description: "In this episode, we discuss the latest trends in web development, AI integration, and the future of remote work in tech.",
    showNotes: "00:00 - Introduction\n05:30 - Web Development Trends\n15:45 - AI in Development\n28:20 - Remote Work Discussion\n40:15 - Q&A Session",
    category: "technology",
    tags: ["tech", "development", "ai", "remote-work"],
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    explicit: false,
    season: "1",
    episode: "5",
    duration: "45:12",
    publishDate: "",
    visibility: "public",
    transcriptEnabled: true,
    chaptersEnabled: true,
    language: "en",
    hosts: ["John Doe", "Jane Smith"],
    guests: ["Alex Johnson"],
    sponsors: []
  });

  const handleInputChange = (field: string, value: any) => {
    setPodcastData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving podcast data:", podcastData);
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
            <h1 className="h2 fw-bold mb-0">Edit Podcast Episode</h1>
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
                <h5 className="card-title mb-0">Episode Details</h5>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label className="form-label fw-semibold">Episode Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={podcastData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      maxLength={200}
                    />
                    <div className="form-text">{podcastData.title.length}/200</div>
                  </div>
                  <div className="col-md-2">
                    <label className="form-label fw-semibold">Season</label>
                    <input
                      type="number"
                      className="form-control"
                      value={podcastData.season}
                      onChange={(e) => handleInputChange('season', e.target.value)}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label fw-semibold">Episode</label>
                    <input
                      type="number"
                      className="form-control"
                      value={podcastData.episode}
                      onChange={(e) => handleInputChange('episode', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control"
                    rows={4}
                    value={podcastData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    maxLength={4000}
                  />
                  <div className="form-text">{podcastData.description.length}/4000</div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Show Notes</label>
                  <textarea
                    className="form-control"
                    rows={8}
                    value={podcastData.showNotes}
                    onChange={(e) => handleInputChange('showNotes', e.target.value)}
                    placeholder="Include timestamps, topics covered, and links mentioned in the episode"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Category</label>
                    <select 
                      className="form-select"
                      value={podcastData.category}
                      onChange={(e) => handleInputChange('category', e.target.value)}
                    >
                      <option value="technology">Technology</option>
                      <option value="business">Business</option>
                      <option value="education">Education</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="health">Health & Fitness</option>
                      <option value="news">News</option>
                      <option value="comedy">Comedy</option>
                      <option value="sports">Sports</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Language</label>
                    <select 
                      className="form-select"
                      value={podcastData.language}
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

                <div className="mb-3">
                  <label className="form-label fw-semibold">Tags</label>
                  <input
                    type="text"
                    className="form-control"
                    value={podcastData.tags.join(', ')}
                    onChange={(e) => handleInputChange('tags', e.target.value.split(', '))}
                    placeholder="Separate tags with commas"
                  />
                </div>
              </div>
            </div>

            {/* People */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Hosts & Guests</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Hosts</label>
                  <input
                    type="text"
                    className="form-control"
                    value={podcastData.hosts.join(', ')}
                    onChange={(e) => handleInputChange('hosts', e.target.value.split(', '))}
                    placeholder="Separate host names with commas"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Guests</label>
                  <input
                    type="text"
                    className="form-control"
                    value={podcastData.guests.join(', ')}
                    onChange={(e) => handleInputChange('guests', e.target.value.split(', '))}
                    placeholder="Separate guest names with commas"
                  />
                </div>
              </div>
            </div>

            {/* Cover Art */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Episode Artwork</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <img 
                      src={podcastData.thumbnail} 
                      alt="Current artwork"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-8">
                    <p className="text-muted">Upload artwork for this specific episode. If not provided, the show's default artwork will be used.</p>
                    <button className="btn btn-outline-primary">
                      <Upload size={16} className="me-1" />
                      Upload Episode Artwork
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Publishing */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Publishing</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Visibility</label>
                  <select 
                    className="form-select"
                    value={podcastData.visibility}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  >
                    <option value="public">Public</option>
                    <option value="unlisted">Unlisted</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Publish Date</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    value={podcastData.publishDate}
                    onChange={(e) => handleInputChange('publishDate', e.target.value)}
                  />
                </div>

                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={podcastData.explicit}
                    onChange={(e) => handleInputChange('explicit', e.target.checked)}
                  />
                  <label className="form-check-label">Explicit Content</label>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Features</h5>
              </div>
              <div className="card-body">
                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={podcastData.transcriptEnabled}
                    onChange={(e) => handleInputChange('transcriptEnabled', e.target.checked)}
                  />
                  <label className="form-check-label">Auto-generate transcript</label>
                </div>

                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={podcastData.chaptersEnabled}
                    onChange={(e) => handleInputChange('chaptersEnabled', e.target.checked)}
                  />
                  <label className="form-check-label">Enable chapters</label>
                </div>
              </div>
            </div>

            {/* Audio Info */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Audio Information</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <Mic size={16} className="me-2 text-muted" />
                  <span className="fw-semibold">Duration:</span>
                  <span className="ms-auto">{podcastData.duration}</span>
                </div>
                <div className="d-flex align-items-center">
                  <Music size={16} className="me-2 text-muted" />
                  <span className="fw-semibold">Format:</span>
                  <span className="ms-auto">MP3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastEdit;
