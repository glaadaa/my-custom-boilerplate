import { useState } from "react";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export default function StrictModeSample() {
  let [stories, setStories] = useState(initialStories);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Stories stories={stories} />
    </div>
  );
}

function Stories({ stories }: { stories: any[] }) {
  const [isHover, setIsHover] = useState(false);
  const items = stories.slice();
  items.push({ id: "create", label: "Create Story" });
  return (
    <ul
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      style={{
        backgroundColor: isHover ? "#ddd" : "#fff",
      }}
    >
      {items.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
