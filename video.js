import "./video.css";

function Video({ title, channel, views, time, thumbnail, logo }) {
 
  return (
    <div className="container">
      <div className="thumbnail">{thumbnail}</div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span>
        {time}
      </div>
      <div className="logo">{logo}</div>
    </div>
  );
}

export default Video;
