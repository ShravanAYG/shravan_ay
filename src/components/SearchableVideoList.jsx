import { useState } from 'react';

function SearchableVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);

  return (
    <>
      <SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
      <VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
    </>
  );
}

// Dummy helpers/components for now — replace with your own
function filterVideos(videos, text) {
  return videos.filter(video =>
    video.title.toLowerCase().includes(text.toLowerCase())
  );
}

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search videos"
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{ padding: '0.5rem', fontSize: '1rem', width: '100%' }}
    />
  );
}

function VideoList({ videos, emptyHeading }) {
  if (videos.length === 0) {
    return <h2>{emptyHeading}</h2>;
  }
  return (
    <ul>
      {videos.map(video => (
        <li key={video.id}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchableVideoList;

