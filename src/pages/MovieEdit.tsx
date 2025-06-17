
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Eye, Upload, Star, Calendar, Clock, Users } from "lucide-react";

const MovieEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [movieData, setMovieData] = useState({
    title: "The Matrix Reimagined",
    originalTitle: "The Matrix Reimagined",
    tagline: "Reality is what you make of it",
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    genre: ["Action", "Sci-Fi", "Thriller"],
    rating: "R",
    duration: "2:15:30",
    releaseDate: "2023-12-08",
    director: "The Wachowskis",
    producers: ["Joel Silver", "The Wachowskis"],
    writers: ["The Wachowskis"],
    cast: [
      { name: "Keanu Reeves", role: "Neo", order: 1 },
      { name: "Laurence Fishburne", role: "Morpheus", order: 2 },
      { name: "Carrie-Anne Moss", role: "Trinity", order: 3 }
    ],
    country: "USA",
    language: "English",
    budget: "63000000",
    boxOffice: "460000000",
    distributors: ["Warner Bros."],
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    trailer: "",
    visibility: "private",
    subtitles: ["English", "Spanish", "French"],
    audioTracks: ["English 5.1", "English 2.0"],
    chapters: true,
    commentary: false,
    behindScenes: false
  });

  const handleInputChange = (field: string, value: any) => {
    setMovieData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log("Saving movie data:", movieData);
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
            <h1 className="h2 fw-bold mb-0">Edit Movie</h1>
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
            {/* Basic Information */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Basic Information</h5>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-8">
                    <label className="form-label fw-semibold">Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label fw-semibold">Rating</label>
                    <select 
                      className="form-select"
                      value={movieData.rating}
                      onChange={(e) => handleInputChange('rating', e.target.value)}
                    >
                      <option value="G">G</option>
                      <option value="PG">PG</option>
                      <option value="PG-13">PG-13</option>
                      <option value="R">R</option>
                      <option value="NC-17">NC-17</option>
                      <option value="NR">Not Rated</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Original Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.originalTitle}
                    onChange={(e) => handleInputChange('originalTitle', e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Tagline</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.tagline}
                    onChange={(e) => handleInputChange('tagline', e.target.value)}
                    placeholder="A memorable one-liner that captures the essence of the movie"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Synopsis</label>
                  <textarea
                    className="form-control"
                    rows={6}
                    value={movieData.synopsis}
                    onChange={(e) => handleInputChange('synopsis', e.target.value)}
                    maxLength={2000}
                  />
                  <div className="form-text">{movieData.synopsis.length}/2000</div>
                </div>

                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label fw-semibold">Release Date</label>
                    <input
                      type="date"
                      className="form-control"
                      value={movieData.releaseDate}
                      onChange={(e) => handleInputChange('releaseDate', e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label fw-semibold">Duration</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                      placeholder="2:15:30"
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label fw-semibold">Language</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.language}
                      onChange={(e) => handleInputChange('language', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Genres</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.genre.join(', ')}
                    onChange={(e) => handleInputChange('genre', e.target.value.split(', '))}
                    placeholder="Action, Sci-Fi, Thriller"
                  />
                </div>
              </div>
            </div>

            {/* Cast & Crew */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Cast & Crew</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Director</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.director}
                    onChange={(e) => handleInputChange('director', e.target.value)}
                  />
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Producers</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.producers.join(', ')}
                      onChange={(e) => handleInputChange('producers', e.target.value.split(', '))}
                      placeholder="Separate names with commas"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Writers</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.writers.join(', ')}
                      onChange={(e) => handleInputChange('writers', e.target.value.split(', '))}
                      placeholder="Separate names with commas"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Main Cast</label>
                  <div className="border rounded p-3">
                    {movieData.cast.map((actor, index) => (
                      <div key={index} className="row mb-2">
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Actor name"
                            value={actor.name}
                            onChange={(e) => {
                              const newCast = [...movieData.cast];
                              newCast[index].name = e.target.value;
                              handleInputChange('cast', newCast);
                            }}
                          />
                        </div>
                        <div className="col-md-5">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="Character name"
                            value={actor.role}
                            onChange={(e) => {
                              const newCast = [...movieData.cast];
                              newCast[index].role = e.target.value;
                              handleInputChange('cast', newCast);
                            }}
                          />
                        </div>
                        <div className="col-md-2">
                          <button 
                            className="btn btn-outline-danger btn-sm w-100"
                            onClick={() => {
                              const newCast = movieData.cast.filter((_, i) => i !== index);
                              handleInputChange('cast', newCast);
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => {
                        const newCast = [...movieData.cast, { name: '', role: '', order: movieData.cast.length + 1 }];
                        handleInputChange('cast', newCast);
                      }}
                    >
                      Add Cast Member
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Details */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Production Details</h5>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Budget ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={movieData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Box Office ($)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={movieData.boxOffice}
                      onChange={(e) => handleInputChange('boxOffice', e.target.value)}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-semibold">Distributors</label>
                    <input
                      type="text"
                      className="form-control"
                      value={movieData.distributors.join(', ')}
                      onChange={(e) => handleInputChange('distributors', e.target.value.split(', '))}
                      placeholder="Separate with commas"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            {/* Poster & Artwork */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Poster & Artwork</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Movie Poster</label>
                  <img 
                    src={movieData.poster} 
                    alt="Movie poster"
                    className="img-fluid rounded mb-2"
                  />
                  <button className="btn btn-outline-primary btn-sm w-100">
                    <Upload size={16} className="me-1" />
                    Upload Poster
                  </button>
                </div>

                <div>
                  <label className="form-label fw-semibold">Backdrop Image</label>
                  <img 
                    src={movieData.backdrop} 
                    alt="Movie backdrop"
                    className="img-fluid rounded mb-2"
                    style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                  />
                  <button className="btn btn-outline-primary btn-sm w-100">
                    <Upload size={16} className="me-1" />
                    Upload Backdrop
                  </button>
                </div>
              </div>
            </div>

            {/* Visibility & Settings */}
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="card-title mb-0">Visibility & Settings</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label fw-semibold">Visibility</label>
                  <select 
                    className="form-select"
                    value={movieData.visibility}
                    onChange={(e) => handleInputChange('visibility', e.target.value)}
                  >
                    <option value="public">Public</option>
                    <option value="unlisted">Unlisted</option>
                    <option value="private">Private</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Subtitles</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.subtitles.join(', ')}
                    onChange={(e) => handleInputChange('subtitles', e.target.value.split(', '))}
                    placeholder="English, Spanish, French"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Audio Tracks</label>
                  <input
                    type="text"
                    className="form-control"
                    value={movieData.audioTracks.join(', ')}
                    onChange={(e) => handleInputChange('audioTracks', e.target.value.split(', '))}
                    placeholder="English 5.1, English 2.0"
                  />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Additional Features</h5>
              </div>
              <div className="card-body">
                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={movieData.chapters}
                    onChange={(e) => handleInputChange('chapters', e.target.checked)}
                  />
                  <label className="form-check-label">Chapter markers</label>
                </div>

                <div className="form-check form-switch mb-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={movieData.commentary}
                    onChange={(e) => handleInputChange('commentary', e.target.checked)}
                  />
                  <label className="form-check-label">Director's commentary</label>
                </div>

                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={movieData.behindScenes}
                    onChange={(e) => handleInputChange('behindScenes', e.target.checked)}
                  />
                  <label className="form-check-label">Behind the scenes</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieEdit;
